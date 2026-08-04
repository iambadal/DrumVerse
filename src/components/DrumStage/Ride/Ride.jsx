import { useState } from "react";
import "./Ride.css";

const Ride = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.rideAnimationTimer);

        window.rideAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 220);

    };

    return (

        <div
            className={`ride ${active ? " active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Ride Cymbal"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="ride-shadow" />

            <div className="ride-cymbal">

                <div className="ride-grooves" />

                <div className="ride-bell" />

                <div className="ride-felt" />

                <div className="ride-wing-nut" />

            </div>

            <div className="ride-boom-arm">

                <div className="ride-boom-joint" />

            </div>

            <div className="ride-stand">

                <div className="ride-height-clamp" />

            </div>

            <div className="ride-tripod">

                <div className="ride-leg left-leg">
                    <div className="ride-foot" />
                </div>

                <div className="ride-leg center-leg">
                    <div className="ride-foot" />
                </div>

                <div className="ride-leg right-leg">
                    <div className="ride-foot" />
                </div>

            </div>

        </div>

    );

};

export default Ride;