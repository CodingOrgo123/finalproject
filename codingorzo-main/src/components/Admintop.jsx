// components/TopNavbar.js
import React from 'react';
import '../styles/Admintop.css'
import  logo from '../images/nav-logo.png'

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-section">
      <img src={logo} width="150" height="40" />
        
      </div>
      <div className="right-section">
        {/* Add admin name or user information here */}
        <span>You are logged in as admin</span>
      </div>
    </div>
  );
};

export default TopNavbar;
