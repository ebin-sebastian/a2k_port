"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturedProjects from "@/components/ui/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Header />

      {/* Main Content Wrapper - Slides over fixed header */}
      <main className="relative z-20">
        {/* Spacer to reveal fixed header initially */}
        <div className="h-[120px] md:h-[160px] w-full" />

        {/* Cinematic Hero */}
        <section id="about" className="relative h-[calc(100vh-120px)] md:h-[calc(100vh-160px)] w-full overflow-hidden flex items-end pb-24 md:pb-32 px-8 md:px-16 bg-[#050505]">
          {/* Cinematic Backdrop */}
          <div className="absolute inset-0 bg-[#050505]" />

          {/* Complex Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />

          {/* Asymmetric Hero Content */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-500 mb-8 block font-bold">
                  Cinematic Portfolio / 2025
                </span>
                <h1 className="text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  Visionary <br />
                  <span className="text-zinc-800 outline-text">Directing</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="flex flex-col md:flex-row md:items-center gap-12"
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

            <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end gap-16 text-right">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
                className="space-y-2"
              >
                <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">Based in</div>
                <div className="text-xs uppercase tracking-widest text-zinc-300">Mumbai / Kerala</div>
              </motion.div>
            </div>
          </div>

          {/* Side Badge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:block">
            <span className="text-[9px] uppercase tracking-[1em] text-zinc-800 font-bold whitespace-nowrap">
              Creative Excellence / 10+ Years Experience
            </span>
          </div>
        </section>

        {/* Featured Projects Selection */}
        <div className="px-8 md:px-16 pt-32 bg-[#050505]">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br />Works</h2>
            <div className="text-right pb-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-2 font-bold">Refined Selection</span>
              <span className="text-sm text-zinc-400 uppercase tracking-widest font-medium">Top Credits</span>
            </div>
          </div>
        </div>

        <div className="bg-[#050505]">
          <FeaturedProjects />
        </div>

        <Footer />
      </main>
    </>
  );
}
