import React from "react";

const Projects = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="pt-24 px-10 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">&lt;Projects&gt;</h1>
                <p className="text-gray-400 text-sm mb-10 text-center max-w-xl">
                    Below is a collection of some personal projects and academic work from my Computer Science courses at Saint Joseph's University.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl pb-24">
                    {/* Glide - Apple TV Browser */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Glide – Apple TV Browser (WIP)</h2>
                        <p className="mt-2 text-gray-300">
                            A web browser designed specifically for Apple TV using tvOS. Focused on smooth navigation, clean UI, and optimized performance for the big screen.
                        </p>
                    </div>

                    {/* Portfolio Website */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Personal Portfolio Website</h2>
                        <p className="mt-2 text-gray-300">
                            The site you're viewing now—built with React, Tailwind CSS, Vite, and Framer Motion. Designed to showcase my work, creativity, and coding ability.
                        </p>
                    </div>

                    {/* Calculator */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Simple Calculator</h2>
                        <p className="mt-2 text-gray-300">
                            A clean and interactive JavaScript calculator built for basic arithmetic. Great for practicing front-end logic and user input handling.
                        </p>
                    </div>

                    {/* Budget Tracker */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Budget Tracker (WIP)</h2>
                        <p className="mt-2 text-gray-300">
                            A financial tracking app in progress. Helps users manage expenses, set spending goals, and visualize progress through charts and graphs.
                        </p>
                    </div>

                    {/* Binary Tree Visualizer (Class Project) */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Binary Tree Project</h2>
                        <p className="mt-2 text-gray-300">
                            A class project implementing a binary tree structure in Java to handle insertion, traversal, and deletion. Reinforced recursion and data structure theory.
                        </p>
                    </div>

                    {/* Kruskal’s Algorithm (Class Project) */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Kruskal’s MST Algorithm</h2>
                        <p className="mt-2 text-gray-300">
                            Developed for class, this Java program computes a minimum spanning tree using Kruskal’s algorithm and Union-Find logic to optimize edge selections.
                        </p>
                    </div>

                    {/* Linked List & Stack (Class Project) */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Stack & Linked List Structures</h2>
                        <p className="mt-2 text-gray-300">
                            Hands-on class exercises building fundamental data structures from scratch—single/double linked lists, stack parsers, and pointer-based logic.
                        </p>
                    </div>

                    {/* Word Count CLI (Class Project) */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Word Count CLI Tool</h2>
                        <p className="mt-2 text-gray-300">
                            A file-processing command-line utility built for class that reads and analyzes word frequency using file I/O and hash tables.
                        </p>
                    </div>

                    {/* I/O (Class Project) */}
                    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-xl font-semibold">Online Exam System</h2>
                        <p className="mt-2 text-gray-300">
                            Simulated online testing in a controlled file-based environment. Managed user input, question parsing, and results formatting via Java.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;