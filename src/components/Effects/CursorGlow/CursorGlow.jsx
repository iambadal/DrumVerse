import { useEffect, useRef } from "react";
import "./CursorGlow.css";

const CursorGlow = () => {
    const glowRef = useRef(null);

    const mouse = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const position = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) return;

        const handleMouseMove = (event) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationId;

        const animate = () => {

            position.current.x +=
                (mouse.current.x - position.current.x) * 0.12;

            position.current.y +=
                (mouse.current.y - position.current.y) * 0.12;

            glow.style.transform = `
                translate3d(
                    ${position.current.x}px,
                    ${position.current.y}px,
                    0
                )
                translate(-50%, -50%)
            `;

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            cancelAnimationFrame(animationId);
        };
    }, []);

    useEffect(() => {

        const interactiveElements = document.querySelectorAll(
            "button, a, input, .drum-pad"
        );

        const glow = glowRef.current;

        if (!glow) return;

        const enter = () => {
            glow.classList.add("cursor-active");
        };

        const leave = () => {
            glow.classList.remove("cursor-active");
        };

        interactiveElements.forEach((element) => {
            element.addEventListener("mouseenter", enter);
            element.addEventListener("mouseleave", leave);
        });

        return () => {
            interactiveElements.forEach((element) => {
                element.removeEventListener("mouseenter", enter);
                element.removeEventListener("mouseleave", leave);
            });
        };

    }, []);

    return (
        <>
            <div
                ref={glowRef}
                className="cursor-glow"
            />

            <div className="cursor-dot" />
        </>
    );
};

export default CursorGlow;