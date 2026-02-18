"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="py-48 px-8 md:px-16 border-t border-zinc-900 bg-[#020202]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 leading-none">
                        DIRECT YOUR <br /> <span className="text-zinc-600">VISION.</span>
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
                        <a href="https://www.instagram.com/akshaymen/" target="_blank" rel="noopener noreferrer" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Instagram</a>
                        <a href="https://vimeo.com/user175957220" target="_blank" rel="noopener noreferrer" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">Vimeo</a>
                        <a href="https://www.linkedin.com/in/akshay-menon-135635190/" target="_blank" rel="noopener noreferrer" className="block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">LinkedIn</a>
                    </div>
                    <div className="mt-24 text-[9px] uppercase tracking-[0.4em] text-zinc-800 font-bold cursor-default">
                        © 2026 <span className="hover:text-[#db520d] transition-colors duration-300">nodeleap studios</span> x <span className="hover:text-white transition-colors duration-300">aachath akshay menon</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
