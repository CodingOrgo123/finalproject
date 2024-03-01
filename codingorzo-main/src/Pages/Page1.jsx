import React,{useState,useEffect} from 'react'
import Main from '../components/Main/Main';
import Counter from '../components/Main/Counter';
import Services from '../components/Main/Services';
import About from '../components/Main/About';
import Languages from '../components/Main/Languages';
import ContactUs from '../components/Main/Contactus';
import Footer from '../components/Main/Footer';
import About1 from '../components/Main/About1';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Problems from '../components/Problems';
import Navbar from '../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';



const Page1 = () => {
    const [theme,setTheme]=useState('')
  const toggleTheme = ()=>{
    theme===''? setTheme('light-theme'):setTheme('')  }
    useEffect(()=>{
      document.body.className=theme
    },[theme])
    const navigate = useNavigate()

   
  return (
    <div>
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Main theme={theme} />
        <Counter />
        <Services />
         <About />
    <Languages />
    <About1 />
    <ContactUs />
    <Footer />
        
    
       
    </div>
  )
}

export default Page1
