import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlackMagnet — Mobile App Development Using AI Tools",
  description:
    "We build modern mobile applications using AI-assisted development, clean architecture, and human-led engineering practices.",
};

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyBlackMagnet from "./components/WhyBlackMagnet";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <WhyBlackMagnet />
      <Process />
      <TechStack />
      <Portfolio />
      <Services />
      <CallToAction />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
