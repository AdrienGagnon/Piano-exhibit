// import * as THREE from 'three';

// export const render = canvas => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvas.current.appendChild(renderer.domElement);

//     const loader = new GLTFLoader();
//     loader.load(
//         pianoModel,
//         function (gltf) {
//             scene.add(gltf.scene);
//         },
//         undefined,
//         function (error) {
//             console.error(error);
//         }
//     );

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.update();

//     const pointLight = new THREE.PointLight(0xff0000, 1, 100);
//     pointLight.position.set(10, 10, 10);
//     scene.add(pointLight);

//     const sphereSize = 1;
//     const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
//     scene.add(pointLightHelper);

//     camera.position.z = 5;

//     function animate() {
//         requestAnimationFrame(animate);
//         controls.update();
//         renderer.render(scene, camera);
//     }

//     animate();
// };
