"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import FeaturedProjects from "@/components/ui/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-24 md:pb-32 px-8 md:px-16">
        {/* Blurred Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dramatic-zoom-into-a-dense-forest-during-a-misty-morning-1188-large.mp4" type="video/mp4" />
        </video>

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
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed uppercase tracking-wider font-medium">
                Pushing the visual medium ahead with every frame. Aachath Akshay Menon is a filmmaker focused on the high-end intersection of light and emotion.
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
              <div className="text-xs uppercase tracking-widest text-zinc-300">Mumbai / Global</div>
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
      <div className="px-8 md:px-16 pt-32">
        <div className="flex justify-between items-end border-b border-zinc-900 pb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br />Works</h2>
          <div className="text-right pb-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-2 font-bold">Refined Selection</span>
            <span className="text-sm text-zinc-400 uppercase tracking-widest font-medium">Top Credits</span>
          </div>
        </div>
      </div>

      <FeaturedProjects />

      {/* Contact Section */}
      <footer id="contact" className="py-48 px-8 md:px-16 border-t border-zinc-900 bg-[#020202]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 leading-none">
              Let's Build <br /> The Future.
            </h2>
            <div className="space-y-8">
              <div className="group">
                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-4 font-bold">Inquiries</span>
                <a href="mailto:sendittoakshay@gmail.com" className="text-xl md:text-3xl font-light underline underline-offset-8 decoration-zinc-800 hover:decoration-white transition-all duration-700">
                  sendittoakshay@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end text-right">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block font-bold">Social</span>
              <a href="#" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Instagram</a>
              <a href="#" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Vimeo</a>
              <a href="#" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">LinkedIn</a>
            </div>
            <div className="mt-24 text-[9px] uppercase tracking-[0.4em] text-zinc-800 font-bold">
              © 2025 nodeleap studios x aachath akshay menon
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
