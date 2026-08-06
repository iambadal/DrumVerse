const createAudioPool = (drumPads, poolSize = 6) => {

    const pool = {};

    drumPads.forEach((pad) => {

        console.log("Loading:", pad.name, pad.sound);

        pool[pad.key] = {

            index: 0,

            players: Array.from(

                { length: poolSize },

                () => {

                    const audio = new Audio();

                    audio.src = pad.sound;

                    audio.preload = "auto";

                    audio.load();

                    audio.addEventListener("error", () => {

                        console.error(

                            "Failed to load:",

                            pad.name,

                            pad.sound

                        );

                    });

                    return audio;

                }

            ),

        };

    });

    return pool;

};

export default createAudioPool;