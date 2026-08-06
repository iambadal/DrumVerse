import "./HitAreas.css";

import drumPads from "../../../data/drumPads";
import { useAudioContext } from "../../../context/AudioContext";

const HitAreas = ({ activeKeys }) => {

    const {
        play,
        beat,
    } = useAudioContext();

    const handlePointerDown = (event, pad) => {

        play(
            pad.key,
            {
                x: event.clientX,
                y: event.clientY,
            }
        );

    };

    return (

        <div className="hit-areas">

            {

                drumPads.map((pad) => {

                    const isActive =
                        activeKeys.has(pad.key);

                    const isPlaying =
                        beat.key === pad.key;

                    return (

                        <button

                            key={pad.id}

                            data-id={pad.id}

                            data-key={pad.key}

                            data-name={pad.name}

                            data-category={pad.category}

                            className={`
                                hitbox
                                ${pad.className}
                                ${isActive ? "active" : ""}
                                ${isPlaying ? "playing" : ""}
                            `}

                            title={`${pad.name} (${pad.key})`}

                            aria-label={pad.name}

                            onPointerDown={(event) =>
                                handlePointerDown(event, pad)
                            }

                        />

                    );

                })

            }

        </div>

    );

};

export default HitAreas;