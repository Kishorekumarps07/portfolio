"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";

export function Hero() {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();

    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const contentY = useTransform(scrollY, [0, 400], [0, -50]);
    const headingScale = useTransform(scrollY, [0, 400], [1, 0.95]);
    const bgBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(4px)"]);
    const bgOverlayOpacity = useTransform(scrollY, [0, 600], [0, 0.4]);
    const parallaxY = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 100]);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 text-center md:px-8">
            {/* Background Gradient Mesh */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: parallaxY }}>
                <motion.div
                    style={{ filter: bgBlur }}
                    animate={shouldReduceMotion ? { opacity: 0.4 } : {
                        opacity: [0.4, 0.6, 0.4],
                        scale: [1, 1.1, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background"
                />
                {/* Scroll-based Darkening Overlay */}
                <motion.div
                    className="absolute inset-0 bg-background"
                    style={{ opacity: bgOverlayOpacity }}
                />
            </motion.div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <motion.div style={{ opacity: contentOpacity, y: contentY }} className="z-10 w-full">
                <StaggerContainer className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8">
                    <FadeIn delay={0.2}>
                        <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Available for New Opportunities
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} className="text-center">
                        <motion.div style={{ scale: headingScale }}>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                                <span className="block text-foreground mb-2 text-balance">Kishore Kumar <span className="whitespace-nowrap">P S</span></span>
                                <span className="block text-gradient text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal h-[1.2em] sm:h-[1.3em]">
                                    AI Full Stack Developer
                                </span>
                            </h1>
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.5} className="max-w-2xl mx-auto text-center">
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                            I design and build scalable full-stack web applications with integrated AI, secure backend systems, and data-driven intelligence for real-world business use cases.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.7} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.4)" }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button size="lg" className="w-full sm:w-auto text-base font-semibold px-8 h-12" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Projects
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold px-8 h-12" onClick={() => window.open('/resume.pdf', '_blank')}>
                                Download Resume
                            </Button>
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.9} className="w-full flex justify-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <p className="text-sm font-medium text-zinc-500 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            AI & Full Stack Developer with experience building CRM platforms, AI pipelines, and production-ready web systems.
                        </p>
                    </FadeIn>
                </StaggerContainer>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity: contentOpacity }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
            >
                <div className="h-10 w-6 rounded-full border border-zinc-800 p-1 flex justify-center bg-background/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="h-2 w-1.5 rounded-full bg-zinc-500"
                    />
                </div>
            </motion.div>
        </section>
    );
}
