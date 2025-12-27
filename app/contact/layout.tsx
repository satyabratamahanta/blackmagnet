
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us — Start Your Transformation",
    description:
        "Ready to build? Discuss your project with our engineering team today. We provide free consultations for mobile apps, web platforms, and AI integrations.",
    keywords: ["Contact Agency", "Hire Developers", "Project Inquiry", "Software Consultation"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
