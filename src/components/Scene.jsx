import { useEffect, useState, useRef, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import {
    Selection,
    Select,
    EffectComposer,
    Outline,
} from '@react-three/postprocessing';
import Piano from './Objects/Piano';
import MovingSpot from './MovingSpot';
import Env from './Env';
import Floor from './Objects/Floor';
import Pannel from './Objects/Pannel';

import Controls from './Controls';

import { orbitControlsVectors } from '../Constants/constants';
import whooshSound from '../assets/sounds/whoosh_sound.mp3';

export default function Scene() {
    const pianoRef = useRef();
    const pannelRef = useRef();
    const pianoLight = useRef();
    const orbitControlsRef = useRef();

    const [pannelHovered, setPannelHover] = useState(null);
    const [pianoHovered, setPianoHover] = useState(null);
    const [inTransition, setInTransition] = useState(false);
    const [activePosition, setActivePosition] = useState(0);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        setInTransition(true);
        switch (activePosition) {
            case 0:
                console.log('welcome');
                if (!firstRender) {
                    new Audio(whooshSound).play();
                }
                break;
            case 1:
                console.log('to around piano');
                new Audio(whooshSound).play();
                break;
        }
        firstRender && setFirstRender(false);
    }, [activePosition]);
    return (
        <>
            <group
                onPointerMissed={() => {
                    console.log('missed');
                    setActivePosition(0);
                }}
            >
                <Selection>
                    <Select enabled={pianoHovered}>
                        <Piano
                            pianoRef={pianoRef}
                            setPianoHover={setPianoHover}
                            setActivePosition={setActivePosition}
                        />
                    </Select>
                    <Select enabled={pannelHovered}>
                        <Pannel
                            pannelRef={pannelRef}
                            setPannelHover={setPannelHover}
                            setActivePosition={setActivePosition}
                        />
                    </Select>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline
                            blur
                            visibleEdgeColor="white"
                            edgeStrength={100}
                            width={1000}
                        />
                    </EffectComposer>
                </Selection>
            </group>

            {/* <Env /> */}
            <Floor />
            {/* <ambientLight intensity={0.5} /> */}
            <MovingSpot
                color="#FFFFFF"
                position={[2, 5, 2]}
                lightRef={pianoLight}
            />
            {/* <MovingSpot
                color="#FFFFFF"
                position={[5, 5, 2.5]}
                lightRef={pannelLight}
            /> */}
            {/* <OrbitControls
                ref={orbitControlsRef}
                maxPolarAngle={
                    inTransition
                        ? 2
                        : cameraStates[activePosition].maxPolarAngle
                }
                target={cameraStates[activePosition].vector}
                minZoom={cameraStates[activePosition].minZoom}
                maxZoom={cameraStates[activePosition].maxZoom}
            /> */}
            <axesHelper args={[3]}></axesHelper>
            {/* <ContactShadows
                resolution={1024}
                frames={1}
                position={[0, -1.16, 0]}
                scale={15}
                blur={0.5}
                opacity={1}
                far={20}
            /> */}
            {/* <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur />
            </EffectComposer> */}
            {/* <ambientLight intensity={0.1} /> */}
            {/* <directionalLight position={[0, 0, 5]} /> */}
            <Controls
                activePosition={activePosition}
                inTransition={inTransition}
                setInTransition={setInTransition}
            />
        </>
    );
}
