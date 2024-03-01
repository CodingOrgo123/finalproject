import React,{useRef,useEffect} from 'react'
import './Navbar.css'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import  logo from '../../images/nav-logo.png'
const Navbar = ({theme,toggleTheme}) => {
    const navigate =useNavigate()
    const isLoggedIn=localStorage.getItem('setisloggedin')
    const[fix,setFix]=useState(false)
    const menuRef=useRef(null);
    const togglemenu=()=>menuRef.current.classList.toggle('menu_active');
    const auth=localStorage.getItem('Token')
    const handleSignOut = () => {
        localStorage.clear('token');
        localStorage.setItem('setisloggedin','false')
        
        navigate('/');
      };
      const isadmin=localStorage.getItem('isadmin')
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
                          {isadmin ? (
          <>
           
           <li className='menu_link'><Link to="/admindashboard">Admindashboard</Link></li>
          </>
        ) : (
            <li className='menu_link'><Link to="/studentdashboard">Studentdashboard</Link></li>
          
        )}
                          <li className="menu_link"><Link to="/contest">Contest</Link></li>
                          <li className="menu_link"><Link to="/contactus">Contact us</Link></li>
                          {isLoggedIn ? (
          <>
            <button
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}
                > LOGOUT </button>
            
          </>
        ) : (
            <li className='menu_link'><Link to="/signup">Signup</Link></li>
          
        )}  
           
                     </ul>
                    </div>
                    <div className="light_mode">
                        <span onClick={toggleTheme}>
                            {
                                theme==='light-theme'?<span><i class="ri-moon-fill"></i>Dark</span>:<span>  <i class="ri-sun-line"></i>Light</span>
                            }
                           </span>
                    </div>
                    <span className="mobile_menu" onClick={togglemenu}><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </header>
      
    </div>
  )
}

export default Navbar
