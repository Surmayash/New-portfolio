"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
    id: number;
    date: string;
    title: string;
    subtitle: string;
    description: string;
}

interface TimelineProps {
    title: string;
    items: TimelineItem[];
    id: string;
}

const Timeline: React.FC<TimelineProps> = ({ title, items, id }) => {
    return (
        <section id={id} className="min-h-screen py-20 px-4 md:px-20 relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-[family-name:var(--font-aloja)] text-white mb-16 text-center"
            >
                {title}
            </motion.h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform -translate-x-1/2" />

                <div className="space-y-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <div className={`p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className="text-blue-400 font-mono text-sm tracking-wider mb-2 block">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <h4 className="text-gray-400 text-sm mb-4 font-semibold">{item.subtitle}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="relative z-10 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_5px_rgba(59,130,246,0.3)] shrink-0 hidden md:block" />

                            {/* Spacer for the other side */}
                            <div className="w-full md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
