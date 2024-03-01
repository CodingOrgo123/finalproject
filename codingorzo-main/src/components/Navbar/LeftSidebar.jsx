// components/LeftSidebar.js
import React from 'react';
import './LeftSidebar.css'; // Import the LeftSidebar CSS file

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <h3>Welcome to Coding Orzo</h3>
      <ul className="sidebar-options">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#contest">Contest</a>
        </li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
};

export default LeftSidebar;
