import { useState } from "react";
import "./HighTom.css";

const HighTom = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.highTomAnimationTimer);

        window.highTomAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 125);

    };

    return (

        <div
            className={`high-tom ${active ? "active" : ""}`}
            role="button"
            aria-label="High Tom"
            tabIndex={0}
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="high-tom-shadow" />

            <div className="high-tom-shell">

                <div className="high-tom-rim outer-rim" />

                <div className="high-tom-head" />

                <div className="high-tom-rim inner-rim" />

                <div className="high-tom-lugs">

                    {Array.from({ length: 8 }).map((_, index) => (

                        <span
                            key={index}
                            className={`high-lug lug-${index + 1}`}
                        />

                    ))}

                </div>

                <div className="high-rack-connector" />

            </div>

        </div>

    );

};

export default HighTom;