import { useState } from 'react';

export const useCameraPosition = (zoomInput, focusInput) => {
    const [zoom, setZoom] = useState(zoomInput);
    const [focus, setFocus] = useState(focusInput);

    const cameraPosition = { zoom, focus };
    const setCameraPosition = (newZoom, newfocus) => {
        setZoom(newZoom);
        setFocus(newfocus);
    };

    return [cameraPosition, setCameraPosition];
};
