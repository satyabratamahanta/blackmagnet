"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Mobile App Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // ----------------------------------------------------------------
    // STEP 1: REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE ID
    // ----------------------------------------------------------------
    const FORMSPREE_ID = "mkowdzlp"; // <--- PASTE ID HERE e.g., "xoyqrzkl"

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", projectType: "Mobile App Development", message: "" });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="pt-32 pb-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Let's Talk.</h1>
            <p className="text-xl text-slate-500">Tell us about your project. We'll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                We’re currently accepting new projects. Whether you have a strict deadline or just a loose concept, we’re ready to help you scope and build it.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-bold text-slate-900">blackmagnet.tech@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-bold text-slate-900">+91 7077112516</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-10 pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-700 cursor-pointer appearance-none"
                    style={{ backgroundImage: 'none' }} // Remove default arrow if needed, or keep for simplicity
                  >
                    <option>Mobile App Development</option>
                    <option>Web Application</option>
                    <option>AI Integration</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-900 resize-none"
                    placeholder="Tell us a bit about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-lg shadow-lg shadow-blue-600/20"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-3 rounded-lg">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-6">
                  <FaPaperPlane />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 text-lg">
                  Thanks for reaching out! <br />
                  We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline mt-4"
                >
                  Send another message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
