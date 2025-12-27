"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { 
    FaChartLine, FaUsers, FaFlask, FaBullhorn, 
    FaRocket, FaCheckCircle, FaSearchDollar, 
    FaArrowUp, FaMagnet, FaUserCheck, FaMicrochip 
} from "react-icons/fa";

export default function GrowthPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-white">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/50 blur-[100px] rounded-full" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-600 font-bold text-xs uppercase tracking-[0.2em] mb-8">
                            <FaArrowUp className="animate-bounce" /> Engineering Hyper-Growth
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                            Don't Just Launch. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600">Dominate.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                            Great code is only 20% of the battle. We build the other 80%—the **viral engines**, **conversion funnels**, and **retention loops** that turn a simple app into a market leader.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#framework" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-purple-600 transition-all shadow-2xl hover:-translate-y-1">
                                Our Growth Framework
                            </a>
                            <a href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:border-purple-500 transition-all">
                                Free Strategy Call
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE GROWTH MAGNET PHILOSOPHY */}
            <section id="framework" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                                We don't buy users. <br />
                                <span className="text-purple-600">We attract them.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Most agencies focus on "Ads" (Paid Acquisition). At <strong>Black Magnet</strong>, we focus on **Product-Led Growth**. We bake the marketing directly into your app's features.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { t: "Viral Loops", d: "Referral systems that make users invite their friends naturally." },
                                    { t: "Retention Engineering", d: "Push notification & streak mechanics that keep users coming back." },
                                    { t: "ASO 2.0", d: "Advanced App Store Optimization to dominate organic search rankings." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-purple-600 text-white rounded-full p-1"><FaCheckCircle size={14} /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.t}</h4>
                                            <p className="text-slate-500 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-[2.8rem] p-8">
                                    <div className="space-y-6">
                                        <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse" />
                                        <div className="h-32 w-full bg-purple-50 rounded-3xl flex items-center justify-center">
                                            <FaChartLine className="text-5xl text-purple-200" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-20 bg-pink-50 rounded-2xl p-4">
                                                <div className="text-xs font-bold text-pink-600">CONVERSION</div>
                                                <div className="text-2xl font-black">+42%</div>
                                            </div>
                                            <div className="h-20 bg-emerald-50 rounded-2xl p-4">
                                                <div className="text-xs font-bold text-emerald-600">RETENTION</div>
                                                <div className="text-2xl font-black">x2.5</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">The Growth Stack</h2>
                        <p className="text-slate-500">Everything you need to move the needle.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <GrowthService 
                            icon={FaMicrochip} 
                            title="Behavioral Analytics" 
                            desc="We integrate tools like Mixpanel and Amplitude to see exactly where users drop off, allowing us to fix 'leaky funnels'."
                        />
                        <GrowthService 
                            icon={FaFlask} 
                            title="Aggressive A/B Testing" 
                            desc="We test your onboarding, paywalls, and CTAs. We don't guess—we let the data tell us what makes you money."
                        />
                        <GrowthService 
                            icon={FaMagnet} 
                            title="The 'Black Magnet' Loop" 
                            desc="Our proprietary referral engine design that lowers your Cost Per Acquisition (CPA) by turning users into your sales team."
                        />
                        <GrowthService 
                            icon={FaUserCheck} 
                            title="Personalized CRM" 
                            desc="Automated, behavior-based emails and push notifications that speak to users based on what they actually do in the app."
                        />
                        <GrowthService 
                            icon={FaSearchDollar} 
                            title="Monetization Audit" 
                            desc="Optimizing your subscription tiers, ad placements, or in-app purchases to maximize Average Revenue Per User (ARPU)."
                        />
                        <GrowthService 
                            icon={FaBullhorn} 
                            title="Growth Hacking Campaigns" 
                            desc="Strategic 'surprising' marketing tactics and community seeding to spark organic viral growth on social media."
                        />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic">Ready for the Hockey Stick?</h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
                            If you're tired of seeing "10 downloads" on your store page, it's time to engineer your growth. Let's build a strategy that works.
                        </p>
                        <a href="/contact" className="px-12 py-6 bg-purple-600 text-white rounded-2xl font-black text-xl hover:bg-purple-500 transition-all flex items-center justify-center gap-3 w-fit mx-auto shadow-xl">
                            Start Growing <FaRocket />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function GrowthService({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:border-purple-100 transition-all group"
        >
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Icon />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
        </motion.div>
    );
}