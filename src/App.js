import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {

  const [mode,setmode]=useState('light')
  const [btn_text,setBtnText]=useState('Enable Darkmode')

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      setBtnText('Enable LightMode')
      document.body.style.backgroundColor='grey'
    }
    else{
      setmode('light')
      setBtnText('Enable DarkMode')
      document.body.style.backgroundColor='white'
    }
  }

  //function should return only one element
  return (

    <>
      <Navbar title='TextUtils' mode={mode} togglemode={togglemode} btn_text={btn_text} />

      <div className="container my-3" >
        <TextForm textHeading='Enter text to analyze' mode={mode} />
      </div>

      {/* <About/> */}
    </>



  );
}

export default App;
