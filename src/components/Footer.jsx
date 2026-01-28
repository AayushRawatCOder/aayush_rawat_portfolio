import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-title">Let's Build Something Amazing</h2>
          <p className="footer-subtitle">Open to opportunities and collaboration</p>
          
          <div className="social-links">
            <a href="https://aayush-portfolio-chi.vercel.app" className="social-link" target="_blank" rel="noopener noreferrer" title="Portfolio">
              🌐
            </a>
            <a href="https://github.com/AayushRawatCOder" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
              💻
            </a>
            <a href="https://www.linkedin.com/in/aayush-rawat-703002289/" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              💼
            </a>
            <a href="mailto:aayushrawatrawat98@gmail.com" className="social-link" title="Email">
              ✉️
            </a>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Aayush Rawat. All rights reserved. | Full Stack Developer | MERN | Next.js | React</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer