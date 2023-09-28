import model from '../../assets/models/panneau-transformed.glb';

import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from '../../assets/textures/dark_wood_diff_4k.jpg';
import texture2 from '../../assets/textures/dark_wood_disp_4k.png';

export default function Pannel(props) {
    const { nodes, materials } = useGLTF(model);
    let woodTextures;
    // try {
    woodTextures = useTexture({
        map: texture,
        // displacementMap: texture2,
    });
    // } catch (err) {
    //     console.log(err);
    // }

    // const woodMap = useLoader(TextureLoader, woodTexture);

    return (
        <group
            {...props}
            dispose={null}
            position={[6, 0.02, 2.5]}
            scale={1.3}
            rotation={[0, Math.PI / 6, 0]}
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
            <mesh geometry={nodes.Panneau.geometry}>
                <meshStandardMaterial
                    {...woodTextures}
                    displacementScale={0.2}
                />
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
