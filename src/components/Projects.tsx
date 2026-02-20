"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Neon Cyberpunk UI",
        category: "Web Design",
        image: "linear-gradient(to bottom right, #ff2e63, #ff9933)", // Placeholder gradient
        link: "#",
    },
    {
        id: 2,
        title: "Abstract 3D Renders",
        category: "3D Art",
        image: "linear-gradient(to bottom right, #00f0ff, #0077ff)",
        link: "#",
    },
    {
        id: 3,
        title: "AI Generative Tool",
        category: "Development",
        image: "linear-gradient(to bottom right, #8a2be2, #4b0082)",
        link: "#",
    },
    {
        id: 4,
        title: "Minimalist Portfolio",
        category: "Web Design",
        image: "linear-gradient(to bottom right, #ffffff, #aaaaaa)",
        link: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-20 relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-[family-name:var(--font-aloja)] text-white mb-16 text-center"
            >
                My Best Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Background Image / Gradient */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                            style={{ background: project.image }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-sm font-bold tracking-widest text-white/80 uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
                                        {project.title}
                                    </h3>
                                    <Link href={project.link} className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                                        <ArrowUpRight className="text-white w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
