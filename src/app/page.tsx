"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import ContactCTA from "@/components/ui/ContactCTA";

const categories = ["Films", "Commercials", "Documentaries", "Music Video"];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function WordAnimator({ word }: { word: string }) {
  const target = Array.from(word);
  const [display, setDisplay] = useState<string[]>(target);
  const [settled, setSettled] = useState<boolean[]>(target.map(() => true));

  useEffect(() => {
    const letters = Array.from(word);

    setDisplay(letters.map(l => l === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]));
    setSettled(letters.map(() => false));

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    letters.forEach((letter, i) => {
      let iterations = 0;
      const maxIterations = 3 + i;

      const start = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplay(prev => {
            const next = [...prev];
            if (iterations >= maxIterations) {
              next[i] = letter === " " ? " " : letter;
              setSettled(s => { const ns = [...s]; ns[i] = true; return ns; });
              clearInterval(interval);
            } else {
              next[i] = letter === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
              iterations++;
            }
            return next;
          });
        }, 80);
      }, i * 80);

      timeouts.push(start);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [word]);

  return (
    <span style={{ display: "inline-flex" }}>
      {target.map((targetChar, i) => (
        // Each slot is sized by its invisible target letter — no overflow possible
        <span
          key={i}
          style={{ display: "inline-block", position: "relative", textAlign: "center" }}
        >
          {/* Ghost target letter — sets the exact slot width */}
          <span style={{ visibility: "hidden" }}>
            {targetChar === " " ? "\u00A0" : targetChar}
          </span>
          {/* Scrambled char centred inside the slot */}
          <span style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: settled[i] ? 1 : 0.35,
            transition: "opacity 0.2s ease",
            whiteSpace: "nowrap",
          }}>
            {(display[i] ?? targetChar) === " " ? "\u00A0" : (display[i] ?? targetChar)}
          </span>
        </span>
      ))}
    </span>
  );
}





export default function Home() {
  const [catIndex, setCatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCatIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />

      {/* Main Content Wrapper - Slides over fixed header */}
      <main className="relative z-20">


        {/* Cinematic Hero */}
        <section
          id="about"
          className="relative h-svh w-full overflow-hidden flex items-center pt-[120px] md:pt-[160px] pb-16 px-6 sm:px-8 md:px-16 bg-[#050505]"
        >
          {/* Cinematic Backdrop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000 scale-[1.02]"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>

          {/* Complex Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />

          {/* Asymmetric Hero Content */}
          <div className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-12">
            <div className="xl:col-span-8 min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8 md:mb-12 max-w-full">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.45em] sm:tracking-[0.8em] text-[#db520d] block font-bold mb-8 md:mb-12">
                    About Me
                  </span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(8rem,24vw,18rem)] font-logo leading-[0.7] text-white"
                  >
                    a2k
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.35, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xs sm:text-sm uppercase tracking-[0.5em] text-zinc-400 font-bold mt-8 md:mt-12"
                  >
                    Writer / Director
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
              >
                <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed font-medium">
                  I’m a director and writer drawn to visual storytelling that feels honest and emotionally grounded. I began my journey as a BTS camera lead on major Bollywood productions like Student of the Year 2 and Zero, and later worked on commercial sets for brands such as Facebook and Amazon. As a director, I’ve created festival-selected short films, impactful PSAs, brand films, and documentaries. I’ve also led large-scale explainer and training video projects, co-founded Nodleap Studios, and delivered 350+ videos. Across formats, I believe in story-first filmmaking—whether commercial, intimate, or educational.
                </p>
                <div className="h-[1px] w-24 bg-zinc-800 hidden md:block" />
                <a
                  href="#work"
                  className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-white pb-2 hover:opacity-50 transition-all duration-500"
                >
                  Discover Work
                </a>
              </motion.div>
            </div>

            <div className="hidden xl:flex xl:col-span-4 flex-col justify-end items-end gap-16 text-right">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
                className="space-y-2"
              >
                <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">Based in</div>
                <div className="text-xs uppercase tracking-widest text-[#db520d]">Mumbai / Kochi</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Selection */}
        <div className="px-8 md:px-16 pt-12 md:pt-32 bg-[#050505]">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br />Works</h2>
            <div className="text-right pb-2 min-h-[48px] flex flex-col justify-end items-end">
              <span className="text-[10px] md:text-[11px] lg:text-xs uppercase tracking-[0.2em] text-[#db520d] hidden md:block mb-2 font-bold">
                Films | Commercials | Documentaries | Music Video
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#db520d] block md:hidden mb-2 font-bold h-[15px]">
                <WordAnimator word={categories[catIndex]} />
              </span>
              <span className="text-sm text-zinc-400 uppercase tracking-widest font-medium">Top Credits</span>
            </div>
          </div>
        </div>

        <div className="bg-[#050505]">
          <FeaturedProjects />
        </div>

        {/* Contact CTA Bridge to Footer */}
        <ContactCTA />

        <Footer />
      </main>
    </>
  );
}
