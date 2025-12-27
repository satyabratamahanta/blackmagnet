"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaMobileAlt, FaRocket, FaUserTie, FaBrain, FaNetworkWired, FaShieldAlt, FaGlobeAmericas, FaCode, FaCogs, FaCheckCircle } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiFlutter, SiPython, SiNodedotjs, SiGo, SiSupabase, SiOpenai, SiTensorflow, SiPytorch, SiFirebase, SiDocker } from "react-icons/si";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%) pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
              Forging Digital Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              We Are The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Native Engine.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-3xl mx-auto">
              BlackMagnet merges elite human architecture with autonomous AI execution. To build faster, scale harder, and deliver software that defines industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "12+", label: "Countries Served" },
            { num: "98%", label: "Client Retention" },
            { num: "3x", label: "Faster Delivery" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-1">{stat.num}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">The BlackMagnet Way</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our rigorous process ensures that every pixel and line of code serves a purpose.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10" />

            {[
              { title: "Discovery", icon: FaBrain, desc: "We deep dive into your business logic, market gaps, and user needs." },
              { title: "Architecture", icon: FaNetworkWired, desc: "Designing scalable systems and intuitive UX blueprints before coding begins." },
              { title: "AI-Build", icon: FaCogs, desc: "Our AI agents generate boilerplate and logic, human experts refine and polish." },
              { title: "Launch", icon: FaRocket, desc: "Rigorous testing, optimized deployment, and post-launch scaling strategies." }
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg"
                whileHover={{ y: -10 }}
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-3xl text-blue-600 mb-6 mx-auto border-4 border-white shadow-sm font-black relative z-10">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">{step.title}</h3>
                <p className="text-slate-500 text-center text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden rounded-[3rem] mx-4 md:mx-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">Our <span className="text-blue-400">Arsenal</span></h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 opacity-80">
            <TechItem icon={SiFlutter} name="Flutter" />
            <TechItem icon={SiReact} name="React" />
            <TechItem icon={SiNextdotjs} name="Next.js" />
            <TechItem icon={SiPython} name="Python" />
            <TechItem icon={SiNodedotjs} name="Node.js" />
            <TechItem icon={SiGo} name="Go" />
            <TechItem icon={SiSupabase} name="Supabase" />
            <TechItem icon={SiFirebase} name="Firebase" />
            <TechItem icon={SiOpenai} name="OpenAI" />
            <TechItem icon={SiTensorflow} name="TensorFlow" />
            <TechItem icon={SiPytorch} name="PyTorch" />
            <TechItem icon={SiDocker} name="Docker" />
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Engineered for Trust. <br />Built for Speed.</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Transparency is our currency. We don't hide behind jargon. We build clear, scalable systems that you own 100%. Our "Hive Model" ensures you get the attention of a boutique agency with the output of an enterprise firm.
              </p>
              <ul className="space-y-4">
                {[
                  "100% IP Ownership Guarantee",
                  "Weekly Sprint Reports",
                  "Direct Access to Engineers",
                  "Enterprise-Grade Security"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <FaCheckCircle className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] rotate-3 opacity-20"></div>
              <div className="bg-slate-50 p-10 rounded-[3rem] relative transform rotate-0 hover:rotate-1 transition-all duration-500">
                <FaShieldAlt className="text-6xl text-blue-600 mb-6" />
                <h3 className="text-2xl font-black text-slate-900 mb-4">Our Promise</h3>
                <p className="text-slate-600 leading-relaxed">
                  "We treat your budget like our own seed capital. No bloat, no unnecessary billable hours. Just pure, efficient execution aimed at one thing: your growth."
                </p>
                <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div>
                    <div className="font-bold text-slate-900">Leadership Team</div>
                    <div className="text-xs text-slate-500 uppercase">BlackMagnet Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Scale?</h2>
          <p className="text-xl text-slate-500 mb-10">
            Whether you're a startup looking for an MVP or an enterprise needing a digital overhaul, our team is ready to deploy.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="/start-project" className="px-10 py-5 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start Your Project
            </a>
            <a href="/services" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-black text-lg hover:border-slate-400 transition-all">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const TechItem = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="flex flex-col items-center gap-4 group cursor-default">
    <Icon className="text-5xl text-slate-500 group-hover:text-white transition-colors duration-300" />
    <span className="font-bold text-slate-500 group-hover:text-white transition-colors duration-300">{name}</span>
  </div>
);
