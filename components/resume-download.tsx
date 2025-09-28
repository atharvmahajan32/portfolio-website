"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEffect, useState } from "react"

export function ResumeDownload() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const bottomPosition = document.body.scrollHeight
      setIsVisible(scrollPosition < bottomPosition - 50) // Hide when near bottom
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "Atharv_Mahajan.pdf"
    link.download = "Atharv_Mahajan.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 md:bottom-6 md:right-6 transition-all duration-200 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={handleDownload}
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full md:rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
      >
        <Download className="h-4 w-4" />
        <span className="font-medium hidden md:inline">Resume</span>
      </Button>
    </div>
  )
}
