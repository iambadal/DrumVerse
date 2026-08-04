import { memo } from "react";
import { motion } from "framer-motion";

import "./AnimatedBackground.css";

const blobs = [
    {
        id: 1,
        className: "blob blob-1",
        size: 420,
        duration: 18,
        x: [0, 80, -50, 0],
        y: [0, -60, 40, 0],
    },
    {
        id: 2,
        className: "blob blob-2",
        size: 360,
        duration: 22,
        x: [0, -70, 60, 0],
        y: [0, 50, -40, 0],
    },
    {
        id: 3,
        className: "blob blob-3",
        size: 320,
        duration: 20,
        x: [0, 60, -30, 0],
        y: [0, 40, -70, 0],
    },
];

const particles = Array.from({ length: 35 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 12,
    size: 3 + Math.random() * 5,
}));

const AnimatedBackground = () => {
    return (
        <div className="animated-background">

            <div className="background-grid" />

            <div className="background-noise" />

            <div className="gradient-overlay" />

            {blobs.map((blob) => (
                <motion.div
                    key={blob.id}
                    className={blob.className}
                    style={{
                        width: blob.size,
                        height: blob.size,
                    }}
                    animate={{
                        x: blob.x,
                        y: blob.y,
                        scale: [1, 1.08, 0.94, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="particle-layer">

                {particles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        className="particle"
                        style={{
                            left: particle.left,
                            width: particle.size,
                            height: particle.size,
                        }}
                        initial={{
                            y: "110vh",
                            opacity: 0,
                        }}
                        animate={{
                            y: "-20vh",
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

            </div>

            <motion.div
                className="pulse-ring pulse-ring-1"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.15, 0.05, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="pulse-ring pulse-ring-2"
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.12, 0.04, 0.12],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

        </div>
    );
};

export default memo(AnimatedBackground);