import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";




const loader = new GLTFLoader();

export default function About_ThreeDModels() {
    gsap.registerPlugin(ScrollTrigger)
    const canvas = document.querySelector('.bike_3d');

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000)

    let camera = new THREE.PerspectiveCamera(70, canvas.clientWidth/canvas.clientHeight, 0.1, 15 );
    
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;

    scene.add(camera)
    
   

    let hlight = new THREE.PointLight(0xffffff,2, 50)
    let alight = new THREE.AmbientLight(0xffffff,0.2)
    hlight.position.set( 10, 10, 0 );
    scene.add(hlight)
    scene.add(alight)
    
    
    
 

    
    let renderer = new THREE.WebGLRenderer({antialias:true, canvas:canvas})
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight );

    
    
    
    loader.load("/models/bike2/scene.gltf", (gltf)=>{
        let model = gltf.scene;
       
              //model.rotation.y = 360/180*Math.PI;
              gsap.to(model.rotation, {
                y: '10.28318',
                
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
