import React from 'react';
import Navbar from './Navbar'; 
import { Outlet } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> 
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
}

export default MainLayout;