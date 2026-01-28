import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    title: 'Multi-Tenant RBAC SaaS Platform',
    description: 'Enterprise-grade SaaS platform where companies register, add users, assign role-based tool access, track real-time online/offline status, receive OTP authentication, and monitor audit logs for login & tool usage.',
    tags: ['SaaS', 'RBAC', 'Socket.io', 'JWT'],
    github: 'https://github.com/SundriyalAbhi/GTR',
    live: 'https://gtr-delta.vercel.app/',
    categories: ['web', 'saas', 'realtime']
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Full-featured chat application with real-time messaging, JWT authentication, OTP-based recovery, and live UI notifications for enhanced user experience.',
    tags: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/SundriyalAbhi/ChatApp',
    live: 'https://chat-app-rho-gray.vercel.app/',
    categories: ['web', 'realtime']
  },
  {
    title: 'Notes Application',
    description: 'Organize your thoughts with this intuitive notes app featuring CRUD operations and user management.',
    tags: ['MERN', 'MongoDB'],
    github: 'https://github.com/SundriyalAbhi/NotesApp',
    live: 'https://notes-app-frontend-abhisheksundriyalprocoders-projects.vercel.app/',
    categories: ['web']
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with responsive design and smooth animations.',
    tags: ['React', 'Responsive'],
    github: 'https://github.com/SundriyalAbhi/Responsive-web',
    live: 'https://responsive-web-chi-lake.vercel.app/',
    categories: ['web']
  },
  {
    title: 'Expense Tracker',
    description: 'Track your finances with visual data representation and smart analytics.',
    tags: ['React', 'Charts'],
    github: 'https://github.com/SundriyalAbhi/Expence-Tracker',
    live: 'https://expence-tracker-zeta.vercel.app/',
    categories: ['web']
  }
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'all' || project.categories.includes(activeFilter)
  )

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Production-ready applications showcasing full-stack capabilities
          </p>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'saas' ? 'active' : ''}`}
            onClick={() => setActiveFilter('saas')}
          >
            SaaS
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'realtime' ? 'active' : ''}`}
            onClick={() => setActiveFilter('realtime')}
          >
            Real-Time
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" fill="url(#grad1)"/>
                    <circle cx="50" cy="35" r="15" fill="white" opacity="0.2"/>
                    <rect x="30" y="55" width="40" height="4" rx="2" fill="white" opacity="0.3"/>
                    <rect x="25" y="65" width="50" height="4" rx="2" fill="white" opacity="0.2"/>
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#E07A5F', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#D4633F', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View Code">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                      Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-project btn-primary">
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-project btn-secondary">
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects