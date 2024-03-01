import React from 'react'
import '../styles/Aboutus3.css'
import back from'../../src/images/aboutus-3.png'
import { useNavigate } from 'react-router-dom'

const About3 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="about">
            <div className="container">
                <div className="about-wrapper">
                <div className="about-content">
                        <h6 className='subtitle'>We Provide you a</h6>
                        <h2>Best place to learn ,practice and test</h2>
                        <h2 className='highlight'>Code</h2>
                        <p className="description about-content-desc">
                            Codingorzo contains the challenges divided into 3 sectios:beginner,intermediate and expert level that will help the students to improve their performance step by step .it also provide the challenges in the form of the real world problem to build the analytical thinking amongs the students
                        </p>
                        <div className="main-btns">
                    <button className="primary-btn" onClick={() => navigate('/studentdashboard')}>Get Started Now</button>
                
                </div>
                       
                    </div>
                   

                <div className="about3img">
                    <img src={back} />
                   </div>
                                   </div>
            </div>
        </section>
    </div>
  )
}

export default About3
