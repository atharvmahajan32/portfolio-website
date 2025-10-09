"use client"

import { useState, useEffect } from "react"
import { Database } from "lucide-react"

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Occasionally Overfits ;)"
]

const DataStream = ({ delay = 0 }: { delay?: number }) => {
  const [visible, setVisible] = useState(false)
  const characters = [
    "0",
    "1",
    "*",
    "#",
    "@",
    "&",
    "*",
    "%",
    "$",
    "λ",
    "∞",
    "Δ",
    "π",
    "∑",
    "∇",
    "∂",
    "∫",
    "{",
    "}",
    "[",
    "]",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setVisible(false), Math.random() * 200 + 300)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  const randomChar = characters[Math.floor(Math.random() * characters.length)]

  return (
    <span
      className="absolute text-foreground/60 text-xs font-mono animate-pulse"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `translate(-50%, -50%)`,
        animationDuration: `${Math.random() * 0.5 + 0.3}s`,
      }}
    >
      {randomChar}
    </span>
  )
}

export function Hero({ showName = true, showContent = false }: { showName?: boolean; showContent?: boolean }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [streamKey, setStreamKey] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  
  // Letter-by-letter animation for name
  const [visibleLetters, setVisibleLetters] = useState(0)
  const nameLetters = "ATHARV MAHAJAN".split("")

  // Animate letters when showName becomes true
  useEffect(() => {
    if (showName && visibleLetters < nameLetters.length) {
      const timer = setTimeout(() => {
        setVisibleLetters(prev => prev + 1)
      }, 60) // Reduced from 120ms to 60ms for faster animation

      return () => clearTimeout(timer)
    }
  }, [showName, visibleLetters, nameLetters.length])

  // Only start role typing animation when name is fully visible AND showContent is true
  const shouldShowRoleAnimation = showName && visibleLetters >= nameLetters.length && showContent

  useEffect(() => {
    // Only run role animation if name is complete
    if (!shouldShowRoleAnimation) return

    const currentRole = roles[currentRoleIndex]

    if (isDeleting) {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 20) // 0.2s total for deletion
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setTypingIndex(0)
        setIsTypingComplete(false)
      }
    } else {
      if (typingIndex < currentRole.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, typingIndex + 1))
          setTypingIndex(typingIndex + 1)
        }, 70) // 0.7s total for typing
        return () => clearTimeout(timer)
      } else if (!isTypingComplete) {
        setIsTypingComplete(true)
      }
    }
  }, [displayedText, isDeleting, typingIndex, currentRoleIndex, isTypingComplete, shouldShowRoleAnimation])

  useEffect(() => {
    // Only start role cycling if role animation should be shown
    if (!shouldShowRoleAnimation) return

    const interval = setInterval(() => {
      if (isTypingComplete) {
        setIsDeleting(true)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, 5000) // 0.7s typing + 3s pause + 0.2s deletion + buffer

    return () => clearInterval(interval)
  }, [isTypingComplete, shouldShowRoleAnimation])

  useEffect(() => {
    const streamInterval = setInterval(
      () => {
        setStreamKey((prev) => prev + 1)
      },
      Math.random() * 500 + 600,
    )

    return () => clearInterval(streamInterval)
  }, [])

  return (
    <section id="home" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative">
      <div className="flex-1 relative z-10">
        {/* ONLY THE NAME - visible when showName is true */}
        <h1 className={`text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance transition-opacity duration-300 ${
          showName ? 'opacity-100' : 'opacity-0'
        }`}>
          {showName && nameLetters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                index < visibleLetters
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-6 scale-75'
              } ${letter === ' ' ? 'w-2' : ''}`}
              style={{
                transitionDelay: `${index * 60}ms`, // Reduced from 100ms to 60ms to match faster timing
                filter: index < visibleLetters ? 'none' : 'blur(2px)',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        
        {/* EVERYTHING ELSE - only visible when showContent is true */}
        {showContent && (
          <div className={`transition-all duration-800 ease-out ${
            showContent ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-2'
          }`}>
            <p className="text-base sm:text-lg text-primary mb-4 transition-all duration-500 min-h-[24px] sm:min-h-[28px] font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-full sm:max-w-md text-pretty leading-relaxed">
              I teach machines to learn, data to behave, and models to not embarrass me in front of stakeholders. Also, I love watching racecars go ridiculously fast in circles.
            </p>

            
            <p className="mt-4 text-primary font-medium max-w-full sm:max-w-md leading-relaxed whitespace-normal break-words">
              Open to freelance, collaborations, or roles where data makes real-world impact.
            </p>
          </div>
        )}
      </div>
      
      {/* Icon - Desktop version */}
      {showContent && (
        <div className={`hidden sm:block ml-8 relative transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 translate-x-0 scale-100 delay-500' : 'opacity-0 translate-x-4 scale-90'
        }`}>
          <div className="w-24 lg:w-32 h-24 lg:h-32 relative overflow-hidden">
            {/* Subtle background circle */}
            <div className="absolute inset-3 lg:inset-4 rounded-full bg-primary/5 border border-primary/10"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin" style={{ animationDuration: "40s" }}>
                <Database className="w-6 lg:w-8 h-6 lg:h-8 text-primary/80" />
              </div>
            </div>

            <div key={streamKey} className="absolute inset-0">
              {Array.from({ length: 4 }, (_, i) => (
                <DataStream key={i} delay={Math.random() * 800} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Data Stream - Positioned behind text */}
      {showContent && (
        <div className={`sm:hidden absolute inset-0 pointer-events-none transition-all duration-1000 ease-out ${
          showContent ? 'opacity-30 delay-500' : 'opacity-0'
        }`}>
          <div key={streamKey} className="absolute inset-0">
            {Array.from({ length: 3 }, (_, i) => (
              <DataStream key={`mobile-${i}`} delay={Math.random() * 800} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
