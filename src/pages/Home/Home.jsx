import "./Home.css";

import AnimatedBackground from "../../components/Background/AnimatedBackground/AnimatedBackground";
import CursorGlow from "../../components/Effects/CursorGlow/CursorGlow";

import Dashboard from "../../components/Dashboard/Dashboard";

const Home = () => {
    return (
        <main className="home">

            <AnimatedBackground />

            <CursorGlow />

            <Dashboard />

        </main>
    );
};

export default Home;