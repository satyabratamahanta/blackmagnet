
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio — Case Studies & Live Projects",
    description:
        "Explore our portfolio of managed apps with over 100K+ downloads. Featuring Odia School Books, CHSE Science Book, and custom AI solutions built with Flutter and Next.js.",
    keywords: ["App Portfolio", "Flutter Apps", "Odia School Books", "Live Projects", "Case Studies"],
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
