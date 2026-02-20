"use client";

import React from "react";
import { motion } from "framer-motion";
import AbstractRing from "./AbstractRing";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Central Ring */}
            <div className="absolute z-10 scale-75 md:scale-100">
                <AbstractRing />
            </div>

            {/* Main Text Content */}
            <div className="absolute z-20 flex flex-col items-center justify-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xs md:text-sm font-bold tracking-[0.5em] text-blue-200 mb-4 uppercase"
                >
                    Software Developer
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-[family-name:var(--font-aloja)] font-normal text-white tracking-wide mb-2"
                >
                    YASH SURMA
                </motion.h1>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-8 text-[10px] md:text-xs font-bold tracking-[0.3em] text-orange-400 uppercase"
                >
                    Always in beta mode
                </motion.span>
            </div>

            {/* Floating Navigation Elements (Indicators) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 flex items-center gap-4"
            >
                <span className="text-white font-mono text-sm">01</span>
                <div className="w-12 h-[1px] bg-white/50" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center"
            >
                <div className="w-1 h-1 bg-white rounded-full ring-4 ring-white/20" />
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                <div className="w-1 h-1 bg-white/30 rounded-full" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-white opacity-50 animate-bounce" />
            </motion.div>

        </section>
    );
};

export default Hero;
