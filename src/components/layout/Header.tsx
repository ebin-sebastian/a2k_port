"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Portfolio", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Archive", href: "/work" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-8 md:px-16 py-8 md:py-12 mix-blend-difference"
            >
                <Link href="/" className="group flex flex-col" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase leading-none">Akshay Menon</span>
                    <span className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase text-gray-500 mt-2 group-hover:text-white transition-colors duration-500">
                        Films & Direction
                    </span>
                </Link>

                <nav className="flex items-center gap-12">
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all duration-500 relative py-2 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col gap-2 group p-2 relative z-[110]"
                        aria-label="Toggle Menu"
                    >
                        <motion.div
                            animate={isMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-white transition-colors"
                        />
                        <motion.div
                            animate={isMenuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-white"
                        />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-500"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-12 text-[10px] tracking-[0.5em] text-zinc-600 uppercase"
                        >
                            Mumbai / Global
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
