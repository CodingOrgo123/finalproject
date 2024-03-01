// components/LeftSidebar.js
import React from 'react';
import logo from '../images/nav-logo1.png'
import { useState, useEffect } from 'react';
import '../styles/Feedback.css'

import '../styles/Leftbar.css' // Import the LeftSidebar CSS fileimport LeftSidebar from './Navbar/LeftSidebar';
import { useNavigate, useNavigation } from 'react-router-dom';


const Feedback = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/data');
          const result = await response.json();
  
          if (response.ok) {
            setData(result);
          } else {
            console.error('Error fetching contact forms:', result.message);
          }
        } catch (error) {
          console.error('Error fetching contact forms:', error);
        }
      };
  
      fetchData();
    }, []); // Run the effect once on component mount
  

    return (
        <div className="outer-shell">
            <div className="left-sidebar">
                <img src={logo} />
                <h3>Welcome to Codingorzo</h3>
                <br>
                </br>
                <br />
                <ul className="sidebar-options">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/contest">Contest</a>
                    </li>
                    <li>
                        <a href="/setting">Settings</a>
                    </li>

                </ul>
            </div>
            <div className="right">
                <h1 id="mss">User Record</h1>


                <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/admindashboard')} id="feedbackgoback">Go Back</button >
            </div>
            </div>

            );

};

export default Feedback;
