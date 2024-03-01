import React,{useState,useEffect} from 'react'

import About3 from '../components/Aboutus3'

import Services from '../components/Main/Services'
import About4 from '../components/aboutus4'
import About5 from '../components/Aboutus5'
import ContactUs from '../components/Main/Contactus'
import Footer from '../components/Main/Footer'
import Navbar from '../components/Navbar/Navbar'

const Page2 = () => {
    const [theme,setTheme]=useState('')
    const toggleTheme = ()=>{
      theme===''? setTheme('light-theme'):setTheme('')  }
      useEffect(()=>{
        document.body.className=theme
      },[theme])
  return (
    <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About3 />
      <Services />
      <About4 />
      <About5 />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Page2
