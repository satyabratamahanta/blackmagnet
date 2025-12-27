
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight, FaRocket, FaUsers, FaServer, FaMobileAlt,
  FaChevronRight, FaExternalLinkAlt, FaStar, FaGlobe, FaApple, FaAndroid, FaLayerGroup
} from "react-icons/fa";
import {
  SiFlutter, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFirebase, SiSupabase, SiKotlin, SiSwift, SiNodedotjs,
  SiPython, SiAmazon, SiGraphql
} from "react-icons/si";

// --- Configuration Data ---
const STATS = [
  {
    id: "apps",
    label: "Apps Shipped",
    value: "25",
    desc: "iOS, Android & Web",
    icon: FaMobileAlt,
    theme: "from-blue-600 to-blue-700",
    grid: "md:col-span-2 md:row-span-2",
  },
  {
    id: "users",
    label: "User Reach",
    value: "500k+",
    desc: "Global active users",
    icon: FaUsers,
    theme: "from-emerald-500 to-teal-600",
    grid: "md:col-span-1 md:row-span-2",
  },
  {
    id: "managed",
    label: "Maintained",
    value: "18",
    desc: "Active Support",
    icon: FaServer,
    theme: "from-indigo-500 to-purple-600",
    grid: "md:col-span-1 md:row-span-1",
  },
  {
    id: "pipeline",
    label: "Pipeline",
    value: "6",
    desc: "Under Dev",
    icon: FaRocket,
    theme: "from-orange-500 to-pink-500",
    grid: "md:col-span-1 md:row-span-1",
  },
];

const TECH_STACK = [
  { icon: SiFlutter, name: "Flutter", color: "text-[#02569B]" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiKotlin, name: "Kotlin", color: "text-[#7F52FF]" },
  { icon: SiSwift, name: "Swift", color: "text-[#F05138]" },
  { icon: SiFirebase, name: "Firebase", color: "text-[#FFCA28]" },
  { icon: SiSupabase, name: "Supabase", color: "text-[#3ECF8E]" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
  { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  { icon: SiAmazon, name: "AWS", color: "text-[#FF9900]" },
  { icon: SiGraphql, name: "GraphQL", color: "text-[#E10098]" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
];

const PROJECTS = [
  { name: "PayFlow Pro", cat: "Fintech", result: "+200% ROI" },
  { name: "MediConnect", cat: "Healthcare", result: "1M+ Users" },
  { name: "ShopSense", cat: "E-commerce", result: "3.5x Sales" },
  { name: "Odia School Books", cat: "EdTech", result: "100K+ DL" }
];

// --- Sub-Components ---

const StatCard = ({ stat, index }: { stat: typeof STATS[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative group overflow-hidden rounded-3xl p-8 shadow-lg bg-gradient-to-br ${stat.theme} text-white ${stat.grid}`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">{stat.label}</p>
        <h4 className="text-5xl md:text-7xl font-extrabold tracking-tighter">{stat.value}</h4>
      </div>
      <p className="text-lg font-medium opacity-90">{stat.desc}</p>
    </div>

    {/* Decorative Background Icon */}
    <stat.icon className="absolute -bottom-6 -right-6 text-[12rem] opacity-15 rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out" />
  </motion.div>
);

const Portfolio = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <header className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              Our Track Record
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Proven results, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                built with precision.
              </span>
            </h2>
          </motion.div>
        </header>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Tech Stack - Left Side (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-1 bg-blue-600 rounded-full" />
              <h3 className="text-2xl font-bold text-slate-900">The Modern Stack</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all cursor-default"
                >
                  <tech.icon className={`text - 2xl ${tech.color} `} />
                  <span className="font-semibold text-slate-700 text-sm">{tech.name}</span>
                </motion.div>
              ))}
              <div className="flex items-center justify-center p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm">
                +15 More Tools
              </div>
            </div>
          </div>

          {/* Project List - Right Side (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-1 bg-emerald-500 rounded-full" />
              <h3 className="text-2xl font-bold text-slate-900">Recent Deliveries</h3>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
                >
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h5>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                      {p.cat}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                      {p.result}
                    </span>
                    <FaChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/portfolio" className="w-full mt-8 py-4 flex items-center justify-center gap-3 text-white bg-slate-900 rounded-2xl font-bold hover:bg-blue-600 transition-all group">
              See What We've Built
              <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;