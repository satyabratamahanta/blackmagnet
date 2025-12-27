
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services — AI, Mobile & Web Development",
    description:
        "We provide end-to-end software services: Custom AI Integration, High-Performance Flutter Apps, Next.js Web Platforms, and Strategic SEO for maximum growth.",
    keywords: ["App Development Services", "AI Consulting", "Web Development", "SEO Optimization", "Software Agency"],
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
