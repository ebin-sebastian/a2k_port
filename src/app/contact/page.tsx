"use client";

import Header from "@/components/layout/Header";

import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Header />

            <div className="pt-32 md:pt-48 px-8 md:px-16 mb-24 min-h-[80vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column: Context & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 block mb-8 font-bold">
                            Get in Touch
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-16 text-white">
                            Let's Create <br />
                            <span className="text-zinc-700">Cinema.</span>
                        </h1>

                        <div className="space-y-12">
                            <div className="group">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-4 font-bold">Inquiries</span>
                                <a
                                    href="mailto:sendittoakshay@gmail.com"
                                    className="text-2xl md:text-4xl font-light underline underline-offset-8 decoration-zinc-800 hover:decoration-white transition-all duration-700 text-white"
                                >
                                    sendittoakshay@gmail.com
                                </a>
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-4 font-bold">Connect</span>
                                <div className="flex gap-8">
                                    <a href="https://www.instagram.com/akshaymen/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Instagram</a>
                                    <a href="https://vimeo.com/user175957220" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Vimeo</a>
                                    <a href="https://www.linkedin.com/in/akshay-menon-135635190/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-5 flex items-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full bg-zinc-900/30 p-8 md:p-12 border border-zinc-800/50 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-8">Send a Message</h3>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </div>

            <footer className="py-12 text-center">
                <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-800 font-bold">
                    © 2025 nodeleap studios x aachath akshay menon
                </div>
            </footer>
        </main>
    );
}
