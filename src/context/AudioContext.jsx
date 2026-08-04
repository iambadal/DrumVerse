import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

import drumPads from "../data/drumPads";
import { preloadSounds } from "../utils/preloadSounds";

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {

    const audioMap = useMemo(
        () => preloadSounds(drumPads),
        []
    );

    const [volume, setVolume] = useState(0.8);

    const [muted, setMuted] = useState(false);

    /*
    ==========================================
    Beat Event
    ==========================================
    */

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

            const audio = audioMap[key];

            if (!audio) return;

            const clone = audio.cloneNode();

            clone.currentTime = 0;

            clone.volume = muted
                ? 0
                : volume;

            clone.play().catch(() => {});

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

        [audioMap, muted, volume]

    );

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

            }}

        >

            {children}

        </AudioContext.Provider>

    );

};

export const useAudioContext = () =>
    useContext(AudioContext);