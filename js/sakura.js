import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 创建场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建相机控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// 加载樱花模型
const loader = new GLTFLoader();
loader.load('path/to/your/cherry_blossoms.json', function (gltf) {
    const cherryBlossoms = gltf.scene;
    scene.add(cherryBlossoms);
    animate();
});

// 动画函数
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}