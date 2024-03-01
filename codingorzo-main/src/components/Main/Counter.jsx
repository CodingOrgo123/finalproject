import React from 'react'
import '../../styles/Counter.css'
const counter_data=[
    {
    number:5000,
    text:'Students'
},
{
    number:500,
    text:'Challenges'
},
{
    number:20,
    text:'Contests'
},
{
    number:300,
    text:'Coding Problems'
},
]
 const  Counter = () => {
  return (
    <div>
        <section className="counter">
            <div className="container">
                <div className="counter-wrapper">
                    {
 counter_data.map((item,index)=>(
    <div className="counter-item" key={index}>
        <h4 className="counter-number">{item.number}+</h4>
        <h4 className="counter-title">{item.text}</h4>
    </div>
   ))
                    }
                  
                </div>
            </div>
        </section>
      
    </div>
  )
}
export default Counter;


