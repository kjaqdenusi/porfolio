import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center px-10 py-5 text-white bg-black z-50 rounded-b-lg shadow-md">
            {/* Clickable Logo on the Left - Takes User to Home */}
            <Link to="/" className="cursor-pointer">
                <img src="/k_logo_bw_transparent.png" alt="Logo" className="h-12 w-auto rounded-lg" />
            </Link>

            {/* Navigation Links */}
            <div className="flex w-full max-w-[900px] justify-between text-sm font-mono mx-auto">
                <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="hover:underline hover:opacity-75 transition-all duration-200 cursor-pointer"
                >
                    &lt;about&gt;
                </a>
                <a
                    href="/Kenny Adenusi Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:opacity-75 transition-all duration-200 cursor-pointer"
                >
                    &lt;resume&gt;
                </a>
                <Link
                    to="/projects"
                    className="hover:underline hover:opacity-75 transition-all duration-200"
                >
                    &lt;projects&gt;
                </Link>
                <a
                    href="#experience"
                    onClick={(e) => scrollToSection(e, "experience")}
                    className="hover:underline hover:opacity-75 transition-all duration-200 cursor-pointer"
                >
                    &lt;experience&gt;
                </a>

                {/* Contact Dropdown */}
                <div className="relative">
                    <button
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="hover:underline hover:opacity-75 transition-all duration-500"
                    >
                        &lt;contact&gt;
                    </button>

                    {isDropdownOpen && (
                        <divf
                            className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg border border-gray-300"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <a
                                href="https://twitter.com/yourhandle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 hover:bg-gray-200"
                            >
                                <img src="/1707222563twitter-logo-png.png" alt="Twitter" className="h-6 w-6 mr-2" />
                                Twitter
                            </a>
                            <a
                                href="https://github.com/yourhandle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 hover:bg-gray-200"
                            >
                                <img src="/Octicons-mark-github.svg.png" alt="GitHub" className="h-6 w-6 mr-2" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kenny-a-b52576283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 hover:bg-gray-200"
                            >
                                <img src="/linkedin-logo-linkedin-icon-transparent-free-png.webp" alt="LinkedIn" className="h-6 w-6 mr-2" />
                                LinkedIn
                            </a>
                        </divf>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;