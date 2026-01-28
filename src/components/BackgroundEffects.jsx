import { useEffect } from 'react'
import './BackgroundEffects.css'

const BackgroundEffects = () => {
  useEffect(() => {
    // Create fewer, more visible particles for better performance
    const particlesContainer = document.getElementById('particles')
    if (particlesContainer) {
      const particleCount = 30 // Reduced from 50 for better performance

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's' // Faster
        particle.style.animationDelay = Math.random() * 3 + 's'
        
        // Larger, more visible particles
        const size = Math.random() * 6 + 4
        particle.style.width = size + 'px'
        particle.style.height = size + 'px'
        particle.style.opacity = Math.random() * 0.5 + 0.3 // More visible
        
        particlesContainer.appendChild(particle)
      }
    }

    // Smooth parallax with requestAnimationFrame for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const shapes = document.querySelectorAll('.geometric-shape')
          
          shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.15 // Increased speed
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`
          })
          
          ticking = false
        })
        ticking = true
      }
    }

    // Throttled mouse movement for smoother performance
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    // Animate decorative circles with mouse position
    const animateCircles = () => {
      const circles = document.querySelectorAll('.deco-circle')
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 30
        circle.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
      })
      requestAnimationFrame(animateCircles)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animateCircles()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="gradient-mesh"></div>
      <div className="particles" id="particles"></div>
      
      <div className="geometric-bg">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>

      <div className="deco-circle deco-circle-1"></div>
      <div className="deco-circle deco-circle-2"></div>
      
      {/* New animated gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </>
  )
}

export default BackgroundEffects