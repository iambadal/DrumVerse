import "./Smoke.css";

const Smoke = () => {
    return (
        <div className="stage-smoke" aria-hidden="true" data-performance="idle">
            <div className="smoke-layer smoke-back" />

            <div className="smoke-layer smoke-upper" />

            <div className="smoke-layer smoke-center" />

            <div className="smoke-layer smoke-lower" />

            <div className="smoke-haze" />
        </div>
    );
};

export default Smoke;