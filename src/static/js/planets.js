import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';


// Canvas HTML Setup
const w = window.innerWidth;
const h = window.innerHeight;

const canvas = document.getElementById('planetas');
canvas.height = 500;
canvas.width = 1000;


// Setup Camera for Object
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

// Setup Canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
//renderer.setSize(w, h);
renderer.setClearColor(0x000000);

//new OrbitControls(camera, renderer.domElement);

// Setup Scene and Texture Loader
const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();

// Setup Planets Group Object
const planetsGroup = new THREE.Group();
planetsGroup.rotation.z = -23.4 * Math.PI / 180;

// Setup Earth Object
const earth_texture = loader.load('./assets/00__2k_earth_daymap.jpg');
const geo = new THREE.IcosahedronGeometry(1, 12);
const mat_earth = new THREE.MeshStandardMaterial(
    {
        map: earth_texture,
        flatShading: true
    }
);
const earth = new THREE.Mesh(geo, mat_earth);
earth.position.set(0, 0, 3);

// Add Objects to Group and Scene
scene.add(planetsGroup);
planetsGroup.add(earth); 

// Setup Light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemiLight);

function animate(){
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    renderer.render(scene, camera);
};

// Setup Exposition HTML
animate();