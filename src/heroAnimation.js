
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function heroAnimation() {

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

  document.querySelector('.input_form').addEventListener('mouseover', ()=>{
    document.querySelector('.small_circle').classList.add('formtext');
    
  })
  document.querySelector('.input_form').addEventListener('mouseout', ()=>{
    document.querySelector('.small_circle').classList.remove('formtext');
    
  })
  document.querySelector('.textarea_form').addEventListener('mouseover', ()=>{
    document.querySelector('.small_circle').classList.add('formtext');
    
  })
  document.querySelector('.textarea_form').addEventListener('mouseout', ()=>{
    document.querySelector('.small_circle').classList.remove('formtext');
    
  })

    gsap.registerPlugin(ScrollTrigger)
      gsap.to('.hero_logo', {
        rotationY:-720,
        scrollTrigger: {
          trigger: 'body',
          start: 'start start',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })

  if (sizes.width < 650) {     
      gsap.to('.crossline_about', {
        width:174,
        scrollTrigger: {
          trigger: '.about_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
      gsap.to('.crossline_projects', {
        width:226,
        scrollTrigger: {
          trigger: '.projects_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
        
          
        }
      })
      gsap.to('.crossline_contact', {
        width:218,
        scrollTrigger: {
          trigger: '.contact_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
    }else{
      gsap.to('.crossline_about', {
        width:50,
        scrollTrigger: {
          trigger: '.about_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
      gsap.to('.crossline_projects', {
        width:65,
        scrollTrigger: {
          trigger: '.projects_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
        
          
        }
      })
      gsap.to('.crossline_contact', {
        width:55,
        scrollTrigger: {
          trigger: '.contact_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
    }
  
}
