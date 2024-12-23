"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ColorName,
  ColorOption,
  ShadeNumber,
  colorOptions,
  tailwindColors,
} from "@/lib/colors";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  isColorPickerMode: boolean;
  setIsColorPickerMode: (value: boolean) => void;
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex: string): string {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function ColorPicker({
  value,
  onChange,
  isColorPickerMode,
  setIsColorPickerMode,
}: ColorPickerProps) {
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<ColorOption | null>(
    () => {
      const found = colorOptions.find((option) => option.value === value);
      return found || null;
    }
  );

  const [customColor, setCustomColor] = React.useState(() => {
    if (!selectedColor) {
      const [h, s, l] = value.split(" ").map((v) => parseFloat(v));
      return hslToHex(h, s, l);
    }
    return "#000000";
  });

  if (isColorPickerMode) {
    return (
      <div className="w-full">
        <div className="rounded-lg ">
          <div className="grid grid-cols-2">
            <div className="p-4 ">
              <div className="text-sm font-medium mb-2">User color</div>
              <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
                <PopoverTrigger asChild>
                  <div
                    className={cn(
                      "h-10 rounded-md cursor-pointer ring-offset-background",
                      "transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2",
                      !selectedColor && "ring-2 ring-ring ring-offset-2"
                    )}
                    style={{ background: customColor }}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <HexColorPicker
                    color={customColor}
                    onChange={(hex) => {
                      setCustomColor(hex);
                      setSelectedColor(null);
                      onChange(hexToHsl(hex));
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {Object.entries(tailwindColors)
              .filter(([name]) => name !== "custom")
              .map(([colorName, shades]) => (
                <div key={colorName} className="p-4">
                  <div className="text-sm font-medium mb-2">{colorName}</div>
                  <div className="grid grid-cols-11 gap-1">
                    {Object.entries(shades).map(([shade, value]) => (
                      <div
                        key={`${colorName}-${shade}`}
                        className={cn(
                          "h-5 w-5 rounded-md cursor-pointer ring-offset-background",
                          "transition-all hover:scale-110 hover:ring-2 hover:ring-ring hover:ring-offset-2",
                          selectedColor?.name === colorName &&
                            String(selectedColor?.shade) === shade &&
                            "ring-2 ring-ring ring-offset-2"
                        )}
                        style={{ background: `hsl(${value})` }}
                        onClick={() => {
                          setSelectedColor({
                            name: colorName as ColorName,
                            shade: shade as unknown as ShadeNumber,
                            value,
                          });
                          onChange(value);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            <div className="p-4 flex justify-end">
              <Button
                variant="outline"
                onClick={() => setIsColorPickerMode(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      className="w-full justify-between"
      onClick={() => setIsColorPickerMode(true)}
    >
      {selectedColor ? (
        <div className="flex items-center gap-2">
          <div
            className="h-4 w-4 rounded"
            style={{ background: `hsl(${selectedColor.value})` }}
          />
          <span>
            {selectedColor.name} {selectedColor.shade}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div
            className="h-4 w-4 rounded"
            style={{ background: customColor }}
          />
          <span>User color</span>
        </div>
      )}
      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );
}
