import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../store/slices/authSlice';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const stats = [
    {
      name: 'Total Websites',
      value: '3',
      icon: '🌐',
    },
    {
      name: 'Active Visitors',
      value: '127',
      icon: '👥',
    },
    {
      name: 'Uptime',
      value: '99.9%',
      icon: '⚡',
    },
    {
      name: 'Storage Used',
      value: '45%',
      icon: '💾',
    },
  ];

  const recentWebsites = [
    {
      name: 'Portfolio Site',
      status: 'Live',
      visitors: '45',
      lastEdited: '2h ago',
    },
    {
      name: 'Blog',
      status: 'Draft',
      visitors: '0',
      lastEdited: '1d ago',
    },
    {
      name: 'Store',
      status: 'In Progress',
      visitors: '12',
      lastEdited: '3h ago',
    },
  ];

  const activities = [
    {
      type: 'edit',
      site: 'Portfolio Site',
      time: '2 hours ago',
      description: 'Updated hero section',
    },
    {
      type: 'deploy',
      site: 'Store',
      time: '3 hours ago',
      description: 'Deployed new version',
    },
    {
      type: 'create',
      site: 'Blog',
      time: '1 day ago',
      description: 'Created new website',
    },
  ];

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome back, {user?.firstName || 'User'}! 👋</h1>
          <p className="last-login">Last login: {new Date(user?.lastLogin).toLocaleDateString()}</p>
        </div>
        <Link
          to="/new"
          className="bg-[#0E1525] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
        >
          + New Project
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.name} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Recent Websites */}
        <div className="dashboard-card websites-card">
          <div className="card-header">
            <h2>Recent Websites</h2>
            <Link to="/websites" className="view-all">
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View All
              </button>
            </Link>
          </div>
          <div className="websites-list">
            {recentWebsites.map((site) => (
              <div key={site.name} className="website-item">
                <div className="website-info">
                  <h3>{site.name}</h3>
                  <span className={`status status-${site.status.toLowerCase()}`}>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {site.status}
                    </span>
                  </span>
                </div>
                <div className="website-stats">
                  <span>{site.visitors} visitors</span>
                  <span>•</span>
                  <span>Edited {site.lastEdited}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'edit' && '✏️'}
                  {activity.type === 'deploy' && '🚀'}
                  {activity.type === 'create' && '✨'}
                </div>
                <div className="activity-content">
                  <h4>{activity.site}</h4>
                  <p>{activity.description}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
