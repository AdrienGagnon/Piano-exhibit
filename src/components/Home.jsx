import './Home.css';

import LoadingScreen from './LoadingScreen';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import pianoModel from '../assets/models/piano.glb';
import { Suspense } from 'react';

import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Home() {
    // useFrame((state, delta, xrframe) => {
    //     result;
    // });

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Canvas>
                {/* <ambientLight intensity={0.1} /> */}
                {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
                <Piano />
                <OrbitControls />
            </Canvas>
        </Suspense>
    );
}

function Piano() {
    useFrame(() => {
        // result.nodes.keyboard.rotation.x += 5;
    });
    const result = useLoader(GLTFLoader, pianoModel);
    const state = useThree();
    console.log(state, result.nodes.keyboard.rotation);
    return <primitive object={result.scene} />;
}

export default Home;
