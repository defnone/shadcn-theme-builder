'use client'

import { useState, useEffect } from 'react';
import { ThemeCustomizer } from "@/components/theme-customizer";
import { ThemeExamples } from "@/components/theme-examples";
import { MainNav } from "@/components/main-nav";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [themeCSS, setThemeCSS] = useState('');

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
