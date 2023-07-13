import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';
// Erstelle die Szene, den Renderer und die Kamera
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('galaxie').appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

// Erstelle den OrbitControls-Controller
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Erstelle das Array der Sterne
const stars = [];

// Erstelle die Sterne
for (let i = 0; i < 1000; i++) {
    const starGeometry = new THREE.SphereGeometry(0.01, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.x = Math.random() * 10 - 5;
    star.position.y = Math.random() * 10 - 5;
    star.position.z = Math.random() * 10 - 5;
    stars.push(star);
    scene.add(star);
}

setInterval(() => {camera.position.z -= 0.001;}, 10);

// Animiere die Szene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();