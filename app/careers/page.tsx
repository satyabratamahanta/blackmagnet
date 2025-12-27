"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    FaCheckCircle, FaStar, FaBriefcase,
    FaGraduationCap, FaHandshake, FaArrowRight,
    FaCode, FaRocket, FaGlobe
} from "react-icons/fa";

import MagneticBackground from "../components/sections/MagneticBackground";

/* ---------------------------------------------
   Premium Form Components
--------------------------------------------- */
/* ---------------------------------------------
   Premium Form Components (Refined)
--------------------------------------------- */
interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    textarea?: boolean;
    variant?: "light" | "dark";
}

function FormInput({
    label,
    name,
    type = "text",
    required = false,
    textarea = false,
    variant = "light"
}: FormInputProps) {
    const isDark = variant === "dark";

    // Base styles
    const baseInputStyles = "peer w-full bg-transparent border-b-2 px-0 py-4 focus:outline-none transition-all font-medium placeholder-transparent";
    const baseLabelStyles = "absolute left-0 top-4 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs";

    // Variant styles
    const inputColor = isDark
        ? "border-slate-700 text-white focus:border-blue-400"
        : "border-slate-200 text-slate-900 focus:border-blue-600";

    const labelColor = isDark
        ? "text-slate-500 peer-focus:text-blue-400"
        : "text-slate-400 peer-focus:text-blue-600";

    return (
        <div className="relative group">
            {textarea ? (
                <textarea
                    name={name}
                    required={required}
                    placeholder={label}
                    rows={4}
                    className={`${baseInputStyles} ${inputColor} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required={required}
                    placeholder={label}
                    className={`${baseInputStyles} ${inputColor}`}
                />
            )}
            <label className={`${baseLabelStyles} ${labelColor}`}>
                {label} {required && <span className="text-red-400">*</span>}
            </label>
        </div>
    );
}

const BenefitItem = ({ text }: { text: string }) => (
    <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
        <FaCheckCircle className="text-blue-500 text-sm flex-shrink-0" />
        <span className="text-slate-600 text-sm font-medium leading-tight">{text}</span>
    </motion.li>
);

function FAQ() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-t border-slate-100 mt-6 pt-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center font-bold text-slate-900 text-left focus:outline-none"
            >
                FAQ & Requirements
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                >
                    ↓
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 space-y-4 text-sm text-slate-500 font-medium">
                            <p>• <strong>Is this remote?</strong> Yes, 100% remote.</p>
                            <p>• <strong>Duration?</strong> 1–3 months based on milestones.</p>
                            <p>• <strong>Paid?</strong> Learning-focused; stipends are project-specific.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function CareersPage() {
    const [internshipStatus, setInternshipStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [professionalStatus, setProfessionalStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, endpoint: string, setStatus: (s: any) => void) => {
        e.preventDefault();
        setStatus('submitting');
        const formData = new FormData(e.currentTarget);
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) setStatus('success');
            else setStatus('error');
        } catch {
            setStatus('error');
        }
    };

    return (
        <main className="bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
            <Navbar />

            {/* HERO SECTION (Portfolio Style) */}
            <section className="relative pt-32 pb-14 px-6 overflow-hidden">
                <MagneticBackground />

                {/* Background Blobs (Subtler) */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-30" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Portfolio Style Badge */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="w-8 h-[2px] bg-blue-600"></span>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Internships & Collaborations</span>
                            <span className="w-8 h-[2px] bg-blue-600"></span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                            Build Real Apps. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Work With Black Magnet.
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
                        >
                            Internship and collaboration opportunities for students and experienced professionals.
                            Work on real mobile products using modern, AI-assisted workflows.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* IMPACT SECTION (Compact) */}
            <section className="py-8 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm relative z-10">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: <FaGlobe />, label: "Remote First", val: "Global" },
                        { icon: <FaRocket />, label: "Workflows", val: "AI-Powered" },
                        { icon: <FaCode />, label: "Projects", val: "Production" },
                        { icon: <FaHandshake />, label: "Focus", val: "Impact" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="text-blue-500 mb-2 text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{item.label}</span>
                            <span className="text-slate-900 font-bold text-sm">{item.val}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PATHWAYS */}
            <section className="py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto space-y-24 lg:space-y-40">

                    {/* INTERNSHIP */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <div className="inline-block p-4 bg-blue-600 rounded-3xl text-white text-3xl shadow-2xl shadow-blue-200">
                                <FaGraduationCap />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">Internship <br />Program</h2>
                            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                                A practical, project-driven internship for students and fresh graduates who want real exposure to mobile app development using modern AI-assisted workflows.
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                <BenefitItem text="Real mobile projects" />
                                <BenefitItem text="AI workflows" />
                                <BenefitItem text="Mentorship" />
                                <BenefitItem text="Experience Letter" />
                                <BenefitItem text="Portfolio ready" />
                                <BenefitItem text="Future roles" />
                            </ul>

                            <FAQ />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 bg-white rounded-3xl p-6 lg:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-50"
                        >
                            {internshipStatus === 'success' ? (
                                <div className="text-center py-20 px-8">
                                    <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
                                        Application Submitted Successfully 🎉
                                    </h3>
                                    <p className="text-slate-600 text-lg mb-2">
                                        Thank you for applying to the Black Magnet Internship Program.
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        We’ve received your application and will review it carefully.<br />
                                        If there’s a good fit, we’ll reach out to you.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold mb-6 text-slate-900">Student Application</h3>
                                    <form onSubmit={(e) => handleSubmit(e, "https://formspree.io/f/mvzpewqo", setInternshipStatus)} className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                                        <FormInput label="Full Name" name="name" required />
                                        <FormInput label="Email Address" name="email" type="email" required />
                                        <FormInput label="College / University" name="college" required />
                                        <FormInput label="Degree & Year" name="degree" required />
                                        <div className="md:col-span-2"><FormInput label="GitHub / Portfolio Link" name="portfolio" /></div>
                                        <div className="md:col-span-2"><FormInput label="Why Black Magnet?" name="message" textarea required /></div>
                                        <div className="md:col-span-2 pt-2">
                                            <button
                                                disabled={internshipStatus === 'submitting'}
                                                className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {internshipStatus === 'submitting' ? 'Submitting...' : <>Submit Application <FaArrowRight /></>}
                                            </button>
                                        </div>
                                        <input type="hidden" name="applicationType" value="Internship" />
                                        {internshipStatus === 'error' && <p className="text-red-500 text-sm md:col-span-2 text-center">Something went wrong. Please try again.</p>}
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>

                    {/* PROFESSIONAL */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 order-2 lg:order-1 bg-slate-950 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden"
                        >
                            {/* Inner Glow - Reduced */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]" />

                            {professionalStatus === 'success' ? (
                                <div className="text-center py-20 px-8 relative z-10">
                                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
                                        Thanks for Reaching Out 👋
                                    </h3>
                                    <p className="text-slate-400 text-lg mb-2">
                                        We’ve received your collaboration request.
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        If there’s a strong alignment with our current or upcoming work, we’ll get in touch.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Professional Partnering</h3>
                                    <form onSubmit={(e) => handleSubmit(e, "https://formspree.io/f/xojagkwg", setProfessionalStatus)} className="grid md:grid-cols-2 gap-x-8 gap-y-5 relative z-10">
                                        <FormInput label="Full Name" name="name" variant="dark" required />
                                        <FormInput label="Email" name="email" type="email" variant="dark" required />
                                        <div className="md:col-span-2">
                                            <FormInput label="Primary Skillset / Role" name="skills" variant="dark" required />
                                        </div>
                                        <div className="md:col-span-2">
                                            <FormInput label="Portfolio / LinkedIn" name="portfolio" variant="dark" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <FormInput label="Collaboration Proposal" name="message" textarea variant="dark" required />
                                        </div>
                                        <div className="md:col-span-2 pt-2">
                                            <button
                                                disabled={professionalStatus === 'submitting'}
                                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-slate-950 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {professionalStatus === 'submitting' ? 'Sending...' : <>Start Conversation <FaArrowRight /></>}
                                            </button>
                                        </div>
                                        <input type="hidden" name="applicationType" value="Professional Collaboration" />
                                        {professionalStatus === 'error' && <p className="text-red-400 text-sm md:col-span-2 text-center">Something went wrong. Please try again.</p>}
                                    </form>
                                </>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 order-1 lg:order-2 space-y-8"
                        >
                            <div className="inline-block p-4 bg-slate-950 rounded-3xl text-white text-3xl">
                                <FaHandshake />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">Professional <br />Collaboration</h2>
                            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                                We collaborate with experienced pros who value quality and ownership. Your contributions shape the actual production product.
                            </p>

                            <div className="space-y-6">
                                <h4 className="font-bold text-blue-600 uppercase tracking-widest text-xs">The Black Magnet Edge</h4>
                                <ul className="space-y-3">
                                    <BenefitItem text="Direct product influence" />
                                    <BenefitItem text="Tech stack freedom" />
                                    <BenefitItem text="Senior-to-senior respect" />
                                    <BenefitItem text="Async & Flexible" />
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
