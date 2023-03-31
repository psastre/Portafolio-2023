import React, { useState, useEffect } from 'react'
import './App.css';
import heroAnimation from './heroAnimation';
import ThreeDModels from './ThreeDModels';
import Cursor from './components/Cursor/Cursor';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  const [cursorscaling, setcursorscaling] = useState(false)

 
  useEffect(()=>{
    heroAnimation();
    ThreeDModels();
   
    
},[]);

  return (
    <div className="App">
      <canvas className='webgl'></canvas>
     <Cursor cursorscaling={cursorscaling}/>
     <Nav setcursorscaling={setcursorscaling} cursorscaling={cursorscaling}/>
     <Hero/>
     <About/>
    <Projects/>
    <Contact/>

    </div>
  );
}

export default App;
