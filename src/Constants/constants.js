import { Vector3 } from 'three';

export const orbitControlsVectors = [
    {
        name: 'welcome',
        maxPolarAngle: Math.PI / 2 - 0.1,
        vectorPos: new Vector3(6.49, 0.84, 5.07),
        vectorLook: new Vector3(3, 0, 1),
    },
    {
        name: 'around-piano',
        maxPolarAngle: Math.PI / 2 - 0.1,
        vectorPos: new Vector3(0, 0, 0),
        vectorLook: new Vector3(0, 0, 0),
    },
];
