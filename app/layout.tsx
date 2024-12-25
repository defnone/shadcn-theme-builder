import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/core/theme/theme-provider';

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TailwindCSS Tools",
  description: "Customize your TailwindCSS theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
