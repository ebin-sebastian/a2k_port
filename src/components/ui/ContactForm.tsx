"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <form className="space-y-8 w-full max-w-md">
            <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 rounded-none placeholder:text-zinc-700"
                    placeholder="ENTER YOUR NAME"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 rounded-none placeholder:text-zinc-700"
                    placeholder="EMAIL ADDRESS"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="project" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    Inquiry Type
                </label>
                <div className="relative">
                    <select
                        id="project"
                        name="project"
                        className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 rounded-none appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-black text-zinc-500">SELECT INQUIRY TYPE</option>
                        <option value="commercial" className="bg-black">Commercial / Brand Film</option>
                        <option value="narrative" className="bg-black">Narrative / Short Film</option>
                        <option value="music_video" className="bg-black">Music Video</option>
                        <option value="documentary" className="bg-black">Documentary</option>
                        <option value="other" className="bg-black">Other Collaboration</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-[10px]">▼</div>
                </div>
            </div>


            <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 rounded-none resize-none placeholder:text-zinc-700"
                    placeholder="TELL US ABOUT YOUR VISION"
                />
            </div>

            <div className="pt-8">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-200 transition-colors duration-300 w-full md:w-auto"
                >
                    Send Message
                </motion.button>
            </div>
        </form>
    );
}
