'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SliderTicks from '@/components/shared/ticks-slider';

type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
type TrackingSize = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
type LineHeightSize =
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';

// Noto Sans font metrics
const NOTO_METRICS = {
  // Average character width for different sizes (in pixels)
  charWidth: {
    xs: 6.5, // 12px
    sm: 7, // 14px
    base: 8, // 16px
    lg: 9, // 18px
    xl: 10, // 20px
    '2xl': 12, // 24px
    '3xl': 14, // 30px
    '4xl': 16, // 36px
    '5xl': 20, // 48px
    '6xl': 24, // 60px
    '7xl': 28, // 72px
    '8xl': 32, // 96px
    '9xl': 36, // 128px
  },
  // Line height multipliers
  lineHeightMultiplier: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Constants for typography settings
const textSizeOptions = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
] as const;
const trackingOptions = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'] as const;
const lineHeightOptions = [
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
] as const;

// Create an array of container widths from 300px to 1200px with 50px step
const containerWidthOptions = Array.from({ length: 19 }, (_, i) => 300 + i * 50);

// Function to find the closest width value in the array
const findClosestWidth = (target: number) => {
  return containerWidthOptions.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });
};

const fontSizeInPixels = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
  '7xl': '72px',
  '8xl': '96px',
  '9xl': '128px',
} as const;

const lineHeightSizes = {
  '3': '0.75rem (12px)',
  '4': '1rem (16px)',
  '5': '1.25rem (20px)',
  '6': '1.5rem (24px)',
  '7': '1.75rem (28px)',
  '8': '2rem (32px)',
  '9': '2.25rem (36px)',
  '10': '2.5rem (40px)',
  'none': '1.0',
  'tight': '1.25',
  'snug': '1.375',
  'normal': '1.5',
  'relaxed': '1.625',
  'loose': '2.0'
} as const;

