import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../store/slices/authSlice';
import '../styles/Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(formData)).unwrap();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to create account');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-left">
          <div className="auth-header">
            <div className="logo-container">
              <img src="/spark.png" alt="Spark" className="auth-logo" />
              <h1>Join Spark</h1>
            </div>
            <p>Create beautiful websites without writing code</p>
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" className="auth-button primary">
              Create Account
            </button>
            <div className="auth-divider">
              <span>or continue with</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-button">
                <img src="/google.svg" alt="" className="social-icon" />
                Google
              </button>
              <button type="button" className="social-button">
                <img src="/github.svg" alt="" className="social-icon" />
                GitHub
              </button>
            </div>
          </form>
          <p className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Log in
            </Link>
          </p>
        </div>
        <div className="auth-right">
          <div className="preview-container">
            <div className="preview-content">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="preview-body">
                <div className="preview-sidebar">
                  <div className="preview-nav">
                    <div className="preview-nav-item active"></div>
                    <div className="preview-nav-item"></div>
                    <div className="preview-nav-item"></div>
                  </div>
                </div>
                <div className="preview-main">
                  <div className="preview-text">
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                  <div className="preview-blocks">
                    <div className="preview-block"></div>
                    <div className="preview-block"></div>
                    <div className="preview-block short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
