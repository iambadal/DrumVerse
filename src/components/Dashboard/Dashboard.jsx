import "./Dashboard.css";

import Navbar from "./Navbar/Navbar";
import StageFloor from "./StageFloor/StageFloor";
import StageLights from "./StageLights/StageLights";
import Spotlight from "./Spotlight/Spotlight";
import Audience from "./Audience/Audience";
import Smoke from "./Smoke/Smoke";
import Entrance from "./Entrance/Entrance";
import DrumStage from "../DrumStage/DrumStage";

const Dashboard = () => {
    return (
        <section className="dashboard" aria-labelledby="dashboard-title">
            <Entrance />

            <div className="dashboard-background">

                <div className="dashboard-vignette"></div>

                <div className="dashboard-gradient"></div>

                <div className="dashboard-overlay"></div>

            </div>

            <StageLights />
            <Spotlight />
            <Smoke />
            <Audience />
            <Navbar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <DrumStage />

                </div>

            </main>

            <StageFloor />

        </section>
    );
};

export default Dashboard;