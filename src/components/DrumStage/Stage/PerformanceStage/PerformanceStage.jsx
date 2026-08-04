import "./PerformanceStage.css";

const PerformanceStage = ({ children }) => {

    return (

        <section className="performance-stage">

            <div className="stage-shadow"/>

            <div className="stage-surface"/>

            <div className="stage-border"/>

            <div className="instrument-area">

                {children}

            </div>

        </section>

    );

};

export default PerformanceStage;