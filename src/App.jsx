import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GitHubContributions from './components/GitHubContributions'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import ScrollProgress from './components/ScrollProgress'
import './styles/App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <ScrollProgress progress={scrollProgress} />
      <BackgroundEffects />
      
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <GitHubContributions />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
