import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from "react"

const menuItems = [
  {
    title: "Theme Customizer",
    href: "/",
  },
  {
    title: "Sizing & Typography",
    href: "/sizes",
  },

]

interface MainNavProps {
  className?: string;
  onExport?: () => string;
}

export function MainNav({ className, onExport }: MainNavProps) {
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b h-16 px-4", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">
              TailwindCSS Tools
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        
        {onExport && (
          <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="sm">Export Theme</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Export CSS Theme</DialogTitle>
                <DialogDescription>
                  Copy the CSS code below to use your theme in global styles.
                </DialogDescription>
              </DialogHeader>
              <div className="relative">
                <pre className="bg-muted overflow-x-auto rounded-md p-4">
                  <code>{onExport()}</code>
                </pre>
              </div>
              <a
                href="https://ui.shadcn.com/docs/theming"
                target="_blank"
                className="text-primary ml-auto text-sm underline"
              >
                Learn more about theming
              </a>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </nav>
  )
} 