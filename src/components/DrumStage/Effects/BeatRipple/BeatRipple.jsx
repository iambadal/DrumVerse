import "./BeatRipple.css";

import { useAudioContext } from "../../../../context/AudioContext";

const BeatRipple = () => {

    const { beat } = useAudioContext();

    return (

        <div
            key={beat.id}
            className="beat-ripple"
            style={{
                left: beat.origin.x,
                top: beat.origin.y,
                "--ripple-color": beat.color,
            }}
        />

    );

};

export default BeatRipple;