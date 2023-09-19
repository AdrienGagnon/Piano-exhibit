import './Home.css';

import LoadingScreen from './LoadingScreen';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Scene from './Scene';

function Home() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Canvas dpr={[1, 2]} camera={{ fov: 70, position: [5, 1, 2.5] }}>
                <Scene />
            </Canvas>
        </Suspense>
    );
}

export default Home;
