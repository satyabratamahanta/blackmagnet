"use client";
import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "E-Commerce AI",
        description:
            "A next-gen shopping assistant that learns user preferences in real-time. Built with Flutter and Python backend.",
        color: "#eff6ff", // Blue 50
        textColor: "#1e3a8a", // Blue 900
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "HealthTrack Pro",
        description:
            "Remote patient monitoring system helping doctors track vitals instantly. Secure, compliant, and fast.",
        color: "#f0fdf4", // Green 50
        textColor: "#14532d", // Green 900
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "FinTech Vault",
        description:
            "Blockchain-powered wallet for secure and instant global transfers. Zero downtime, maximum security.",
        color: "#faf5ff", // Purple 50
        textColor: "#581c87", // Purple 900
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
    },
];

export default function StickyScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardLength = projects.length;
        const index = Math.min(
            Math.max(Math.floor(latest * cardLength), 0),
            cardLength - 1
        );
        setActiveCard(index);
    });

    return (
        <section
            ref={containerRef}
            className="relative h-[300vh] w-full font-sans"
        >
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">

                {/* Background Color Transition */}
                <motion.div
                    className="absolute inset-0 z-0 transition-colors duration-500 ease-linear"
                    animate={{ backgroundColor: projects[activeCard].color }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 h-full items-center">

                    {/* LEFT COLUMN: Static Header + Scrolling Text */}
                    <div className="h-full flex flex-col justify-center relative">
                        <div className="absolute top-20 left-0">
                            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2 leading-tight">
                                Your Trust <br />
                                <span className="text-slate-400">OUR WORK</span>
                            </h2>
                            <div className="flex gap-4 mt-8 opacity-70">
                                <span className="text-sm font-semibold tracking-widest uppercase text-slate-600">Startups</span>
                                <span className="text-sm font-semibold tracking-widest uppercase text-slate-600">Enterprise</span>
                            </div>
                        </div>

                        {/* The active project text */}
                        <div className="mt-40">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3
                                        className="text-4xl font-bold mb-6 transition-colors duration-500"
                                        style={{ color: projects[activeCard].textColor }}
                                    >
                                        {projects[activeCard].title}
                                    </h3>
                                    <p className="text-xl text-slate-600 max-w-md leading-relaxed">
                                        {projects[activeCard].description}
                                    </p>
                                    <button
                                        className="mt-8 px-6 py-3 border border-slate-300 rounded-full hover:bg-white hover:shadow-lg transition text-slate-900 font-medium"
                                    >
                                        View Case Study
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Dynamic Image */}
                    <div className="h-full flex items-center justify-center p-10 relative">
                        <div className="relative w-full aspect-[9/16] max-h-[80vh] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white ring-1 ring-slate-900/5">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={projects[activeCard].image}
                                    src={projects[activeCard].image}
                                    alt={projects[activeCard].title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
