"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaAndroid, FaApple, FaBrain, FaArrowRight, FaStar } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiNextdotjs } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Orbit Component
const Orbit = ({ radius, duration, initialAngle = 0, children, reverse = false }: { radius: number, duration: number, initialAngle?: number, children: React.ReactNode, reverse?: boolean }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100/50"
      style={{ width: radius * 2, height: radius * 2 }}
      initial={{ rotate: initialAngle }}
      animate={{ rotate: initialAngle + (reverse ? -360 : 360) }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-slate-100"
      >
        <motion.div
          initial={{ rotate: -initialAngle }}
          animate={{ rotate: -initialAngle + (reverse ? 360 : -360) }}
          transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};


// ... Imports (No MagneticBackground)

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">

      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="hero-glow opacity-60" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[120px] rounded-full mix-blend-multiply opacity-70" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-violet-100 blur-[100px] rounded-full mix-blend-multiply opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: Content */}
        <motion.div
          className="text-center lg:text-left z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 text-sm font-medium text-blue-700 mb-8 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span>AI-Assisted Development</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Build Faster. <br />
            <span className="text-gradient">Scale Smarter.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            We architect high-performance mobile ecosystems. Where premium design meets AI-driven efficiency.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/start-project" className="group relative px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-red-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-1 flex items-center justify-center gap-2">
              <span className="relative z-10">Start a Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-full border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-all bg-white hover:border-slate-300 flex items-center justify-center">
              View Services
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 overflow-hidden`}>
                  <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-blue-100 to-blue-200' : i === 2 ? 'from-purple-100 to-purple-200' : i === 3 ? 'from-green-100 to-green-200' : 'from-orange-100 to-orange-200'}`} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                50+
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-slate-900">
                {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="w-4 h-4" />)}
              </div>
              <span className="text-sm font-semibold text-blue-700">50+ happy clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Abstract Visuals */}
        <motion.div
          className="relative flex justify-center perspective-[1000px] py-20 lg:py-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >

          {/* ORBIT SYSTEM */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            {/* Inner Orbit: Core Platforms */}
            <Orbit radius={190} duration={25} initialAngle={0}>
              <FaApple className="w-6 h-6 text-slate-800" />
            </Orbit>
            <Orbit radius={190} duration={25} initialAngle={180}> {/* Opposite side */}
              <FaAndroid className="w-6 h-6 text-blue-400" />
            </Orbit>

            {/* Middle Orbit: Frameworks */}
            <Orbit radius={270} duration={35} initialAngle={0} reverse>
              <SiFlutter className="w-6 h-6 text-blue-400" />
            </Orbit>
            <Orbit radius={270} duration={35} initialAngle={103} reverse>
              <FaReact className="w-6 h-6 text-cyan-400" />
            </Orbit>
            <Orbit radius={270} duration={35} initialAngle={206} reverse>
              <SiNextdotjs className="w-6 h-6 text-slate-900" />
            </Orbit>

            {/* Outer Orbit: Advanced & Backend */}
            <Orbit radius={350} duration={45} initialAngle={40}>
              <FaBrain className="w-6 h-6 text-violet-500" />
            </Orbit>
            <Orbit radius={350} duration={45} initialAngle={200}>
              <SiFirebase className="w-6 h-6 text-amber-500" />
            </Orbit>

          </div>


          {/* Main Card (Now Colorful Design Mockup) */}
          <motion.div
            className="relative z-10 w-[240px] h-[500px] bg-white rounded-[32px] border-[5px] border-slate-100 shadow-2xl p-4 flex flex-col gap-4"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Design Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-100/80" />
              <div className="w-16 h-4 rounded-full bg-slate-100" />
            </div>

            {/* Design Hero Box */}
            <div className="w-full h-32 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded-full opacity-50" />
              </div>
            </div>

            {/* Design Text Lines */}
            <div className="space-y-2">
              <div className="w-3/4 h-3 bg-slate-100 rounded-full" />
              <div className="w-full h-3 bg-slate-100 rounded-full" />
            </div>

            {/* Design Cards */}
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <div className="h-24 bg-violet-50 rounded-2xl border border-violet-100" />
              <div className="h-24 bg-cyan-50 rounded-2xl border border-cyan-100" />
            </div>

            {/* Design Button */}
            <div className="w-full h-10 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20 mt-2" />
          </motion.div>

          {/* Background Card Depth (Now Phone Mockup) */}
          <motion.div
            className="absolute top-8 -right-3 w-[240px] h-[500px] bg-white rounded-[32px] -z-10 border border-blue-100 shadow-sm overflow-hidden opacity-60"
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {/* Screen Content */}
            <div className="h-full w-full bg-blue-50 relative overflow-hidden flex flex-col">

              {/* UI Elements Mockup - Aligned Right */}
              <div className="w-full h-1/2 bg-gradient-to-b from-blue-50 to-transparent p-5 flex flex-col items-end pt-12">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 mb-5 shadow-lg shadow-blue-500/20" />
                <div className="h-3 w-3/4 bg-slate-200 rounded-full mb-3" />
                <div className="h-3 w-1/2 bg-slate-100 rounded-full" />
              </div>

              {/* Floating Elements inside phone - AI Right */}
              <motion.div
                className="absolute bottom-16 left-3 right-3 h-28 glass-panel rounded-xl p-3 flex flex-col gap-2 border border-white/50 shadow-sm items-end"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex flex-row-reverse items-center gap-2 w-full">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] font-bold">AI</div>
                  <div className="h-2 w-16 bg-slate-200 rounded-full" />
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
              </motion.div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-white rounded-b-xl shadow-sm border-b border-x border-slate-100" />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
