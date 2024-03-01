import React,{useState ,useEffect} from 'react'
import './App.css';
import { Route, Routes, Navigate ,useNavigate} from "react-router-dom";

import Page1 from './Pages/Page1';
import Problems from './components/Problems';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/Main/Contactus';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import LoginRegister from './components/Register';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';

import Login from './components/Login';
import { useContext } from "react";
import { LoginContext } from "./components/Context/Context";
import Page8 from './Pages/Page8';
import Page9 from './Pages/Page9';
import Page10 from './Pages/Page10';




function App() {
  
 
  
  const [theme,setTheme]=useState('')

  const toggleTheme = ()=>{
    theme===''? setTheme('light-theme'):setTheme('')  }
    useEffect(()=>{
      document.body.className=theme
    },[theme])
    
  
  return (
    <>
    
   <Routes>
   
            <Route path="/" element={<Page1 />} />
            <Route path="/aboutus" element={<Page2 />} />
            <Route path="/studentdashboard" element={<Page3 />} />
            <Route path="/admindashboard" element={<Page7 />} />
            <Route path="/feedback" element={<Page8 />} />
            <Route path="/userdata" element={<Page9 />} />
            
            
           
            
           
            <Route path="/signup" element={<Page4 />} />
            <Route path="/contactus" element={<Page5 />} />
            <Route path="/login" element={<Page6 />} />
            <Route path="/challenges" element={<Page10 />} />
           
            
            
            
            
            
        </Routes>
    
  
    </>
  );
}

export default App;
