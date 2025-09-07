"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeDownload() {
  const handleDownload = () => {
    // Create a dummy PDF download - in real implementation, this would link to actual resume
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be the actual resume file path
    link.download = "Alexander_Chen_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 md:bottom-6 md:right-6">
      <Button
        onClick={handleDownload}
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer"
      >
        <Download className="h-4 w-4" />
        <span className="font-medium">Resume</span>
      </Button>
    </div>
  )
}
