import React ,{useState,useEffect} from 'react'
import ContactUs from '../components/Main/Contactus'
import Navbar from '../components/Navbar/Navbar'

const Page5 = () => {
    const [theme,setTheme]=useState('')
    const toggleTheme = ()=>{
      theme===''? setTheme('light-theme'):setTheme('')  }
      useEffect(()=>{
        document.body.className=theme
      },[theme])
  return (
    <div>
       <Navbar theme={theme} toggleTheme={toggleTheme} />
       <ContactUs />
    </div>
  )
}

export default Page5
