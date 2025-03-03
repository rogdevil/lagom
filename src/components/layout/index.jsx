import './index.css';
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navbar';

const Layout = () => {
  return (
    <div className="wrapper" id="app-wrapper">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
