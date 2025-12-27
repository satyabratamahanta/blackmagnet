"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    FaSearch, FaCode, FaRocket, FaCheckCircle,
    FaMobileAlt, FaBolt, FaGooglePlay, FaApple,
    FaArrowRight, FaChartLine, FaMagnet, FaStar
} from "react-icons/fa";

export default function SEOPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-orange-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                            <FaBolt className="animate-pulse" /> Technical Visibility Engineering
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                            Don't Just Publish. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-600 to-emerald-600">Get Discovered.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                            Rank #1 on the <strong>App Store</strong> and <strong>Google Play</strong>. We combine deep-code performance with intent-based keyword science to turn searches into installs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#audit" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1">
                                Claim Your Rank Audit
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CASE STUDY: THE RANK CLIMB */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/3">
                            <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-black uppercase tracking-widest mb-4">
                                Case Study: Rank Recovery
                            </div>
                            <h2 className="text-4xl font-black mb-6 leading-tight">
                                From Ghosted to <br />
                                <span className="text-emerald-400 italic font-outline-1">Rank #1.</span>
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our client was invisible at <strong>Rank #54</strong>. After our Technical ASO sprint, they claimed the <strong>#1 Spot</strong> for their target keyword in just 21 days.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="text-2xl font-black text-white">28 <span className="text-slate-500 text-sm">to</span> <span className="text-emerald-400">312</span></div>
                                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Daily Organic Installs</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="text-2xl font-black text-emerald-400">$0.00</div>
                                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Cost Per Acquisition</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 w-full flex justify-center lg:justify-end">
                            <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                                {/* Status Bar */}
                                <div className="absolute top-0 w-full h-8 flex justify-between px-6 items-center text-[10px] text-white/50 font-bold z-20">
                                    <span>9:41</span><span>5G</span>
                                </div>
                                {/* Dynamic Island */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20"></div>

                                {/* App Store UI */}
                                <div className="pt-14 px-5 pb-4 h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
                                    {/* Search Bar */}
                                    <div className="flex items-center gap-2 bg-slate-200/60 rounded-xl px-3 py-3 mb-6 relative">
                                        <FaSearch className="text-slate-400 text-sm" />
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "auto" }}
                                            transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
                                            className="text-sm font-semibold text-slate-800 overflow-hidden whitespace-nowrap border-r-2 border-emerald-500 pr-1"
                                        >
                                            best wellness app
                                        </motion.span>
                                    </div>

                                    {/* RESULTS */}
                                    <div className="space-y-4">
                                        {/* RESULT 1: CLIENT APP */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                            transition={{ delay: 2.2, type: "spring" }}
                                            className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-xl shadow-emerald-100/50 border-2 border-emerald-400 relative overflow-hidden z-10"
                                        >
                                            <div className="absolute -right-8 top-3 bg-emerald-500 text-white text-[8px] font-black px-8 py-1 rotate-45 uppercase tracking-widest shadow-sm">
                                                #1 Choice
                                            </div>

                                            {/* "Your App" Floating Pointer */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 3, duration: 0.5 }}
                                                className="absolute -left-3 top-[-10px] bg-slate-900 text-white text-[8px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg z-20"
                                            >
                                                You <FaArrowRight className="rotate-45" size={8} />
                                            </motion.div>

                                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl relative">
                                                <FaBolt />
                                                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                                    <FaCheckCircle className="text-emerald-500 text-[10px]" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-3 w-24 bg-slate-900 rounded-full mb-1.5"></div>
                                                <div className="h-2 w-16 bg-slate-300 rounded-full mb-2"></div>
                                                <div className="flex gap-0.5 text-orange-400 text-[10px]">
                                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                                    <span className="text-slate-300 ml-1 text-[8px] font-bold whitespace-nowrap">(12k Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-4 py-1.5 bg-slate-100 text-blue-600 font-extrabold text-xs rounded-full uppercase hover:bg-blue-50 transition-colors"
                                                >
                                                    Get
                                                </motion.button>
                                                <span className="text-[8px] text-slate-400 font-bold mt-1">In-App Purchase</span>
                                            </div>
                                        </motion.div>

                                        {/* RESULT 2: COMPETITOR (GHOST) */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.4 }}
                                            transition={{ delay: 2.5 }}
                                            className="flex items-center gap-4 p-4 grayscale blur-[0.5px]"
                                        >
                                            <div className="w-14 h-14 bg-slate-200 rounded-2xl"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-28 bg-slate-300 rounded-full"></div>
                                                <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                                                <div className="flex gap-1 h-2 w-16 bg-slate-200 rounded-full"></div>
                                            </div>
                                            <div className="w-12 h-7 bg-slate-200 rounded-full"></div>
                                        </motion.div>

                                        {/* RESULT 3: COMPETITOR (GHOST) */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.3 }}
                                            transition={{ delay: 2.7 }}
                                            className="flex items-center gap-4 p-4 grayscale blur-[1px]"
                                        >
                                            <div className="w-14 h-14 bg-slate-200 rounded-2xl"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-24 bg-slate-300 rounded-full"></div>
                                                <div className="h-2 w-14 bg-slate-200 rounded-full"></div>
                                            </div>
                                            <div className="w-12 h-7 bg-slate-200 rounded-full"></div>
                                        </motion.div>

                                        <div className="mt-8 text-center opacity-0 animate-fade-in delay-1000 fill-mode-forwards">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-400">
                                                <FaArrowRight size={10} /> Scroll for more results
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEYWORD SCIENCE TABLE */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">The "Intent" Difference</h2>
                        <p className="text-slate-500">Why generic strategies fail while <strong>Black Magnet</strong> succeeds.</p>
                    </div>

                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-6 text-xs font-black uppercase tracking-widest">Strategy Type</th>
                                    <th className="p-6 text-xs font-black uppercase tracking-widest">Target Keyword</th>
                                    <th className="p-6 text-xs font-black uppercase tracking-widest">Competition</th>
                                    <th className="p-6 text-xs font-black uppercase tracking-widest">Growth Lift</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b bg-slate-50/50">
                                    <td className="p-6 font-bold text-slate-400 italic">Generic SEO</td>
                                    <td className="p-6 text-slate-500 font-medium italic">"Food Delivery App"</td>
                                    <td className="p-6"><span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-black uppercase">Impossible</span></td>
                                    <td className="p-6 font-bold text-slate-400">+0.2%</td>
                                </tr>
                                <tr className="bg-emerald-50/30">
                                    <td className="p-6 font-black text-emerald-700">Black Magnet Intent</td>
                                    <td className="p-6 font-black text-slate-900 underline decoration-emerald-500 underline-offset-4">"Organic meal kits for vegan athletes"</td>
                                    <td className="p-6"><span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase">Optimized</span></td>
                                    <td className="p-6 font-black text-emerald-600 text-xl">+24.8%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CROSS-STORE CAPABILITIES */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
                            <CapabilityCard
                                icon={FaApple}
                                title="iOS App Store"
                                color="blue"
                                desc="Optimizing for Apple's quality-first algorithm. We focus on Visual CTR, iOS 18 spotlight integration, and retention metrics."
                            />
                            <CapabilityCard
                                icon={FaGooglePlay}
                                title="Google Play"
                                color="emerald"
                                desc="Dominating Android search. We fix your 'Vitals' (crashes/ANRs) to satisfy Google's technical ranking signals."
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl font-black mb-6 leading-tight">Two Stores. <br />One Solution.</h2>
                            <p className="text-slate-500 text-lg mb-8">
                                Every platform has a different "brain." Apple rewards creative excellence; Google rewards technical health. We are the only agency that optimizes your <strong>Codebase</strong> and your <strong>Creatives</strong> simultaneously.
                            </p>
                            <a href="#audit" className="flex items-center gap-3 font-black text-orange-600 group">
                                Start Technical Audit <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUDIT FORM */}
            <section id="audit" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-6 overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Stop Being <br /><span className="text-orange-500 italic">Invisible.</span></h2>
                    <p className="text-slate-400 text-xl mb-12">
                        Enter your App or Web link below. We will send you a <strong>24-point Technical Visibility Report</strong> showing you exactly why you aren't ranking #1.
                    </p>
                    <div className="bg-white p-2 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="App Store Link / URL"
                            className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 focus:outline-none font-bold"
                        />
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
                            Analyze Rank <FaArrowRight />
                        </button>
                    </div>
                    <p className="mt-6 text-[10px] text-slate-500 font-black uppercase tracking-widest">Comprehensive scan including Vitals, Keywords, and Backlinks</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CapabilityCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: "blue" | "emerald" }) {
    const colors = {
        blue: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600"
    };
    return (
        <div className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-500 ${colors[color]} group-hover:text-white`}>
                <Icon />
            </div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </div>
    );
}