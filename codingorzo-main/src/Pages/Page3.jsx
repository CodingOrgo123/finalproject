import React from 'react'
import Navbarss from '../components/SideNav'

import Dashboards from '../components/Dashboard'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Page3 = () => {
  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
          navigate('/login')
      }
  }, [])
  return (
    <div>
        <Navbar />
        
        <Dashboards />
  
     
      
    </div>
  )
}

export default Page3
