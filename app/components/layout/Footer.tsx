"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBlackmagicdesign } from "react-icons/si"; // Placeholder logo
import { MagnetIcon } from "../ui/MagnetIcon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* BRAND COL */}
        <div className="space-y-6">
          <div className="flex items-center text-white">
            <span className="text-2xl font-black tracking-tighter">BLA</span>
            <MagnetIcon className="w-9 h-9 -mx-2" />
            <span className="text-2xl font-black tracking-tighter">
              K <span className="text-white ml-1">MAGNET</span>
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed">
            We build high-performance mobile apps and software that help ambitious brands scale.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={FaXTwitter} href="#" />
            <SocialIcon icon={FaLinkedin} href="#" />
            <SocialIcon icon={FaGithub} href="#" />
            <SocialIcon icon={FaInstagram} href="#" />
          </div>
        </div>

        {/* SERVICES COL */}
        <div>
          <h3 className="text-white font-bold mb-6">Services</h3>
          <ul className="space-y-4">
            <FooterLink href="/start-project">Mobile App Development</FooterLink>
            <FooterLink href="/maintenance">Maintenance</FooterLink>
            <FooterLink href="/growth">Growth</FooterLink>
            <FooterLink href="/seo">SEO</FooterLink>
          </ul>
        </div>

        {/* COMPANY COL */}
        <div>
          <h3 className="text-white font-bold mb-6">Company</h3>
          <ul className="space-y-4">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </ul>
        </div>

        {/* CONTACT COL */}
        <div>
          <h3 className="text-white font-bold mb-6">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a href="mailto:blackmagnet.tech@gmail.com" className="hover:text-white transition-colors">
                blackmagnet.tech@gmail.com
              </a>
            </li>
            <li>
              <p>+91 7077112516</p>
            </li>
            <li className="pt-4">
              <button className="px-6 py-2 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-500 transition-colors">
                Book a Call
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} BlackMagnet Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">T&C</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-red-500 transition-colors">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a href={href} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
    <Icon className="text-lg" />
  </a>
);

export default Footer;
