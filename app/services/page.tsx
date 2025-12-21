import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — BlackMagnet",
  description:
    "Explore BlackMagnet’s mobile app development services including AI-assisted engineering, UI/UX design, and scalable app solutions.",
};

import Navbar from "../components/Navbar";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Services />
      <CallToAction />
      <Footer />
    </main>
  );
}
