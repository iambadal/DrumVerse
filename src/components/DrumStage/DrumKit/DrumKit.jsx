import "./DrumKit.css";

import drumKitImage from "../../../assets/images/drums/drumkit.png";

import HitAreas from "../HitAreas/HitAreas";

const DrumKit = ({ activeKeys }) => {

    return (

        <div className="drum-kit">

            <img
                className="drum-kit-image"
                src={drumKitImage}
                alt="Drum Kit"
                draggable={false}
            />

            <HitAreas activeKeys={activeKeys} />

        </div>

    );

};

export default DrumKit;