import { useState, useEffect } from 'react'
import './Skills.css'

const skillsData = [
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS']
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
  },
  {
    icon: '🗄️',
    title: 'Database',
    skills: ['MongoDB', 'SQL']
  },
  {
    icon: '⚡',
    title: 'Real-Time',
    skills: ['Socket.io']
  },
  {
    icon: '☁️',
    title: 'Cloud & Tools',
    skills: ['AWS', 'Vercel', 'Git']
  },
  {
    icon: '💻',
    title: 'Languages',
    skills: ['JavaScript', 'Python']
  }
]

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Full-stack capabilities with modern frameworks and cloud technologies
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills