import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that's right for you and start building your website today.</p>
        </div>
      </section>

      <section className="pricing-grid-section">
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Free</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="period">/month</span>
              </div>
              <p>Perfect for trying out Spark</p>
            </div>
            <ul className="pricing-features">
              <li>✓ 1 Website</li>
              <li>✓ Basic Templates</li>
              <li>✓ Community Support</li>
              <li>✓ Basic Analytics</li>
              <li>✓ Custom Domain</li>
            </ul>
            <Link to="/register" className="pricing-button">
              Get Started
            </Link>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-card-header">
              <h3>Pro</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <p>For professionals and growing businesses</p>
            </div>
            <ul className="pricing-features">
              <li>✓ 10 Websites</li>
              <li>✓ Premium Templates</li>
              <li>✓ Priority Support</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Custom Domain</li>
              <li>✓ SEO Tools</li>
              <li>✓ E-commerce Features</li>
            </ul>
            <Link to="/register" className="pricing-button featured">
              Get Started
            </Link>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
              <p>For large organizations and teams</p>
            </div>
            <ul className="pricing-features">
              <li>✓ Unlimited Websites</li>
              <li>✓ Custom Templates</li>
              <li>✓ 24/7 Support</li>
              <li>✓ Enterprise Analytics</li>
              <li>✓ Multiple Domains</li>
              <li>✓ Advanced SEO Tools</li>
              <li>✓ Full E-commerce Suite</li>
              <li>✓ Team Collaboration</li>
            </ul>
            <Link to="/register" className="pricing-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I change my plan later?</h4>
            <p>
              Yes, you can change your plan at any time. Changes will be reflected in your next
              billing cycle.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is there a long-term contract?</h4>
            <p>No, all plans are month-to-month and you can cancel at any time.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards and PayPal.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer a money-back guarantee?</h4>
            <p>Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
          </div>
        </div>
      </section>

      <section className="pricing-cta">
        <h2>Ready to Start Building?</h2>
        <p>Join thousands of users who are already creating beautiful websites with Spark.</p>
        <div className="cta-buttons">
          <Link to="/register" className="button-primary">
            Get Started Free
          </Link>
          <Link to="/contact" className="button-secondary">
            Contact Sales
          </Link>
        </div>
      </section>

      <div className="pricing-container">
        {/* Your pricing content */}
      </div>
    </div>
  );
};

export default Pricing; 