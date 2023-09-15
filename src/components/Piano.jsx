import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import pianoModel from '../assets/models/piano-2.glb';
import { handleOnHoverKeys } from './handleOnHoverKeys';

function Piano({ piano }) {
    // useFrame(() => {
    //     // result.nodes.keyboard.rotation.x += 5;
    // });
    const result = useLoader(GLTFLoader, pianoModel);
    const state = useThree();

    const meshs = state.scene.children[2]?.children;

    // const keyboardWhite = meshs.find(child => child.name === 'keyboard_white');
    // const keyboardBlack = meshs.find(child => child.name === 'keyboard_black');
    return (
        <mesh position={[-0.25, 0, -1]}>
            <primitive
                ref={piano}
                object={result.scene}
                onPointerEnter={handleOnHoverKeys}
            />
        </mesh>
    );
}

export default Piano;
