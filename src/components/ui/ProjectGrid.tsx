"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
    return (
        <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                            {project.thumbnailUrl ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                                >
                                    <source src={project.thumbnailUrl} type="video/mp4" />
                                </video>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors">
                                    <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-xs uppercase tracking-widest font-medium">Coming Soon</div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium tracking-tight uppercase">{project.title}</h3>
                            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
