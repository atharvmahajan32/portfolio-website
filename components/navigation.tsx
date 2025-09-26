"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const sections = ["home", "projects", "skills", "contact"];
      let currentSection: string | null = null;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
          ) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - window.innerHeight * 0.4
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: "smooth",
      })

      element.classList.add("highlight-section")
      setTimeout(() => {
        element.classList.remove("highlight-section")
      }, 1000)
    }
  }

  if (!mounted) {
    return (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out">
        <div className="bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-lg px-6 py-3">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-6 bg-muted animate-pulse rounded"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out">
      <div
        className={`bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-lg transition-all duration-500 ease-in-out ${
          isScrolled ? "px-4 py-2" : "px-6 py-3"
        }`}
        style={{
          transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-medium text-foreground hover:text-primary transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "home" ? "text-primary" : ""}`}
            style={{
              transition: 'font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "projects" ? "text-primary" : ""}`}
            style={{
              transition: 'font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
            }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "skills" ? "text-primary" : ""}`}
            style={{
              transition: 'font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
            }}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "contact" ? "text-primary" : ""}`}
            style={{
              transition: 'font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
            }}
          >
            Contact
          </button>
          <Button
            variant="ghost"
            size={isScrolled ? "sm" : "sm"}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setTheme(theme === "dark" ? "light" : "dark")
            }}
            className="ml-2 transition-all duration-500 ease-in-out cursor-pointer hover:bg-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun 
                className={`${isScrolled ? "h-3 w-3" : "h-4 w-4"} transition-all duration-500 ease-in-out`} 
                style={{
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            ) : (
              <Moon 
                className={`${isScrolled ? "h-3 w-3" : "h-4 w-4"} transition-all duration-500 ease-in-out`}
                style={{
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
