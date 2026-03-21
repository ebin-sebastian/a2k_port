"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import ContactCTA from "@/components/ui/ContactCTA";

export default function Home() {
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
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.45em] sm:tracking-[0.8em] text-[#db520d] mb-6 md:mb-8 block font-bold">
                  About Me
                </span>
                <div className="mb-8 md:mb-12 max-w-full overflow-hidden">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: "110%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.35, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[clamp(2.35rem,7.2vw,7.25rem)] font-bold leading-[0.98] sm:leading-[0.92] lg:leading-[0.88] tracking-[-0.02em] sm:tracking-[-0.03em] uppercase text-zinc-300"
                    >
                      Films
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: "110%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.35, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[clamp(2.35rem,7.2vw,7.25rem)] font-bold leading-[0.98] sm:leading-[0.92] lg:leading-[0.88] tracking-[-0.02em] sm:tracking-[-0.03em] uppercase text-zinc-400"
                    >
                      Commercials
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: "110%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.35, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[clamp(2.35rem,7.2vw,7.25rem)] font-bold leading-[0.98] sm:leading-[0.92] lg:leading-[0.88] tracking-[-0.02em] sm:tracking-[-0.03em] uppercase text-zinc-500"
                    >
                      Documentaries
                    </motion.h1>
                  </div>
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
        <div className="px-8 md:px-16 pt-32 bg-[#050505]">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br />Works</h2>
            <div className="text-right pb-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#db520d] block mb-2 font-bold">Refined Selection</span>
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
