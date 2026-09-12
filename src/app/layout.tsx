import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SideRail from "@/components/layout/SideRail";
import Footer from "@/components/layout/Footer";
import ScanlineOverlay from "@/components/ui/ScanlineOverlay";
import EffectsLayer from "@/components/ui/EffectsLayer";
import PageTransition from "@/components/ui/PageTransition";
import CircuitLines from "@/components/background/CircuitLines";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Padam — Full-Stack Software Developer",
  description: "Portfolio of Rahul Padam, full-stack software developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-void text-white antialiased">
        <CircuitLines />
        <ScanlineOverlay />
        <EffectsLayer />
        <SideRail />
        <Navbar />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
