import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";




const loader = new GLTFLoader();

export default function About_ThreeDModelComputer() {
    gsap.registerPlugin(ScrollTrigger)
    const canvas = document.querySelector('.computer_3d');

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000)

    let camera = new THREE.PerspectiveCamera(70, canvas.clientWidth/canvas.clientHeight, 0.1, 15 );
    
    camera.position.x = 0;
    camera.position.y = -0.6;
    camera.position.z = 5;

    scene.add(camera)
    
   

    let hlight = new THREE.PointLight(0xffffff,2, 120)
    let llight = new THREE.PointLight(0xffffff,2, 20)
    let alight = new THREE.AmbientLight(0xffffff,0.8 )
    //hlight.position.set( -2, 2, 0 );
    llight.position.set( -20, -10, 0 );
   // scene.add(hlight)
    scene.add(alight)
    scene.add(llight)

    var mouse = {
        x: 0,
        y: 0
      };
    function onMouseMove(event) {

        // Update the mouse variable
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1.5 ;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        hlight.position.set( mouse.x, mouse.y, 0.5 );
    }
 
   
    document.addEventListener('mousemove', onMouseMove, false);

        scene.add(hlight)
    
    
    
 

    
    let renderer = new THREE.WebGLRenderer({antialias:true, canvas:canvas})
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight );

    
    
    
    loader.load("/models/computer/scene.gltf", (gltf)=>{
        let model = gltf.scene;
            model.rotation.x = 0.4;
            //model.rotation.y = 1.78;
              //model.rotation.y = 360/180*Math.PI;
              gsap.to(model.rotation, {
                y: '6.2',
                
                scrollTrigger: {
                    trigger: '.about_container',
                    start: 'start bottom',
                    end: 'bottom bottom',
                    scrub:true,
                    
                  }
              }, 
            )  
            
        
        //model.scale.set(0.5, 0.5, 0.5);
        
        //model.scale.set(1.5, 1.5, 1.5);
        model.position.set( 0, 0, 0);
        scene.add(model);
        
    })
    const loop =()=>{
        
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()
       

    
    
}
