import * as THREE from 'three';
import gsap from 'gsap'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default function ThreeDModels() {

    gsap.registerPlugin(ScrollTrigger)
    
    
  
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(3,64,64);
    const material = new THREE.MeshPhysicalMaterial({
        color:'#f0f8ff',
        clearcoat:2.0,
        wireframe: true,
        clearcoatRoughness:0.5,
        envMap: 'reflection',
    })
     
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh)
    /*CURSOR TRACK
    var cursorx
    var cursory
    const mousemove=(e)=>{
         cursorx = Math.round(((e.pageX) / sizes.width) *255)
        cursory =  Math.round(((e.pageY) / sizes.width) *255)
        console.log(cursorx)
        console.log(cursory)


    }
    window.addEventListener('mousemove', mousemove);

    */
        
    //SIZES

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
   
    //LIGHT

    const light = new THREE.PointLight(0xffffff, 1.5, 1500)
    light.position.set(10 ,0 ,5)
    scene.add(light)

    
    
    

    //CAMERA
    

    const camera = new THREE.PerspectiveCamera(45, sizes.width/ sizes.height);

    
            if (sizes.width < 650) { 
                    camera.position.z = 16;
                    camera.position.y = 0.3;
                
            }else{
                 camera.position.z = 15;
                 camera.position.y = 0;
            }
   
    
    scene.add(camera)

    

    //RENDER

    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({canvas})
    renderer.setSize(sizes.width -20, sizes.height -20)
    renderer.render(scene,camera)

    //Controls
    //const controls= new OrbitControls(camera, canvas)

    //RESIZE

    window.addEventListener('resize', ()=>{
        //Update Size
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        //Update Camera
        camera.updateProjectionMatrix()
        camera.aspect = sizes.width/sizes.height;
        renderer.setSize(sizes.width, sizes.height);
    })


    var mouse = {
        x: 0,
        y: 0
      };
      

    function onMouseMove(event) {

        // Update the mouse variable
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
      
        // Make the sphere follow the mouse
        var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        var dir = vector.sub(camera.position).normalize();
        var distance = -camera.position.z / dir.z;
        var pos = camera.position.clone().add(dir.multiplyScalar(distance));
        //mouseMesh.position.copy(pos);
      
        light.position.set(pos.x, pos.y, pos.z - 1);
      };

        if (sizes.width < 650) { 

            gsap.to(light.position, {
                x: '-10',
                
                scrollTrigger: {
                    trigger: '.about_container',
                    start: 'start bottom',
                    end: 'bottom bottom',
                    scrub:true,
                    
                  }
              }, 
            )  
        
   
        }else{
            document.addEventListener('mousemove', onMouseMove, false);
        }

      

     

    const loop =()=>{
        
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()
  
}
