"use client";

import React, { useRef, useState, memo } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import {
    FaCode, FaRocket, FaCheckCircle, FaBrain, FaLayerGroup, FaTerminal, FaMicrochip,
    FaHome, FaUser, FaCog, FaThLarge, FaSignal, FaWifi, FaBatteryFull
} from "react-icons/fa";

// --- Types & Data ---
const STEPS = [
    {
        id: 1,
        title: "Idea to Strategy",
        short: "We architect your vision through deep market analysis and technical validation to ensure a robust foundation.",
        extra: "Strategic Mapping & Roadmap.",
        icon: FaBrain,
        color: "bg-amber-500",
        glow: "rgba(245, 158, 11, 0.15)",
    },
    {
        id: 2,
        title: "Bespoke Design",
        short: "We craft immersive, pixel-perfect interfaces tailored to your brand's unique identity and user journey.",
        extra: "High-Fidelity UI/UX Systems.",
        icon: FaLayerGroup,
        color: "bg-purple-500",
        glow: "rgba(168, 85, 247, 0.15)",
    },
    {
        id: 3,
        title: "Elite Development",
        short: "Our engineers build scalable, high-performance engines using the most advanced modern tech stacks.",
        extra: "Next-Gen Architecture & Clean Code.",
        icon: FaCode,
        color: "bg-blue-500",
        glow: "rgba(59, 130, 246, 0.15)",
    },
    {
        id: 4,
        title: "Precision Launch",
        short: "Rigorous stress testing and optimization ensure a flawless global deployment from day one.",
        extra: "Performance Audit & Live Release.",
        icon: FaRocket,
        color: "bg-emerald-500",
        glow: "rgba(16, 185, 129, 0.15)",
    },
];

// --- Sub-Visuals (Memoized for Scroll Performance) ---

const VisualStrategy = memo(() => (
    <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                    className="absolute w-24 h-24 bg-amber-500/20 rounded-full blur-2xl"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-24 h-24 flex items-center justify-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-amber-500/40 rounded-full"
            />
            <FaMicrochip className="text-5xl text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>
        <div className="mt-8 w-full px-6 space-y-3 relative z-10">
            <div className="text-[10px] text-amber-500/70 font-mono text-center uppercase tracking-[0.2em]">Architecture Active</div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                />
            </div>
        </div>
    </div>
));

const VisualDesign = memo(() => (
    <div className="w-full h-full bg-slate-50 flex flex-col pt-14 relative">
        <div className="px-4 space-y-5 flex-1 overflow-hidden">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full h-40 rounded-[2rem] relative overflow-hidden shadow-xl p-6 text-white bg-gradient-to-br from-indigo-600 to-purple-600"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                <span className="text-[9px] font-bold opacity-70 uppercase tracking-widest">UX Prototype v2</span>
                <h5 className="text-xl font-black mt-2 leading-tight">Elite, Bespoke <br /> & Pixel-Perfect</h5>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="h-24 bg-white border border-slate-100 rounded-2xl shadow-sm p-3 flex flex-col justify-between"
                    >
                        <div className="w-8 h-1 bg-slate-100 rounded-full" />
                        <div className="w-full h-10 bg-slate-50 rounded-lg" />
                    </motion.div>
                ))}
            </div>
        </div>

        <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="mt-auto bg-white/80 backdrop-blur-md border-t border-slate-100 px-8 py-5 flex justify-between items-center"
        >
            <FaHome className="text-purple-600" />
            <FaThLarge className="text-slate-300" />
            <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <FaUser className="text-[10px]" />
            </div>
            <FaCog className="text-slate-300" />
        </motion.div>
    </div>
));

const VisualDev = memo(() => (
    <div className="w-full h-full bg-[#0d1117] p-6 pt-14 font-mono text-[11px] leading-relaxed">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2 text-blue-400/60">
                <FaTerminal size={10} />
                <span className="text-[9px] uppercase tracking-widest">Main.sys</span>
            </div>
            <div className="text-[9px] text-slate-500">UTF-8</div>
        </div>
        {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="mb-2.5 flex gap-4"
            >
                <span className="text-slate-700 w-4 select-none">{i + 1}</span>
                <span className={i % 2 === 0 ? "text-blue-400" : "text-emerald-400"}>
                    {i === 0 ? "import { Engine } from 'core';" :
                        i === 1 ? "const build = Engine.init();" :
                            i === 5 ? "export default build;" : "  await build.secure();"}
                </span>
            </motion.div>
        ))}
        <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-8 w-2 h-4 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
    </div>
));

