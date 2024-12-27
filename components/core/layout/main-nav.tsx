import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ExportThemeDialog } from '@/components/core/theme/export-theme-dialog';
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

const menuItems = [
  {
    title: 'Theme Customizer',
    href: '/',
  },
  {
    title: 'Sizing & Typography',
    href: '/sizes',
  },
  {
    title: 'Colors',
    href: '/colors',
  },
];

interface MainNavProps {
  className?: string;
  onExport?: () => string;
}

export function MainNav({ className, onExport }: MainNavProps) {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        'fixed top-0 z-50 flex h-16 w-full items-center border-b bg-background/95 pl-8 pr-10 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}>
      <div className='flex h-16 w-full items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='mr-6 flex items-center space-x-2'>
            <span className='text-xl font-black text-zinc-200'>TailwindCSS Tools</span>
          </Link>
          <nav className='flex items-center space-x-6 text-sm font-medium'>
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-foreground/60 transition-colors hover:text-foreground/80',
                  pathname === item.href && 'text-foreground'
                )}>
                {item.title}
              </Link>
            ))}
            <a
              href='https://github.com/defnone/tailwindcss-tools'
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 transition-colors hover:text-foreground/80'>
              <FaGithub className='h-5 w-5' />
            </a>
          </nav>
        </div>
        {onExport && (
          <div className='flex items-center gap-4'>
            <ExportThemeDialog onExport={onExport} />
          </div>
        )}
      </div>
    </nav>
  );
}
