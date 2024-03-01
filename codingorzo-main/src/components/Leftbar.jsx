// components/LeftSidebar.js
import React from 'react';
import logo from '../images/nav-logo1.png'
import { useState, useEffect } from 'react';

import '../styles/Leftbar.css' // Import the LeftSidebar CSS fileimport LeftSidebar from './Navbar/LeftSidebar';
import { useNavigate } from 'react-router-dom';
import ChartComponent from './Graph';

const LeftSidebar = () => {
    const [data, setData] = useState([]);
    const [maildata, setMailData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [showTabless, setShowTabless] = useState(false);
    const navigate=useNavigate("");

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/data');
            const result = await response.json();

            if (response.ok) {
                setData(result);
                setShowTable(true);
            } else {
                console.error('Error fetching data:', result.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Fetch the user count from the backend when the component mounts
        fetchUserCount();
    }, []);
    const fetchUserCount = async () => {
        try {
            const response = await fetch('http://localhost:5000/count');
            const data = await response.json();

            if (response.ok) {
                setUserCount(data.count);
            } else {
                console.error('Error fetching user count:', data.message);
            }
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };

    const [challengeCount, setChallengeCount] = useState(0);

    useEffect(() => {
        // Fetch the user count from the backend when the component mounts
        fetchChallengeCount();
    }, []);

    const fetchChallengeCount = async () => {
        try {
            const response = await fetch('http://localhost:5000/challengecount');
            const data = await response.json();

            if (response.ok) {
                setChallengeCount(data.count);
            } else {
                console.error('Error fetching user count:', data.message);
            }
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };
    const [mailCount, setMailCount] = useState(0);

    useEffect(() => {
        // Fetch the user count from the backend when the component mounts
        fetchMailCount();
    }, []);

    const fetchMailCount = async () => {
        try {
            const response = await fetch('http://localhost:5000/mailcount');
            const data = await response.json();

            if (response.ok) {
                setMailCount(data.count);
            } else {
                console.error('Error fetching user count:', data.message);
            }
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };
    const fetchMailData = async () => {
        try {
            const response = await fetch('http://localhost:5000/maildata');
            const result = await response.json();

            if (response.ok) {
                setMailData(result);
                setShowTabless(true);
            } else {
                console.error('Error fetching data:', result.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <><div className="outer-shell">
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
                <h1 id="mss">Admin Dashboard</h1>
                <div className="divss">
                    <div className="div1">
                        <h1 id="msss">User Record</h1>
                        <p>{userCount} user</p>
                        <br />

                        <button onClick={() => navigate('/userdata')}>More info</button>
                        
                    </div>
                    <div className="div2">
                        <h1 id="msss">Challenges</h1>
                        <p>{challengeCount} challenges</p>
                        <br />

                        <button onClick={() => navigate('/challenges')}>More info</button>
                    </div>
                    <div className="div3">
                        <h1 id="msss">Feedback</h1>
                        <p>{mailCount} mails</p>
                        <br />
                       <button onClick={() => navigate('/feedback')}>More info</button >
                    </div>
                    <div className="div4">
                        <h1 id="msss">Analytics</h1>
                        <p>{userCount} user</p>
                        <br />

                        <button onClick={fetchData}>More info</button>
                    </div>
                </div>
                <ChartComponent />
            </div>
        </div>
            <div className="bottom-shell">


            </div></>

    );

};

export default LeftSidebar;
