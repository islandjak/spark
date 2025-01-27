import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/spark.png" alt="Spark" className="h-8 w-8" />
              <span className="text-[28px] font-bold">
                <span className="text-gray-900">Spark</span>
                <span className="text-[#2563eb]">AI</span>
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-8">
            <Link to="/features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Pricing
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-[#0E1525] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
