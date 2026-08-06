import "./DrumLayer.css";

import DrumKit from "../DrumKit/DrumKit";

import useKeyboard from "../../../hooks/useKeyboard";

const DrumLayer = () => {

    const activeKeys = useKeyboard();

    return (

        <div className="drum-layer">

            <DrumKit activeKeys={activeKeys} />

        </div>

    );

};

export default DrumLayer;