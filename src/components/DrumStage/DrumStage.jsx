import "./DrumStage.css";

import Stage from "./Stage/Stage";
import StudioLayout from "./Stage/StudioLayout/StudioLayout";

import PerformanceZone from "./Stage/PerformanceZone/PerformanceZone";
import PerformanceStage from "./Stage/PerformanceStage/PerformanceStage";

import LeftPanel from "./Stage/UI/LeftPanel/LeftPanel";
import RightPanel from "./Stage/UI/RightPanel/RightPanel";
import KeyboardBar from "./Stage/UI/KeyboardBar/KeyboardBar";

import DrumLayer from "./DrumLayer/DrumLayer";

import BeatRipple from "./Effects/BeatRipple/BeatRipple";
import BeatGlow from "./Effects/BeatGlow/BeatGlow";
import Shockwave from "./Effects/Shockwave/Shockwave";

const DrumStage = () => {

    return (

        <section className="drum-stage">

            <Stage>

                <StudioLayout

                    left={<LeftPanel />}

                    center={

                        <PerformanceZone>

                            <PerformanceStage>

                                <DrumLayer />

                            </PerformanceStage>

                        </PerformanceZone>

                    }

                    right={<RightPanel />}

                    bottom={<KeyboardBar />}

                />

                <BeatRipple />

            </Stage>

            <BeatGlow />

            <Shockwave />

        </section>

    );

};

export default DrumStage;