import * as THREE from 'three';
import { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import CameraControls from 'camera-controls';
import { orbitControlsVectors } from '../Constants/constants';

export default function Controls({
    cameraPosition,
    pos = new THREE.Vector3(),
    look = new THREE.Vector3(),
    activePosition,
}) {
    CameraControls.install({ THREE: THREE });
    const camera = useThree(state => state.camera);
    const gl = useThree(state => state.gl);
    const controls = useMemo(
        () => new CameraControls(camera, gl.domElement),
        []
    );
    console.log(activePosition);
    return useFrame((state, delta) => {
        const vectorPos = orbitControlsVectors[activePosition].vectorPos;
        const vectorLook = orbitControlsVectors[activePosition].vectorLook;
        cameraPosition.zoom
            ? pos.set(
                  cameraPosition.focus.x,
                  cameraPosition.focus.y,
                  cameraPosition.focus.z + 0.2
              )
            : pos.set(vectorPos.x, vectorPos.y, vectorPos.z);
        cameraPosition.zoom
            ? look.set(
                  cameraPosition.focus.x,
                  cameraPosition.focus.y,
                  cameraPosition.focus.z - 0.2
              )
            : look.set(vectorLook.x, vectorLook.y, vectorLook.z);
        state.camera.position.lerp(pos, 0.5);
        state.camera.updateProjectionMatrix();

        controls.setLookAt(
            state.camera.position.x,
            state.camera.position.y,
            state.camera.position.z,
            look.x,
            look.y,
            look.z,
            true
        );
        return controls.update(delta);
    });
}
