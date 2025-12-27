"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaBuilding, FaCheckCircle, FaAward, FaUserTie, FaStore } from "react-icons/fa";

const clients = [
    { name: "TechVision", logo: FaBuilding },
    { name: "MediCorps", logo: FaCheckCircle },
    { name: "FinStream", logo: FaAward },
    { name: "Global Systems", logo: FaBuilding },
    { name: "NextGen AI", logo: FaCheckCircle },
    { name: "Smart Retail", logo: FaAward },
];

const reviews = [
    // High-End / Corporate
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CTO, FinStream",
        image: "SJ",
        quote: "The team at BlackMagnet built our entire digital foundation. The scalability is unmatched.",
        rating: 5,
        color: "bg-red-50 text-red-700"
    },
    {
        id: 2,
        name: "Elena Rodriguez",
        role: "Product Lead, TechVision",
        image: "ER",
        quote: "Double user retention simply because of the UI/UX overhaul they implemented. Incredible design sense.",
        rating: 5,
        color: "bg-slate-100 text-slate-700"
    },
    {
        id: 3,
        name: "Michael Chang",
        role: "Director, Global Systems",
        image: "MC",
        quote: "Enterprise-grade security was our priority. They delivered a fortress without compromising speed.",
        rating: 5,
        color: "bg-slate-100 text-slate-700"
    },
    {
        id: 4,
        name: "David Chen",
        role: "Founder, MediCorps",
        image: "DC",
        quote: "HIPAA-compliant MVP in 6 weeks. Helped us raise our Series A instantly.",
        rating: 5,
        color: "bg-slate-100 text-slate-700"
    },
    {
        id: 5,
        name: "Marcus Thorne",
        role: "CEO, Apex Logistics",
        image: "MT",
        quote: "Our fleet management efficiency improved by 300% thanks to the custom dashboard.",
        rating: 5,
        color: "bg-indigo-100 text-indigo-700"
    },

    // Small Business / Individual
    {
        id: 6,
        name: "Dr. Anjali Gupta",
        role: "Owner, Gupta Dental",
        image: "AG",
        quote: "Patients book online now, and I save 2 hours daily. It's a lifesaver for my clinic!",
        rating: 5,
        color: "bg-teal-100 text-teal-700"
    },
    {
        id: 7,
        name: "Rajesh Kumar",
        role: "Owner, Spice Route",
        image: "RK",
        quote: "Online orders skyrocketed. Simple enough for all my staff to use without training.",
        rating: 5,
        color: "bg-orange-100 text-orange-700"
    },
    {
        id: 8,
        name: "Priya Sharma",
        role: "Founder, Velvet Boutique",
        image: "PS",
        quote: "They understood my aesthetic perfectly. Sales up 40% since the new store launch.",
        rating: 5,
        color: "bg-pink-100 text-pink-700"
    },
    {
        id: 9,
        name: "Amit Patel",
        role: "Owner, Patel Gym",
        image: "AP",
        quote: "Member engagement is at an all-time high with the new fitness tracking app.",
        rating: 5,
        color: "bg-slate-100 text-slate-700"
    },
    {
        id: 10,
        name: "Lisa Wong",
        role: "Freelance Artist",
        image: "LW",
        quote: "My portfolio site looks better than major agencies. Truly world-class work.",
        rating: 5,
        color: "bg-yellow-100 text-yellow-700"
    },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="w-[400px] flex-shrink-0 bg-slate-50 rounded-[2rem] p-8 mx-4 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-default">
        <FaQuoteLeft className="text-3xl text-slate-200 mb-4 group-hover:text-red-200 transition-colors" />
        <p className="text-slate-700 font-medium text-lg leading-relaxed mb-6 line-clamp-3">"{review.quote}"</p>
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${review.color}`}>
                {review.image}
            </div>
            <div>
                <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{review.role}</div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* HEADER */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
                        <div className="flex text-yellow-500 text-sm">
                            {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
                        </div>
                        <span className="text-sm font-bold text-slate-700">Trusted by Global Leaders & Local Heroes</span>
                    </div>
                    <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                        Results that speak <br />
                        <span className="text-red-600">for themselves.</span>
                    </h2>
                </div>

                {/* LOGO MARQUEE */}
                <div className="mb-24 relative opacity-60">
                    <div className="flex overflow-hidden relative w-full mask-gradient">
                        <motion.div
                            className="flex gap-16 whitespace-nowrap py-4"
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        >
                            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-xl grayscale cursor-default">
                                    <client.logo />
                                    <span>{client.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* MOVING REVIEWS (2 ROWS) */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                    {/* Row 1 (Left to Right) */}
                    <div className="mb-8 flex overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: [-2000, 0] }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        >
                            {[...reviews.slice(0, 5), ...reviews.slice(0, 5), ...reviews.slice(0, 5)].map((review, i) => (
                                <ReviewCard key={`r1-${i}`} review={review} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 (Right to Left) */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: [0, -2000] }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        >
                            {[...reviews.slice(5, 10), ...reviews.slice(5, 10), ...reviews.slice(5, 10)].map((review, i) => (
                                <ReviewCard key={`r2-${i}`} review={review} />
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
