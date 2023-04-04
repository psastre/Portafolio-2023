import { transform } from 'framer-motion';
import {useState} from 'react'
import './Nav.scss';

function Nav({setcursorscaling}) {
  const [abouthover, setabouthover] = useState(false)
  const [projectshover, setprojectshover] = useState(false)
  const [contacthover, setcontacthover] = useState(false)

const openMenu=()=>{
    /*document.querySelector('.blur_container').classList.toggle("blur_container_open");
    document.querySelector('.blur_container').classList.toggle("blur_container_open");
    document.querySelector('.blur_container').classList.toggle("blur_container_open");*/
    document.querySelector('.first_line').classList.toggle("first_line_open");
    document.querySelector('.second_line').classList.toggle("second_line_open");
    document.querySelector('.third_line').classList.toggle("third_line_open");
    document.querySelector('.blur_container').classList.toggle("blur_container_open");
    document.querySelector('.nav_middle_container').classList.toggle("nav_middle_container_open");
    document.querySelector('.nav_list').classList.toggle("nav_list_open");
  console.log(":hole")
}
  return (
    <div className='nav_container'>
        <div className="blur_container"></div>
        <div className="nav_middle_container">
          <div className="nav_left_container">
            <div className="hero_logo"></div>
          </div>
          <div className="nav_right_container">
            <div className="menu_hamb" onClick={openMenu}>
              <div className="first_line"></div>
              <div className="second_line"></div>
              <div className="third_line"></div>
            </div>
            <ul className='nav_list'>
                <a href="#about" onClick={openMenu}
                onMouseEnter={()=>{setcursorscaling(true); setprojectshover(true); setcontacthover(true)}} 
                onMouseLeave={()=>{setcursorscaling(false); setprojectshover(false); setcontacthover(false)}}
                style={{filter:abouthover ? "blur(2px)" :"blur(0px)" , transform: abouthover ? "scale(0.9)" :"scale(1)"}}><li>About</li><div className="crossline_about"></div></a>
                <a href="#projects" onClick={openMenu}
                onMouseEnter={()=>{setcursorscaling(true); setabouthover(true); setcontacthover(true)}}
                onMouseLeave={()=>{setcursorscaling(false); setabouthover(false); setcontacthover(false)}} 
                style={{filter: projectshover ? "blur(2px)" :"blur(0px)", transform: projectshover ? "scale(0.9)" :"scale(1)"}}><li>Projects</li><div className="crossline_projects"></div></a>
                <a href="#contact" onClick={openMenu}
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