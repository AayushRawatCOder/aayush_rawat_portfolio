import './Certifications.css'

const certificationsData = [
  {
    title: 'Full Stack Web Development',
    organization: 'TechStack Academy (ISO 9001:2008 Certified | Startup India – MSME)',
    details: 'Duration: Sep 2023 – Sep 2024',
    badge: 'Grade: A+'
  },
  {
    title: 'Software Engineering',
    organization: 'New York Jobs CEO Council',
    details: '',
    badge: ''
  },
  {
    title: 'Developer & Technology Job Simulation',
    organization: 'Accenture',
    details: '',
    badge: ''
  },
  {
    title: 'Software Engineering',
    organization: 'Hewlett Packard Enterprise',
    details: '',
    badge: ''
  },
  {
    title: 'Software Engineering Program',
    organization: 'Skyscanner',
    details: '',
    badge: ''
  }
]

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">
            Professional training and industry-recognized credentials
          </p>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4>{cert.title}</h4>
              <p>{cert.organization}</p>
              {cert.details && <p>{cert.details}</p>}
              {cert.badge && <span className="cert-badge">{cert.badge}</span>}
            </div>
          ))}
        </div>

        <div className="education-section">
          <div className="section-header">
            <div className="section-tag">Academic Background</div>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="education-card">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="university">Indira Gandhi National Open University (IGNOU)</p>
            <p className="graduation">Expected Graduation: 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications