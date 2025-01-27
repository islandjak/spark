import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/authSlice';

const PortalLayout = () => {
  const location = useLocation();
  const user = useSelector(selectUser);

  const navigation = [
    { name: 'Projects', href: '/portal/projects', icon: '📂' },
    { name: 'New Project', href: '/portal/new', icon: '✨' },
    { name: 'Settings', href: '/portal/settings', icon: '⚙️' },
    { name: 'Billing', href: '/portal/billing', icon: '💳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
            <img src="/spark.png" alt="Spark" className="h-8 w-8" />
            <span className="text-xl font-bold">
              <span className="text-gray-900">Spark</span>
              <span className="text-[#2563eb]">AI</span>
            </span>
          </div>

          {/* User info */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                {user?.firstName?.[0]?.toUpperCase() || 'U'}
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className="text-sm text-gray-500">{user?.email}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="py-8 px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout; 