// components/LeftSidebar.js
import React from 'react';
import logo from '../images/nav-logo1.png'
import { useState, useEffect } from 'react';
import '../styles/Feedback.css'

import '../styles/Leftbar.css' // Import the LeftSidebar CSS fileimport LeftSidebar from './Navbar/LeftSidebar';
import { useNavigate, useNavigation } from 'react-router-dom';


const Feedback = () => {
    const navigate=useNavigate()
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const response = await fetch('http://localhost:5000/maildata');
          const result = await response.json();
  
          if (response.ok) {
            setContacts(result);
          } else {
            console.error('Error fetching contact forms:', result.message);
          }
        } catch (error) {
          console.error('Error fetching contact forms:', error);
        }
      };
  
      fetchContacts();
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
                <h1 id="mss">Feedback Record</h1>


                <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact._id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
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
