import { useEffect, useState } from "react";

import drumPads from "../data/drumPads";

import useAudio from "./useAudio";

const useKeyboard = () => {

    const { play } = useAudio();

    const [activeKey,setActiveKey]=useState("");

    useEffect(()=>{

        const handleKeyDown=(event)=>{

            const key=
                event.key.toUpperCase();

            const pad=
                drumPads.find(
                    item=>item.key===key
                );

            if(!pad) return;

            play(

                key,

                {

                    x:
                        window.innerWidth/2,

                    y:
                        window.innerHeight/2,

                }

            );

            setActiveKey(key);

        };

        const handleKeyUp=()=>{

            setActiveKey("");

        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        window.addEventListener(
            "keyup",
            handleKeyUp
        );

        return()=>{

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

            window.removeEventListener(
                "keyup",
                handleKeyUp
            );

        };

    },[play]);

    return activeKey;

};

export default useKeyboard;