import './Experience.css'

const experienceData = [
  {
    date: 'May 2025 – Present',
    company: 'CyberFort Tech',
    title: 'Full Stack Developer (SDE-1)',
    achievements: [
      {
        title: 'Client-Facing Platform Development',
        description: 'Developed and launched 2 production websites using React & Next.js',
        impact: '✓ Improved user engagement and brand visibility'
      },
      {
        title: 'Mobile App Development',
        description: 'Built a React Native mobile application to automate internal workflows',
        impact: '✓ Reduced manual workflows by 30%'
      },
      {
        title: 'Backend API Engineering',
        description: 'Engineered scalable REST APIs using Node.js & Express',
        impact: '✓ Improved backend response time by 25%'
      },
      {
        title: 'Frontend Performance Optimization',
        description: 'Built optimized, reusable UI components in React & Next.js',
        impact: '✓ Improved page load speed by ~40%'
      },
      {
        title: 'Agile Development',
        description: 'Collaborated across 10+ agile sprints',
        impact: '✓ Consistent on-time delivery of features'
      }
    ]
  },
  {
    date: 'Apr 2024 – Present',
    company: 'AnAcad',
    title: 'Freelance Full Stack Developer',
    achievements: [
      {
        title: 'Learning Management System (LMS)',
        description: 'Designed and developed an LMS with role-based access control',
        impact: '✓ Enabled structured content delivery and scalable growth'
      },
      {
        title: 'Service Platform (Pexy)',
        description: 'Built backend APIs and frontend modules for a new client service platform',
        impact: '✓ Delivered production-ready service platform'
      },
      {
        title: 'Multi-Client Delivery',
        description: 'Delivered end-to-end freelance full stack solutions for multiple clients',
        impact: '✓ Successful delivery of multiple client projects'
      }
    ]
  },
  {
    date: 'Oct 2024 – Apr 2025',
    company: 'Orangus Pvt. Ltd.',
    title: 'Full Stack Developer Intern',
    achievements: [
      {
        title: 'UI/UX Bug Fixes',
        description: 'Fixed 20+ UI/UX bugs and assisted in testing',
        impact: '✓ Reduced client-reported issues and improved stability'
      },
      {
        title: 'Component Architecture',
        description: 'Implemented component-based architecture',
        impact: '✓ Reduced duplicate code by ~35%'
      }
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Professional Journey</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            Building production-grade applications and delivering measurable impact
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((job, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{job.date}</span>
                <h3>{job.company}</h3>
                <h4>{job.title}</h4>
                
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="achievement">
                    <strong>{achievement.title}</strong>
                    <p>{achievement.description}</p>
                    <p className="impact">{achievement.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience