"use client"

import { useState, useEffect } from "react"
import { Database } from "lucide-react"

const roles = [
  "Software Engineer 🚀",
  "Code Wizard ✨ (sometimes breaks things)",
  "Bug Hunter 🐛 (creates more than catches)",
  "Coffee-to-Code Converter ☕",
  "Stack Overflow Researcher 📚",
  "Rubber Duck Whisperer 🦆",
  "Pixel Perfectionist 🎨 (when CSS cooperates)",
  "API Tamer 🔌 (mostly friendly)",
  "Database Whisperer 💾",
  "Cloud Surfer ☁️ (loves floating servers)",
  "Git Commit Poet 📝",
  "Debugging Detective 🔍",
]

const DataStream = ({ delay = 0 }: { delay?: number }) => {
  const [visible, setVisible] = useState(false)
  const characters = [
    "0",
    "1",
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

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [streamKey, setStreamKey] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
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
  }, [displayedText, isDeleting, typingIndex, currentRoleIndex, isTypingComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTypingComplete) {
        setIsDeleting(true)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, 5000) // 0.7s typing + 3s pause + 0.2s deletion + buffer

    return () => clearInterval(interval)
  }, [isTypingComplete])

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
    <section id="home" className="flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">ALEXANDER CHEN</h1>
        <p className="text-lg text-primary mb-4 transition-all duration-500 min-h-[28px] font-mono">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-base text-muted-foreground max-w-md text-pretty">
          Passionate about creating elegant solutions to complex problems through clean code and innovative design.
        </p>
      </div>
      <div className="ml-8 relative">
        <div className="w-32 h-32 relative overflow-hidden">
          {/* Subtle background circle */}
          <div className="absolute inset-4 rounded-full bg-primary/5 border border-primary/10"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: "40s" }}>
              <Database className="w-8 h-8 text-primary/80" />
            </div>
          </div>

          <div key={streamKey} className="absolute inset-0">
            {Array.from({ length: 6 }, (_, i) => (
              <DataStream key={i} delay={Math.random() * 800} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
