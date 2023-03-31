import { transform } from 'framer-motion';
import {useState} from 'react'
import './Nav.scss';

function Nav({setcursorscaling}) {
  const [abouthover, setabouthover] = useState(false)
  const [projectshover, setprojectshover] = useState(false)
  const [contacthover, setcontacthover] = useState(false)
  return (
    <div className='nav_container'>
        <div className="blur_container"></div>
        <div className="nav_middle_container">
          <div className="nav_left_container">
            <div className="hero_logo"></div>
          </div>
          <div className="nav_right_container">
            <ul>
                <a href="" 
                onMouseEnter={()=>{setcursorscaling(true); setprojectshover(true); setcontacthover(true)}} 
                onMouseLeave={()=>{setcursorscaling(false); setprojectshover(false); setcontacthover(false)}}
                style={{filter:abouthover ? "blur(2px)" :"blur(0px)" , transform: abouthover ? "scale(0.9)" :"scale(1)"}}><li>About</li><div className="crossline_about"></div></a>
                <a href="" 
                onMouseEnter={()=>{setcursorscaling(true); setabouthover(true); setcontacthover(true)}}
                onMouseLeave={()=>{setcursorscaling(false); setabouthover(false); setcontacthover(false)}} 
                style={{filter: projectshover ? "blur(2px)" :"blur(0px)", transform: projectshover ? "scale(0.9)" :"scale(1)"}}><li>Projects</li><div className="crossline_projects"></div></a>
                <a href="" 
                onMouseEnter={()=>{setcursorscaling(true); setabouthover(true); setprojectshover(true)}} 
                onMouseLeave={()=>{setcursorscaling(false); setabouthover(false); setprojectshover(false)}} 
                style={{filter: contacthover ? "blur(2px)" :"blur(0px)" , transform: contacthover ? "scale(0.9)" :"scale(1)"}}><li>Contact</li><div className="crossline_contact"></div></a>
                
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Nav