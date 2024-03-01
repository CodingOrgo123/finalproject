import React,{useRef,useEffect} from 'react'
import '../styles/SideNav.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import  logo from '../images/nav-logo.png'
const Navbarss = () => {
    const[fix,setFix]=useState(false)
    const menuRef=useRef(null);
    const togglemenu=()=>menuRef.current.classList.toggle('menu_active');
   
  return (
    <div>
        <header className="header">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
<img src={logo} />
                    </div>
                    <div className="nav-items" ref={menuRef} onClick={togglemenu}>
                        <ul className="menu">
                          <li className="menu_link"><Link to="/">Home</Link></li>
                          <li className="menu_link"><Link to="/problems">Student Dashboard</Link></li>
                          <li className="menu_link"><Link to="/contest">Contest</Link></li>
                          <li className="menu_link"><Link to="/aboutus">About us</Link></li>
                          <li className="menu_link"><Link to="/contactus">Contact us</Link></li>  
                     </ul>
                    </div>
                    
                    <div className="main-btnsss">
                    <button className="primary-btn">Logout</button>
                    
                </div>
                    <span className="mobile_menu" onClick={togglemenu}><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </header>
      
    </div>
  )
}

export default Navbarss
