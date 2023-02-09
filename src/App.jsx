import React, { useState } from 'react'
import './App.css';
import { gsap } from "gsap";
import Cursor from './components/Cursor/Cursor';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';


function App() {
  const [cursorscaling, setcursorscaling] = useState(false)
  
  return (
    <div className="App">
      
     <Cursor cursorscaling={cursorscaling}/>
     <Nav setcursorscaling={setcursorscaling} cursorscaling={cursorscaling}/>
     <Hero/>
     <About/>


    </div>
  );
}

export default App;
