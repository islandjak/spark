import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement project creation logic
    console.log('Creating project with prompt:', prompt);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create a New Project</h1>
            <p className="text-gray-600">
              Describe your project in natural language, and I'll help you build it.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                ✨
              </div>
              <div>
                <p className="text-gray-900 font-medium mb-2">Hi! I'm your AI web developer.</p>
                <p className="text-gray-600">
                  Tell me about the website you want to build. For example:
                </p>
                <div className="mt-3 text-sm text-gray-500">
                  <ul className="space-y-2">
                    <li>"Create a modern portfolio website with a dark theme"</li>
                    <li>"Build an e-commerce site for selling handmade jewelry"</li>
                    <li>"Make a landing page for my mobile app"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="sr-only">
                Your project description
              </label>
              <div className="relative">
                <textarea
                  id="prompt"
                  name="prompt"
                  rows={4}
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none"
                  placeholder="Describe your project..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#0E1525] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New; 