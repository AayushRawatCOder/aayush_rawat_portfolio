import { useEffect } from 'react'
import './GitHubContributions.css'

const GitHubContributions = () => {
  useEffect(() => {
    // Generate contribution graph
    const graph = document.getElementById('contributionGraph')
    if (!graph) return

    const weeks = 52
    const daysPerWeek = 7
    const colors = ['#FFF8F0', '#FFD4C4', '#F7B29F', '#E07A5F', '#D4633F']
    
    // Clear existing cells
    graph.innerHTML = ''
    
    // Generate cells (52 weeks × 7 days)
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < daysPerWeek; day++) {
        const cell = document.createElement('div')
        cell.className = 'contribution-cell'
        
        // Random contribution level (0-4)
        const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0
        cell.style.background = colors[level]
        
        // Add animation delay based on position
        cell.style.animationDelay = `${(week * daysPerWeek + day) * 0.005}s`
        
        // Tooltip on hover
        const contributions = level === 0 ? 'No' : level * Math.floor(Math.random() * 5 + 1)
        cell.title = `${contributions} contributions`
        
        graph.appendChild(cell)
      }
    }
  }, [])

  return (
    <section id="github-contributions">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Open Source</div>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-description">
            Consistent contributions and continuous learning
          </p>
        </div>

        <div className="github-stats">
          <div className="github-card">
            <div className="github-icon">📊</div>
            <h3>200+</h3>
            <p>Commits This Year</p>
          </div>
          <div className="github-card">
            <div className="github-icon">🚀</div>
            <h3>15+</h3>
            <p>Projects</p>
          </div>
          <div className="github-card">
            <div className="github-icon">⭐</div>
            <h3>50+</h3>
            <p>Stars Earned</p>
          </div>
          <div className="github-card">
            <div className="github-icon">🔥</div>
            <h3>Active</h3>
            <p>Daily Contributions</p>
          </div>
        </div>

        <div className="contribution-graph">
          <div className="graph-header">
            <h4>Contribution Activity</h4>
            <div className="graph-legend">
              <span>Less</span>
              <div className="legend-colors">
                <div className="legend-box level-0"></div>
                <div className="legend-box level-1"></div>
                <div className="legend-box level-2"></div>
                <div className="legend-box level-3"></div>
                <div className="legend-box level-4"></div>
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-grid" id="contributionGraph"></div>
          </div>
        </div>

        <div className="github-cta">
          <a href="https://github.com/AayushRawatCOder" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View GitHub Profile
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ marginLeft: '8px' }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubContributions