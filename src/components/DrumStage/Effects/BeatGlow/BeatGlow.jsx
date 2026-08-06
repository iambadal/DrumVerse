import "./BeatGlow.css";

import { useAudioContext } from "../../../../context/AudioContext";

const BeatGlow = () => {

    const { beat } = useAudioContext();

    return (

        <div

            key={beat.id}

            className="beat-glow"

            style={{

                left: beat.origin.x,

                top: beat.origin.y,

                "--glow-color": beat.color,

            }}

        />

    );

};

export default BeatGlow;