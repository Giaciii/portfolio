import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 400 / 400);
let mesh;
const controls = new OrbitControls(camera, renderer.domElement);
const container = document.getElementById('raumshuttle');

renderer.setSize(container.offsetWidth, container.offsetHeight);
scene.background = new THREE.Color('rgb(0, 0, 0)');
scene.add(new THREE.HemisphereLight('rgb(255, 255, 255)', 'rgb(255, 255, 255)', 1.5));
camera.position.set(2, 0, 10);

new GLTFLoader().load('../objekt/raumshuttleV1.glb', ({ scene: model }, animations) => {
  scene.add(model);
  
//  model.scale.setScalar(2.0);
  model.scale.setScalar(0.5);
  
  camera.lookAt(model.position);
  
  controls.target.copy(model.position);

  mesh = model;
});

const animate = () => {
  if (mesh) {
    mesh.rotateY(Math.PI / 360);
  }

  renderer.render(scene, camera);
  
  controls.update();

  requestAnimationFrame(animate);
};

animate();

document.getElementById('raumshuttle').appendChild(renderer.domElement);