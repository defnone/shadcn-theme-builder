import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';


interface SliderTicksProps {
  max: number;
  defaultValue?: number[];
  value?: number[];
  onValueChange: (value: number[]) => void;
  tooltipContent?: (value: number) => string;
  customMarks?: { value: number; label: string }[];
}

export default function SliderTicks({
  max,
  defaultValue,
  value,
  onValueChange,
  tooltipContent,
  customMarks,
}: SliderTicksProps) {
  const skipInterval = 2;
  const ticks = [...Array(max + 1)].map((_, i) => i);

  const handleValueChange = (newValue: number[]) => {
    onValueChange(newValue);
  };

  return (
    <div className='space-y-4 w-full'>
      <div className='w-full'>
        <Slider
          defaultValue={defaultValue}
          value={value}
          max={max}
          min={0}
          step={1}
          aria-label='Slider with ticks'
          onValueChange={handleValueChange}
          showTooltip={true}
          tooltipContent={value => {
            if (typeof value !== 'number' || value < 0 || value > max) return '';
            return tooltipContent?.(value) ?? value.toString();
          }}
        />
        <span
          className='text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium'
          aria-hidden='true'>
          {ticks.map((_, i) => {
            const customMark = customMarks?.find(mark => mark.value === i);
            return (
              <span key={i} className='flex w-0 flex-col items-center justify-center gap-2'>
                <span
                  className={cn('bg-muted-foreground/70 h-1 w-px', i % skipInterval !== 0 && 'h-0.5')}
                />
                <span className={cn(i % skipInterval !== 0 && 'opacity-0')}>
                  {customMark ? customMark.label : i}
                </span>
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
}
