import { useRef, useState, useCallback } from "react";

const usePlayback = (play) => {

    const timers = useRef([]);

    const [playing, setPlaying] = useState(false);

    const playRecording = useCallback((events) => {

        if (!events.length) return;

        setPlaying(true);

        timers.current = events.map((event) =>

            setTimeout(() => {

                play(event.key);

            }, event.timestamp)

        );

        const lastEvent = events[events.length - 1];

        setTimeout(() => {

            setPlaying(false);

        }, lastEvent.timestamp + 100);

    }, [play]);

    const stopPlayback = useCallback(() => {

        timers.current.forEach(clearTimeout);

        timers.current = [];

        setPlaying(false);

    }, []);

    return {

        playing,

        playRecording,

        stopPlayback,

    };

};

export default usePlayback;