
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers — Join the AI Revolution",
    description:
        "We are hiring! Join BlackMagnet's remote-first team of engineers and creators. Open positions in Flutter, AI, and Growth Marketing.",
    keywords: ["Careers", "Jobs", "Remote Work", "Flutter Developer Jobs", "AI Engineer Jobs"],
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
