import {useEffect} from 'react'
import './Projects.scss'
import FirstProjectCube from './FirstProjectCube'

function Projects() {

    useEffect(()=>{
        
       
    },[]);
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    if (sizes.width < 650) { 
        return (
            <div className='projects_container' id='projects'>
                
                <div className="projects_grid">
        
                    <div className="projects_block projects_left first_project">
                        <p>Pdsadsa hoto gallery test, with moving depth effects<br/> built with Gsap ScrollTrigger</p>
                        <a href=""></a>
                    </div> 
                    <div className="projects_block projects_right first_project projects_image"></div>
                    
                    <div className="projects_block projects_right second_project">
                    <p>Original pokedex design, with mouse tracking and ScrollTrigger effects for a more dynamic interaction, and all data fetched from Pokeapi</p>
                    </div>
                    <div className="projects_block projects_left second_project projects_image"></div>    
                   
        
                    <div className="projects_block projects_left third_project">
                        <p>This portfolio is made with React, CSS, ThreeJS, GSAP</p>
                    </div>
                     <div className="projects_block projects_right third_project projects_image"></div>

                     <div className="projects_block projects_left third_project">
                        <p>This portfolio is made with React, CSS, ThreeJS, GSAP</p>
                    </div>
                    <div className="projects_block projects_left fourth_project projects_image"></div> 
                    
                </div>
            </div>
          )
           
       }else{
        return (
            <div className='projects_container' id='projects'>
                <div className="projects_grid">
        
                    <div className="projects_block projects_left first_project">
                        <p>Photo gallery test, with moving depth effects<br/> built with Gsap ScrollTrigger</p>
                        <a href=""></a>
                    </div> 
                    <div className="projects_block projects_right first_project projects_image"></div>
                    
                    <div className="projects_block projects_left second_project projects_image"></div>    
                    <div className="projects_block projects_right second_project">
                    <p>original pokedex design, with mouse tracking and ScrollTrigger effects for a more dynamic interaction, and all data fetched from Pokeapi</p>
                    </div>
        
                    <div className="projects_block projects_left third_project">
                        <p>This portfolio is made with React, CSS, ThreeJS, GSAP</p>
                    </div>
                     <div className="projects_block projects_right third_project projects_image"></div>
        
                    <div className="projects_block projects_left fourth_project"></div> 
                    <div className="projects_block projects_right fourth_project projects_image">
                    <p>Original pokedex design, with mouse tracking and ScrollTrigger effects for a more dynamic interaction, and all data fetched from Pokeapi</p>
                    </div>
                </div>
            </div>
          )
       }
 
}

export default Projects