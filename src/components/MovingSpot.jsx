import { Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';

function MovingSpot({ vec = new Vector3(), ...props }) {
    return (
        <SpotLight
            castShadow
            penumbra={1}
            distance={10}
            angle={0.5}
            attenuation={4}
            anglePower={4}
            intensity={2}
            {...props}
        />
    );
}

export default MovingSpot;
