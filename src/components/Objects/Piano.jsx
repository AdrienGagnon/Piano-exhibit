import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { handleOnHoverKeys } from '../handleOnHoverKeys';
import pianoModel from '../../assets/models/piano-3.glb';
import { zoomToView } from '../../utils/zoomToView';

export default function Piano({ pianoRef, setPianoHover, setActivePosition }) {
    // useFrame(() => {
    //     // result.nodes.keyboard.rotation.x += 5;
    // });
    const state = useThree();

    const meshs = state.scene.children[2]?.children;

    // const keyboardWhite = meshs.find(child => child.name === 'keyboard_white');
    // const keyboardBlack = meshs.find(child => child.name === 'keyboard_black');

    const check = e => {
        console.log(e);
        if (e.object.parent?.name !== 'Scene') {
            console.log('piano');
        }
    };

    const handleClickPiano = e => {
        setActivePosition(1);
        console.log(e.object.position);
        // zoomToView((e.object.position, setZoom, zoom, setFocus));
    };

    const { nodes, materials } = useGLTF(pianoModel);
    return (
        <group
            ref={pianoRef}
            castShadow
            receiveShadow
            dispose={null}
            position={[-0.25, 0, -1]}
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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_white.geometry}
                material={materials['Material.001']}
                position={[-0.345, 0.557, 1.29]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_black.geometry}
                material={materials.Black}
                position={[-0.345, 0.557, 1.29]}
            />
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
