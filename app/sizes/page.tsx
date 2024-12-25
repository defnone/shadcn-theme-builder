'use client';

import { Noto_Sans } from 'next/font/google';
import { GridSettings } from './components/grid-settings';
import { TypographySettings } from './components/typography-settings';
import { useState, useEffect } from 'react';
import { MainNav } from '@/components/main-nav';

const noto = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export default function Sizes() {
  const [isMobile, setIsMobile] = useState(false);

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
    <div className={`${noto.className} bg-background h-full w-full pt-20`}>
      <MainNav />
      <GridSettings />
      <div className='mt-10 h-px w-full bg-zinc-950'></div>
      <div className='mb-10 h-px w-full bg-zinc-900'></div>
      <TypographySettings />
    </div>
  );
}
