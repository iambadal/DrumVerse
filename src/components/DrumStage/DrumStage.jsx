import "./DrumStage.css";

import Stage from "./Stage/Stage";
import PerformanceZone from "./Stage/PerformanceZone/PerformanceZone";
import LeftPanel from "./Stage/UI/LeftPanel/LeftPanel";
import RightPanel from "./Stage/UI/RightPanel/RightPanel";
import KeyboardBar from "./Stage/UI/KeyboardBar/KeyboardBar";
import StudioLayout from "./Stage/StudioLayout/StudioLayout";
import DrumLayer from "./DrumLayer/DrumLayer";
import PerformanceStage from "./Stage/PerformanceStage/PerformanceStage";

const DrumStage = () => {

    return (

        <section className="drum-stage">
            <Stage>

        <StudioLayout

            left={<LeftPanel />}

            center={
                <PerformanceZone>
                    <PerformanceStage>
                      <DrumLayer/>
                    </PerformanceStage>
                </PerformanceZone>

            }

            right={<RightPanel />}

            bottom={<KeyboardBar />}

        />

</Stage>
        </section>

    );

};

export default DrumStage;