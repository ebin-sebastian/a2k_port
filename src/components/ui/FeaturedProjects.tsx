"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function FeaturedProjects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="work" className="py-24 space-y-32">
            {featured.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                    <div className={`lg:col-span-8 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                        <div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900 group">
                            {project.thumbnailUrl ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                >
                                    <source src={project.thumbnailUrl} type="video/mp4" />
                                </video>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800/20 text-zinc-700 uppercase tracking-widest text-[10px]">
                                    Project in Production
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    </div>

                    <div className={`lg:col-span-4 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1 lg:text-right"}`}>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 block mb-2">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm ml-auto mr-auto lg:ml-0 lg:mr-0">
                                {project.description}
                            </p>
                            <div className="pt-4">
                                <Link href={`/work/${project.id}`} className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-zinc-700 pb-2 hover:border-white transition-colors duration-500">
                                    Explore Project
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}

            <div className="container mx-auto px-6 py-24 flex justify-center">
                <Link
                    href="/work"
                    className="group relative px-12 py-5 border border-zinc-800 hover:border-white transition-colors duration-700 overflow-hidden text-center min-w-[300px]"
                >
                    {/* Synchronized Background Slide */}
                    <div
                        className="absolute inset-0 bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0"
                    />

                    {/* Rolling Text */}
                    <div className="relative z-10 overflow-hidden h-5">
                        <div
                            className="flex flex-col items-center transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-1/2"
                        >
                            <span className="text-[10px] uppercase tracking-[0.6em] font-bold h-5 flex items-center transition-colors duration-500 group-hover:text-black">
                                See All Creations
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.6em] font-bold h-5 flex items-center text-black">
                                View Archive
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
