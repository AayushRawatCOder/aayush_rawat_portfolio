import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">Full Stack Developer</div>
          <h1>Aayush Rawat</h1>
          <p className="hero-subtitle">MERN | Next.js | React | SDE-1</p>
          <p className="hero-description">
            Building scalable web and mobile applications with hands-on experience in RBAC-based SaaS platforms, 
            real-time systems, and production-ready solutions. Proven ability to optimize performance and 
            deliver enterprise-grade software.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span>📞</span>
              <a href="tel:+919818374271">+91 98183 74271</a>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <a href="mailto:aayushrawatrawat98@gmail.com">aayushrawatrawat98@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Delhi, India</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="https://aayush-portfolio-chi.vercel.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Live Portfolio
            </a>
            <a href="https://github.com/aayushrawat" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
