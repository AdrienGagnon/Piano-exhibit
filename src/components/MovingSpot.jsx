import { SpotLight, Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function MovingSpot({ vec = new Vector3(), lightRef, ...props }) {
    useHelper(lightRef, SpotLightHelper, 1, '#FFFFFF');
    const state = useThree();

    useEffect(() => {
        // const shadows = state.gl.shadowMap;
        // shadows.enabled = true;
        // shadows.type = THREE.PCFSoftShadowMap;
    }, []);

    return (
        <SpotLight
            ref={lightRef}
            castShadow={true}
            penumbra={1}
            distance={15}
            angle={0.5}
            attenuation={4}
            anglePower={3}
            intensity={5}
            {...props}
        />
    );
}

export default MovingSpot;
