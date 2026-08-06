import "./LeftPanel.css";

import CurrentDrum from "./CurrentDrum/CurrentDrum";
import SessionStats from "./SessionStats/SessionStats";
import RecordingStatus from "./RecordingStatus/RecordingStatus";
import MetronomeStatus from "./MetronomeStatus/MetronomeStatus";
import RecentHits from "./RecentHits/RecentHits";

const LeftPanel = () => {

    return (

        <aside className="left-panel">

            <div className="left-panel-header">

                PERFORMANCE

            </div>

            <CurrentDrum />

            <SessionStats />

            <RecordingStatus />

            <MetronomeStatus />

            <RecentHits />

        </aside>

    );

};

export default LeftPanel;