import { MeshReflectorMaterial } from '@react-three/drei';
import { useEffect, useRef } from 'react';

function Floor() {
    const floorRef = useRef();

    useEffect(() => {
        console.log(floorRef.current);
    }, []);
    return (
        <mesh receiveShadow ref={floorRef} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[10]} />
            <meshStandardMaterial color={'#050505'} />
            {/* <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={30}
                roughness={10}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
            /> */}
        </mesh>
    );
}

export default Floor;
