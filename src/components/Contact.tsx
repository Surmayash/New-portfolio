"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20 relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl w-full text-center relative z-10"
            >
                <span className="text-blue-400 font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
                <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-playfair)] text-white mb-12 leading-tight">
                    Let's work <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">together.</span>
                </h2>

                <div className="flex justify-center gap-8 mb-16">
                    {[
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Mail, href: "mailto:hello@yashsurma.com" },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            whileHover={{ y: -5, color: "#60A5FA" }}
                            className="p-4 bg-white/5 rounded-full border border-white/10 hover:border-blue-500/50 transition-colors text-white"
                        >
                            <item.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </div>

                <a href="mailto:hello@yashsurma.com" className="inline-block px-12 py-4 bg-white text-black font-bold tracking-wider rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                    SAY HELLO
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
