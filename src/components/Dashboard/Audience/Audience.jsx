import "./Audience.css";

const rows = [
    {
        className: "audience-row row-1",
        lights: 18,
    },
    {
        className: "audience-row row-2",
        lights: 22,
    },
    {
        className: "audience-row row-3",
        lights: 26,
    },
];

const Audience = () => {
    return (
        <div className="audience" aria-hidden="true" data-performance="idle">
            <div className="audience-haze" />

            <div className="audience-gradient" />

            {rows.map((row) => (

                <div
                    key={row.className}
                    className={row.className}
                >

                    {Array.from({
    length: row.lights,
}).map((_, index) => (

    <span
        key={index}
        className={`audience-light light-${(index % 6) + 1}`}
        style={{
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${5 + (index % 5)}s`,
        }}
    />

))}

                </div>

            ))}

        </div>
    );
};

export default Audience;