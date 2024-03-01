import React from 'react'
import '../../styles/About.css'
import back from '../../images/back4.png'
const Choosedata=[{
    icon:'ri-user-voice-line',
    title:'User-friendly interface',
    description:'Codingorzo is designed from the students perspective and that is the reason that this platform provide user-friendly interface'
},
{
    icon:'ri-mac-line',
    title:'Learn and Practice',
    description:' Codingorzo provide multiple languages like c,cpp python and java.you can practice and learn various programming languages on this platform and that is too in easy way'
},
]

const About = () => {
  return (
    <div>
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-content">
                        <h6 className='subtitle'>Why Choose us</h6>
                        <h2>Beginner to expert level challenges at</h2>
                        <h2 className='highlight'>Codingorzo</h2>
                        <p className="description about-content-desc">
                            Codingorzo contains the challenges divided into 3 sectios:beginner,intermediate and expert level that will help the students to improve their performance step by step .it also provide the challenges in the form of the real world problem to build the analytical thinking amongs the students
                        </p>
                        <div>
                            {
                                Choosedata.map((item,index)=>(
                                    <div className="choose-us-item">
                            <span className="choose-us-icon">
                            <i class={item.icon} height="600"></i>
                            </span>
                            <div>
                                <h4 className="choose-us-title">{item.title}</h4>
                                <p className=" description choose-us-description">{item.description}</p>
                            </div>
                            
                        </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="about-img">
                    <img id="aboutimg" src={back}/>    
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default About
