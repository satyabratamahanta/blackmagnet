import type { Metadata } from "next";
import "./globals.css";
import MagneticBackground from "./components/sections/MagneticBackground";
import ScrollProgress from "./components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackmagnet.tech"),
  title: {
    default: "BlackMagnet — AI-Assisted Mobile App Development",
    template: "%s | BlackMagnet",
  },
  description:
    "BlackMagnet is a premier digital agency specializing in AI-native mobile app development, scalable web platforms, and growth-focused SEO strategies. We build apps that scale to 100K+ users.",
  keywords: [
    "Mobile App Development",
    "Flutter Development",
    "AI Integration",
    "Next.js Developer",
    "SEO Agency",
    "App Maintenance",
    "Odisha Tech Agency",
    "BlackMagnet",
  ],
  authors: [{ name: "BlackMagnet Team" }],
  creator: "BlackMagnet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackmagnet.tech",
    siteName: "BlackMagnet",
    images: [
      {
        url: "/og-image.jpg", // We should ideally add a real OG image later
        width: 1200,
        height: 630,
        alt: "BlackMagnet - AI Assisted Development",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "9kNn-r35gTyDFf365RFddilqV5Wc-06VQfHDhdhtX_c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
