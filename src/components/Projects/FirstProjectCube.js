import * as THREE from 'three';


export default function FirstProjectCube() {
    
    const canvas = document.querySelector('.cube_project_one');

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff)

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
    
    
    
 

    
    let renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight );

    
    
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshPhysicalMaterial({
        color:'#f0f8ff',
        clearcoat:2.0,
        wireframe: true,
        clearcoatRoughness:0.5,
        envMap: 'reflection',
    })
     
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 1.78;

    scene.add(mesh)
        
    
    const loop =()=>{
        
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()
       

    
    
}
