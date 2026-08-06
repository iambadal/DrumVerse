import "./DrumEngine.css";

import { useEffect } from "react";

import drumConfig from "./drumConfig";

const DrumEngine = () => {

    useEffect(() => {

        const handleKeyDown = (event) => {

            const drum = drumConfig.find((item) => {

                if (item.key === " ") {

                    return event.code === "Space";

                }

                return item.key.toLowerCase() === event.key.toLowerCase();

            });

            if (!drum) return;

            console.log("Play:", drum.id);

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, []);

    return null;

};

export default DrumEngine;