"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { 
    FaShieldAlt, FaBug, FaSyncAlt, FaServer, 
    FaCheckCircle, FaRocket, FaGooglePlay, 
    FaApple, FaExclamationTriangle, FaLock, 
    FaChartLine, FaCloudDownloadAlt, FaFileContract 
} from "react-icons/fa";

export default function MaintenancePage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live App Governance
                        </span>
                        
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                            Your App, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Always Online.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                            Mobile OS versions update every few months. Store policies change every few weeks. 
                            We provide the <strong>Technical Shield</strong> your app needs to stay compliant, secure, and bug-free.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#plans" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1">
                                Explore Tech Plans
                            </a>
                            <a href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:border-emerald-500 transition-all">
                                Request Custom Audit
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE DIFFERENTIATION */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 opacity-10">
                            <FaFileContract className="text-[200px]" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-4">What "Technical Maintenance" Means</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Unlike content management, this is about the **codebase integrity**. We ensure your SSL certificates don't expire, your SDKs remain updated to the latest Google/Apple requirements, and your server scales with traffic. 
                                <span className="block mt-4 text-emerald-400 font-bold">We handle the tech; you handle the business.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE CAPABILITIES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">How We Protect You</h2>
                        <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <Capability 
                            icon={FaGooglePlay} 
                            title="Store Governance" 
                            desc="We monitor your Google Play & App Store Console daily for policy violations, target API level requirements, and metadata compliance."
                        />
                        <Capability 
                            icon={FaLock} 
                            title="Infrastructure Security" 
                            desc="Regular security patches for your backend, database optimization, and implementation of the latest encryption standards."
                        />
                        <Capability 
                            icon={FaBug} 
                            title="Crash Monitoring" 
                            desc="We use real-time monitoring to identify crashes on specific devices (e.g., iPhone 15 vs 16) and ship hotfixes immediately."
                        />
                        <Capability 
                            icon={FaSyncAlt} 
                            title="Dependency Updates" 
                            desc="We keep third-party libraries (Firebase, Stripe, Maps) updated to prevent 'Library Rot' and feature breakage."
                        />
                        <Capability 
                            icon={FaServer} 
                            title="Uptime Stewardship" 
                            desc="24/7 monitoring of your cloud infrastructure. If your API goes down at 3 AM, our team is already on it."
                        />
                        <Capability 
                            icon={FaChartLine} 
                            title="Monthly Tech Health" 
                            desc="Detailed reports on app performance, load times, server costs, and recommendations for technical scaling."
                        />
                    </div>
                </div>
            </section>

            {/* PRICING PLANS */}
            <section id="plans" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Technical Retention Plans</h2>
                        <p className="text-slate-500">Predictable maintenance costs for sustainable growth.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <PriceCard
                            title="Essential"
                            price="₹12,000"
                            period="/mo"
                            features={["Critical Bug Fixes", "Uptime Monitoring", "Monthly Security Scan", "Store Policy Alerts", "Email Support"]}
                        />
                        <PriceCard
                            title="Professional"
                            price="₹30,000"
                            period="/mo"
                            isPopular
                            features={[
                                "Everything in Essential",
                                "Third-Party Library Updates",
                                "OS Compatibility Testing",
                                "Store Console Management",
                                "Performance Optimization",
                                "Priority Slack Support"
                            ]}
                            desc="Recommended for active business apps."
                        />
                        <PriceCard
                            title="Enterprise"
                            price="Custom"
                            period=""
                            features={[
                                "24/7 Incident Response",
                                "Dedicated Dev Resources",
                                "Full Infrastructure Management",
                                "Monthly UX/UI Audits",
                                "Compliance Paperwork Support",
                                "Quarterly Strategy Call"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10"><FaRocket size={100} /></div>
                    <div className="absolute bottom-10 right-10"><FaShieldAlt size={150} /></div>
                </div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Stop Worrying About Store Removals.</h2>
                    <p className="text-emerald-50 text-xl mb-12">
                        Whether we built your app or someone else did, we are ready to take over the technical heavy lifting.
                    </p>
                    <a href="/contact" className="px-12 py-6 bg-white text-emerald-700 rounded-full font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl inline-flex items-center gap-3">
                        Secure Your App Now <FaCloudDownloadAlt />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Capability({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:border-emerald-100 transition-all duration-300">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Icon />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
        </div>
    );
}

const PriceCard = ({ title, price, period, features, isPopular, desc }: { title: string, price: string, period: string, features: string[], isPopular?: boolean, desc?: string }) => (
    <div className={`p-10 rounded-[2.5rem] border flex flex-col relative transition-all duration-500 ${isPopular ? "bg-white text-slate-900 border-emerald-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] scale-105 z-10" : "bg-white border-slate-200 text-slate-900 hover:border-emerald-200"}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-[0.2em] shadow-lg">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-black mb-1 tracking-tight">{title}</h3>
        <div className="flex items-baseline mb-4">
            <span className="text-4xl font-black">{price}</span>
            <span className="text-slate-400 font-bold ml-1">{period}</span>
        </div>
        {desc && <p className="text-xs text-slate-400 mb-8 font-bold uppercase tracking-wider">{desc}</p>}
        {!desc && <div className="mb-8 h-4"></div>}

        <ul className="space-y-4 mb-10 flex-1">
            {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <FaCheckCircle className={`mt-0.5 shrink-0 ${isPopular ? "text-emerald-500" : "text-slate-300"}`} />
                    <span className="text-slate-600 leading-tight">{f}</span>
                </li>
            ))}
        </ul>
        
        <a href="/contact" className={`w-full py-4 rounded-2xl font-black text-center transition-all ${isPopular ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>
            Select Plan
        </a>
    </div>
);