"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative py-20 px-4 md:px-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 relative z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-[family-name:var(--font-aloja)] text-white mb-8 text-center md:text-left"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-6 text-gray-300 font-[family-name:var(--font-inter)] leading-relaxed"
                    >
                        <p>
                            I'm a passionate developer and creative thinker based in India. I specialize in building
                            immersive digital experiences that blend technical precision with artistic flair.
                        </p>
                        <p>
                            With a deep love for generative design and interactive UI, I strive to create web applications that are not just functional, but memorable.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, gaming, or designing futuristic concepts.
                        </p>
                    </motion.div>

                    {/* Stats / Skills or Image placeholder */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Projects", value: "20+" },
                            { label: "Experience", value: "3+ Years" },
                            { label: "Clients", value: "10+" },
                            { label: "Awards", value: "5" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                                className="bg-white/5 p-6 rounded-xl text-center border border-white/5 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-3xl font-bold text-blue-400 font-[family-name:var(--font-playfair)]">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
