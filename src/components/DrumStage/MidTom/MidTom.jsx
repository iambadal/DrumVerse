import { useState } from "react";
import "./MidTom.css";

const MidTom = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.midTomAnimationTimer);

        window.midTomAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 140);

    };

    return (

        <div
            className={`mid-tom ${active ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Mid Tom"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="mid-tom-shadow" />

            <div className="mid-tom-shell">

                <div className="mid-tom-rim outer-rim" />

                <div className="mid-tom-head" />

                <div className="mid-tom-rim inner-rim" />

                <div className="mid-tom-lugs">

                    {Array.from({ length: 8 }).map((_, index) => (

                        <span
                            key={index}
                            className={`mid-lug lug-${index + 1}`}
                        />

                    ))}

                </div>

                <div className="rack-connector" />

            </div>

        </div>

    );

};

export default MidTom;