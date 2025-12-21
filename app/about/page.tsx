import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — BlackMagnet",
  description:
    "Learn about BlackMagnet, a mobile app development studio focused on AI-assisted workflows and high-quality engineering.",
};

import Navbar from "../components/Navbar";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
}
