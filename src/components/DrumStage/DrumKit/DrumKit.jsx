import "./DrumKit.css";

import Kick from "../Kick/Kick";
import MidTom from "../MidTom/MidTom";

const DrumKit = () => {

    return (

        <div className="drum-kit">

            <div className="drum-origin"/>

            <div className="kick-slot">
                <Kick/>
            </div>
            <div className="midtom-slot">
              <div className="midtom-anchor">
                 <MidTom /> 
              </div>
            </div>

        </div>

    );

};

export default DrumKit;