export function TypographySettings() {
  const [h1Size, setH1Size] = useState<FontSize>('2xl');
  const [h2Size, setH2Size] = useState<FontSize>('xl');
  const [h3Size, setH3Size] = useState<FontSize>('lg');
  const [h4Size, setH4Size] = useState<FontSize>('base');
  const [baseSize, setBaseSize] = useState<FontSize>('sm');
  const [tracking, setTracking] = useState<TrackingSize>('normal');
  const [lineHeight, setLineHeight] = useState<LineHeightSize>('relaxed');
  const [isAutoAdjust, setIsAutoAdjust] = useState(false);
  const [containerWidth, setContainerWidth] = useState(findClosestWidth(600));

  // Initialize component on mount
  useEffect(() => {
    adjustTypography();
  }, []);

  const adjustTypography = () => {
    const article = document.querySelector('article');
    if (!article) return;

    const containerWidth = article.clientWidth;

    // Calculate characters per line for a given font size
    const getCharsPerLine = (size: FontSize) => {
      return Math.floor(containerWidth / NOTO_METRICS.charWidth[size]);
    };

    // Find optimal font size for 65 characters per line
    const findOptimalSize = () => {
      const sizes = textSizeOptions;
      let optimalSize: FontSize = 'base';

      for (const size of sizes) {
        const charsPerLine = getCharsPerLine(size);
        if (charsPerLine >= 45 && charsPerLine <= 75) {
          optimalSize = size;
          break;
        }
      }
      return optimalSize;
    };

    const optimalSize = findOptimalSize();
    setBaseSize(optimalSize);

    // Set heading sizes relative to base text size
    const baseIndex = textSizeOptions.indexOf(optimalSize);
    const h1Index = Math.min(baseIndex + 4, textSizeOptions.length - 1);
    const h2Index = Math.min(baseIndex + 3, textSizeOptions.length - 1);
    const h3Index = Math.min(baseIndex + 2, textSizeOptions.length - 1);
    const h4Index = Math.min(baseIndex + 1, textSizeOptions.length - 1);

    setH1Size(textSizeOptions[h1Index]);
    setH2Size(textSizeOptions[h2Index]);
    setH3Size(textSizeOptions[h3Index]);
    setH4Size(textSizeOptions[h4Index]);

    // Adjust line height based on line length
    const charsPerLine = getCharsPerLine(optimalSize);
    if (charsPerLine > 80) setLineHeight('loose');
    else if (charsPerLine > 70) setLineHeight('relaxed');
    else if (charsPerLine > 60) setLineHeight('normal');
    else if (charsPerLine > 50) setLineHeight('snug');
    else setLineHeight('tight');

    // Adjust letter spacing based on font size
    if (NOTO_METRICS.charWidth[optimalSize] > 14) {
      setTracking('tight');
    } else if (NOTO_METRICS.charWidth[optimalSize] < 8) {
      setTracking('wide');
    } else {
      setTracking('normal');
    }
  };

  // Update effect to respond to container width changes
  useEffect(() => {
    if (isAutoAdjust) {
      adjustTypography();
    }
  }, [isAutoAdjust, containerWidth]);

  // Container width slider props
  const containerWidthSliderProps = {
    max: containerWidthOptions.length - 1,
    value: [containerWidthOptions.indexOf(containerWidth)],
    onValueChange: (value: number[]) => {
      const newWidth = containerWidthOptions[value[0]];
      if (newWidth) {
        setContainerWidth(newWidth);
      }
    },
    tooltipContent: (value: number) => `${containerWidthOptions[value]}px`,
    customMarks: containerWidthOptions.map((value, index) => ({
      value: index,
      label: `${value}px`,
    })),
  };

  // Disable sliders during auto-adjustment
  const sliderProps = <T extends string>(
    value: T,
    setValue: (value: T) => void,
    options: readonly T[]
  ) => ({
    max: options.length - 1,
    value: [options.indexOf(value)],
    onValueChange: (newValue: number[]) => {
      if (!isAutoAdjust && options[newValue[0]]) {
        setValue(options[newValue[0]]);
      }
    },
    tooltipContent: (value: number) => {
      const option = options[value];
      if (option && option in fontSizeInPixels) {
        return `${option} (${fontSizeInPixels[option as keyof typeof fontSizeInPixels]})`;
      }
      if (option && option in lineHeightSizes) {
        return `${option} (${lineHeightSizes[option as keyof typeof lineHeightSizes]})`;
      }
      return option || '';
    },
    customMarks: options.map((value, index) => ({
      value: index,
      label: value in fontSizeInPixels 
        ? `${value} (${fontSizeInPixels[value as keyof typeof fontSizeInPixels]})`
        : value in lineHeightSizes
        ? `${value} (${lineHeightSizes[value as keyof typeof lineHeightSizes]})`
        : value,
    })),
    disabled: isAutoAdjust,
  });

  return (
    <div className='flex flex-col items-start p-10'>
      <div className='mb-5 flex w-full items-center justify-between'>
        <h1 className='text-muted-foreground text-2xl font-bold'>Text Sizes</h1>
        <div className='flex items-center gap-4'>
          <Button
            variant={isAutoAdjust ? 'default' : 'outline'}
            onClick={() => setIsAutoAdjust(!isAutoAdjust)}
            className='ml-4'>
            {isAutoAdjust ? 'Disable' : 'Enable'} Auto Adjust
          </Button>
        </div>
      </div>

      <div className='mb-5 flex w-full flex-col items-center gap-2'>
        <p className='text-muted-foreground text-sm'>Container Width</p>
        <SliderTicks {...containerWidthSliderProps} />
      </div>

      <div className='mb-10 grid w-full grid-cols-2 gap-6'>
        <div
          className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>H1 Size</p>
          <SliderTicks {...sliderProps(h1Size, setH1Size, textSizeOptions)} />
        </div>
        <div
          className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>H2 Size</p>
          <SliderTicks {...sliderProps(h2Size, setH2Size, textSizeOptions)} />
        </div>
        <div
          className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>H3 Size</p>
          <SliderTicks {...sliderProps(h3Size, setH3Size, textSizeOptions)} />
        </div>
        <div
          className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>H4 Size</p>
          <SliderTicks {...sliderProps(h4Size, setH4Size, textSizeOptions)} />
        </div>
        <div className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>Base Text Size</p>
          <SliderTicks {...sliderProps(baseSize, setBaseSize, textSizeOptions)} />
        </div>
        <div className={`flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>Letter Spacing (tracking)</p>
          <SliderTicks {...sliderProps(tracking, setTracking, trackingOptions)} />
        </div>
        <div className={`col-span-2 flex w-full flex-col items-center gap-2 ${isAutoAdjust ? 'opacity-30' : ''}`}>
          <p className='text-muted-foreground text-sm'>Line Height</p>
          <SliderTicks {...sliderProps(lineHeight, setLineHeight, lineHeightOptions)} />
        </div>
      </div>

      <article
        style={{
          width: `${containerWidth}px`,
          maxWidth: '100%',
          overflowX: 'auto',
        }}
        className={`prose prose-zinc dark:prose-invert mx-auto ${isAutoAdjust ? 'prose-auto' : ''}`}>
        <h1
          className={`scroll-m-20 font-extrabold tracking-${tracking} leading-${lineHeight} text-${h1Size} lg:text-${h1Size}`}>
          Fundamentals of Text Readability
        </h1>

        <section className='mb-10'>
          <h2
            className={`scroll-m-20 border-b pb-2 font-semibold tracking-${tracking} leading-${lineHeight} text-${h2Size} first:mt-0`}>
            Line Length and Leading
          </h2>
          <p
            className={`tracking-${tracking} leading-${lineHeight} text-${baseSize} [&:not(:first-child)]:mt-6`}>
            The optimal line length for comfortable reading is between 45-75 characters (including
            spaces). This translates to approximately 9-12 words per line in English. At this length,
            the reader&apos;s eye can easily find the beginning of the next line.
          </p>
        </section>
        <section className='mb-10'>
          <h3
            className={`scroll-m-20 font-semibold tracking-${tracking} leading-${lineHeight} text-${h3Size}`}>
            Line Spacing
          </h3>
          <p
            className={`tracking-${tracking} leading-${lineHeight} text-${baseSize} [&:not(:first-child)]:mt-6`}>
            Leading (line spacing) should typically be 120-145% of the font size. For example, for text
            set at 16px, the optimal line spacing would be 19-23px.
          </p>
        </section>
        <section className='mb-10'>
          <h4
            className={`scroll-m-20 font-semibold tracking-${tracking} leading-${lineHeight} text-${h4Size}`}>
            Parameter Relationships
          </h4>
          <p
            className={`tracking-${tracking} leading-${lineHeight} text-${baseSize} [&:not(:first-child)]:mt-6`}>
            As line length increases, line spacing should be proportionally increased as well. This
            helps the reader&apos;s eye transition more easily to the next line and maintains text
            readability.
          </p>
          <blockquote
            className={`mt-6 border-l-2 pl-6 italic tracking-${tracking} leading-${lineHeight} text-${baseSize}`}>
            &ldquo;Good typography becomes invisible, allowing readers to focus entirely on the
            content&rdquo;
          </blockquote>
          <ul
            className={`my-6 ml-6 list-disc tracking-${tracking} leading-${lineHeight} text-${baseSize} [&>li]:mt-2`}>
            <li>45-75 characters per line</li>
            <li>Leading 120-150% of font size</li>
            <li>Proportional increase in leading for longer lines</li>
          </ul>
        </section>
      </article>
    </div>
  );
} 