"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
          Ready to build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">next big thing?</span>
        </h2>

        <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop dreaming and start shipping. We help ambitious founders engage users and raise capital with world-class software.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/start-project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50 flex items-center gap-3 group"
            >
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-colors flex items-center gap-3"
            >
              <FaCalendarAlt className="text-slate-400" />
              Book a Free Call
            </motion.button>
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>
          <div className="text-slate-600 text-sm hidden md:block">|</div>
          <div className="text-slate-400 text-sm font-medium">
            Response within 24h
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
