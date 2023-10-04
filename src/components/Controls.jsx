import * as THREE from 'three';
import { useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import CameraControls from 'camera-controls';
import { cameraStates } from '../Constants/constants';

export default function Controls({
    activePosition,
    inTransition,
    setInTransition,
}) {
    CameraControls.install({ THREE: THREE });
    const camera = useThree(state => state.camera);
    const gl = useThree(state => state.gl);
    const controls = useMemo(
        () => new CameraControls(camera, gl.domElement),
        []
    );

    useEffect(() => {
        if (inTransition) {
        } else {
            controls.maxZoom = cameraStates[activePosition].maxZoom;
            controls.minZoom = cameraStates[activePosition].minZoom;
            controls.maxPolarAngle = cameraStates[activePosition].maxPolarAngle;
        }
    }, [inTransition]);

    return useFrame((state, delta) => {
        if (!inTransition) return controls.update(delta);
        const vectorPosition = cameraStates[activePosition];
        if (
            camera.position.x - 0.01 <= vectorPosition.vectorPos.x &&
            vectorPosition.vectorPos.x <= camera.position.x + 0.01
        ) {
            setInTransition(false);
        }
        state.camera.position.lerp(vectorPosition.vectorPos, 0.5);
        state.camera.updateProjectionMatrix();

        const vectorLook = vectorPosition.vectorLook;

        controls.setLookAt(
            state.camera.position.x,
            state.camera.position.y,
            state.camera.position.z,
            vectorLook.x,
            vectorLook.y,
            vectorLook.z,
            true
        );
        return controls.update(delta);
    });
}
