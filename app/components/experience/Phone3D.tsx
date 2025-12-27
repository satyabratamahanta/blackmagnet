"use client";

import { motion } from "framer-motion";
import React from "react";

interface Phone3DProps {
    // We can pass animation controls or state here
    scrollYProgress?: any; // framer motion value
    currentSection?: "hero" | "tech" | "process" | "portfolio";
    children?: React.ReactNode;
}

export default function Phone3D({ currentSection = "hero", children }: Phone3DProps) {

    // Animation variants based on section
    const phoneVariants = {
        hero: {
            rotateY: -15,
            rotateX: 5,
            scale: 1,
            x: "45%", // Pushed further Right
            y: 0,
        },
        tech: {
            rotateY: 15, // Rotate opposite
            rotateX: 0,
            scale: 1,
            x: "0%", // Keep in middle
            y: 0,
        },
        process: {
            rotateY: -15,
            rotateX: 0,
            scale: 1,
            x: "0%", // Keep in middle
            y: 0,
        },
        portfolio: {
            rotateY: 0,
            rotateX: 0,
            scale: 1.1,
            x: "0%", // Center for final showcase
            y: 0, // Lift up slightly if needed or keep centered
        }
    };

    return (
        <motion.div
            className="relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-4 border-gray-800 shadow-2xl overflow-hidden"
            variants={phoneVariants}
            animate={currentSection}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Screen Content Container */}
            <div className="h-full w-full bg-black relative overflow-hidden">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50" />

                {/* Dynamic Content */}
                {children}

            </div>
        </motion.div>
    );
}
