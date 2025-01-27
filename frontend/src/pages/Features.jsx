import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="features-hero-content">
          <h1>Features</h1>
          <p>
            Discover all the powerful features that make Spark the best no-code platform for
            creating modern websites.
          </p>
        </div>
      </section>

      <section className="features-grid-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Visual Editor</h3>
            <p>Drag-and-drop interface for intuitive website building. No coding required.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Your website looks perfect on every device, automatically.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance for the best user experience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Built-in Security</h3>
            <p>Enterprise-grade security to protect your website and users.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>SEO Optimization</h3>
            <p>Built-in tools to help your website rank better in search results.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3>Regular Updates</h3>
            <p>Constant improvements and new features added regularly.</p>
          </div>
        </div>
      </section>

      <section className="features-comparison">
        <h2>Why Choose Spark?</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>Traditional Website Building</h4>
            <ul>
              <li>❌ Requires coding knowledge</li>
              <li>❌ Time-consuming development</li>
              <li>❌ Expensive maintenance</li>
              <li>❌ Complex hosting setup</li>
            </ul>
          </div>
          <div className="comparison-item highlighted">
            <h4>Building with Spark</h4>
            <ul>
              <li>✅ No coding required</li>
              <li>✅ Build in minutes, not months</li>
              <li>✅ All-inclusive pricing</li>
              <li>✅ Automatic hosting & updates</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features-cta">
        <h2>Ready to Start Building?</h2>
        <p>Join thousands of creators who are already building the future with Spark.</p>
        <div className="cta-buttons">
          <Link to="/register" className="button-primary">
            Start Building Free
          </Link>
          <Link to="/pricing" className="button-secondary">
            View Pricing
          </Link>
        </div>
      </section>

      <div className="features-container">
        {/* Your features content */}
      </div>
    </div>
  );
};

export default Features; 