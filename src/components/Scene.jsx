import { useRef } from 'react';
import { OrbitControls, ContactShadows } from '@react-three/drei';
// import { Bloom, EffectComposer } from '@react-three/postprocessing';

import Piano from './Objects/Piano';
import MovingSpot from './MovingSpot';
import Env from './Env';
import Floor from './Objects/Floor';
import Pannel from './Objects/Pannel';

function Scene() {
    const pianoRef = useRef();
    const pannelRef = useRef();

    return (
        <>
            <Piano pianoRef={pianoRef} />
            <Pannel />
            {/* <Env /> */}
            <Floor />
            <ambientLight intensity={0.3} />
            <MovingSpot color="#FFFFFF" position={[2, 5, 2]} />
            <OrbitControls maxPolarAngle={Math.PI / 2 - 0.1} />
            <axesHelper args={[3]}></axesHelper>
            {/* <ContactShadows
                resolution={1024}
                frames={1}
                position={[0, -1.16, 0]}
                scale={15}
                blur={0.5}
                opacity={1}
                far={20}
            /> */}
            {/* <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur />
            </EffectComposer> */}

            {/* <ambientLight intensity={0.1} /> */}
            {/* <directionalLight position={[0, 0, 5]} /> */}
        </>
    );
}

export default Scene;
