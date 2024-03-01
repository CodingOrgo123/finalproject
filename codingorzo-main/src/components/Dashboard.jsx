import React from 'react'
import '../styles/Dashboard.css'
import Profile from './Profile'
const Dashboard=[{
    title:'C',
    icon:'ri-user-fill',
   
    
},
{
    title:'CPP',
    icon:'ri-user-fill',
    
    
},
{
    title:'Java',
    icon:'ri-user-fill',
    
    
},
{
    title:'Python',
    icon:'ri-user-fill',
    
    
},
]



const Dashboards = () => {
  return (
    <div>
      <section className="services">
        <div className="container">

            <h1 id="welcome">Welcome to Codingorgo</h1>
            <Profile />
            
            <div className="service-item_wrappers">
                {
                    Dashboard.map((item,index)=>(
                        <div className="service-item" key={index}>
                            <h3 className="service-titles">{item.title}</h3>
                    <span className="service-icons"><i class={item.icon}></i></span>
                    <div className="levels">
                <div className="level">
                
                   
                            <h5 className='levelss'>Level1</h5>
                            <h5 className='levelss'>Level2</h5>
                            <h5 className='levelss'>Level3</h5>
                   
                    
                   
                
                
            

                </div>
                <div className="status">
               <div className="progress-bar">0%</div>
               <div className="progress-bar">0%</div>
               <div className="progress-bar">0%</div>
                </div>
            </div>

                   
                </div>
                
                    ))
                }
                
            </div>
            
        </div>
      </section>
    </div>
  )
}

export default Dashboards
