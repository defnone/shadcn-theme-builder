"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "./color-picker";

const initialTheme = {
  background: "0 0% 9%",
  foreground: "0 0% 98%",
  card: "137 21% 6%",
  "card-foreground": "0 0% 98%",
  popover: "240 5.9% 10%",
  "popover-foreground": "0 0% 98%",
  primary: "33.3 100% 96.5%",
  "primary-foreground": "0 0% 9%",
  secondary: "0 0% 14.9%",
  "secondary-foreground": "0 0% 98%",
  muted: "240 3.7% 15.9%",
  "muted-foreground": "240 3.8% 46.1%",
  accent: "12 6.5% 15.1%",
  "accent-foreground": "220 14.3% 95.9%",
  destructive: "0 72.2% 50.6%",
  "destructive-foreground": "0 0% 98%",
  border: "0 0% 15%",
  input: "12 6.5% 15.1%",
  ring: "0 0% 25.1%",
  "chart-1": "220 70% 50%",
  "chart-2": "160 60% 45%",
  "chart-3": "30 80% 55%",
  "chart-4": "280 65% 60%",
  "chart-5": "340 75% 55%",
  radius: "8px",
};

export function ThemeCustomizer() {
  const [theme, setTheme] = React.useState(initialTheme);
  const [isExportOpen, setIsExportOpen] = React.useState(false);
  const [openColorPicker, setOpenColorPicker] = React.useState<
    keyof typeof initialTheme | null
  >(null);
  const variables = Object.entries(theme).map(([name, value]) => ({
    name,
    value,
    label: name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }));

  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const handleColorChange = (name: string, value: string) => {
    setTheme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateThemeCSS = () => {
    return `@layer base {
  :root {
${Object.entries(theme)
  .map(([key, value]) => `    --${key}: ${value};`)
  .join("\n")}
  }
}`;
  };

  return (
    <div className="max-w-[1200px] lg:min-w-[450px]  p-0">
      {openColorPicker ? (
        <div className="sticky top-0 left-0 w-[450px] z-0">
          <div className="absolute left-0 top-0 max-w-[450px] h-screen overflow-y-auto bg-background ">
            <div className="sticky top-0 bg-background p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-extrabold">
                  {variables.find((v) => v.name === openColorPicker)?.label}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setOpenColorPicker(null)}
                >
                  Close
                </Button>
              </div>
            </div>
            <div className="p-4">
              <ColorPicker
                isColorPickerMode={true}
                setIsColorPickerMode={() => setOpenColorPicker(null)}
                value={theme[openColorPicker]}
                onChange={(value) => handleColorChange(openColorPicker, value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Tailwind CSS Theme Editor</h1>
            <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Export Theme</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Export Theme CSS</DialogTitle>
                  <DialogDescription>
                    Copy the CSS below to use your custom theme in your global
                    styles.
                  </DialogDescription>
                </DialogHeader>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{generateThemeCSS()}</code>
                  </pre>
                </div>
                <a
                  href="https://ui.shadcn.com/docs/theming"
                  target="_blank"
                  className="text-sm text-primary underline ml-auto"
                >
                  More about theming
                </a>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sticky top-0 pt-10">
            {variables.map((variable) =>
              variable.name === "radius" ? (
                <div key={variable.name} className="space-y-2.5">
                  <Label className="text-sm font-bold">{variable.label}</Label>
                  <Input
                    type="number"
                    value={parseFloat(theme[variable.name])}
                    onChange={(e) =>
                      handleColorChange(variable.name, e.target.value + "px")
                    }
                    step={1}
                    min={0}
                    className="w-full"
                  />
                </div>
              ) : (
                <div
                  key={variable.name}
                  className="space-y-2.5 flex flex-col justify-between"
                >
                  <Label className="text-sm font-bold">{variable.label}</Label>
                  <ColorPicker
                    isColorPickerMode={false}
                    setIsColorPickerMode={() =>
                      setOpenColorPicker(
                        variable.name as keyof typeof initialTheme
                      )
                    }
                    value={variable.value}
                    onChange={(value) =>
                      handleColorChange(variable.name, value)
                    }
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
