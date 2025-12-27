"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AppBlueprintConfigurator from "./components/AppBlueprintConfigurator";
import { FaRocket, FaCheckCircle, FaUpload, FaCode, FaTools, FaChartLine, FaSearch, FaLink, FaPaperclip } from "react-icons/fa";

export default function StartProjectPage() {
    const [config, setConfig] = useState({ platform: "", category: "", stage: "Fresh" });
    const [selectedServices, setSelectedServices] = useState<string[]>(["Development"]);
    const [formData, setFormData] = useState({
        name: "", companyName: "", email: "", phone: "", website: "",
        budget: "", timeline: "", message: "", referenceLink: ""
    });

    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const servicesList = [
        { id: "Development", label: "Development", icon: <FaCode />, desc: "Custom App Build" },
        { id: "Maintenance", label: "Maintenance", icon: <FaTools />, desc: "Updates & Support" },
        { id: "Growth", label: "Growth", icon: <FaChartLine />, desc: "User Acquisition" },
        { id: "SEO", label: "SEO", icon: <FaSearch />, desc: "Ranking & Visibility" },
    ];

    const getRecommendedBudget = () => {
        if (selectedServices.length >= 3) return "₹5,00,000+";
        if (selectedServices.length >= 2) return "₹1,50,000 – ₹5,00,000";
        return "₹50,000 – ₹1,50,000";
    };

    const toggleService = (id: string) => {
        setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const payload = new FormData();

        const summary = `Blueprint: ${config.platform || "Not Selected"} | ${config.category || "Not Selected"} | Stage: ${config.stage}\nServices: ${selectedServices.join(", ")}\n\nUser Message: ${formData.message}`;

        Object.entries(formData).forEach(([key, val]) => payload.append(key, key === 'message' ? summary : val));
        if (file) payload.append("attachment", file);

        try {
            const res = await fetch("https://formspree.io/f/xjgvypbw", {
                method: "POST",
                body: payload,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (res.ok) setIsSubmitted(true);
            else setError("Error submitting form.");
        } catch { setError("Network error."); }
        finally { setIsSubmitting(false); }
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-16 px-6 text-center bg-slate-50">
                <h1 className="text-6xl font-black mb-4">Let's Build Your <span className="text-blue-600">Vision</span></h1>
                <p className="text-slate-500 text-xl max-w-2xl mx-auto">First, configure your project blueprint and select the services you need.</p>
            </header>

            <AppBlueprintConfigurator
                onPlatformChange={(v) => setConfig(prev => ({ ...prev, platform: v }))}
                onCategoryChange={(v) => setConfig(prev => ({ ...prev, category: v }))}
                onStageChange={(v) => setConfig(prev => ({ ...prev, stage: v }))}
            />

            {/* 2. Services */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black mb-10">2. Select <span className="text-blue-600">Service Suite</span></h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {servicesList.map(s => (
                        <button key={s.id} onClick={() => toggleService(s.id)}
                            className={`p-6 rounded-3xl border-2 text-left transition-all ${selectedServices.includes(s.id) ? "border-blue-600 bg-blue-50 shadow-lg scale-105" : "border-slate-100 bg-slate-50 hover:border-slate-200"}`}>
                            <div className={`text-2xl mb-3 ${selectedServices.includes(s.id) ? "text-blue-600" : "text-slate-400"}`}>{s.icon}</div>
                            <h4 className="font-black text-lg">{s.label}</h4>
                            <p className="text-xs text-slate-500 mt-2">{s.desc}</p>
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. Final Form */}
            <section className="py-12 px-6 bg-slate-900 rounded-t-[3rem] -mt-10 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-white">
                            {!isSubmitted ? (
                                <>3. Final <span className="text-blue-400">Information</span></>
                            ) : (
                                <><span className="text-green-400">Project Launch</span> Initiated 🚀</>
                            )}
                        </h2>
                        <p className="text-slate-400 mt-2">
                            {!isSubmitted ? "Personal details to help us reach out with a proposal." : "Your vision is now in our production pipeline."}
                        </p>
                    </div>

                    {!isSubmitted ? (

                        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-8 rounded-[2rem] shadow-xl max-w-3xl mx-auto">
                            {/* ... existing form inputs ... */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                                <Input label="Company / Startup" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Inc." />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@email.com" required />
                                <Input label="WhatsApp / Phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91..." required />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center"><label className="text-sm font-bold text-slate-700 ml-1">Budget Range</label>
                                        <span className="text-[10px] text-blue-600 font-black">REC: {getRecommendedBudget()}</span></div>
                                    <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                        <option value="">Select Budget</option>
                                        <option value="Below ₹50,000">Below ₹50,000</option>
                                        <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                                        <option value="₹1,50,000 – ₹5,00,000">₹1,50,000 – ₹5,00,000</option>
                                        <option value="₹5,00,000+">₹5,00,000+</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Target Timeline</label>
                                    <select name="timeline" value={formData.timeline} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                        <option value="">Select Timeline</option>
                                        <option>Urgent (2 weeks)</option>
                                        <option>1 Month</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-700 ml-1">Project Resources URL (Figma / Drive / Docs)</label>
                                <div className="relative">
                                    <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        name="referenceLink"
                                        value={formData.referenceLink}
                                        onChange={handleChange}
                                        placeholder="https://figma.com/..."
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-700 ml-1">Attachments (Screenshots / Docs)</label>
                                <div
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                    className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:bg-slate-50 transition-all cursor-pointer group"
                                >
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="hidden"
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    />
                                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                        <FaPaperclip className="text-blue-500 text-sm" />
                                    </div>
                                    <p className="text-sm font-bold text-slate-700">
                                        {file ? <span className="text-blue-600">{file.name}</span> : "Click to attach a file"}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-700 ml-1">Briefly explain your vision</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-blue-600 text-white font-black rounded-xl text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                                {isSubmitting ? "Processing..." : <>Submit Project Request <FaRocket /></>}
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl"
                        >
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-5xl text-green-500" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Application Received!</h2>
                            <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto mb-10">
                                Thanks <span className="font-bold text-slate-900">{formData.name || "partner"}</span>, your app concept is now being reviewed by our engineering team.
                                <br /><br />
                                <span className="text-blue-600 font-bold block text-2xl">Your App will be Built & Delivered 🚀</span>
                            </p>
                            <a href="/" className="inline-block px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
                                Return to Home
                            </a>
                        </motion.div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}

function Input({ label, ...props }: any) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
            <input {...props} className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
        </div>
    );
}