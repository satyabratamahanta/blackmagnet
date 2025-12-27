"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaArrowRight, FaGooglePlay, FaApple, FaAndroid, FaGlobe, FaClock, FaCheckCircle } from "react-icons/fa";
import { SiFlutter, SiReact, SiNextdotjs, SiPython, SiFirebase, SiSupabase, SiSwift, SiTensorflow, SiDocker, SiMongodb, SiGraphql } from "react-icons/si";

// Project Data
const projects = [
    {
        id: 1,
        title: "PayFlow Pro",
        category: "Mobile App",
        catFilter: "mobile",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-blue-600 to-indigo-900",
        stat: "+200% Retention",
        desc: "A fintech super-app for seamless cross-border payments.",
        stack: [SiFlutter, SiFirebase],
        year: "2024",
        services: ["Development"],
        platforms: [FaAndroid, FaApple],
        duration: "4 Months"
    },
    {
        id: 2,
        title: "MediConnect",
        category: "Mobile App",
        catFilter: "mobile",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-emerald-500 to-teal-900",
        stat: "1M+ Patients",
        desc: "HIPAA-compliant telemedicine app connecting doctors and patients.",
        stack: [SiFlutter, SiSupabase],
        year: "2023",
        services: ["Development"],
        platforms: [FaAndroid, FaApple],
        duration: "6 Months"
    },
    {
        id: 3,
        title: "ShopSense",
        category: "Growth Campaign",
        catFilter: "growth",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-violet-500 to-purple-900",
        stat: "3.5x Conversion",
        desc: "Viral loop engineering and A/B testing for e-commerce scaling.",
        stack: [SiPython, SiNextdotjs],
        year: "2024",
        services: ["Growth", "Analytics"],
        platforms: [FaGlobe],
        duration: "2 Months"
    },
    {
        id: 4,
        title: "Odia School Books",
        category: "Education App",
        catFilter: "mobile",
        iconSrc: "/portfolio/odia-school-books-icon.png",
        bgColor: "bg-gradient-to-br from-orange-500 to-rose-600",
        stat: "100K+ Downloads",
        desc: "Comprehensive education platform for Odisha students.",
        stack: [SiFlutter, FaGooglePlay],
        year: "2024",
        services: ["Development", "Maintenance", "Growth", "SEO"],
        platforms: [FaAndroid],
        duration: "Live"
    },
    {
        id: 7,
        title: "Odia Bhagabata Gita",
        category: "Mobile App",
        catFilter: "mobile",
        iconSrc: "/portfolio/odia-gita-v2.png",
        bgColor: "bg-gradient-to-br from-orange-500 to-yellow-600",
        stat: "10K+ Downloads",
        desc: "Complete Shreemad Bhagabata Gita in Odia language.",
        stack: [SiFlutter, FaGooglePlay],
        year: "2024",
        services: ["Maintenance"],
        platforms: [FaAndroid],
        duration: "Live"
    },
    {
        id: 8,
        title: "+2 Science : CHSE Science Book",
        category: "Education App",
        catFilter: "mobile",
        iconSrc: "/portfolio/chse-science-book.png",
        bgColor: "bg-gradient-to-br from-cyan-500 to-blue-700",
        stat: "10K+ Downloads",
        desc: "A purely educational app for CHSE board students.",
        stack: [SiFlutter, FaGooglePlay],
        year: "2024",
        services: ["Development", "Maintenance", "Growth", "SEO"],
        platforms: [FaAndroid],
        duration: "Live"
    },
    {
        id: 9,
        title: "Odisha School Exam Question",
        category: "Education App",
        catFilter: "mobile",
        iconSrc: "/portfolio/odisha-exam.png",
        bgColor: "bg-gradient-to-br from-teal-500 to-emerald-700",
        stat: "10K+ Downloads",
        desc: "Complete mock test platform for Class 8-10 students.",
        stack: [SiFlutter, FaGooglePlay],
        year: "2024",
        services: ["Maintenance", "SEO"],
        platforms: [FaAndroid],
        duration: "Live"
    },
    {
        id: 10,
        title: "OAV Books and Solutions",
        category: "Education App",
        catFilter: "mobile",
        iconSrc: "/portfolio/oav-books.png",
        bgColor: "bg-gradient-to-br from-green-600 to-blue-800",
        stat: "750+ Students",
        desc: "Comprehensive study solutions for OAV students.",
        stack: [SiFlutter, FaAndroid],
        year: "2024",
        services: ["Development", "Maintenance"],
        platforms: [FaAndroid],
        duration: "Delivered"
    },
    {
        id: 11,
        title: "RTO Exam Odia : DL Test",
        category: "Utility App",
        catFilter: "mobile",
        iconSrc: "/portfolio/rto-exam.png",
        bgColor: "bg-gradient-to-br from-teal-400 to-cyan-600",
        stat: "300+ Drivers",
        desc: "Driving License Test preparation app for Odisha.",
        stack: [SiFlutter, FaAndroid],
        year: "2021",
        services: ["Development"],
        platforms: [FaAndroid],
        duration: "Delivered"
    },
    {
        id: 12,
        title: "Odia School Book",
        category: "SEO Campaign",
        catFilter: "seo",
        iconSrc: "/portfolio/odia-book-legacy.jpg",
        bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
        stat: "#1 Ranking",
        desc: "SEO dominance strategy for educational content in Odia.",
        stack: [SiFlutter, FaAndroid],
        year: "2022",
        services: ["Growth", "SEO"],
        platforms: [FaAndroid],
        duration: "Delivered"
    },
    {
        id: 13,
        title: "Odia Shayari : Odia Status App",
        category: "Social App",
        catFilter: "mobile",
        iconSrc: "/portfolio/odia-shayari.png",
        bgColor: "bg-gradient-to-br from-sky-400 to-blue-500",
        stat: "Custom Build",
        desc: "Custom-requested status and quote sharing platform.",
        stack: [SiFlutter, FaAndroid],
        year: "2021",
        services: ["Development"],
        platforms: [FaAndroid],
        duration: "Delivered"
    },
    {
        id: 5,
        title: "FitTrack Pro",
        category: "Mobile App",
        catFilter: "mobile",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-cyan-400 to-blue-800",
        stat: "99% Uptime",
        desc: "Real-time workout tracking with robust backend scaling.",
        stack: [SiPython, SiSwift],
        year: "2024",
        services: ["Development", "Maintenance"],
        platforms: [FaApple],
        duration: "3 Months"
    },
    {
        id: 6,
        title: "LogiChain",
        category: "App Maintenance",
        catFilter: "maintenance",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-slate-600 to-slate-900",
        stat: "$50M Managed",
        desc: "Long-term maintenance and scaling for logistics software.",
        stack: [SiNextdotjs, SiFirebase],
        year: "2023",
        services: ["Maintenance", "Support"],
        platforms: [FaGlobe],
        duration: "Ongoing"
    },
    {
        id: 14,
        title: "NeonBank",
        category: "Fintech App",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-fuchsia-600 to-purple-800",
        stat: "In Production",
        desc: "Next-gen neo-banking interface for Gen Z.",
        stack: [SiFlutter, SiSupabase],
        year: "2025",
        services: ["Development"],
        platforms: [FaAndroid, FaApple],
        duration: "In Dev"
    },
    {
        id: 15,
        title: "AgroTech AI",
        category: "AI Solution",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-lime-500 to-green-700",
        stat: "In Production",
        desc: "Crop disease detection using on-device ML.",
        stack: [SiPython, SiTensorflow],
        year: "2025",
        services: ["AI Integration"],
        platforms: [FaAndroid],
        duration: "In Dev"
    },
    {
        id: 16,
        title: "UrbanCommute",
        category: "Mobility App",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
        stat: "In Production",
        desc: "Smart city transport aggregator for metro and bus networks.",
        stack: [SiFlutter, SiFirebase],
        year: "2025",
        services: ["Development"],
        platforms: [FaAndroid, FaApple],
        duration: "In Dev"
    },
    {
        id: 17,
        title: "HealthPulse",
        category: "HealthTech",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-red-500 to-rose-700",
        stat: "In Production",
        desc: "Real-time patient monitoring dashboard for clinics.",
        stack: [SiReact, SiMongodb],
        year: "2025",
        services: ["Development"],
        platforms: [FaGlobe],
        duration: "In Dev"
    },
    {
        id: 18,
        title: "CryptoVault",
        category: "Web3 App",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-indigo-500 to-blue-800",
        stat: "In Production",
        desc: "Non-custodial crypto wallet with multi-chain support.",
        stack: [SiFlutter, SiGraphql],
        year: "2025",
        services: ["Development", "Security"],
        platforms: [FaAndroid, FaApple],
        duration: "In Dev"
    },
    {
        id: 19,
        title: "EduQuest",
        category: "EdTech Platform",
        catFilter: "pipeline",
        iconSrc: "/portfolio/placeholder-icon.svg",
        bgColor: "bg-gradient-to-br from-cyan-400 to-blue-600",
        stat: "In Production",
        desc: "Gamified learning platform for competitive exams.",
        stack: [SiNextdotjs, SiDocker],
        year: "2025",
        services: ["Development", "Growth"],
        platforms: [FaGlobe],
        duration: "In Dev"
    }
];

