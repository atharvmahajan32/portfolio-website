"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface GtmModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GtmModal({ isOpen, onClose }: GtmModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="sm:!max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">My interest in GTM (Go-to-Market)</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I recently learned about Go-to-Market and it really caught my interest. I don’t know a lot about it yet, but I find it exciting because it seems very important, especially in tech and fast-moving companies. I like how GTM helps bring products to people in the right way and at the right time. It sounds like a smart mix of planning, timing, and understanding what people want. I’m curious to explore it more and see how I can use my technical background to help with things like product launches or finding better ways to reach customers.
          </p>

          <div>
            <h3 className="text-lg font-semibold mb-2">Topics I can help with</h3>
            <ul className="list-disc list-outside pl-6 space-y-2 leading-7 text-foreground marker:text-primary/70">
              <li className="text-sm">Simplifying technical concepts for sales, marketing, and support teams.</li>
              <li className="text-sm">Analyzing user data to guide GTM strategy and decisions.</li>
              <li className="text-sm">Creating documentation to support onboarding and product understanding.</li>
              <li className="text-sm">Building tools & automations to streamline GTM workflows.</li>
              <li className="text-sm">Collaborating across teams to align product and GTM efforts.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
                Understand the product deeply to identify what matters most to users and teams.
                
                Bridge the gap between tech and GTM by simplifying complex concepts and creating helpful tools. 
                
                Use data and automation to support smarter decisions, faster execution, and better user experiences.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GtmModal
