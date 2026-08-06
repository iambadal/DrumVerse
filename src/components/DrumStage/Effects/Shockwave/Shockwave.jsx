import "./Shockwave.css";

import { useAudioContext } from "../../../../context/AudioContext";

const Shockwave = () => {

    const { beat } = useAudioContext();

    return (

        <div

            key={beat.id}

            className="shockwave"

            style={{

                left: beat.origin.x,

                top: beat.origin.y,

                "--shockwave-color": beat.color,

            }}

        />

    );

};

export default Shockwave;