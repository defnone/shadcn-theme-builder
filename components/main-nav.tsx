import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import { ExportThemeDialog } from "./export-theme-dialog"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Theme Customizer",
    href: "/",
  },
  {
    title: "Sizing & Typography",
    href: "/sizes",
  },
  {
    title: "Colors",
    href: "/colors",
  },
]

interface MainNavProps {
  className?: string;
  onExport?: () => string;
}

export function MainNav({ className, onExport }: MainNavProps) {
  const pathname = usePathname();
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b h-16 px-4", className)}>
      <div className="w-full flex h-16 items-center justify-between">
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
                className={cn("transition-colors hover:text-foreground/80 text-foreground/60", pathname === item.href && "text-foreground")}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        {onExport && (
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/defnone/shadcn-theme-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <ExportThemeDialog onExport={onExport} />
          </div>
        )}
        
      </div>
    </nav>
  )
} 