import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState, useEffect } from "react"

interface ExportThemeDialogProps {
  onExport: () => string
}

export function ExportThemeDialog({ onExport }: ExportThemeDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [exportedCSS, setExportedCSS] = useState('')

  useEffect(() => {
    if (onExport) {
      setExportedCSS(onExport())
    }
  }, [onExport])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <code>{exportedCSS}</code>
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
  )
} 