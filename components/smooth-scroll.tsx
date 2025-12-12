"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      prevent: (node) => {
        // Prevent Lenis from hijacking scroll inside modals/dialogs
        return (
          node.closest('[role="dialog"]') !== null ||
          node.closest('[data-radix-scroll-area-viewport]') !== null ||
          node.closest('.overflow-y-auto') !== null ||
          node.closest('.overflow-auto') !== null
        )
      },
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
