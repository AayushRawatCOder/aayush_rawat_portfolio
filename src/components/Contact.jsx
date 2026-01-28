import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // WEB3FORMS INTEGRATION
      // Get your free access key at: https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // ⚠️ REPLACE THIS
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to_email: 'aayushrawatrawat98@gmail.com'
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus({
          type: 'success',
          message: '✓ Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '✗ Failed to send message. Please email me directly at aayushrawatrawat98@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 7000)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>aayushrawatrawat98@gmail.com</p>
              <a href="mailto:aayushrawatrawat98@gmail.com" className="info-link">Send Email →</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+91 98183 74271</p>
              <a href="tel:+919818374271" className="info-link">Call Now →</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Delhi, India</p>
              <a href="https://www.google.com/maps/place/Delhi" target="_blank" rel="noopener noreferrer" className="info-link">View Map →</a>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
              <a href="https://www.linkedin.com/in/aayush-rawat-703002289/" target="_blank" rel="noopener noreferrer" className="info-link">Visit Profile →</a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              {status.message && (
                <div className={`form-message ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact