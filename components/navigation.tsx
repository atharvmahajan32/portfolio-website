"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [navItemsLoaded, setNavItemsLoaded] = useState<boolean[]>([false, false, false, false, false])
  const [animationStarted, setAnimationStarted] = useState(false)
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

  // Separate effect to handle navbar animation when component becomes visible
  useEffect(() => {
    const startAnimation = () => {
      if (animationStarted) return;
      
      setAnimationStarted(true);
      const delays = [200, 350, 500, 650, 800]; // Sequential delays for each item
      
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setNavItemsLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, delay);
      });
    };

    // Start animation when component mounts and is visible
    const timer = setTimeout(startAnimation, 100);
    return () => clearTimeout(timer);
  }, [animationStarted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate accurate target position relative to the document
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY

      // Account for the fixed navbar height so the section isn't hidden behind it
      const nav = document.querySelector('nav')
      const navHeight = nav ? nav.getBoundingClientRect().height : 72
      const target = Math.max(0, elementTop - navHeight - 12) // small padding

      window.scrollTo({ top: target, behavior: 'smooth' })

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
            {/* Animated skeleton for navbar items */}
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="bg-muted animate-pulse rounded h-4"
                style={{
                  width: `${60 + Math.random() * 20}px`,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '1.5s'
                }}
              ></div>
            ))}
            <div className="w-8 h-8 bg-muted animate-pulse rounded-full ml-2"></div>
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
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: navItemsLoaded.every(loaded => loaded) 
            ? '0 8px 32px hsl(var(--primary) / 0.1), 0 1px 3px hsl(var(--foreground) / 0.1)' 
            : '0 4px 16px hsl(var(--foreground) / 0.05)'
        }}
      >
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-medium text-foreground hover:text-primary transition-all duration-300 ease-in-out cursor-pointer relative group ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "home" ? "text-primary" : ""} ${
              navItemsLoaded[0] 
                ? "opacity-100 translate-y-0 scale-100 blur-none" 
                : "opacity-0 translate-y-6 scale-90 blur-sm"
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: navItemsLoaded[0] 
                ? 'translateY(0px) rotateX(0deg) scale(1)' 
                : 'translateY(20px) rotateX(15deg) scale(0.9)'
            }}
          >
            Home
            <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out cursor-pointer relative group ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "projects" ? "text-primary" : ""} ${
              navItemsLoaded[1] 
                ? "opacity-100 translate-y-0 scale-100 blur-none" 
                : "opacity-0 translate-y-6 scale-90 blur-sm"
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: navItemsLoaded[1] 
                ? 'translateY(0px) rotateX(0deg) scale(1)' 
                : 'translateY(20px) rotateX(15deg) scale(0.9)'
            }}
          >
            Projects
            <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out cursor-pointer relative group ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "skills" ? "text-primary" : ""} ${
              navItemsLoaded[2] 
                ? "opacity-100 translate-y-0 scale-100 blur-none" 
                : "opacity-0 translate-y-6 scale-90 blur-sm"
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: navItemsLoaded[2] 
                ? 'translateY(0px) rotateX(0deg) scale(1)' 
                : 'translateY(20px) rotateX(15deg) scale(0.9)'
            }}
          >
            Skills
            <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-medium text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out cursor-pointer relative group ${
              isScrolled ? "text-xs" : "text-sm"
            } ${activeSection === "contact" ? "text-primary" : ""} ${
              navItemsLoaded[3] 
                ? "opacity-100 translate-y-0 scale-100 blur-none" 
                : "opacity-0 translate-y-6 scale-90 blur-sm"
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: navItemsLoaded[3] 
                ? 'translateY(0px) rotateX(0deg) scale(1)' 
                : 'translateY(20px) rotateX(15deg) scale(0.9)'
            }}
          >
            Contact
            <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
          <Button
            variant="ghost"
            size={isScrolled ? "sm" : "sm"}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setTheme(theme === "dark" ? "light" : "dark")
            }}
            className={`ml-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-accent group relative overflow-hidden ${
              navItemsLoaded[4] 
                ? "opacity-100 translate-y-0 scale-100 rotate-0 blur-none" 
                : "opacity-0 translate-y-6 scale-90 rotate-180 blur-sm"
            }`}
            style={{
              transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: navItemsLoaded[4] 
                ? 'translateY(0px) rotateY(0deg) scale(1)' 
                : 'translateY(25px) rotateY(180deg) scale(0.8)'
            }}
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {theme === "dark" ? (
              <Sun 
                className={`${isScrolled ? "h-3 w-3" : "h-4 w-4"} transition-all duration-300 ease-in-out relative z-10 group-hover:rotate-90`}
              />
            ) : (
              <Moon 
                className={`${isScrolled ? "h-3 w-3" : "h-4 w-4"} transition-all duration-300 ease-in-out relative z-10 group-hover:-rotate-12`}
              />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
