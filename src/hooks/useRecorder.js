import { useRef, useState, useCallback } from "react";

const useRecorder = () => {

    const startTime = useRef(null);

    const [events, setEvents] = useState([]);

    const [recording, setRecording] = useState(false);

    const startRecording = useCallback(() => {

        startTime.current = performance.now();

        setEvents([]);

        setRecording(true);

    }, []);

    const stopRecording = useCallback(() => {

        setRecording(false);

    }, []);

    const record = useCallback((pad) => {

        if (!recording) return;

        setEvents(prev => [

            ...prev,

            {

                key: pad.key,

                name: pad.name,

                category: pad.category,

                timestamp:

                    performance.now()

                    - startTime.current,

            }

        ]);

    }, [recording]);

    return {

        events,

        recording,

        startRecording,

        stopRecording,

        record,

    };

};

export default useRecorder;