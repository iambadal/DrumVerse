import { useState } from "react";
import "./HiHat.css";

const HiHat = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.hihatAnimationTimer);

        window.hihatAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 120);

    };

    return (

        <div
            className={`hihat ${active ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Hi Hat"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="hihat-shadow" />

            <div className="top-cymbal">

                <div className="cymbal-grooves" />

                <div className="cymbal-bell" />

                <div className="top-felt" />

                <div className="wing-nut" />

            </div>

            <div className="center-rod" />

            <div className="stand-tube">

                <div className="spring-housing" />

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

            <div className="pedal-system">

                <div className="pedal-base" />

                <div className="footboard" />

                <div className="chain-link" />

            </div>

            <div className="bottom-cymbal">

                <div className="cymbal-grooves" />

                <div className="cymbal-bell" />

                <div className="bottom-felt" />

            </div>

        </div>

    );

};

export default HiHat;