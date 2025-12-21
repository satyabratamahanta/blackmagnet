import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackMagnet — AI-Assisted Mobile App Development",
  description:
    "BlackMagnet is a mobile app development company building scalable, production-ready applications using AI-assisted workflows and strong engineering practices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
