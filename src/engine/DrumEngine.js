const DrumEngine = (

    play,

    drumState,

    recorder

) => {

    const hitDrum = (

        pad,

        origin

    ) => {

        drumState.hit(pad);

        recorder.record(pad);

        play(

            pad.key,

            origin

        );

    };

    return {

        hitDrum,

    };

};

export default DrumEngine;