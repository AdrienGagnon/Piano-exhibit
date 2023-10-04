import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import panelModel from '../../assets/models/panneau.gltf';
import { handleOnHoverKeys } from '../handleOnHoverKeys';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export default function Pannel({ pannelRef }) {
    const [clicked, setClicked] = useState(true);
    const { scene } = useThree();
    const vec = new THREE.Vector3();

    const gltf = useLoader(GLTFLoader, panelModel);

    useEffect(() => {
        gltf.nodes.panneau_light.material.emissiveIntensity = 10;
        // console.log(scene);
        // scene.children[1].mater
        scene.castShadow = true;
        const wood = scene.getObjectByName('Panneau').children[1].material;
        // console.log(wood);
        // scene.getObjectByName('Panneau').children[1].visible = false;
    }, []);

    return (
        <mesh
            ref={pannelRef}
            position={[5, 0.02, 2.5]}
            scale={1.3}
            rotation={[0, Math.PI / 4, 0]}
        >
            <primitive object={gltf.scene} onPointerEnter={handleOnHoverKeys} />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    );
}
