"use client";

import { motion } from "framer-motion";
import { FaBolt, FaMobileAlt, FaBullseye, FaLock, FaRocket, FaBug, FaCogs } from "react-icons/fa";

const TrustStrip = () => {
    const items = [
        { icon: FaBolt, text: "AI-Powered Development", color: "hover:text-violet-600" },
        { icon: FaMobileAlt, text: "Android & iOS Experts", color: "hover:text-blue-600" },
        { icon: FaBullseye, text: "Business-Focused Solutions", color: "hover:text-emerald-600" },
        { icon: FaLock, text: "Secure & Scalable Apps", color: "hover:text-rose-600" },
    ];

    return (
        <div className="w-full border-b border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className={`flex items-center justify-center md:justify-start gap-3 text-slate-600 transition-colors duration-300 cursor-default ${item.color}`}>
                            <item.icon className="text-lg" />
                            <span className="text-sm font-semibold tracking-wide">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AIEdge = () => {
    return (
        <section className="bg-white">
            {/* 1. Trust / Credibility Strip */}
            <TrustStrip />

            {/* 2. The AI Edge Content */}
            <div className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Intelligence in <br className="hidden md:block" />
                            <span className="text-blue-600">Every Pixel.</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Advanced AI-driven flows to accelerate development and eliminate bugs.
                        </motion.p>

                        {/* Bento-style Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Stat 1: Speed */}
                            <motion.div
                                className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><FaRocket /></div>
                                    <span className="font-bold text-slate-900">Velocity</span>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">40%</div>
                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Faster Cycles</div>
                                {/* Speed Visual */}
                                <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ duration: 1, delay: 0.4 }} />
                                </div>
                            </motion.div>

                            {/* Stat 2: Stability */}
                            <motion.div
                                className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center"><FaBug /></div>
                                    <span className="font-bold text-slate-900">Stability</span>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">99.9%</div>
                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Bug-Free</div>
                                {/* Stability Visual (Checkmarks) */}
                                <div className="mt-3 flex gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 flex-1 bg-green-500 rounded-full opacity-80" />)}
                                </div>
                            </motion.div>

                            {/* Stat 3: Customization (Wide) */}
                            <motion.div
                                className="col-span-2 bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center justify-between"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">100%</div>
                                    <div className="text-sm text-slate-500">Custom Architecture</div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                    <FaCogs className="text-xl" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Visual: Phone Mockup */}
                    <div className="flex justify-center">
                        <motion.div
                            className="relative w-[300px] h-[600px] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, rotate: 5, y: 30 }}
                            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-slate-50 w-full h-full flex flex-col pt-12 p-4">
                                {/* Header Mockup */}
                                <div className="flex justify-between items-center mb-6 px-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                                    <div className="w-20 h-3 rounded-full bg-slate-200" />
                                </div>

                                {/* Abstract UI Elements (from previous design, now fit inside phone) */}
                                <div className="grid grid-cols-2 gap-3">
                                    <motion.div
                                        className="col-span-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><FaBolt /></div>
                                        <div className="h-2 w-24 bg-slate-100 rounded-full" />
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 aspect-square flex flex-col items-center justify-center gap-2"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600"><FaLock /></div>
                                        <div className="h-2 w-8 bg-slate-100 rounded-full" />
                                    </motion.div>

                                    <motion.div
                                        className="bg-blue-600 p-4 rounded-2xl shadow-lg border border-blue-500 aspect-square flex flex-col items-center justify-center gap-2"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <div className="text-white text-2xl font-bold">AI</div>
                                        <div className="text-blue-100 text-[10px] text-center">Active</div>
                                    </motion.div>

                                    <motion.div
                                        className="col-span-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FaRocket /></div>
                                        <div className="h-2 w-20 bg-slate-100 rounded-full" />
                                    </motion.div>

                                    {/* Rich 'Live Activity' Card */}
                                    <motion.div
                                        className="col-span-2 bg-white p-3 rounded-2xl shadow-sm border border-slate-100"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs">
                                                    <FaRocket />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-800">Deployment</div>
                                                    <div className="text-[10px] text-slate-400">Auto-Scaling</div>
                                                </div>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        </div>

                                        {/* Activity Lines */}
                                        <div className="space-y-1.5">
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    initial={{ width: "0%" }}
                                                    whileInView={{ width: "75%" }}
                                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="h-1 w-16 bg-slate-100 rounded-full" />
                                                <div className="text-[9px] text-slate-400 font-mono">24ms</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AIEdge;
