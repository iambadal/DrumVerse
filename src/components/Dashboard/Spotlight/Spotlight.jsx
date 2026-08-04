import "./Spotlight.css";

const Spotlight = () => {
    return (
        <div
            className="spotlight"
            aria-hidden="true"
        >
            <div className="spotlight-head">

                <div className="spotlight-lens" />

            </div>

            <div className="spotlight-arm" />

            <div className="spotlight-glow" />

            <div className="spotlight-cone">

                <div className="spotlight-core" />

                <div className="spotlight-soft" />

            </div>

            <div className="spotlight-focus" />

        </div>
    );
};

export default Spotlight;