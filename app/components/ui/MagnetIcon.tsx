import React from "react";

export const MagnetIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="redGloss" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#ff4d4d" />
                    <stop offset="50%" stopColor="#cc0000" />
                    <stop offset="100%" stopColor="#990000" />
                </linearGradient>

                <radialGradient id="highlight" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
            </defs>

            {/* 
        Magnet Shape: Normal 'C' (Circular Arc) - Restored Width.
        Center roughly x=45, y=50.
        Outer Arc: r=25 (Standard Circular). Left Edge = 45-25 = 20.
        Inner Arc: r=10. Left Edge = 45-10 = 35.
        Thickness = 15 units.
      */}

            {/* Main Red Body - Normal Width Circular Arc */}
            <path
                d="M 65,25 
           L 45,25 
           A 25,25 0 1,0 45,75 
           L 65,75 
           L 65,60 
           L 45,60 
           A 10,10 0 1,1 45,40 
           L 65,40 
           Z"
                fill="url(#redGloss)"
                stroke="#990000"
                strokeWidth="1"
            />

            {/* Glossy Overlay */}
            <path
                d="M 65,25 L 45,25 A 25,25 0 1,0 45,75 L 65,75 L 65,60 L 45,60 A 10,10 0 1,1 45,40 L 65,40 Z"
                fill="url(#highlight)"
                style={{ mixBlendMode: 'overlay' }}
            />

            {/* Red Tips (Nodes) - Restored to x=65 (Standard Width) */}

            {/* Top Tip */}
            <rect x="65" y="25" width="15" height="15" fill="url(#redGloss)" stroke="#990000" />
            {/* Separation Line Top */}
            <line x1="65" y1="25" x2="65" y2="40" stroke="#000" strokeWidth="2.5" />

            {/* Bottom Tip */}
            <rect x="65" y="60" width="15" height="15" fill="url(#redGloss)" stroke="#990000" />
            {/* Separation Line Bottom */}
            <line x1="65" y1="60" x2="65" y2="75" stroke="#000" strokeWidth="2.5" />

        </svg>
    );
};
