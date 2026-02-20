"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const links = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;

        // Don't hide if currently navigating via click
        if (isNavigating) return;

        // Hide if scrolling down and past the top area (150px)
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleNavClick = () => {
        setIsNavigating(true);
        setHidden(false); // Ensure visible when clicking
        // Reset navigation state after scroll animation likelihood finishes
        setTimeout(() => setIsNavigating(false), 1000);
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 bg-[#020b26]/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="flex gap-4 md:gap-12 lg:gap-16 px-4 flex-wrap justify-center">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleNavClick}
                        className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
