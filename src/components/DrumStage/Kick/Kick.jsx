import { useState } from "react";
import "./Kick.css";

const Kick = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.kickAnimationTimer);

        window.kickAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 140);

    };

    return (

        <div
            className={`kick-drum ${active ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Kick Drum"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >
            <div className="kick-shadow" />

<div className="kick-shell">

    <div className="kick-rim outer-rim" />

    <div className="kick-head">

        <div className="kick-logo-ring">

            <div className="kick-port" />

        </div>

    </div>

    <div className="kick-rim inner-rim" />

    <div className="kick-lugs">

        {Array.from({ length: 10 }).map((_, index) => (

            <span
                key={index}
                className={`lug lug-${index + 1}`}
            />

        ))}

    </div>

</div>

        </div>
    );
};

export default Kick;