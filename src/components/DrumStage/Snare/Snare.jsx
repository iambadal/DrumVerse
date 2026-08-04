import { useState } from "react";
import "./Snare.css";

const Snare = () => {

    const [active, setActive] = useState(false);

    const playAnimation = () => {

        setActive(true);

        window.clearTimeout(window.snareAnimationTimer);

        window.snareAnimationTimer = window.setTimeout(() => {

            setActive(false);

        }, 110);

    };

    return (

        <div
            className={`snare-drum ${active ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Snare Drum"
            onMouseDown={playAnimation}
            onTouchStart={playAnimation}
        >

            <div className="snare-shadow" />

            <div className="snare-shell">

                <div className="snare-rim outer-rim" />

                <div className="snare-head" />

                <div className="snare-rim inner-rim" />

                <div className="snare-lugs">

                    {Array.from({ length: 10 }).map((_, index) => (

                        <span
                            key={index}
                            className={`snare-lug lug-${index + 1}`}
                        />

                    ))}

                </div>

                <div className="throw-off" />

                <div className="butt-plate" />

                <div className="snare-wires" />

                <div className="snare-basket">

                    <div className="basket-arm left-arm" />

                    <div className="basket-arm center-arm" />

                    <div className="basket-arm right-arm" />

                </div>

            </div>

        </div>

    );

};

export default Snare;