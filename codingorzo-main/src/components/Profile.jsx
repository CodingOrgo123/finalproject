
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import"../styles/Profile.css"

const Profile = () => {



  return (
    <div>
      
      
        <div className='profile'>
            <div className="username">
            <p>Username : <span>{localStorage.getItem('username')}</span></p>
            </div>
          <div className="role">
          <p>Role : Student</p>
          </div>
          <div className="problem-solved">
          <p>Problem Sloved:</p>
          </div>
          <div className="rank">
          <p>Rank:</p>
          </div>
         
          
        </div>
    
    </div>
  );
};

export default Profile;
