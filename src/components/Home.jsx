import './Home.css';

import LoadingScreen from './LoadingScreen';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Scene from './Scene';

function Home() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={0.1} />
                {/* <directionalLight position={[0, 0, 5]} /> */}
                <Scene />
            </Canvas>
        </Suspense>
    );
}

export default Home;
