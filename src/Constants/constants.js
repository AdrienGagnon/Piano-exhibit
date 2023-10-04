import { Vector3 } from 'three';

export const cameraStates = [
    {
        name: 'welcome',
        maxPolarAngle: Math.PI / 2 - 0.1,
        vectorPos: new Vector3(6.49, 0.84, 5.07),
        vectorLook: new Vector3(3, 0, 1),
        minZoom: 1,
        maxZoom: 2,
    },
    {
        name: 'around-piano',
        maxPolarAngle: Math.PI / 2 - 0.1,
        vectorPos: new Vector3(0, 1, 1.3),
        vectorLook: new Vector3(0, 0.5, 0),
        minZoom: 1,
        maxZoom: 2,
    },
];