const categories = [
    { id: "all", label: "All Work" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "maintenance", label: "Maintenance" },
    { id: "growth", label: "Growth & SEO" },
    { id: "pipeline", label: "In Pipeline" },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.catFilter === filter);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* HEADER */}
            <section className="pt-32 pb-16 px-6 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="w-8 h-[2px] bg-blue-600"></span>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Portfolio</span>
                            <span className="w-8 h-[2px] bg-blue-600"></span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works.</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Real apps, real results. We build software that scales.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FILTER & GRID */}
            <section className="py-16 px-6 min-h-screen bg-slate-50/50">
                <div className="max-w-7xl mx-auto">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${filter === cat.id
                                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900 ring-offset-2"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Legend / Info */}
                    <div className="hidden md:flex flex-wrap items-center justify-center gap-8 mb-16 text-xs text-slate-500 border-b border-slate-200 pb-8 mx-auto w-full max-w-4xl">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="uppercase tracking-wider font-semibold">Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span className="uppercase tracking-wider font-semibold">Maintenance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="uppercase tracking-wider font-semibold">Growth</span>
                        </div>
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative"
                            >
                                {/* Upper Half: Colorful Background */}
                                <div className={`h-40 ${project.bgColor} relative p-6 flex flex-col items-end`}>

                                    {/* Status / Duration Pill (Top Left) */}
                                    <div className="absolute top-6 left-6 flex items-center gap-2">
                                        {project.duration === "Live" ? (
                                            <span className="flex items-center gap-1.5 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                Live
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-full">
                                                <FaClock className="text-[10px]" />
                                                {project.duration}
                                            </span>
                                        )}
                                    </div>

                                    {/* Service Badges (Top Right) */}
                                    <div className="absolute top-6 right-6 max-w-[55%] flex flex-wrap justify-end gap-1.5">
                                        {project.services.map((service, i) => (
                                            <span key={i} className="text-white/90 text-[9px] font-bold bg-black/10 backdrop-blur-md px-2 py-1 rounded border border-white/5 uppercase tracking-widest hover:bg-white/20 transition-colors cursor-default">
                                                {service}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Year Badge (Bottom Right) */}
                                    <div className="absolute bottom-6 right-6">
                                        <span className="text-white/80 text-[10px] font-bold bg-black/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Icon Overlapping */}
                                    <div className="absolute -bottom-8 left-8 w-24 h-24 rounded-[1.5rem] bg-white p-1.5 shadow-xl group-hover:scale-105 transition-transform duration-500 z-10">
                                        <div className="w-full h-full relative rounded-[1.2rem] overflow-hidden bg-slate-50 border border-slate-100">
                                            <Image
                                                src={project.iconSrc}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="pt-12 px-8 pb-8 flex-1 flex flex-col relative z-0">

                                    {/* Title & Category & Platforms */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">{project.category}</div>
                                            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                            {/* Platform Icons */}
                                            <div className="flex gap-2 text-slate-400">
                                                {project.platforms.map((Icon, i) => (
                                                    <Icon key={i} className="text-sm hover:text-blue-600 transition-colors" />
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Tech Stack Divider */}
                                    <div className="w-full h-px bg-slate-100 mb-5"></div>

                                    {/* Tech Stack & Footer */}
                                    <div className="flex items-end justify-between mt-auto">
                                        <div className="flex flex-col gap-3">
                                            {/* Stack */}
                                            <div className="flex gap-3 text-slate-300">
                                                {project.stack.map((Icon, i) => (
                                                    <Icon key={i} className="text-xl hover:text-slate-600 transition-colors duration-300" title="Tech Stack" />
                                                ))}
                                            </div>
                                            {/* Stat */}
                                            <div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Impact</div>
                                                <div className="text-lg font-bold text-slate-900 bg-slate-50 px-2 py-1 -ml-2 rounded-lg w-fit group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                                    {project.stat}
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
                                            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Have a Project in Mind?</h2>
                    <p className="text-slate-600 text-lg mb-10">
                        We are currently accepting 2 new enterprise clients for Q1.
                    </p>
                    <a href="/start-project" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1">
                        Start Your Project <FaArrowRight />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
