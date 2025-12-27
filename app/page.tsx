"use client";

import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import AIEdge from "./components/sections/AIEdge";
import AboutServices from "./components/sections/AboutServices";
import ProcessFlow from "./components/sections/ProcessFlow";
import BentoGrid from "./components/sections/BentoGrid";

import WhyBlackMagnet from "./components/sections/WhyBlackMagnet";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      <Navbar />

      {/* SECTION 1: HERO (Dark/Vibrant) */}
      <Hero />

      {/* SECTION 1.5: AI EDGE (Features) */}
      <AIEdge />



      {/* SECTION 2: ABOUT & SERVICES (Light) */}
      <AboutServices />

      {/* SECTION 3: PROCESS FLOW (Timeline) */}
      <ProcessFlow />

      {/* SECTION 4: PORTFOLIO */}
      <Portfolio />

      {/* SECTION 4.5: WHY US (Dark Contrast) */}
      <WhyBlackMagnet />

      {/* SECTION 5: TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 7: CALL TO ACTION */}
      <CallToAction />

      {/* SECTION 8: FOOTER */}
      <Footer />

    </main>
  );
}
