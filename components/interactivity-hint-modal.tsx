"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MousePointerClick } from "lucide-react"

interface InteractivityHintModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InteractivityHintModal({ isOpen, onClose }: InteractivityHintModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:!max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <MousePointerClick className="h-5 w-5 text-primary" />
            Tip: Interactive Content
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            Click on any <span className="font-semibold text-foreground">project</span> or <span className="font-semibold text-foreground">skill</span> card to expand and see more details!
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose} variant="default">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default InteractivityHintModal
