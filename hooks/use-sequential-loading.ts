"use client"

import { useState, useEffect } from "react"

export function useSequentialLoading() {
  const [showName, setShowName] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Always clear the session storage on component mount for testing
    // Comment this line out when you're happy with the animation
    sessionStorage.removeItem('portfolio-loaded')
    
    // Check if this is first load this session
    const hasLoaded = sessionStorage.getItem('portfolio-loaded')
    
    console.log('Sequential loading started, hasLoaded:', hasLoaded)
    
    if (hasLoaded === 'true') {
      // If already loaded this session, show everything immediately
      console.log('Already loaded, showing everything')
      setIsFirstLoad(false)
      setShowName(true)
      setShowNavbar(true)
      setShowContent(true)
      return
    }

    console.log('First load - starting sequential animation')
    setIsFirstLoad(true)
    
    // Reset all states
    setShowName(false)
    setShowNavbar(false)
    setShowContent(false)

    // Stage 1: Show name after 800ms
    const nameTimer = setTimeout(() => {
      console.log('Stage 1: Showing name')
      setShowName(true)
    }, 800)

    // Stage 2: Show navbar after 2500ms (after name is fully visible)
    const navbarTimer = setTimeout(() => {
      console.log('Stage 2: Showing navbar')
      setShowNavbar(true)
    }, 2500)

    // Stage 3: Show content after 3200ms (reduced gap from 1500ms to 700ms)
    const contentTimer = setTimeout(() => {
      console.log('Stage 3: Showing content')
      setShowContent(true)
      sessionStorage.setItem('portfolio-loaded', 'true')
    }, 3200)

    return () => {
      clearTimeout(nameTimer)
      clearTimeout(navbarTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return { showName, showNavbar, showContent, isFirstLoad }
}