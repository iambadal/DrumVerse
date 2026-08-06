import crash from "../assets/sounds/crash.wav";
import hihat from "../assets/sounds/hihat.wav";
import hightom from "../assets/sounds/hightom.wav";
import midtom from "../assets/sounds/midtom.wav";
import racktom from "../assets/sounds/racktom.wav";
import ride from "../assets/sounds/ride.wav";
import snare from "../assets/sounds/snare.wav";
import floortom from "../assets/sounds/floortom.wav";
import kick from "../assets/sounds/kick.wav";

const drumPads = [

    {
        id: 1,
        key: "Q",
        code: "KeyQ",
        className: "crash-hitbox",
        name: "Crash",
        category: "Cymbal",
        color: "#FFD166",
        note: "♬",
        sound: crash,
        center: {
            x: 13,
            y: 11,
        },
    },

    {
        id: 2,
        key: "W",
        code: "KeyW",
        className: "hihat-hitbox",
        name: "Hi-Hat",
        category: "Cymbal",
        color: "#F4D35E",
        note: "♫",
        sound: hihat,
        center: {
            x: 22,
            y: 26,
        },
    },

    {
        id: 3,
        key: "E",
        code: "KeyE",
        className: "hightom-hitbox",
        name: "High Tom",
        category: "Tom",
        color: "#4CC9F0",
        note: "♪",
        sound: hightom,
        center: {
            x: 42,
            y: 33,
        },
    },

    {
        id: 4,
        key: "R",
        code: "KeyR",
        className: "midtom-hitbox",
        name: "Mid Tom",
        category: "Tom",
        color: "#4895EF",
        note: "♪",
        sound: midtom,
        center: {
            x: 54,
            y: 33,
        },
    },

    {
        id: 5,
        key: "T",
        code: "KeyT",
        className: "racktom-hitbox",
        name: "Rack Tom",
        category: "Tom",
        color: "#4361EE",
        note: "♪",
        sound: racktom,
        center: {
            x: 66,
            y: 33,
        },
    },

    {
        id: 6,
        key: "Y",
        code: "KeyY",
        className: "ride-hitbox",
        name: "Ride",
        category: "Cymbal",
        color: "#F8961E",
        note: "♬",
        sound: ride,
        center: {
            x: 86,
            y: 11,
        },
    },

    {
        id: 7,
        key: "A",
        code: "KeyA",
        className: "snare-hitbox",
        name: "Snare",
        category: "Snare",
        color: "#F72585",
        note: "♩",
        sound: snare,
        center: {
            x: 33,
            y: 54,
        },
    },

    {
        id: 8,
        key: "S",
        code: "KeyS",
        className: "floortom-hitbox",
        name: "Floor Tom",
        category: "Tom",
        color: "#43AA8B",
        note: "♪",
        sound: floortom,
        center: {
            x: 72,
            y: 50,
        },
    },

    {
        id: 9,
        key: "SPACE",
        code: "Space",
        className: "kick-hitbox",
        name: "Kick",
        category: "Bass",
        color: "#7209B7",
        note: "♩",
        sound: kick,
        center: {
            x: 50,
            y: 67,
        },
    },

];

export default drumPads;