'use client';

import { useState } from 'react';
import SliderTicks from '@/components/shared/ticks-slider';

// Constants for grid settings
const gapOptions = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
  48, 52, 56, 60, 64, 72, 80, 96,
];

const roundedOptions = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

export function GridSettings() {
  const [gap, setGap] = useState(5);
  const [cols, setCols] = useState(4);
  const [rounded, setRounded] = useState('lg');
  const [padding, setPadding] = useState(10);

  return (
    <>
      <div className='flex flex-col items-start p-10'>
        <h1 className='text-muted-foreground mb-5 text-2xl font-bold'>Grid Sizes</h1>
        <div className='mb-5 flex w-full flex-col items-center gap-2'>
          <p className='text-muted-foreground text-sm'>Gap</p>
          <SliderTicks
            max={gapOptions.length - 1}
            value={[gapOptions.indexOf(gap)]}
            onValueChange={value => setGap(gapOptions[value[0]])}
            tooltipContent={value => {
              const gapValue = gapOptions[Math.min(value, gapOptions.length - 1)];
              return gapValue !== undefined ? gapValue.toString() : '0';
            }}
            customMarks={gapOptions.map((value, index) => ({
              value: index,
              label: value.toString(),
            }))}
          />
        </div>
        <div className='grid w-full grid-cols-2 gap-2'>
          <div className='mb-5 flex w-full flex-col items-center gap-2'>
            <p className='text-muted-foreground text-sm'>Grid Columns</p>
            <SliderTicks
              max={5}
              value={[cols - 1]}
              onValueChange={value => setCols(value[0] + 1)}
              tooltipContent={value => {
                return (value + 1).toString();
              }}
              customMarks={Array.from({ length: 6 }, (_, i) => ({
                value: i,
                label: (i + 1).toString(),
              }))}
            />
          </div>
          <div className='mb-5 flex w-full flex-col items-center gap-2'>
            <p className='text-muted-foreground text-sm'>Rounded</p>
            <SliderTicks
              max={roundedOptions.length - 1}
              value={[roundedOptions.indexOf(rounded)]}
              onValueChange={value => setRounded(roundedOptions[value[0]])}
              tooltipContent={value => roundedOptions[value]}
              customMarks={roundedOptions.map((value, index) => ({
                value: index,
                label: value,
              }))}
            />
          </div>
        </div>

        <div className='grid w-full grid-cols-1 gap-2'>
          <div className='mb-5 flex w-full flex-col items-center gap-2'>
            <p className='text-muted-foreground text-sm'>Padding</p>
            <SliderTicks
              max={gapOptions.length - 1}
              value={[gapOptions.indexOf(padding)]}
              onValueChange={value => setPadding(gapOptions[value[0]])}
              tooltipContent={value => {
                const paddingValue = gapOptions[Math.min(value, gapOptions.length - 1)];
                return paddingValue !== undefined ? paddingValue.toString() : '0';
              }}
              customMarks={gapOptions.map((value, index) => ({
                value: index,
                label: value.toString(),
              }))}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid gap-${gap} p-${padding}`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {Array.from({ length: 2 * cols }).map((_, index) => (
          <div key={index} className={`bg-muted h-56 w-full rounded-${rounded}`}>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='text-muted-foreground font-mono'>
                gap-{gap}: {gap * 4}px / {gap / 2}rem
                <br />
                p-{padding}: {padding * 4}px / {padding / 2}rem
                <br />
                rounded-{rounded}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 