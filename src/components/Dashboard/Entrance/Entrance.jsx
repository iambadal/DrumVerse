import "./Entrance.css";
import { useEffect, useState } from "react";

const ENTRANCE_DURATION = 3200;

const Entrance = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        const timer = window.setTimeout(() => {

            setVisible(false);

        }, ENTRANCE_DURATION);

        return () => window.clearTimeout(timer);

    }, []);

    if (!visible) {

        return null;

    }

    return (

        <div
            className="stage-entrance"
            aria-hidden="true"
        >

            <div className="entrance-darkness" />

            <div className="entrance-vignette" />

            <div className="entrance-light-reveal" />

            <div className="entrance-noise" />

        </div>

    );

};

export default Entrance;