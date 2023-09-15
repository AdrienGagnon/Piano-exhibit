import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

import Piano from './Piano';
import MovingSpot from './MovingSpot';
import Env from './Env';
import Floor from './Floor';

function Scene() {
    const piano = useRef();

    return (
        <>
            <Piano piano={piano} />
            <Env />
            <Floor />
            <MovingSpot color="#FFFFFF" position={[2, 5, 2]} />
            <OrbitControls maxPolarAngle={Math.PI / 2 - 0.1} />
            <axesHelper args={[3]}></axesHelper>
        </>
    );
}

export default Scene;
