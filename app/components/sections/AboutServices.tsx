"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaApple, FaAndroid, FaCode, FaBrain, FaArrowRight, FaChartLine, FaGlobeAmericas, FaUsers, FaArrowUp, FaServer, FaShieldAlt, FaUser, FaSearch, FaHome, FaShoppingBag, FaStar, FaBookOpen, FaCog } from "react-icons/fa";

// Service Data
const services = [
    {
        id: "ios",
        icon: FaApple,
        title: "iOS Apps",
        tech: ["Swift", "SwiftUI", "XCode"],
        desc: "Building native experiences for the Apple ecosystem.",
        color: "text-slate-900",
        frameColor: "border-slate-800",
        screenBg: "bg-white",
    },
    {
        id: "android",
        icon: FaAndroid,
        title: "Android Apps",
        tech: ["Kotlin", "Jetpack", "Gradle"],
        desc: "Scalable solutions for the global Android market.",
        color: "text-green-600",
        frameColor: "border-slate-800",
        screenBg: "bg-white",
    }
];

const IosScreen = () => (
    <div className="flex flex-col h-full pt-6 relative">
        {/* iOS Header */}
        <div className="flex justify-between items-end mb-6 px-1">
            <h3 className="text-2xl font-bold text-slate-900">Explore</h3>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <FaUser className="text-slate-400 text-xs" />
            </div>
        </div>

        {/* Featured Card (Universal: Prominent Platform Identity) */}
        <motion.div
            className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl mb-6 relative overflow-hidden h-32 flex items-center gap-4"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />

            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FaApple className="text-4xl text-white" />
            </div>
            <div>
                <div className="w-32 h-4 bg-white rounded-full mb-2" />
                <div className="w-20 h-2 bg-slate-500 rounded-full" />
            </div>
        </motion.div>

        {/* Universal Content List (Shopping / Education / Articles) */}
        <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
                <div className="text-sm font-bold text-slate-900">Popular</div>
                <div className="text-xs text-blue-600 font-medium">View All</div>
            </div>

            {[1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="flex gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                >
                    <div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0" />
                    <div className="flex-1 py-1">
                        <div className="w-3/4 h-3 bg-slate-800 rounded-full mb-2" />
                        <div className="w-1/2 h-2 bg-slate-300 rounded-full mb-3" />
                        <div className="flex gap-2">
                            <div className="w-12 h-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center text-[8px] font-bold">GET</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom Tab Bar Mockup */}
        <div className="mt-auto bg-white border-t border-slate-100 py-3 px-6 flex justify-between items-center text-slate-300">
            <FaHome className="text-slate-900 text-xl" />
            <FaSearch className="text-xl" />
            <FaShoppingBag className="text-xl" />
            <FaStar className="text-xl" />
        </div>
    </div>
);

const AndroidScreen = () => (
    <div className="flex flex-col h-full pt-8 relative">
        {/* Material Search Bar */}
        <motion.div
            className="bg-slate-100 rounded-full h-12 w-full mb-6 flex items-center px-4 shadow-sm"
            initial={{ width: "80%" }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.2 }}
        >
            <FaSearch className="text-slate-400 mr-3" />
            <div className="w-24 h-2 bg-slate-300 rounded-full" />
        </motion.div>

        {/* Welcome / Brand Card */}
        <motion.div
            className="bg-green-500 rounded-3xl p-6 text-white shadow-lg shadow-green-100 mb-6 relative overflow-hidden h-32 flex items-center gap-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FaAndroid className="text-4xl text-white" />
            </div>
            <div>
                <div className="w-32 h-4 bg-white rounded-full mb-2" />
                <div className="w-20 h-2 bg-green-200 rounded-full" />
            </div>
        </motion.div>

        {/* Dashboard Grid (Universal Categories) */}
        <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 aspect-square"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? 'bg-orange-50 text-orange-500' :
                        i === 2 ? 'bg-blue-50 text-blue-500' :
                            i === 3 ? 'bg-purple-50 text-purple-500' : 'bg-slate-50 text-slate-500'
                        }`}>
                        {i === 1 ? <FaShoppingBag /> : i === 2 ? <FaBookOpen /> : i === 3 ? <FaStar /> : <FaCog />}
                    </div>
                    <div className="w-12 h-2 bg-slate-200 rounded-full" />
                </motion.div>
            ))}
        </div>

        {/* FAB */}
        <motion.div
            className="absolute bottom-6 right-4 w-12 h-12 bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center text-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1 }}
        >
            <FaArrowRight />
        </motion.div>
    </div>
);

const ServicePhone = ({ service, idx }: { service: any, idx: number }) => {
    return (
        <motion.div
            className={`relative mx-auto w-full max-w-[280px] h-[500px] ${service.frameColor} border-[8px] rounded-[40px] bg-slate-900 shadow-2xl overflow-hidden ${idx === 1 ? "lg:mt-16" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
            {/* Camera / Notch Logic */}
            {service.id === 'ios' ? (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-12 h-1.5 rounded-full bg-slate-800/50" />
                </div>
            ) : (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20 ring-1 ring-slate-800/50" />
            )}

            {/* Screen Content Wrapper */}
            <div className={`w-full h-full ${service.screenBg} p-5 relative`}>
                {service.id === 'ios' ? <IosScreen /> : <AndroidScreen />}
            </div>
        </motion.div>
    );
};

const AboutServices = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Visual Grid of Mobile Screens */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 order-2 lg:order-1">
                        {services.map((service, idx) => (
                            <ServicePhone key={idx} service={service} idx={idx} />
                        ))}
                    </div>

                    {/* Right Column: About Identity */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                What We <br />
                                <span className="text-slate-500">Offer.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                A modern mobile app development company combining human creativity with AI-assisted workflows to build powerful, scalable applications.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/services" className="group relative px-6 py-3 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                    Our Services
                                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/about" className="group px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                    About Us
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                                        <FaArrowRight className="text-[10px] text-slate-500" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div >
        </section >
    );
};

export default AboutServices;
