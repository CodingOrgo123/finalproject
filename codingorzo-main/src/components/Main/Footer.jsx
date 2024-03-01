import React from 'react'
import '../../styles/Footer.css'
const quickLinks=[
    {
        path:"#",
        display:"About us"


},
{
    path:"#",
    display:"Problems"
    

},
{
    path:"#",
    display:"Contest"
    

},
{
    path:"#",
    display:"Ranks and Honour"
    

}]
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Codingorzo</h2>
                    <p className="description">Grow with us</p>
                    <p className="small_text description">Codingorzo helps the students to grow and dive deep into the world of programmingso as to think creatively and explore the world of programming by solving various real world problems efficiently</p>

                </div>
                <div className="footer_quick-links">
                    <div className="quick_link-title">Solutions</div>
                    <ul className="quick-links">
                        {
                            quickLinks.map((item,index)=>(
                                <li className="quick-link-item"><a href={item.path} className="quick-link-items">{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
