import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState, useEffect, useCallback } from 'react';
import { tailwindColors } from '@/lib/colors';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ExportThemeDialogProps {
  onExport: () => string;
}

function hslToHex(hsl: string): string {
  const [h, s, l] = hsl.split(' ').map(parseFloat);
  const s1 = s / 100;
  const l1 = l / 100;
  const a = s1 * Math.min(l1, 1 - l1);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l1 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generateSketchPalette(
  colors: { [key: string]: { [key: string]: string } },
  theme: { [key: string]: string }
) {
  const customPalette: { [key: string]: string } = {};

  // Add theme colors
  for (const [key, value] of Object.entries(theme)) {
    if (key === 'radius') continue; // Skip radius
    customPalette[`--${key}`] = hslToHex(value as string);
  }

  return JSON.stringify({ 'Custom Palette': customPalette }, null, 2);
}

export function ExportThemeDialog({ onExport }: ExportThemeDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [exportedCSS, setExportedCSS] = useState('');

  useEffect(() => {
    if (onExport) {
      setExportedCSS(onExport());
    }
  }, [onExport]);

  const handleDownloadSketchPalette = useCallback(() => {
    // Get theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    let currentTheme = {};
    if (storedTheme) {
      try {
        currentTheme = JSON.parse(storedTheme);
      } catch (e) {
        console.error('Error parsing theme from localStorage', e);
      }
    }
    const sketchPaletteJSON = generateSketchPalette(
      tailwindColors,
      currentTheme as { [key: string]: string }
    );
    const blob = new Blob([sketchPaletteJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sketch-palette.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='default' size='sm'>
          Export Theme
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Export CSS Theme</DialogTitle>
          <DialogDescription>
            Copy the CSS code below to use your theme in global styles.
          </DialogDescription>
        </DialogHeader>
        <div className='relative'>
          <pre className='overflow-x-auto rounded-md bg-muted p-4'>
            <code>{exportedCSS}</code>
          </pre>
        </div>
        <div className='flex items-center justify-between'>
          <a
            href='https://ui.shadcn.com/docs/theming'
            target='_blank'
            className='text-sm text-primary underline'>
            Learn more about theming
          </a>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant='outline' size='sm' onClick={handleDownloadSketchPalette}>
                  Download JSON Palette
                </Button>
              </TooltipTrigger>
              <TooltipContent className='max-w-[250px] p-4 leading-relaxed'>
                <p>
                  This JSON palette can be loaded into Sketch using the{' '}
                  <a
                    href='https://github.com/ziyafenn/sketch-json-color-palette-importer'
                    target='_blank'
                    className='underline'>
                    Sketch JSON Color Palette Importer
                  </a>{' '}
                  plugin.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
