import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BlackMagnet",
  description:
    "Get in touch with BlackMagnet to discuss your mobile app idea or project. We build apps using AI-assisted development.",
};

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
