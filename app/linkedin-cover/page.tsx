"use client";

import React from "react";
import { MagnetIcon } from "../components/ui/MagnetIcon";

export default function LinkedInCoverPage() {
    return (
        <div
            id="linkedin-cover"
            className="relative w-[1128px] h-[191px] bg-[#0d0d0d] overflow-hidden flex items-center shadow-2xl"
        >
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#121212] to-[#080000] opacity-90" />
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

            {/* Decorative Magnetic Field Lines (Abstract SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <path
                    d="M -100 200 Q 300 -50 600 200 T 1300 0"
                    fill="none"
                    stroke="#8B0000"
                    strokeWidth="2"
                    className="blur-[1px]"
                />
                <path
                    d="M -100 150 Q 350 -100 700 250 T 1300 50"
                    fill="none"
                    stroke="#8B0000"
                    strokeWidth="1.5"
                    className="opacity-60"
                />
                <path
                    d="M 0 250 Q 400 0 800 250"
                    fill="none"
                    stroke="#333"
                    strokeWidth="1"
                />
            </svg>

            {/* Circuit Patterns (Right Side) */}
            <svg className="absolute right-0 top-0 h-full w-[400px] pointer-events-none opacity-20">
                <circle cx="350" cy="50" r="2" fill="white" />
                <line x1="350" y1="50" x2="300" y2="50" stroke="white" strokeWidth="1" />
                <line x1="300" y1="50" x2="280" y2="90" stroke="white" strokeWidth="1" />
                <circle cx="280" cy="90" r="3" fill="#D00000" />
                <line x1="280" y1="90" x2="320" y2="150" stroke="white" strokeWidth="1" />
                <rect x="340" y="100" width="40" height="40" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>

            {/* Subtle Smartphone Outline (Background Graphic) */}
            <div className="absolute right-[100px] top-1/2 -translate-y-1/2 w-[100px] h-[180px] border border-white/5 rounded-[15px] rotate-12 opacity-10 blur-sm pointer-events-none"></div>

            {/* Main Content Container */}
            <div className="relative z-10 flex items-center px-16 w-full justify-between">

                {/* Left: Branding */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-2">
                        {/* Logo Icon */}
                        <div className="scale-125">
                            <MagnetIcon className="w-12 h-12" />
                        </div>

                        {/* Company Name */}
                        <h1 className="text-5xl font-bold tracking-tight text-white font-sans uppercase drop-shadow-md">
                            BLACK <span className="text-white">MAGNET</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="flex items-center gap-3 ml-1">
                        <div className="h-[2px] w-8 bg-[#D00000]"></div>
                        <p className="text-gray-300 text-lg font-medium tracking-wide uppercase text-[14px]">
                            AI-Powered Mobile App Development
                        </p>
                    </div>
                </div>

                {/* Right: Tagline / Tech Stack */}
                <div className="flex flex-col items-end gap-2 opacity-80">
                    <div className="flex gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                        <span>Flutter</span>
                        <span className="text-[#D00000]">•</span>
                        <span>iOS</span>
                        <span className="text-[#D00000]">•</span>
                        <span>Android</span>
                    </div>
                    <p className="text-white/40 text-sm font-light italic">
                        "Build Faster. Scale Smarter."
                    </p>
                </div>

            </div>

            {/* Red Glow Accent (Bottom Left) */}
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#D00000] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            {/* White Glow Accent (Top Right) */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        </div>
    );
}
