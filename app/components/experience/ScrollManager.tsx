"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Phone3D from "./Phone3D";

// Define the sections for clarity
const sections = ["hero", "tech", "process", "portfolio"] as const;
type SectionType = typeof sections[number];

export default function ScrollManager({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [currentSection, setCurrentSection] = useState<SectionType>("hero");

    // Logic to determine current section based on scroll progress
    // roughly: 0-0.25 (Hero), 0.25-0.5 (Tech), 0.5-0.75 (Process), 0.75-1.0 (Portfolio)
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.2) setCurrentSection("hero");
            else if (latest < 0.5) setCurrentSection("tech");
            else if (latest < 0.8) setCurrentSection("process");
            else setCurrentSection("portfolio");
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative w-full">

            {/* Sticky Container for the Phone */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                {/* Background Gradients changing based on section */}
                <motion.div
                    className="absolute inset-0 transition-colors duration-1000 ease-in-out"
                    animate={{
                        backgroundColor:
                            currentSection === 'hero' ? '#000000' :
                                currentSection === 'tech' ? '#0f0714' : // Deep purple tint
                                    currentSection === 'process' ? '#050b14' : // Deep blue tint
                                        '#000000'
                    }}
                />

                {/* The Star of the Show: The Phone */}
                <Phone3D currentSection={currentSection}>
                    {/* Inner Phone Content Switching */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        {currentSection === 'hero' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl mx-auto mb-4" />
                                <p className="font-bold text-xl">BlackMagnet</p>
                            </motion.div>
                        )}

                        {currentSection === 'tech' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-grid-slate-800/[0.2] flex items-center justify-center">
                                <div className="animate-pulse w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                    <span className="text-3xl">⚛️</span>
                                </div>
                            </motion.div>
                        )}

                        {currentSection === 'process' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 w-full">
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-gray-800 rounded animate-[pulse_2s_infinite]" />
                                    <div className="h-2 w-3/4 bg-gray-800 rounded animate-[pulse_2s_delay-75_infinite]" />
                                    <div className="mt-8 p-2 border border-green-500/30 rounded bg-green-500/10">
                                        <p className="text-xs text-green-400">Compiling...</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentSection === 'portfolio' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full bg-gray-800">
                                <img src="/placeholder-app-screen.png" className="w-full h-full object-cover opacity-50" alt="Portfolio" />
                            </motion.div>
                        )}
                    </div>
                </Phone3D>
            </div>

            {/* Scrollable Content Overlay */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}
