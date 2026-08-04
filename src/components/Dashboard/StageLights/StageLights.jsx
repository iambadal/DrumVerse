import "./StageLights.css";

const fixtures = [
    {
        id: "left",
        delay: "0s",
    },
    {
        id: "left-center",
        delay: "-2.5s",
    },
    {
        id: "center",
        delay: "-5s",
    },
    {
        id: "right-center",
        delay: "-7.5s",
    },
    {
        id: "right",
        delay: "-10s",
    },
];

const StageLights = () => {
    return (
        <div className="stage-lights">

            <div className="lighting-rig"></div>

            {fixtures.map((fixture) => (

                <div
                    key={fixture.id}
                    className={`light-unit ${fixture.id}`}
                >

                    <div className="light-head">

                        <div className="light-lens"></div>

                    </div>

                    <div className="light-glow"></div>

                    <div className="light-beam" style={{ animationDelay: fixture.delay, }}>
                      <div className="beam-core"></div>
                      <div className="beam-fade"></div>
                    </div>
                </div>

            ))}

            <div className="ambient-top-glow"></div>

        </div>
    );
};

export default StageLights;