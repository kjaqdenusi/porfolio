// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "#000000" } },
                particles: {
                    number: { value: 80 },
                    size: { value: 3 },
                    links: { enable: true, color: "#ffffff" },
                    move: { enable: true, speed: 1 },
                    color: { value: "#ffffff" },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                },
            }}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
};

export default ParticlesBackground;