"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import "plyr/dist/plyr.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/ui/ContactCTA";

// Dynamically import Plyr with ssr disabled to prevent "document is not defined" error
const Plyr = dynamic(() => import("plyr-react").then((mod) => mod.Plyr), { ssr: false });

import { use, useMemo } from "react";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    // Determine video provider and ID
    const isYouTube = project.videoUrl?.includes("youtube.com") || project.videoUrl?.includes("youtu.be");
    const isVimeo = project.videoUrl?.includes("vimeo.com");

    let videoId = "";
    let provider: "youtube" | "vimeo" | null = null;

    if (project.videoUrl) {
        if (isYouTube) {
            const url = new URL(project.videoUrl);
            videoId = url.searchParams.get("v") || url.pathname.split("/").pop() || "";
            provider = "youtube";
        } else if (isVimeo) {
            const url = new URL(project.videoUrl);
            videoId = url.pathname.split("/").pop() || "";
            provider = "vimeo";
        }
    }

    const plyrSource = useMemo(() => {
        return provider && videoId ? {
            type: "video" as const,
            sources: [
                {
                    src: videoId,
                    provider: provider,
                }
            ]
        } : null;
    }, [provider, videoId]);

    const plyrOptions = useMemo(() => {
        return {
            autoplay: false,
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
            settings: ['captions', 'quality', 'speed', 'loop'],
            youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
            },
            vimeo: {
                byline: false,
                portrait: false,
                title: false,
                transparent: false
            }
        };
    }, []);

    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-24 selection:bg-zinc-800 selection:text-white">
                <div className="container mx-auto px-6 max-w-6xl">

                    {/* Back Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft className="w-4 h-4 mr-3" />
                            Back to Work
                        </Link>
                    </motion.div>

                    {/* Video Player Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-12"
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 block mb-4">{project.category}</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-tight mb-6">
                            {project.title}
                        </h1>
                    </motion.div>

                    {/* The Player */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-video rounded-sm overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50 mb-16"
                    >
                        {plyrSource ? (
                            <Plyr
                                source={plyrSource}
                                options={plyrOptions}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600 uppercase tracking-widest text-xs">
                                No Video Available
                            </div>
                        )}
                    </motion.div>

                    {/* Details Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="md:col-span-2">
                            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-4">About the Project</h3>
                            <p className="text-zinc-400 leading-laxed max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-4">Role</h3>
                            <p className="text-zinc-400 capitalize">{project.role}</p>
                        </div>
                    </motion.div>

                </div>
            </main>

            <ContactCTA />
            <Footer />
        </>
    );
}
