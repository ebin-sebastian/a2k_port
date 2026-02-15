"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Portfolio", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Archive", href: "/work" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 md:py-12 mix-blend-difference"
        >
            <Link href="/" className="group flex flex-col">
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
                <button className="md:hidden flex flex-col gap-1.5 group p-2">
                    <div className="w-6 h-[1px] bg-white transition-transform group-hover:scale-x-75 origin-right" />
                    <div className="w-6 h-[1px] bg-white" />
                </button>
            </nav>
        </motion.header>
    );
}
