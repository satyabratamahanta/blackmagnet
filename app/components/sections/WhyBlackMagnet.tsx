import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket, FaHandshake, FaCheck, FaArrowRight } from "react-icons/fa";

const strategies = [
  {
    icon: FaBrain,
    title: "Human-Led, AI-Power",
    desc: "We don't just generate generic code. We architect custom solutions using AI as a force multiplier, guided by senior engineering expertise.",
    accent: "text-red-600",
    bg: "bg-red-50",
    delay: 0.1,
  },
  {
    icon: FaCode,
    title: "Production Engineering",
    desc: "No spaghetti code. We build scalable, maintainable systems designed to handle millions of users from day one. Clean architecture is our standard.",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    delay: 0.2,
  },
  {
    icon: FaRocket,
    title: "Speed Without Compromise",
    desc: "Ship 3x faster without breaking things. our intelligent workflows cut the grunt work, allowing us to focus on the critical logic that matters.",
    accent: "text-purple-600",
    bg: "bg-purple-50",
    delay: 0.3,
  },
  {
    icon: FaHandshake,
    title: "Partners, Not Vendors",
    desc: "We dive deep into your business logic. We're here for the long haul—from MVP to Series B and beyond, we scale as you scale.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    delay: 0.4,
  }
];

export default function WhyBlackMagnet() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/50">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-red-600 rounded-full" />
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              The Agency <br />
              <span className="text-slate-400">of the Future.</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg leading-relaxed max-w-xl"
          >
            Traditional agencies are too slow. Freelancers are too risky.
            We combine the reliability of a firm with the speed of AI to deliver elite software.
          </motion.p>
        </div>

        {/* Strategies Grid - Light Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.accent} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <item.icon />
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm relative z-10">
                {item.desc}
              </p>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
