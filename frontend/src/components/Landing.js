import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Beautiful Websites
            <br />
            <span className="highlight">Without Code</span>
          </h1>
          <p className="hero-text">
            Create stunning, responsive websites in minutes with our intuitive no-code platform.
            Perfect for businesses, portfolios, and personal projects, with absolutely zero experience.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="button-primary">
              Get Started Free
            </Link>
            <Link to="/features" className="button-secondary">
              See Features
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Websites Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="browser-content">
              <div className="editor-preview">
                <div className="preview-block"></div>
                <div className="preview-block"></div>
                <div className="preview-block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Spark?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡️</div>
            <h3>Lightning Fast</h3>
            <p>Build and deploy websites in minutes, not hours or days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Designs</h3>
            <p>Choose from hundreds of professionally designed templates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Your site looks great on any device, automatically.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security and 99.9% uptime guaranteed.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join thousands of creators and businesses building with Spark.</p>
          <Link to="/register" className="button-primary">
            Start Building Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
