import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, Select } from '@react-three/drei';
import { handleOnHoverKeys } from '../handleOnHoverKeys';
import pianoModel from '../../assets/models/piano-3.glb';
import { zoomToView } from '../../utils/zoomToView';
import { useState } from 'react';
import { EffectComposer, Outline } from '@react-three/postprocessing';

export default function Piano({ pianoRef, setPianoHover, setActivePosition }) {
    const [keyHovered, setKeyHover] = useState(null);

    const handleClickPiano = e => {
        setActivePosition(1);
    };

    const { nodes, materials } = useGLTF(pianoModel);
    return (
        <group
            ref={pianoRef}
            castShadow
            receiveShadow
            dispose={null}
            position={[-0.25, 0.09, -1]}
            onPointerOver={() => setPianoHover(true)}
            onPointerOut={() => setPianoHover(false)}
            onClick={handleClickPiano}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0.972, 0.521, 0.737]}
            />
            <Selection>
                <Select enabled={keyHovered}>
                    <mesh
                        onPointerOver={() => setKeyHover(true)}
                        castShadow
                        receiveShadow
                        geometry={nodes.keyboard_white.geometry}
                        material={materials['Material.001']}
                        position={[-0.345, 0.557, 1.29]}
                    />
                </Select>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.keyboard_black.geometry}
                    material={materials.Black}
                    position={[-0.345, 0.557, 1.29]}
                />
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline
                        blur
                        visibleEdgeColor="white"
                        edgeStrength={100}
                        width={1000}
                    />
                </EffectComposer>
            </Selection>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.red_rope.geometry}
                material={materials['Red Rope']}
                position={[0, 0.046, -0.086]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheel_support.geometry}
                material={materials['Material.002']}
                position={[0.959, -0.025, 1.076]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.15, 0.666, 0.15]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Music_Sheet.geometry}
                material={materials.Material}
                position={[0.084, 0.103, 0]}
            />
        </group>
    );
}

useGLTF.preload('/piano-3-transformed.glb');
