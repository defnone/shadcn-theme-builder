'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColorPicker } from '@/components/shared/color-picker';
import { ThemeImporter } from './theme-importer';
import { useTheme } from './theme-provider';

export type Theme = Record<string, string>;

export const initialTheme: Theme = {
  background: '223 39% 7%',
  foreground: '0 0% 89.8%',
  card: '219 44% 8%',
  'card-foreground': '0 0% 98%',
  popover: '223 39% 7%',
  'popover-foreground': '0 0% 98%',
  primary: '33.3 100% 96.5%',
  'primary-foreground': '0 0% 9%',
  secondary: '222 65% 28%',
  'secondary-foreground': '0 0% 98%',
  muted: '227 16% 11%',
  'muted-foreground': '240 3.8% 46.1%',
  accent: '213 26% 17%',
  'accent-foreground': '220 14.3% 95.9%',
  destructive: '0 72.2% 50.6%',
  'destructive-foreground': '0 0% 98%',
  border: '220 24% 17%',
  input: '222 40% 20%',
  ring: '224.4 64.3% 32.9%',
  radius: '8px',
  'sidebar-background': '248 27% 6%',
  'sidebar-foreground': '251.4 91.3% 95.5%',
  'sidebar-primary': '223 38% 13%',
  'sidebar-primary-foreground': '0 0% 98%',
  'sidebar-accent': '225.9 70.7% 40.2%',
  'sidebar-accent-foreground': '250 100% 97.6%',
  'sidebar-border': '235 18% 13%',
  'sidebar-ring': '217.2 91.2% 59.8%',
  'chart-1': '220 70% 50%',
  'chart-2': '160 60% 45%',
  'chart-3': '30 80% 55%',
  'chart-4': '280 65% 60%',
  'chart-5': '340 75% 55%',
};

interface ThemeCustomizerProps {
  onExport?: (css: string) => void;
}

export function ThemeCustomizer({ onExport }: ThemeCustomizerProps) {
  const { theme, setTheme } = useTheme();
  const [openColorPicker, setOpenColorPicker] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!theme && typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      setTheme(initialTheme);
    }
  }, [theme, setTheme]);

  React.useEffect(() => {
    if (theme && onExport) {
      const cssString = Object.entries(theme)
        .map(([key, val]) => `  --${key}: ${val};`)
        .join('\n');
      onExport(`:root {\n${cssString}\n}`);
    }
  }, [theme, onExport]);

  const variables = React.useMemo(() => {
    if (!theme) return [];
    return Object.entries(initialTheme).map(([name, value]) => ({
      name,
      value: theme[name] || value,
      label: name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    }));
  }, [theme]);

  const handleColorChange = (name: string, value: string) => {
    if (theme) {
      const newTheme = { ...theme, [name]: value };
      setTheme(newTheme);
      if (onExport) {
        const cssString = Object.entries(newTheme)
          .map(([key, val]) => `  --${key}: ${val};`)
          .join('\n');
        onExport(`:root {\n${cssString}\n}`);
      }
    }
  };

  const handleImport = React.useCallback(
    (importedTheme: Theme) => {
      setTheme(importedTheme);
      if (onExport) {
        const cssString = Object.entries(importedTheme)
          .map(([key, value]) => `  --${key}: ${value};`)
          .join('\n');
        onExport(`:root {\n${cssString}\n}`);
      }
    },
    [onExport, setTheme]
  );

  const resetTheme = () => {
    setTheme(initialTheme);
    if (onExport) {
      const cssString = Object.entries(initialTheme)
        .map(([key, value]) => `  --${key}: ${value};`)
        .join('\n');
      onExport(`:root {\n${cssString}\n}`);
    }
  };

  return (
    <div className='scrollbar border-sidebar-border bg-sidebar-background fixed left-0 top-0 flex h-screen max-w-[450px] flex-col overflow-y-auto overflow-x-hidden border-r p-7 pt-20 lg:min-w-[400px]'>
      {openColorPicker ? (
        <div className='sticky left-0 top-0 z-0 w-[400px]'>
          <div className='absolute left-0 top-0 h-screen max-w-[400px] overflow-y-auto'>
            <div className='sticky top-0 border-b p-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-extrabold'>
                  {variables.find(v => v.name === openColorPicker)?.label}
                </h2>
                <Button
                  variant='ghost'
                  className='border-sidebar-border bg-sidebar-primary text-sidebar-foreground hover:bg-sidebar-accent'
                  size='sm'
                  onClick={() => setOpenColorPicker(null)}>
                  Close
                </Button>
              </div>
            </div>
            <div className='p-4'>
              {theme && openColorPicker && (
                <ColorPicker
                  isColorPickerMode={true}
                  setIsColorPickerMode={() => setOpenColorPicker(null)}
                  value={theme[openColorPicker]}
                  onChange={value => handleColorChange(openColorPicker, value)}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='text-sidebar-foreground grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2'>
            {variables.map(variable =>
              variable.name === 'radius' ? (
                <React.Fragment key={variable.name}>
                  <div className='space-y-2.5'>
                    <Label className='text-sm font-bold'>{variable.label}</Label>
                    <Input
                      type='number'
                      value={parseFloat(variable.value)}
                      onChange={e => handleColorChange(variable.name, e.target.value + 'px')}
                      step={1}
                      min={0}
                      className='w-full'
                    />
                  </div>
                  <div key={`${variable.name}-spacer-1`} className='h-5 w-full'></div>
                  <div key={`${variable.name}-spacer-2`} className='h-5 w-full'></div>
                </React.Fragment>
              ) : (
                <div key={variable.name} className='flex flex-col justify-between space-y-2.5'>
                  <Label className='text-sm font-bold'>{variable.label}</Label>
                  <ColorPicker
                    isColorPickerMode={false}
                    setIsColorPickerMode={() => setOpenColorPicker(variable.name)}
                    value={variable.value}
                    onChange={value => handleColorChange(variable.name, value)}
                  />
                </div>
              )
            )}
          </div>
          <div className='mt-8 flex justify-center gap-4'>
            <Button variant='destructive' onClick={resetTheme} className='w-full max-w-[400px]'>
              Reset
            </Button>
            <ThemeImporter onImport={handleImport} />
          </div>
        </>
      )}
    </div>
  );
}
