import { useEffect, useRef, useState } from "react";

const useMetronome = () => {

    const [bpm, setBpm] = useState(120);

    const [playing, setPlaying] = useState(false);

    const [beat, setBeat] = useState(0);

    const timer = useRef(null);

    useEffect(() => {

        if (!playing) return;

        const interval = 60000 / bpm;

        timer.current = setInterval(() => {

            setBeat(prev => prev + 1);

        }, interval);

        return () => {

            clearInterval(timer.current);

        };

    }, [playing, bpm]);

    const start = () => {

        setBeat(0);

        setPlaying(true);

    };

    const stop = () => {

        clearInterval(timer.current);

        setPlaying(false);

    };

    const toggle = () => {

        playing ? stop() : start();

    };

    return {

        bpm,

        beat,

        playing,

        setBpm,

        start,

        stop,

        toggle,

    };

};

export default useMetronome;