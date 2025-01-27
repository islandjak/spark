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
    <div>
      <div className="mb-8">
        <h1 className="heading-1 mb-2">Create a New Project</h1>
        <p className="body-large text-secondary">
          Describe your project in natural language, and I'll help you build it.
        </p>
      </div>

      <div className="glass-card p-8">
        {/* Chat Interface */}
        <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              ✨
            </div>
            <div>
              <p className="heading-3 mb-2">Hi! I'm your AI web developer.</p>
              <p className="body-large text-secondary">
                Tell me about the website you want to build. For example:
              </p>
              <div className="mt-4 space-y-3">
                <div className="glass-card p-3 hover:shadow-glass-sm transition-shadow cursor-pointer">
                  <p className="body-small text-secondary">"Create a modern portfolio website with a dark theme"</p>
                </div>
                <div className="glass-card p-3 hover:shadow-glass-sm transition-shadow cursor-pointer">
                  <p className="body-small text-secondary">"Build an e-commerce site for selling handmade jewelry"</p>
                </div>
                <div className="glass-card p-3 hover:shadow-glass-sm transition-shadow cursor-pointer">
                  <p className="body-small text-secondary">"Make a landing page for my mobile app"</p>
                </div>
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
                className="input-field resize-none"
                placeholder="Describe your project..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="glass-button-dark"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New; 