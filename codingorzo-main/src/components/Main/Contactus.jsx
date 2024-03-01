import React, { useState } from 'react';
import '../../styles/Contactus.css'
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name&&email&&message) {
      const reigter = await axios.post("http://localhost:5000/feedback", formData);
      
      console.log(reigter.data);
      alert(reigter.data.message)
      
      setFormData({
        name: "",
        email: "",
        message: "",

      });

    }
    else {
      alert("Please provide the information properly")
    }

  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name" className='label'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='label'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className='label'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div className="contact-options">
        <p id="via" className='label'>Contact us via:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
