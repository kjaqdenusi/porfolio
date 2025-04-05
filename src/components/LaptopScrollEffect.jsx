import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
    { name: "Java", icon: "/Java_programming_language_logo.svg.png", level: 4 },
    { name: "Python", icon: "/Python-logo-notext.svg.png", level: 3 },
    { name: "C++", icon: "/ISO_C++_Logo.svg.png", level: 2 },
    { name: "JavaScript", icon: "/javascript-266x300.png", level: 4 },
    { name: "Swift", icon: "/swift-96x96_2x.png", level: 3 },
    { name: "React", icon: "/React-icon.svg.png", level: 4 },
    { name: "Vite", icon: "/Vitejs-logo.svg.png", level: 4 },
    { name: "CSS", icon: "/CSS-Logo-2011.png", level: 4 },
    { name: "HTML", icon: "/HTML5_logo_and_wordmark.svg.png", level: 4 },
];


const LaptopScrollEffect = () => {
    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1.5, 3, 8]);
    const laptopOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
    const contentScale = useTransform(scrollYProgress, [0.4, 0.7], [1, 1.8]);
    const contentTranslateY = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-40%"]);

    return (
        <div className="relative w-full h-[200vh] flex justify-center items-center bg-black overflow-hidden">
            {/* Laptop Image */}
            <motion.div
                className="absolute flex justify-center items-center"
                style={{ scale, opacity: laptopOpacity }}
            >
                <img
                    src="/laptop-6306826_1280.webp"
                    alt="Laptop"
                    className="w-[50vw] h-auto"
                />
            </motion.div>

            {/* Floating Skill Bubbles */}
            <motion.div
                className="absolute w-[32vw] h-[18vw] rounded-lg flex flex-wrap justify-center items-center gap-6"
                style={{
                    scale: contentScale,
                    transform: `translateY(${contentTranslateY})`,
                }}
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 hover:ring-4 hover:ring-cyan-400 cursor-default"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />

                        {/* Tooltip */}
                        <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 w-max px-4 py-2 rounded-md bg-white text-black text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                            <p className="font-semibold">{skill.name}</p>
                            <div className="flex gap-1 justify-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${
                                            i < skill.level ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LaptopScrollEffect;