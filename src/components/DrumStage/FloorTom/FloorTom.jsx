import { useState } from "react";
import "./FloorTom.css";

const FloorTom = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.floorTomAnimationTimer);

        window.floorTomAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 160);

    };

    return (

        <div
            className={`floor-tom ${active ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Floor Tom"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="floor-tom-shadow" />

            <div className="floor-tom-shell">

                <div className="floor-tom-rim outer-rim" />

                <div className="floor-tom-head" />

                <div className="floor-tom-rim inner-rim" />

                <div className="floor-tom-lugs">

                    {Array.from({ length: 8 }).map((_, index) => (

                        <span
                            key={index}
                            className={`floor-lug lug-${index + 1}`}
                        />

                    ))}

                </div>

                <div className="floor-brackets">

                    <div className="bracket left-bracket" />

                    <div className="bracket front-bracket" />

                    <div className="bracket right-bracket" />

                </div>

            </div>

            <div className="floor-leg left-leg">

                <div className="leg-foot" />

            </div>

            <div className="floor-leg front-leg">

                <div className="leg-foot" />

            </div>

            <div className="floor-leg right-leg">

                <div className="leg-foot" />

            </div>

        </div>

    );

};

export default FloorTom;