const VisualLaunch = memo(() => (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 relative">
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative z-10"
        >
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl"
            />
            <div className="relative w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl">
                <FaRocket className="text-4xl text-white" />
            </div>
        </motion.div>
        <div className="mt-12 w-full space-y-3 relative z-10">
            {[0.4, 0.5, 0.6].map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: d }}
                    className="flex justify-between items-center bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10"
                >
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                    <FaCheckCircle className="text-emerald-400 text-sm" />
                </motion.div>
            ))}
        </div>
    </div>
));

// --- Main Component ---

export default function ProcessFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(Math.floor(latest * STEPS.length), STEPS.length - 1);
        setActiveStep(index);
    });

    return (
        <section ref={containerRef} className="relative lg:h-[400vh] h-auto bg-white">
            <div className="relative lg:sticky lg:top-0 lg:h-screen h-auto flex items-center overflow-hidden py-10 lg:py-0">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center w-full">

                    {/* LEFT: CONTENT */}
                    <div className="relative">
                        <header className="mb-14">
                            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Methodology</span>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                                Our Digital <br /> <span className="text-blue-600">Lifecycle.</span>
                            </h2>
                        </header>

                        <div className="relative space-y-12">
                            <div className="absolute left-6 top-2 bottom-2 w-[1px] bg-slate-100" />
                            <motion.div
                                className="absolute left-6 top-2 w-[1px] bg-blue-600 origin-top shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                                style={{ height: `${((activeStep + 1) / STEPS.length) * 88}%` }}
                                transition={{ type: "spring", stiffness: 50 }}
                            />

                            {STEPS.map((step, idx) => (
                                <motion.div
                                    key={step.id}
                                    animate={{ opacity: idx === activeStep ? 1 : 0.2, x: idx === activeStep ? 15 : 0 }}
                                    className="relative pl-16 transition-all duration-500 group"
                                >
                                    <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 border
                    ${idx === activeStep ? `${step.color} border-transparent text-white shadow-xl scale-110` : "bg-white border-slate-200 text-slate-400"}`}>
                                        <step.icon className="text-xl" />
                                    </div>
                                    <h4 className={`text-2xl font-bold mb-2 tracking-tight ${idx === activeStep ? "text-slate-900" : "text-slate-500"}`}>{step.title}</h4>
                                    {idx === activeStep && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                            <p className="text-slate-500 text-base max-w-sm mb-5 leading-relaxed">{step.short}</p>
                                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                                                <span className={`w-2 h-2 rounded-full ${step.color} animate-pulse`} />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{step.extra}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: MOCKUP */}
                    <div className="relative flex justify-center items-center h-full">
                        <motion.div
                            animate={{ backgroundColor: STEPS[activeStep].glow }}
                            className="absolute w-[120%] h-[120%] rounded-full blur-[140px] transition-colors duration-1000 opacity-60"
                        />

                        <div className="relative w-[260px] aspect-[9/19] bg-slate-950 rounded-[3.5rem] p-1.5 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] ring-1 ring-slate-800">
                            <div className="w-full h-full bg-white rounded-[3.1rem] overflow-hidden relative border border-white/5 shadow-inner">

                                {/* Status Bar Overlay */}
                                <div className="absolute top-0 left-0 w-full h-12 z-[60] flex items-end justify-between px-10 pb-2 pointer-events-none text-[8px] font-bold text-slate-400">
                                    <div className="flex items-center gap-1">9:41</div>
                                    <div className="flex items-center gap-1.5">
                                        <FaSignal size={8} />
                                        <FaWifi size={8} />
                                        <FaBatteryFull size={10} />
                                    </div>
                                </div>

                                {/* Speaker/Notch Area */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-3xl z-[70] flex items-center justify-center">
                                    <div className="w-8 h-1 bg-slate-800 rounded-full" />
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        {activeStep === 0 && <VisualStrategy />}
                                        {activeStep === 1 && <VisualDesign />}
                                        {activeStep === 2 && <VisualDev />}
                                        {activeStep === 3 && <VisualLaunch />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}