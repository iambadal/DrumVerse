import { useEffect, useState } from "react";

import drumPads from "../data/drumPads";

import useAudio from "./useAudio";

const useKeyboard = () => {

    const { play } = useAudio();

    const [activeKeys, setActiveKeys] = useState(new Set());

    useEffect(() => {

        const handleKeyDown = (event) => {

            const pad = drumPads.find(

                item => item.code === event.code

            );

            if (!pad) return;

            setActiveKeys(prev => {

                const next = new Set(prev);

                next.add(pad.key);

                return next;

            });

            const hitbox = document.querySelector(

                `.${pad.className}`

            );

            let origin = {

                x: window.innerWidth / 2,

                y: window.innerHeight / 2,

            };

            if (hitbox) {

                const rect = hitbox.getBoundingClientRect();

                origin = {

                    x: rect.left + rect.width / 2,

                    y: rect.top + rect.height / 2,

                };

            }

            play(

                pad.key,

                origin

            );

        };

        const handleKeyUp = (event) => {

            const pad = drumPads.find(

                item => item.code === event.code

            );

            if (!pad) return;

            setActiveKeys(prev => {

                const next = new Set(prev);

                next.delete(pad.key);

                return next;

            });

        };

        window.addEventListener(

            "keydown",

            handleKeyDown

        );

        window.addEventListener(

            "keyup",

            handleKeyUp

        );

        return () => {

            window.removeEventListener(

                "keydown",

                handleKeyDown

            );

            window.removeEventListener(

                "keyup",

                handleKeyUp

            );

        };

    }, [play]);

    return activeKeys;

};

export default useKeyboard;