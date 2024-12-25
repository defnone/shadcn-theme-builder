'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

interface ThemeImporterProps {
  onImport: (theme: Record<string, string>) => void;
}

export function ThemeImporter({ onImport }: ThemeImporterProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const handleImport = () => {
    try {
      // Try to parse as CSS first
      if (value.includes('@layer base')) {
        const themeObject: Record<string, string> = {};
        const lines = value.split('\n');
        
        lines.forEach(line => {
          if (line.includes('--')) {
            const [key, value] = line.split(':').map(s => s.trim());
            if (key && value) {
              const cleanKey = key.replace('--', '');
              const cleanValue = value.replace(';', '');
              themeObject[cleanKey] = cleanValue;
            }
          }
        });
        
        if (Object.keys(themeObject).length > 0) {
          onImport(themeObject);
          setOpen(false);
          setError(null);
          setValue('');
          return;
        }
      }

      // Try to parse as JSON
      const theme = JSON.parse(value);
      if (typeof theme === 'object' && theme !== null) {
        onImport(theme);
        setOpen(false);
        setError(null);
        setValue('');
      } else {
        setError('Invalid theme format');
      }
    } catch (e) {
      setError('Failed to parse theme. Please check the format. (CSS or JSON) ' + e);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Upload className="h-4 w-4" />
          Import Theme
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Import Theme</DialogTitle>
          <DialogDescription>
            Paste your theme CSS variables or JSON object below
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Paste your theme in CSS format:

@layer base {
  :root {
    --background: 223 39% 7%;
    --foreground: 0 0% 89.8%;
    --primary: 33.3 100% 96.5%;
  }
}

OR in JSON format:

{
  "background": "223 39% 7%",
  "foreground": "0 0% 89.8%",
  "primary": "33.3 100% 96.5%"
}`}
            className="min-h-[300px] h-[50vh] font-mono"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
                setValue('');
                setError(null);
              }}>
              Cancel
            </Button>
            <Button onClick={handleImport}>Import Theme</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 