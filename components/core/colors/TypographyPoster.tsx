import React from 'react';

interface TypographyPosterProps {
  colors: string[];
}

export const TypographyPoster = ({ colors }: TypographyPosterProps) => {
  const [primaryColor, secondaryColor, accentColor = primaryColor, backgroundColor = 'slate'] = colors;
  
  // Define all used color shades for each color
  const colorConfig = {
    primary: ['100', '600', '900', '950'],
    secondary: ['100', '600', '950'],
    accent: ['100', '600', '950'],
    background: ['50']
  };

  const usedColors = [
    { id: 'primary', name: primaryColor, label: 'Primary', shades: colorConfig.primary },
    { id: 'secondary', name: secondaryColor, label: 'Secondary', shades: colorConfig.secondary },
    { id: 'accent', name: accentColor, label: 'Accent', shades: colorConfig.accent },
    { id: 'background', name: backgroundColor, label: 'Background', shades: colorConfig.background }
  ].filter((color, index, self) => 
    index === self.findIndex((t) => t.name === color.name)
  );

  return (
    <div className={`aspect-[1/1.4142] w-[600px] bg-${backgroundColor}-50 p-8 rounded-lg overflow-hidden relative`}>
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-${primaryColor}-100 blur-3xl opacity-50 -mr-32 -mt-32`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full bg-${secondaryColor}-100 blur-3xl opacity-50 -ml-48 -mb-48`} />
      
      <div className="relative h-full border-2 border-zinc-400 p-8 flex flex-col">
        {/* Top section */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
          <div className={`text-${primaryColor}-900 tracking-tight leading-none text-center`}>
            <div className="text-8xl font-black uppercase mb-4">Design</div>
            <div className="text-6xl font-black uppercase">Systems</div>
          </div>
          
          <div className={`text-${secondaryColor}-600 text-xl uppercase tracking-[0.2em] font-medium`}>
            Typography × Color
          </div>
        </div>

        {/* Color info section */}
        <div className="mt-auto grid grid-cols-3 gap-4 pb-8">
          <div className={`p-4 bg-${primaryColor}-100 rounded-lg`}>
            <div className={`text-${primaryColor}-950 text-xs uppercase tracking-wider mb-1`}>Primary</div>
            <div className={`text-${primaryColor}-600 font-mono text-sm`}>{primaryColor}</div>
          </div>
          <div className={`p-4 bg-${secondaryColor}-100 rounded-lg`}>
            <div className={`text-${secondaryColor}-950 text-xs uppercase tracking-wider mb-1`}>Secondary</div>
            <div className={`text-${secondaryColor}-600 font-mono text-sm`}>{secondaryColor}</div>
          </div>
          <div className={`p-4 bg-${accentColor}-100 rounded-lg`}>
            <div className={`text-${accentColor}-950 text-xs uppercase tracking-wider mb-1`}>Accent</div>
            <div className={`text-${accentColor}-600 font-mono text-sm`}>{accentColor}</div>
          </div>
        </div>

        {/* Color palette section */}
        <div className="border-t-2 border-zinc-200 pt-4">
          <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Tailwind Color Palette</div>
          <div className="space-y-2">
            {usedColors.map((color) => (
              <div key={color.id} className="flex items-center space-x-2">
                <div className="text-xs font-medium text-zinc-600 w-20">{color.label}</div>
                <div className={`flex-1 grid grid-cols-${color.shades.length} gap-1`}>
                  {color.shades.map((shade) => (
                    <div key={`${color.id}-${shade}`} className="flex flex-col items-center">
                      <div className={`w-full h-6 rounded bg-${color.name}-${shade}`} />
                      <div className="text-[10px] text-zinc-500 mt-0.5">
                        {color.id === 'background' ? `${color.name}-${shade}` : shade}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative lines */}
        <div className={`absolute top-16 left-16 w-16 h-[2px] bg-${primaryColor}-600`} />
        <div className={`absolute top-16 right-16 w-16 h-[2px] bg-${primaryColor}-600`} />
        {/* <div className={`absolute bottom-16 left-16 w-16 h-[2px] bg-${primaryColor}-600`} />
        <div className={`absolute bottom-16 right-16 w-16 h-[2px] bg-${primaryColor}-600`} /> */}
      </div>
    </div>
  );
}; 