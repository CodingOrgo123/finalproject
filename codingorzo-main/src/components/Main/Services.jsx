import React from 'react'
import '../../styles/Services.css'
const Servicedata=[{
    icon:'ri-lightbulb-flash-fill',
    title:'Sharpen your coding skills',
    description:'codingorzo is designed to improve and enhence the programming skills of the student from beginner level to expertise level'
},
{
    icon:'ri-mac-line',
    title:'Learn new Languages',
    description:' Codingorzo provide multiple languages like c,cpp python and java.you can practice and learn various programming languages on this platform and that is too in easy way'
},
{
    icon:'ri-flag-fill',
    title:'Explore the world of programming',
    description:'Programming is all about thinking creatively to make the thinking reality and codingorzo will help the student in same'
},
]
const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="container">
            <div className="service-title">
                <h6 className='subtitle'>How Codingorzo will help students</h6>
                <h2>Enhence your coding skills with</h2>
                <h2 className='highlight'>Codingorzo</h2>


            </div>
            <div className="service-item_wrapper">
                {
                    Servicedata.map((item,index)=>(
                        <div className="service-item" key={index}>
                    <span className="service-icon"><i class={item.icon}></i></span>
                    <h3 className="service-titles">{item.title}</h3>
                    <p className="description">
                        {item.description}
                    </p>
                </div>
                    ))
                }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services
