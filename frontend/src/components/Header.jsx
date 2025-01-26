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
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Your App
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
                  Login
                </Link>
                <Link to="/signup" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 