import React, { useEffect } from 'react';
import "../styles/Login.css"
import img from "../images/registers.png"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {

  const navigate = useNavigate()
  const [value, setValue] = useState({
    email: "",
    password: "",

  });


  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const login = async (e) => {
    e.preventDefault();
    const { email, password } = value;
    if (email && password) {
      const reigter = await axios.post("http://localhost:5000/login", value);
      console.log(reigter.data);
      alert(reigter.data.message)
      setValue({

        email: "",
        password: "",

      });
      if (reigter.data.code === 400) {
        localStorage.setItem('token', 'head')
        localStorage.setItem('setisloggedin', 'true')
        localStorage.setItem('username', reigter.data.username)
        navigate('/studentdashboard')
      }else if(reigter.data.code === 408){
        localStorage.setItem('token', 'admin')
        localStorage.setItem('setisloggedin', 'true')
        localStorage.setItem('isadmin', 'true')
        navigate('/admindashboard')
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

      <div className="form-contss">

        <h2 id="signup">Sign in</h2>
        <form className='formsss'>

          <input type="email" autoComplete='off' name="email" value={value.email} onChange={handleChange} className='field' placeholder='email' />
          <input type="password" id="fielddd" autoComplete='off' name="password" value={value.password} onChange={handleChange} className='field' placeholder='Password' />

          <button onClick={login}>Sign in</button>
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
          <p>New to Codingorzo</p>
          <a href="/signup">Sign up</a>
        </form>
      </div >

    </div >
  );
}

export default Login;
