import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Landingpg from './Components/Landingpg';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setmode] = useState('light')
  const [btn_text, setBtnText] = useState('Enable Darkmode')

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      setBtnText('Enable LightMode')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setmode('light')
      setBtnText('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
    }
  }

  //function should return only one element
  return (

    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} togglemode={togglemode} btn_text={btn_text} about={'About'} />

        <Routes>
          <Route exact path="land" element={<Landingpg mode={mode} />} />
          <Route  exact path="/" element={<div className="container my-3" >
            <TextForm textHeading='Enter text to analyze' mode={mode} />
          </div>} />

          <Route exact path="about" element={<About />} />
        </Routes>

      </Router>

    </>


  );
}

export default App;
