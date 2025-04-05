import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection = () => {
    const [mouseX, setMouseX] = useState(window.innerWidth / 2); // Start at center

    // Set the height manually in the backend (adjust as needed)
    const customHeight = 500; // Change this value to move the section down

    // Handle mouse movement tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX(e.clientX);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Get screen width and calculate the transition ratio
    const screenWidth = window.innerWidth;
    let transitionRatio = mouseX / screenWidth; // Value between 0 (left) and 1 (right)

    // Smooth transition logic
    let adjustedRatio = 0.5; // Default transition value in the middle

    if (transitionRatio < 0.3) {
        adjustedRatio = 0; // Full Designer Side
    } else if (transitionRatio > 0.7) {
        adjustedRatio = 1; // Full Coder Side
    } else {
        adjustedRatio = (transitionRatio - 0.3) / 0.4; // Smooth transition between 30% and 70%
    }

    return (
        <div className="relative w-full flex flex-col transition-all duration-700 ease-out">
            {/* Top Section: Split Background (Height is adjustable in the backend) */}
            <div
                className="relative w-full flex items-center justify-center pb-0 mb-0"
                style={{ height: `${customHeight}px`, paddingTop: "80px" }} // Adjust height & spacing
            >
                {/* Left Side - Designer */}
                <div
                    className="w-1/2 h-full flex items-center justify-end pr-16 text-5xl font-bold uppercase pb-0 mb-0 transition-all duration-700 ease-out"
                    style={{
                        backgroundColor: `rgb(${255 - adjustedRatio * 255}, ${255 - adjustedRatio * 255}, ${255 - adjustedRatio * 255})`,
                        color: `rgb(${adjustedRatio * 255}, ${adjustedRatio * 255}, ${adjustedRatio * 255})`,
                    }}
                >
                    Designer
                </div>

                {/* Center Profile Image */}
                <div className="absolute flex items-center justify-center">
                    <div className="relative w-[400px] h-[400px] overflow-hidden">
                        {/* Left Image (Designer) */}
                        <img
                            src="/IMG_1693.png"
                            alt="Designer"
                            className="absolute left-0 top-0 w-full h-full object-cover"
                            style={{
                                clipPath: `polygon(0 0, ${transitionRatio * 100}% 0, ${transitionRatio * 100}% 100%, 0 100%)`,
                                transition: "clip-path 0.5s ease-out"
                            }}
                        />

                        {/* Right Image (Coder) */}
                        <img
                            src="/Screenshot 2025-03-17 at 11.25.36 PM.png"
                            alt="Coder"
                            className="absolute left-0 top-0 w-full h-full object-cover"
                            style={{
                                clipPath: `polygon(${transitionRatio * 100}% 0, 100% 0, 100% 100%, ${transitionRatio * 100}% 100%)`,
                                transition: "clip-path 0.5s ease-out"
                            }}
                        />
                    </div>
                </div>

                {/* Right Side - Coder */}
                <div
                    className="w-1/2 h-full flex items-center justify-start pl-16 text-5xl font-bold uppercase pb-0 mb-0 transition-all duration-700 ease-out"
                    style={{
                        backgroundColor: `rgb(${adjustedRatio * 255}, ${adjustedRatio * 255}, ${adjustedRatio * 255})`,
                        color: `rgb(${255 - adjustedRatio * 255}, ${255 - adjustedRatio * 255}, ${255 - adjustedRatio * 255})`,
                    }}
                >
                    &lt;Coder&gt;
                </div>
            </div>

            {/* Thick Horizontal Line with Shadow */}
            <div className="w-full border-t-8 border-white-700 my-0 shadow-lg"></div>
        </div>
    );
};

export default HeroSection;