import { createContext, useCallback, useContext, useMemo, useState,} from "react";

import drumPads from "../data/drumPads";
import useDrumState from "../hooks/useDrumState";
import useRecorder from "../hooks/useRecorder";
import createAudioPool from "../utils/createAudioPool";
import useMetronome from "../hooks/useMetronome";
import usePlayback from "../hooks/usePlayback";

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const drumState = useDrumState();
    const recorder = useRecorder();
    const metronome = useMetronome();

const audioPool = useMemo(

    () => createAudioPool(drumPads),

    []

);

    const [volume, setVolume] = useState(0.8);

    const [muted, setMuted] = useState(false);


    const [beat, setBeat] = useState({

    id: 0,

    key: "",

    name: "",

    category: "",

    color: "#7C3AED",

    note: "♪",

    timestamp: 0,

    origin: {

        x: window.innerWidth / 2,

        y: window.innerHeight / 2,

    },

});

    /*
    ==========================================
    Play Sound
    ==========================================
    */

    const play = useCallback(

        (
            key,

            origin = {

                x: window.innerWidth / 2,

                y: window.innerHeight / 2,

            }

        ) => {

            const pad = drumPads.find(
                item => item.key === key
            );

            if (!pad) return;
            drumState.hit(pad);
            recorder.record(pad);

            const pool = audioPool[key];

if (!pool) {

    console.error("No audio pool found for:", key);

    return;

}

const player = pool.players[pool.index];

player.currentTime = 0;

player.volume = muted ? 0 : volume;

player.play().catch((err) => {
    console.error("Audio Play Error:", err);
});
pool.index =

    (pool.index + 1)

    % pool.players.length;

            /*
            Publish Beat Event
            */

            setBeat(prev => ({

    id: prev.id + 1,

    key: pad.key,

    name: pad.name,

    category: pad.category,

    color: pad.color,

    note: pad.note,

    timestamp: Date.now(),

    origin,

}));

        },

        [audioPool, muted, volume, drumState, recorder]
    );

    const playback = usePlayback(play);

    /*
    ==========================================
    Controls
    ==========================================
    */

    const toggleMute = () => {

        setMuted(prev => !prev);

    };

    /*
    ==========================================
    Provider
    ==========================================
    */

    return (

        <AudioContext.Provider
    value={{

        play,

        volume,

        muted,

        setVolume,

        toggleMute,

        beat,

        drumState,

        recorder,

        metronome,

        playback,

    }}
>
            {children}

        </AudioContext.Provider>

    );

};

export const useAudioContext = () =>
    useContext(AudioContext);