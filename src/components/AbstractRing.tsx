"use client";

import React from "react";
import { motion } from "framer-motion";

const AbstractRing = () => {
    return (
        <div className="relative w-[600px] h-[600px] flex items-center justify-center pointer-events-none select-none">
            {/* Core Ring - Deep Blue/Purple */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-[40px] border-blue-900/30 blur-sm"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0%, #0a1535 50%, transparent 100%)",
                    maskImage: "radial-gradient(transparent 60%, black 100%)"
                }}
            />

            {/* Inner Pink/Orange Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] rounded-full border-[30px] border-transparent"
                style={{
                    background: "linear-gradient(45deg, #ff2e63, #ff9933)",
                    maskImage: "conic-gradient(from 0deg, transparent 0%, black 100%)",
                    WebkitMaskImage: "conic-gradient(from 0deg, transparent 20%, black 100%)",
                    opacity: 0.8
                }}
            />

            {/* Glossy overlay effect */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[70%] h-[70%] rounded-full border-[2px] border-white/20 blur-md"
            />

            {/* Floating particles/accents */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-blue-400 blur-sm"
            />
        </div>
    );
};

export default AbstractRing;
