import React from 'react';
import "../styles/Register.css"
import img from "../images/registers.png"
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Register = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        

    });
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = value;
       
            if (name && email && password && (password == cpassword)) {
                const reigter = await axios.post("http://localhost:5000/register", value);
                console.log(reigter.data);
                alert(reigter.data.message)
                setValue({
                    name: "",
                    email: "",
                    password: "",
                    cpassword: "",
                });
                if (reigter.data.code === 201) {
                    navigate('/login')
                }
            }
            else {
                alert("Please provide the information properly")
            }
        
       

    };
    return (
        <div className="registration-cont">
            <div className="image-cont">
                <h1 id="welcome">Welcome to Codingorzo</h1>
                <p>We are glad to know that you choose us to enhance your programming skills</p>
                <img src={img} alt="Registration Image" />
                <a href="/">Go Back to Homepage</a>
            </div>
            <div className="form-cont">

                <h2 id="signup">Sign up</h2>
               
                <form className='formsss'>
                    <input type="text" autoComplete='off' name="name" value={value.name} onChange={handleChange} className='field' placeholder='Name' />

                    <input type="text" autoComplete='off' name="email" value={value.email} onChange={handleChange} className='field' placeholder='Email' />
                    <input type="password" autoComplete='off' name="password" value={value.password} onChange={handleChange} className='field' id="fielddd" placeholder='Password' />

                    <input type="password" autoComplete='off' name="cpassword" value={value.cpassword} onChange={handleChange} className='field' id="fielddd" placeholder='Confirm-Password' />
                   
                    <button onClick={handleSubmit}>Register</button>
                    <br></br>
                    <br></br>
                    <p>or</p>
                    <div className="social-icons">

                        <a href="#">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-google-fill"></i>
                        </a>

                    </div>
                    <br></br>
                    <p>Already a registered user</p>
                    <a href="/login">Login</a>
                </form>
            </div >
        </div >
    );
}


export default Register;
