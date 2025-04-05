import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LaptopScrollEffect from "./components/LaptopScrollEffect";
import Projects from "./pages/Projects"; // Import Projects Page

function App() {
    return (
        <Router>
            <div className="relative">
                {/* Navbar - Always at the top */}
                <Navbar />

                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <HeroSection />
                                <LaptopScrollEffect />

                                {/* About Section */}
                                <div id="about" className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-20">
                                    <h2 className="text-4xl font-bold mb-6">About Me</h2>

                                    <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-5xl">
                                        {/* Left Side - Image */}
                                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
                                            <img
                                                src="/Group-14.21d6fe50.webp"
                                                alt="Coding Passion"
                                                className="w-48 h-auto rounded-lg"
                                            />
                                        </div>

                                        {/* Middle - Text Content */}
                                        <div className="w-full lg:w-2/3 text-lg text-left">
                                            <p className="mb-4">
                                                From the time I first pressed the keys of a computer, I was hooked. As a child, I was fascinated by how technology was put together—always investigating, modifying, and figuring out how machines worked. What started as curiosity quickly became an obsession. I would spend hours disassembling computers, learning their inner workings, and understanding how everything interacted.
                                            </p>
                                            <p className="mb-4">
                                                As I grew older, my passion shifted from hardware to software. The web, programming, and software development became my true interests. Writing code felt more like solving intricate puzzles than work—each bug, challenge, and breakthrough fueled my excitement. Whether I was debugging an issue, optimizing for speed, or designing an intuitive interface, I enjoyed every second of it.
                                            </p>
                                            <p className="mb-4">
                                                Today, as an aspiring Software Engineer and Computer Science student at Saint Joseph's University, I continue to push my skills further. From building computers to developing applications and learning new technologies, software engineering is more than just a career for me—it's a lifelong passion.
                                            </p>
                                        </div>

                                        {/* Right Side - Another Image */}
                                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                                            <img
                                                src="/code-flat-color-outline-icon-free-png.webp"
                                                alt="Problem Solving"
                                                className="w-48 h-auto rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Experience Section */}
                                <div id="experience" className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-20">
                                    <h2 className="text-4xl font-bold mb-6">Experience</h2>

                                    <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-5xl">
                                        {/* Left Side - Image */}
                                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
                                            <img
                                                src="/work-experience-clip-art-image-symbol--7.png"
                                                alt="Work Experience"
                                                className="w-48 h-auto rounded-lg shadow-lg"
                                            />
                                        </div>

                                        {/* Middle - Text Content */}
                                        <div className="w-full lg:w-2/3 text-lg text-left">
                                            <p>
                                                I've worked on various projects, ranging from web development to system security, optimizing performance, and enhancing user engagement. My experience includes:
                                            </p>
                                            <ul className="list-disc ml-5 mt-4 space-y-2">
                                                <li>Developing responsive web applications with modern frameworks.</li>
                                                <li>Debugging and optimizing code for efficiency and scalability.</li>
                                                <li>Working with backend technologies to build secure and efficient systems.</li>
                                                <li>Creating intuitive UI/UX designs to improve user experiences.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Projects Page */}
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;