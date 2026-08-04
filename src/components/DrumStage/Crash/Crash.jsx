import { useState } from "react";
import "./Crash.css";

const Crash = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.crashAnimationTimer);

        window.crashAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 180);

    };

    return (

        <div
            className={`crash ${active ? " active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Crash Cymbal"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="crash-shadow" />

            <div className="crash-cymbal">

                <div className="crash-grooves" />

                <div className="crash-bell" />

                <div className="crash-felt" />

                <div className="crash-wing-nut" />

            </div>

            <div className="boom-arm">

                <div className="boom-joint" />

            </div>

            <div className="stand-tube">

                <div className="height-clamp" />

            </div>

            <div className="tripod">

                <div className="tripod-leg left-leg">
                    <div className="rubber-foot" />
                </div>

                <div className="tripod-leg center-leg">
                    <div className="rubber-foot" />
                </div>

                <div className="tripod-leg right-leg">
                    <div className="rubber-foot" />
                </div>

            </div>

        </div>

    );

};

export default Crash;