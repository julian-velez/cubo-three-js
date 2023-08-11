import * as THREE from "https://threejs.org/build/three.module.js";

// Inicializar la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo con material y agregarlo a la escena
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionar la cámara
camera.position.z = 5;

// Agregar una fuente de luz
const light = new THREE.PointLight( 0xff0000, 39, 100);
light.position.set(0, 0, 10);
scene.add(light);

// Función para animar el cubo
function animate() {
  requestAnimationFrame(animate);

  // Girar el cubo en ambos ejes
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Llamar a la función animate para comenzar la animación
animate();
