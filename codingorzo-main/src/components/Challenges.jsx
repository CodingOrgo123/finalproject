import React, { useState } from 'react';
import '../styles/Challenges.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Challenges = () => {
    const [formData, setFormData] = useState({
        question: "",
        level: "",
        points: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { question, level, points } = formData;
        if (question && level && points) {
            const reigter = await axios.post("http://localhost:5000/challenges", formData);

            console.log(reigter.data);
            alert(reigter.data.message)

            setFormData({
                question: "",
                level: "",
                points: "",

            });

        }
        else {
            alert("Please provide the information properly")
        }

    };
    const navigate = useNavigate()
    const [challenge, setChallenge] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/challengesdata');
                const result = await response.json();

                if (response.ok) {
                    setChallenge(result);
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
        <>
            <div className="contact-us-container">
                <h1>Add Question</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="question" className='label'>Question:</label>
                        <input
                            type="text"
                            id="question"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level" className='label'>Level:</label>
                        <input
                            type="text"
                            id="level"
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="points" className='label'>Points:</label>
                        <input type="text"
                            id="points"
                            name="points"
                            value={formData.points}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit} id="questionsubmit">Submit</button>
                </form>


            </div>
           
            <button onClick={() => navigate('/admindashboard')} id="challengesgoback">Go Back</button >
            
        </>



    );
};

export default Challenges;
