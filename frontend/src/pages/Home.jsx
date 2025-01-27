import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Home = () => {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Beautiful
            <br />
            Websites <span className="highlight">Without Code</span>
          </h1>
          <p className="hero-text">
            Create stunning, responsive websites in minutes with our intuitive no-code platform.
            Perfect for businesses, portfolios, and personal projects.
          </p>
          <div className="hero-buttons">
            <Link to="/signup">Get Started Free</Link>
            <Link to="/features">See Features</Link>
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
                <div className="preview-body">
                  <div className="preview-main">
                    <div className="preview-chat">
                      <div className="preview-header">
                        <img src="/spark.png" alt="Spark" className="preview-logo" />
                        <span className="preview-title">Spark</span>
                      </div>
                      <div className="preview-message">
                        <h3>Hi, what would you like to build today? ✨</h3>
                      </div>
                      <div className="preview-input">
                        <input type="text" placeholder="Type your idea here..." />
                        <Link to="/register" className="preview-send">
                          →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Spark</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Build and launch your website in minutes, not days. Our intuitive interface makes web
              development a breeze.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>
              Choose from hundreds of professionally designed templates and customize them to match
              your brand.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>
              Your website will look perfect on any device - desktop, tablet, or mobile. No extra
              work required.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join thousands of creators who are building the future of the web with Spark.</p>
          <Link to="/signup" className="button-primary">
            Start Building Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
