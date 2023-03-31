import {useEffect} from 'react'
import './About.scss'

import About_ThreeDModels from './About_ThreeDModels'
import About_ThreeDModelJoystick from './About_ThreeDModelJoystick'
import About_ThreeDModelDJ from './About_ThreeDModelDJ'
import About_ThreeDModelComputer from './About_ThreeDModelComputer'
import halfofquarter from './images/halfofquarter.svg'
import quarter from './images/quarter.svg'
import idontknow from './images/idontknow.svg'
import half from './images/half.svg'
import halfandquarter from './images/halfandquarter.svg'

function About() {

    useEffect(()=>{
        About_ThreeDModels();
        About_ThreeDModelJoystick();
        About_ThreeDModelDJ();
        About_ThreeDModelComputer();
    },[]);
  return (
    <div className='about_container'>
        <div className="about_likes">
            <canvas className='bike_3d element_3d'></canvas>
            <canvas className='computer_3d element_3d'></canvas>
            <canvas className='dj_3d element_3d'></canvas>
            <canvas className='joystick_3d element_3d'></canvas>
        </div>
        <div className="about_skills">
            
            <div className="skills_container skills_first">
                <div className="skills_content">
                    <span>
                    HTML <img className="skills_clock"src={halfandquarter}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    CSS <img className="skills_clock"src={halfandquarter}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    Javascript <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    Figma <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    
                    </span>
                </div>
                <div className="skills_content skills_content_second">
                    <span>
                    HTML <img className="skills_clock"src={halfandquarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    CSS <img className="skills_clock"src={halfandquarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Javascript <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Figma <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>

            <div className="skills_container skills_second">
                <div className="skills_content">
                    <span className='skills_span_middle'>
                    PHP <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Laravel <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    SQL <img className="skills_clock"src={idontknow}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    React <img className="skills_clock"src={idontknow}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    API <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div className="skills_content skills_content_second ">
                    <span className='skills_span_middle'>
                    PHP <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Laravel <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    SQL <img className="skills_clock"src={idontknow}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    React <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    API <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>

            <div className="skills_container skills_third">
                <div className="skills_content">
                    <span>
                    GSAP <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Framer <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Three.js <img className="skills_clock"src={idontknow}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Chart.js <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    </span>
                </div>
                <div className="skills_content skills_content_second">
                    <span>
                    GSAP <img className="skills_clock"src={half}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Framer <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Three.js <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Chart.js <img className="skills_clock"src={quarter}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About