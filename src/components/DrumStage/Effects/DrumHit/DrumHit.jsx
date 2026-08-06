import "./DrumHit.css";

import { useAudioContext } from "../../../../context/AudioContext";

const DrumHit = () => {

    const { beat } = useAudioContext();

    return (

        <div

            className={

                `drum-hit ${beat.name.toLowerCase().replace(/\s/g,"-")}`

            }

            key={beat.id}

        />

    );

};

export default DrumHit;