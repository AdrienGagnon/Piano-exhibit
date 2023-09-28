import { useEffect, useRef, useMemo } from 'react';
import {
    OrbitControls,
    ContactShadows,
    CameraControls,
} from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import Piano from './Objects/Piano';
import MovingSpot from './MovingSpot';
import Env from './Env';
import Floor from './Objects/Floor';
import Pannel from './Objects/Pannel';
import { useThree } from '@react-three/fiber';

import * as THREE from 'three';
import CameraControls from 'camera-controls';

function Scene() {
    const pianoRef = useRef();
    const pannelRef = useRef();
    const pianoLight = useRef();
    // const pannelLight = useRef();

    // useEffect(() => {
    //     console.log(pannelLight.current);
    //     pannelLight.current.lookAt(10, 10, 10);
    // }, []);

    CameraControls.install({ THREE: THREE });

    const camera = useThree(state => state.camera);
    const gl = useThree(state => state.gl);
    const controls = useMemo(
        () => new CameraControls(camera, gl.domElement),
        []
    );
    console.log(controls);
    controls.setLookAt(2, 2, 2);

    return (
        <>
            <Piano pianoRef={pianoRef} />
            <Pannel pannelRef={pannelRef} />
            {/* <Env /> */}
            <Floor />
            <ambientLight intensity={0.1} />
            <MovingSpot
                color="#FFFFFF"
                position={[2, 5, 2]}
                lightRef={pianoLight}
            />
            {/* <MovingSpot
                color="#FFFFFF"
                position={[5, 5, 2.5]}
                lightRef={pannelLight}
            /> */}
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
