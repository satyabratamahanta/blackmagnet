"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaMobileAlt, FaServer, FaRocket, FaSearch, FaArrowRight, FaCheckCircle, FaQuestionCircle, FaGooglePlay, FaAppStoreIos, FaReact, FaApple } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiSupabase, SiNodedotjs, SiGraphql } from "react-icons/si";

const services = [
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "We build native-quality iOS and Android apps that feel premium and perform flawlessly.",
    badges: ["Flutter", "React Native", "iOS", "Android"],
    features: [
      "Cross-Platform Architecture",
      "Pixel-Perfect UI Implementation",
      "Offline-First Functionality",
      "Complex API Integration"
    ],
    color: "bg-blue-50 text-blue-600",
    action: "Start Your App",
    href: "/start-project"
  },
  {
    icon: FaServer,
    title: "App Maintenance & Scale",
    desc: "Your app needs to stay alive. We manage updates, server scaling, and bug fixes so you sleep soundly.",
    badges: ["24/7 Monitoring", "Cloud Scaling", "Bug Fixes", "Updates"],
    features: [
      "99.9% Uptime Guarantee",
      "Proactive Performance Monitoring",
      "Security Patch Management",
      "Legacy Code Refactoring"
    ],
    color: "bg-indigo-50 text-indigo-600",
    action: "View Plans",
    href: "/maintenance"
  },
  {
    icon: FaRocket,
    title: "App Growth",
    desc: "Building an app is just the start. We engineer viral loops and optimize funnels to scale your user base.",
    badges: ["User Acquisition", "Retention", "Analytics", "Viral Loops"],
    features: [
      "A/B Testing Strategies",
      "Conversion Rate Optimization",
      "Funnel Analysis",
      "Referral System Engineering"
    ],
    color: "bg-purple-50 text-purple-600",
    action: "View Growth Tools",
    href: "/growth"
  },
  {
    icon: FaSearch,
    title: "SEO & Visibility",
    desc: "Dominate search results and app stores. We ensure your software is found by the people who need it.",
    badges: ["Technical SEO", "ASO", "Content Strategy", "Backlinks"],
    features: [
      "App Store Optimization (ASO)",
      "Core Web Vitals Optimization",
      "Keyword Dominance",
      "Google Indexing Strategy"
    ],
    color: "bg-orange-50 text-orange-600",
    action: "Boost Traffic",
    href: "/seo"
  }
];

const faqs = [
  {
    q: "Do I own the source code?",
    a: "Absolutely. Once the project is paid for, you own 100% of the IP, code, and design assets. We are simply your build partners."
  },
  {
    q: "Will you help me get on the App Store?",
    a: "Yes. We handle the entire submission process, including metadata, screenshots, and compliance checks for both Apple App Store and Google Play."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Your idea is safe with us. We are happy to sign a Non-Disclosure Agreement before hearing any specific details."
  },
  {
    q: "What happens after launch?",
    a: "We offer flexible maintenance packages to handle updates, bug fixes, and new features. You are never left alone."
  }
];

const engagementModels = [
  {
    title: "MVP Sprint",
    desc: "Best for validating new ideas.",
    price: "Fixed Price",
    features: ["Scope Locked", "Fast Delivery (4-8 Weeks)", "Core Features Only", "Launch Support"],
    highlight: false
  },
  {
    title: "Dedicated Team",
    desc: "Best for scaling startups.",
    price: "Monthly Retainer",
    features: ["Flexible Scope", "Ongoing Development", "Priority Support", "Dedicated Developer"],
    highlight: true
  },
  {
    title: "Maintenance",
    desc: "Best for stable apps.",
    price: "Hourly / Monthly",
    features: ["Bug Fixes", "OS Updates", "Server Monitoring", "On-Demand Features"],
    highlight: false
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* HERO */}
      <section className="bg-white pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Mobile-First Engineering.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We don't dabble in everything. We specialize in building, growing, and maintaining world-class mobile applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK & STORES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Powering Your App With</p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
            <SiFlutter className="text-4xl text-blue-500" />
            <FaReact className="text-4xl text-cyan-500" />
            <SiFirebase className="text-4xl text-orange-500" />
            <SiSupabase className="text-4xl text-emerald-500" />
            <SiNodedotjs className="text-4xl text-green-600" />

            {/* Divider */}
            <div className="h-10 w-[2px] bg-slate-200 hidden md:block" />

            {/* Stores */}
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-2 text-slate-800">
                <FaApple className="text-4xl" />
                <span className="font-bold text-sm leading-tight hidden md:block">App Store<br />Deployment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <FaGooglePlay className="text-3xl" />
                <span className="font-bold text-sm leading-tight hidden md:block">Google Play<br />Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >

              {/* Image/Visual Side */}
              <div className="flex-1 w-full">
                <div className={`aspect-[4/3] rounded-[2.5rem] ${service.color.split(' ')[0]} flex items-center justify-center relative overflow-hidden group`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]" style={{ color: 'currentColor' }} />

                  <service.icon className={`text-9xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${service.color.split(' ')[1]}`} />

                  {/* Floating Action Link */}
                  <Link href={service.href} className="absolute bottom-8 right-8">
                    <div className="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-sm tracking-wider uppercase flex items-center gap-2 hover:scale-105 transition-transform text-slate-900">
                      {service.action} <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-3xl`}>
                  <service.icon />
                </div>

                <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Feature List */}
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.badges.map((badge, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-slate-500">We adapt to your stage of growth. No hidden fees, just clear deliverables.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-3xl border ${model.highlight ? 'border-blue-600 bg-blue-50/50 shadow-xl relative' : 'border-slate-200 bg-white hover:shadow-lg transition-shadow'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {model.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{model.title}</h3>
                <p className="text-slate-500 mb-6 h-10">{model.desc}</p>

                <div className="text-xl font-bold text-slate-900 mb-8 pb-8 border-b border-slate-100">{model.price}</div>

                <ul className="space-y-4 mb-8">
                  {model.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                      <FaCheckCircle className={`text-lg ${model.highlight ? 'text-blue-600' : 'text-slate-400'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${model.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  Start Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <FaQuestionCircle className="text-4xl text-slate-300 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">You Asked, We Answered.</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.q}</h4>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Got an App Idea?</h2>
          <p className="text-xl text-slate-400 mb-12">
            From initial concept to millions of downloads, we are the partners you need.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
            Start Your Journey
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
