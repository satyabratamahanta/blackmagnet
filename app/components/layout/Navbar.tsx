
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagnetIcon } from "../ui/MagnetIcon";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 font-sans ${scrolled || isOpen ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm" : "bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-[101]" onClick={() => setIsOpen(false)}>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-900">BLA</span>
              <MagnetIcon className="w-8 h-8 -mx-1.5" />
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                K <span className="text-slate-900 ml-1">MAGNET</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600"} transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/start-project"
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20"
            >
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 z-[101] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
          }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-xl font-bold text-slate-800">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"} transition-all transform hover:scale-105`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/start-project"
            className="px-8 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all shadow-xl mt-4"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </Link>
        </nav>

        {/* Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </>
  );
}
