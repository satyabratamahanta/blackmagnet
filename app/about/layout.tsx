
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — Defining the AI-Native Agency",
    description:
        "Learn about BlackMagnet's mission to bridge the gap between complex AI technology and practical user applications. We are a team of engineers, not just developers.",
    keywords: ["About BlackMagnet", "AI Native Agency", "Tech Team", "Software Engineers", "Company Mission"],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
