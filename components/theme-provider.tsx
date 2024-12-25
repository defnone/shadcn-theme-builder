'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { initialTheme } from './theme-customizer';

interface ThemeValues {
  [key: string]: string;
}

interface ThemeContextType {
  theme: ThemeValues | null;
  setTheme: (theme: ThemeValues) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeValues | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        try {
          const parsedTheme = JSON.parse(savedTheme) as ThemeValues;
          setThemeState(parsedTheme);
          applyTheme(parsedTheme);
        } catch (e) {
          console.error('Failed to parse theme from localStorage:', e);
          setThemeState(initialTheme);
          applyTheme(initialTheme);
        }
      } else {
        // Set initial theme if no theme is saved
        setThemeState(initialTheme);
        applyTheme(initialTheme);
      }
    }
  }, []);

  const setTheme = (newTheme: ThemeValues) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
    applyTheme(newTheme);
  };

  const applyTheme = (themeValues: ThemeValues) => {
    const root = document.documentElement;
    Object.entries(themeValues).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 