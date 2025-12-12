"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ResumeDownload } from "@/components/resume-download"
import { InteractivityHintModal } from "@/components/interactivity-hint-modal"
import { useSequentialLoading } from "@/hooks/use-sequential-loading"

export default function Home() {
  const { showName, showNavbar, showContent, isFirstLoad } = useSequentialLoading()
  const [showHintModal, setShowHintModal] = useState(false)

  // Show interactivity hint modal 7 seconds after loading animation completes
  useEffect(() => {
    if (showContent && isFirstLoad) {
      const hintTimer = setTimeout(() => {
        // Only show if user hasn't seen it this session
        const hasSeenHint = sessionStorage.getItem('portfolio-hint-shown')
        if (hasSeenHint !== 'true') {
          setShowHintModal(true)
          sessionStorage.setItem('portfolio-hint-shown', 'true')
        }
      }, 7000)

      return () => clearTimeout(hintTimer)
    }
  }, [showContent, isFirstLoad])

  console.log('Render states:', { showName, showNavbar, showContent, isFirstLoad })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Fixed position, only opacity changes */}
      <div className={`transition-opacity duration-1000 ease-out ${
        showNavbar 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <Navigation />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <div className="bg-card border border-border rounded-3xl p-8 space-y-16">
          {/* Name section - ONLY VISIBLE when showName */}
          {showName ? (
            <div>
              <Hero showName={showName} showContent={showContent} />
            </div>
          ) : (
            <div className="h-32"></div> // Placeholder to maintain layout
          )}

          {/* All other content - Start hidden, animate in when showContent becomes true */}
          <div className="space-y-16">
            <div className={`transition-all duration-700 ease-out ${
              showContent ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-6'
            }`}>
              <Projects />
            </div>
            <div className={`transition-all duration-700 ease-out ${
              showContent ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
            }`}>
              <Skills />
            </div>
            <div className={`transition-all duration-700 ease-out ${
              showContent ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-6'
            }`}>
              <Contact />
            </div>
          </div>
        </div>
      </main>

      {/* Resume download - Fixed position, only opacity changes */}
      <div className={`transition-opacity duration-800 ease-out ${
        showContent 
          ? 'opacity-100 delay-900' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <ResumeDownload />
      </div>

      {/* Interactivity hint modal */}
      <InteractivityHintModal 
        isOpen={showHintModal} 
        onClose={() => setShowHintModal(false)} 
      />
    </div>
  )
}
