"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 bg-black/20 text-center backdrop-blur-sm border-t border-white/5">
            <p className="text-gray-500 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} Yash Surma. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
