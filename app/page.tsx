'use client'

import { useState, useEffect } from 'react';
import { ThemeCustomizer } from "@/components/core/theme/theme-customizer";
import { ThemeExamples } from "@/components/core/theme/theme-examples";
import { MainNav } from "@/components/core/layout/main-nav";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [themeCSS, setThemeCSS] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        const cssString = Object.entries(theme)
          .map(([key, val]) => `  --${key}: ${val};`)
          .join('\n');
        setThemeCSS(`:root {\n${cssString}\n}`);
      } catch (e) {
        console.error('Failed to parse theme from localStorage:', e);
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <h1 className="text-xl font-semibold">
          Mobile version is not supported. Please use desktop version.
        </h1>
      </div>
    );
  }
  
  return (
    <>
      <MainNav onExport={() => themeCSS} />
      <div className='w-full flex flex-row gap-8 mt-16'>
        <ThemeCustomizer onExport={setThemeCSS} />
        <ThemeExamples />
      </div>
    </>
  );
}
