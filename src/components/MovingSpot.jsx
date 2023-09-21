import { SpotLight, Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';
import { useRef } from 'react';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

function MovingSpot({ vec = new Vector3(), ...props }) {
    const lightRef = useRef();
    useHelper(lightRef, SpotLightHelper, 1, 'blue');

    return (
        <SpotLight
            ref={lightRef}
            castShadow
            penumbra={1}
            distance={10}
            angle={0.5}
            attenuation={4}
            anglePower={4}
            intensity={2}
            {...props}
        />
    );
}

export default MovingSpot;
