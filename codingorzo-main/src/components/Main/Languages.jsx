import React from 'react'
import '../../styles/Languages.css'
const Servicedata=[{

    title:'C',
    description:'codingorzo is designed to improve and enhence the programming skills of the student from beginner level to expertise level'
},
{
    title:'CPP',
    description:' Codingorzo provide multiple languages like c,cpp python and java.you can practice coding problems here'
},
{
    
    title:'Java',
    description:'Programming is all about thinking creatively to make the thinking reality and codingorzo will help the student in same'
},
{
    
    title:'Python',
    description:'Programming is all about thinking creatively to make the thinking reality and codingorzo will help the student in same'
},
]
const Languages = () => {
  return (
    <div>
      <section className="services">
        <div className="container">
            <div className="service-title">
                <h6 className='subtitle'>Languages</h6>
                <h2>You can learn multiple programming language on</h2>
                <h2 className='highlight'>Codingorzo</h2>


            </div>
            <div className="service-item_wrapper">
                {
                    Servicedata.map((item,index)=>(
                        <div className="service-item" key={index}>
                    
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

export default Languages
