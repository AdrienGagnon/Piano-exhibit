import model from '../../assets/models/panneau-transformed.glb';
import woodTexture from '../../assets/models/wood_texture.webp';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Pannel(props) {
    const { nodes, materials } = useGLTF(model);

    const woodMap = useLoader(TextureLoader, woodTexture);

    return (
        <group
            {...props}
            dispose={null}
            position={[5, 0.02, 2.5]}
            scale={1.3}
            rotation={[0, Math.PI / 4, 0]}
        >
            <mesh
                geometry={nodes.light_metal_plate.geometry}
                material={nodes.light_metal_plate.material}
            />
            <mesh
                geometry={nodes.Light_support.geometry}
                material={materials.Material}
                position={[0.016, 0.543, -0.073]}
            />
            <mesh geometry={nodes.Panneau.geometry} material={materials.Wood}>
                <meshStandardMaterial map={woodMap} />
            </mesh>
            <mesh
                geometry={nodes.panneau_light.geometry}
                material={materials.Light}
                position={[0.016, 0.543, -0.073]}
            />
        </group>
    );
}

useGLTF.preload(model);
