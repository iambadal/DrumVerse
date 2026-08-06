import { useState, useCallback } from "react";

const useDrumState = () => {

    const [activePad, setActivePad] = useState(null);

    const [lastPad, setLastPad] = useState(null);

    const [hitCount, setHitCount] = useState(0);

    const hit = useCallback((pad) => {

        setActivePad(pad);

        setLastPad({

            ...pad,

            timestamp: Date.now(),

        });

        setHitCount(prev => prev + 1);

    }, []);

    const clear = useCallback(() => {

        setActivePad(null);

    }, []);

    return {

        activePad,

        lastPad,

        hitCount,

        hit,

        clear,

    };

};

export default useDrumState;