import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Site',
      description: 'A modern portfolio website with dark theme',
      status: 'Live',
      lastEdited: '2h ago',
      visitors: 45,
    },
    {
      id: 2,
      name: 'Blog',
      description: 'Personal blog with markdown support',
      status: 'Draft',
      lastEdited: '1d ago',
      visitors: 0,
    },
    {
      id: 3,
      name: 'Store',
      description: 'E-commerce site for handmade jewelry',
      status: 'In Progress',
      lastEdited: '3h ago',
      visitors: 12,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage and monitor your websites</p>
        </div>
        <Link
          to="/portal/new"
          className="bg-[#0E1525] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
        >
          <span>+ New Project</span>
        </Link>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  project.status === 'Live'
                    ? 'bg-green-100 text-green-800'
                    : project.status === 'Draft'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <span>{project.visitors} visitors</span>
              <span>•</span>
              <span>Edited {project.lastEdited}</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Edit
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Preview
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 