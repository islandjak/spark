import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Navigation/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
