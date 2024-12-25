'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/main-nav';
import { Dialog } from './components/Dialog';
import { TypographyPoster } from './components/TypographyPoster';
import { harmonies, colors, shades } from './lib/constants';
import { generatePalette, getClosestColor } from './lib/utils';

export default function Colors() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedHarmony, setSelectedHarmony] = useState(harmonies[0].name);
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentHarmony, setCurrentHarmony] = useState(harmonies[0]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateRandomPalette = useCallback(() => {
    const baseHue = Math.floor(Math.random() * 360);
    const palette = generatePalette(baseHue, selectedHarmony);
    const colorNames = palette.map(hue => getClosestColor(hue).name);
    setCurrentPalette(colorNames);
  }, [selectedHarmony]);

  useEffect(() => {
    generateRandomPalette();
  }, [generateRandomPalette]);

  if (isMobile) {
    return (
      <div className='flex min-h-screen items-center justify-center p-4 text-center'>
        <h1 className='text-xl font-semibold'>
          Mobile version is not supported. Please use desktop version.
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen w-full pt-15">
      <MainNav />
      <div className='mt-10 h-px w-full bg-border'></div>
      
      <div className="p-8">
        {/* Itten Color Generator */}
        <div className="mb-12 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Color Harmony Generator</h2>
              <p className="text-sm text-muted-foreground">
                Generate color schemes based on Johannes Itten&apos;s color theory
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="rounded-md bg-muted px-4 py-2 text-sm text-muted-foreground hover:bg-muted/80"
              >
                Preview Hero Section
              </button>
              <button
                onClick={generateRandomPalette}
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Generate New Palette
              </button>
            </div>
          </div>

          <div className="space-y-4 flex flex-col gap-4">
            <div className="flex gap-4">
              {harmonies.map((harmony) => (
                <button
                  key={harmony.name}
                  onClick={() => {
                    setSelectedHarmony(harmony.name);
                    setCurrentHarmony(harmony);
                  }}
                  className={`rounded-md px-4 py-2 text-sm ${
                    selectedHarmony === harmony.name
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {harmony.name}
                </button>
                
              ))}

              
            </div>
            <div className=' w-full '>{currentHarmony.description}</div>
            <div className="grid grid-cols-4 gap-8">
              {currentPalette.map((colorName, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-center text-sm font-medium capitalize mb-2">{colorName}</div>
                  <div className="grid grid-cols-1 gap-1">
                    {shades.map((shade) => (
                      <div key={`${colorName}-${shade}`} className="flex items-center gap-2">
                        <div
                          className={`h-8 w-full rounded-md bg-${colorName}-${shade}`}
                          title={`${colorName}-${shade}`}
                        />
                        <div className="text-xs w-8">{shade}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Dialog */}
        <Dialog isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
          <div className="max-w-xl mx-auto">
            <TypographyPoster colors={currentPalette} />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={generateRandomPalette}
              className="-bottom-10 right-0 absolute rounded-md bg-primary h-10 px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Generate New Colors
            </button>
          </div>
        </Dialog>

        {/* Existing Color Grid */}
        <div className="grid gap-8">
          {Object.entries(colors).map(([colorName, shades]) => (
            <div key={colorName} className="space-y-2">
              <h2 className="text-xl font-semibold font-mono text-muted-foreground">{colorName}</h2>
              <div className="grid grid-cols-11 gap-2">
                {shades.map((shade) => (
                  <div key={`${colorName}-${shade}`} className="space-y-1.5">
                    <div 
                      className={`h-10 w-full rounded-md bg-${colorName}-${shade}`}
                      title={`${colorName}-${shade}`}
                    />
                    <div className="text-xs text-center">{shade}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
