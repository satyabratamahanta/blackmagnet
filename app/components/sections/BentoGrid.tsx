"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaCode, FaMobileAlt, FaLaptop, FaBrain, FaAndroid, FaApple } from "react-icons/fa";

const BentoGrid = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        Why Top Founders Choose Us.
                    </h2>
                    <p className="text-lg text-slate-600">
                        We don't just write code. We build scalable, secure, and intelligent systems that drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[300px]">

                    {/* CARD 1: EXTREME PERFORMANCE (Wide) */}
                    <motion.div
                        className="md:col-span-2 relative group overflow-hidden rounded-[40px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Mobile Notch Visual */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20 opacity-10" />

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                    <FaBolt className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Native 120Hz Performance</h3>
                                <p className="text-slate-500 max-w-sm">Butter-smooth scrollers and gesture-driven interactions. Optimized for the modern mobile feel.</p>
                            </div>

                            {/* Visual: Graph */}
                            <div className="w-full h-24 flex items-end gap-1 mt-4 opacity-80">
                                {[40, 65, 50, 80, 55, 90, 70, 95, 100, 85, 90, 75, 95, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 bg-blue-500/20 rounded-t-sm"
                                        initial={{ height: "20%" }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>


                    {/* CARD 2: COST EFFICIENCY (Tall, Left) - Updated with Graph */}
                    <motion.div
                        className="md:row-span-2 relative group overflow-hidden rounded-[40px] bg-slate-900 border border-slate-800 shadow-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Mobile Notch Visual */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-20 shadow-sm border-b border-white/10" />

                        {/* Abstract Grid Background */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                        <div className="p-8 relative z-10 h-full flex flex-col items-center text-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 shadow-2xl shadow-blue-900/20">
                                <FaCode className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-8">Efficiency Stats</h3>

                            {/* Pie Chart Representation */}
                            <div className="relative w-40 h-40 mb-8">
                                {/* Outer Ring */}
                                <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                    {/* Background Circle */}
                                    <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                    {/* Cost Savings (Blue) - 40% */}
                                    <motion.path
                                        className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        strokeDasharray="40, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3.8"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                    {/* Time Savings (Cyan) - 50% */}
                                    <motion.path
                                        className="text-cyan-400"
                                        strokeDasharray="30, 100"
                                        strokeDashoffset="-45"  /* Offset to start after blue */
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    />
                                </svg>
                                {/* Center Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-white">40%</span>
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Savings</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-2 mx-auto" />
                                    <div className="text-white font-bold text-lg">40%</div>
                                    <div className="text-slate-500 text-xs">Dev Cost</div>
                                </div>
                                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 mb-2 mx-auto" />
                                    <div className="text-white font-bold text-lg">50%</div>
                                    <div className="text-slate-500 text-xs">Time Saved</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* CARD 3: AI INTEGRATION */}
                    <motion.div
                        className="relative group overflow-hidden rounded-[40px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Mobile Notch Visual */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-20 opacity-5" />

                        <div className="p-8 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 mb-4">
                                <FaBrain className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Powered</h3>
                                <p className="text-slate-500 text-sm">LLM integration & smart automation built-in.</p>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-bold border border-violet-100">GPT-4</span>
                                <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-bold border border-violet-100">Gemini</span>
                            </div>
                        </div>
                    </motion.div>


                    {/* CARD 4: SECURITY */}
                    <motion.div
                        className="relative group overflow-hidden rounded-[40px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {/* Mobile Notch Visual */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-20 opacity-5" />

                        <div className="p-8 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-4">
                                <FaShieldAlt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Scale</h3>
                                <p className="text-slate-500 text-sm">Bank-grade security & auto-scaling architecture.</p>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                                <motion.div
                                    className="bg-green-500 h-full rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
