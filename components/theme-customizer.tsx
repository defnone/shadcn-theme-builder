'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColorPicker } from './color-picker';

const initialTheme = {
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

export function ThemeCustomizer() {
  const [theme, setTheme] = React.useState(initialTheme);
  const [isExportOpen, setIsExportOpen] = React.useState(false);
  const [openColorPicker, setOpenColorPicker] = React.useState<keyof typeof initialTheme | null>(
    null
  );
  const variables = Object.entries(theme).map(([name, value]) => ({
    name,
    value,
    label: name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  }));

  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const handleColorChange = (name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateThemeCSS = () => {
    return `@layer base {
  :root {
${Object.entries(theme)
  .map(([key, value]) => `    --${key}: ${value};`)
  .join('\n')}
  }
}`;
  };

  return (
    <div className='scrollbar fixed left-0 top-0 flex h-screen max-w-[450px] flex-col overflow-y-auto overflow-x-hidden border-r border-sidebar-border bg-sidebar-background p-7 lg:min-w-[400px]'>
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
              <ColorPicker
                isColorPickerMode={true}
                setIsColorPickerMode={() => setOpenColorPicker(null)}
                value={theme[openColorPicker]}
                onChange={value => handleColorChange(openColorPicker, value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='flex max-w-full items-center justify-between text-sidebar-foreground'>
            <h1 className='mr-2 text-2xl font-bold'>Tailwind CSS Theme Editor</h1>
            <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
              <DialogTrigger asChild>
                <Button variant='outline'>Export Theme</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[625px]'>
                <DialogHeader>
                  <DialogTitle>Export Theme CSS</DialogTitle>
                  <DialogDescription>
                    Copy the CSS below to use your custom theme in your global styles.
                  </DialogDescription>
                </DialogHeader>
                <div className='relative'>
                  <pre className='overflow-x-auto rounded-md bg-muted p-4'>
                    <code>{generateThemeCSS()}</code>
                  </pre>
                </div>
                <a
                  href='https://ui.shadcn.com/docs/theming'
                  target='_blank'
                  className='ml-auto text-sm text-primary underline'>
                  More about theming
                </a>
              </DialogContent>
            </Dialog>
          </div>

          <div className='grid grid-cols-1 gap-6 pt-10 text-sidebar-foreground lg:grid-cols-2'>
            {variables.map(variable =>
              variable.name === 'radius' ? (
                <React.Fragment key={variable.name}>
                  <div className='space-y-2.5'>
                    <Label className='text-sm font-bold'>{variable.label}</Label>
                    <Input
                      type='number'
                      value={parseFloat(theme[variable.name])}
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
                    setIsColorPickerMode={() =>
                      setOpenColorPicker(variable.name as keyof typeof initialTheme)
                    }
                    value={variable.value}
                    onChange={value => handleColorChange(variable.name, value)}
                  />
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
