import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/variables.css";
import "./index.css";
import "./styles/animations.css";

import { AudioProvider } from "./context/AudioContext";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <AudioProvider>

            <App />

        </AudioProvider>

    </React.StrictMode>

);