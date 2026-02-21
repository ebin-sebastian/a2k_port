"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="relative pt-8 pb-32 px-8 md:px-16 overflow-hidden bg-[#050505] flex justify-center items-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-white/2 to-transparent pointer-events-none rounded-l-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center gap-12"
            >
                <div className="text-center">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 block mb-4 font-bold">
                        Next Steps
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter loading-none">
                        Get In Touch
                    </h2>
                </div>

                <Link
                    href="/contact"
                    className="group relative flex items-center justify-center w-56 h-56 md:w-64 md:h-64 rounded-full border border-zinc-800 hover:border-white transition-colors duration-700 bg-black/50 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] rounded-full" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 transition-colors duration-500 group-hover:text-black">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold">
                            Contact Me
                        </span>
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
