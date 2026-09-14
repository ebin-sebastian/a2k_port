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
  description: "I'm a director and writer drawn to visual storytelling that feels honest and emotionally grounded. I began my journey as a BTS camera lead on major Bollywood productions like Student of the Year 2 and Zero. From there, I moved into commercial sets as an assistant director for brands such as Facebook and Amazon. As a director, I've created festival-selected short films, impactful PSAs, brand films, and documentaries. I co-founded Nodleap Studios, a production studio behind ads, music videos, and explainer/training content, delivering 350+ videos for clients. Whatever the format, I believe in story-first filmmaking.",
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
