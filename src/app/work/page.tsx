"use client";

import Header from "@/components/layout/Header";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { motion } from "framer-motion";

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Header />

            <div className="pt-32 md:pt-48 px-8 md:px-16 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-zinc-900 pb-16"
                >
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-6 font-bold">Archives / Complete Catalog</span>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            All <br />Works
                        </h1>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-zinc-500 text-xs uppercase tracking-widest leading-relaxed font-medium">
                            A comprehensive collection of direction, commercial, and collaborative visual projects spanning a decade of cinematic exploration.
                        </p>
                    </div>
                </motion.div>
            </div>

            <ProjectGrid />

            <footer className="py-24 px-8 md:px-16 text-center border-t border-zinc-900">
                <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-800 font-bold">
                    © 2025 nodeleap studios x aachath akshay menon
                </div>
            </footer>
        </main>
    );
}
