import type { Metadata } from "next";
import { Geist, Geist_Mono, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const coveredByYourGrace = Covered_By_Your_Grace({
  variable: "--font-covered-by-your-grace",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A2k - Writing & Directing",
  description: "I'm A2K - a director and writer drawn to visual storytelling that feels honest and emotionally grounded.I worked on commercial sets for brands such as Facebook and Amazon. As a director, I’ve created festival-selected short films, impactful PSAs, brand films, and documentaries. I’ve also led large-scale explainer and training video projects, co-founded Nodleap Studios, and delivered 20+ videos. Across formats, I believe in story-first filmmaking—whether commercial, intimate, or educational.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coveredByYourGrace.variable} antialiased selection:bg-white/10`}
      >
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
