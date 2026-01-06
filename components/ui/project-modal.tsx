"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FadeIn } from "@/components/ui/motion";

export interface Project {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    problem: string;
    role: string;
    architecture: string[];
    features: string[];
    outcome: string;
    pipeline?: { step: string; detail: string }[];
    tags: string[];
    links: { demo?: string; github?: string; live?: string };
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
                layoutId={`project-card-${project.id}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background border border-zinc-200 dark:border-zinc-800 shadow-2xl scrollbar-hide"
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row min-h-[400px]">
                    {/* Visual Side (Left/Top) */}
                    <motion.div
                        exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                        className="w-full md:w-2/5 bg-zinc-100 dark:bg-zinc-900 p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                        />
                        <div className="relative z-10">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                            >
                                {project.category}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl font-bold mb-2"
                            >
                                {project.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-muted-foreground mb-6"
                            >
                                {project.shortDescription}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-2 mb-8"
                            >
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative z-10 flex gap-3"
                        >
                            {project.links.live && (
                                <Button size="sm" className="w-full font-semibold" onClick={() => window.open(project.links.live, '_blank')}>
                                    Live Site <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                            {project.links.demo && (
                                <Button size="sm" className="w-full font-semibold" onClick={() => window.open(project.links.demo, '_blank')}>
                                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                            {project.links.github && (
                                <Button size="sm" variant="outline" className="w-full font-semibold" onClick={() => window.open(project.links.github, '_blank')}>
                                    Source <Github className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Content Side (Right/Bottom) */}
                    <motion.div
                        exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                        className="w-full md:w-3/5 p-8 bg-background"
                    >
                        <div className="space-y-8">
                            {/* Problem & Role */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FadeIn delay={0.2}>
                                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h3>
                                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.problem}</p>
                                </FadeIn>
                                <FadeIn delay={0.3}>
                                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">My Role</h3>
                                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.role}</p>
                                </FadeIn>
                            </div>

                            {/* Architecture Pipeline (Animated Left-to-Right) */}
                            {project.pipeline && (
                                <FadeIn delay={0.4} className="w-full">
                                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Architecture Flow</h3>
                                    <div className="flex flex-col sm:flex-row gap-2 relative">
                                        {project.pipeline.map((step, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.15), duration: 0.5, ease: "easeOut" }}
                                                className="flex-1 relative group"
                                            >
                                                <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-indigo-500/50 transition-colors h-full">
                                                    <div className="text-xs font-mono text-indigo-500 mb-1">0{i + 1}</div>
                                                    <div className="font-semibold text-xs mb-1">{step.step}</div>
                                                    <div className="text-[10px] text-muted-foreground leading-tight">{step.detail}</div>
                                                </div>
                                                {i < project.pipeline!.length - 1 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.6 + (i * 0.15), type: "spring" }}
                                                        className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-zinc-300"
                                                    >
                                                        <ArrowRight className="w-3 h-3 text-indigo-300" />
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </FadeIn>
                            )}

                            {/* Key Features */}
                            <FadeIn delay={0.6}>
                                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-xs text-zinc-600 dark:text-zinc-400">
                                            <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>

                            {/* Outcome (Final Punch) */}
                            <FadeIn delay={0.7}>
                                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                                    <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">Impact & Outcome</h3>
                                    <p className="text-sm font-medium text-foreground">{project.outcome}</p>
                                </div>
                            </FadeIn>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
