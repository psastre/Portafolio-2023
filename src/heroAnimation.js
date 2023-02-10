
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function heroAnimation() {
    gsap.registerPlugin(ScrollTrigger)
      gsap.to('.hero_logo', {
        rotationY:-540,
        scrollTrigger: {
          trigger: 'body',
          start: 'start start',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
      gsap.to('.crossline_about', {
        width:50,
        scrollTrigger: {
          trigger: '.about_container',
          start: 'start bottom',
          end: 'bottom bottom',
          scrub:true,
          
        }
      })
  
}
