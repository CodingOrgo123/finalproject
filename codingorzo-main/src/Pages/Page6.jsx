import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginRegister from '../components/Register'
import Register from '../components/Register'
import Login from '../components/Login'



const Page6 = () => {
    const [theme,setTheme]=useState('')
    const toggleTheme = ()=>{
      theme===''? setTheme('light-theme'):setTheme('')  }
      useEffect(()=>{
        document.body.className=theme
      },[theme])
  return (
    <div>
       
      <Login />
    
    </div>
  )
}

export default Page6
