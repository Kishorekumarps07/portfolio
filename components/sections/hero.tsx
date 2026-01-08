"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Terminal, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ProfileCube = dynamic(
    () => import("@/components/ProfileCube"),
    { ssr: false }
);

export function Hero() {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const contentY = useTransform(scrollY, [0, 400], [0, -50]);
    const headingScale = useTransform(scrollY, [0, 400], [1, 0.95]);
    const bgBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(4px)"]);
    const bgOverlayOpacity = useTransform(scrollY, [0, 600], [0, 0.4]);
    const parallaxY = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 100]);

    // Subtle parallax for portrait (desktop only, ~5% slower than scroll)
    const portraitParallaxY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : 30]);

    // Scroll-linked exit behavior for portrait
    const portraitOpacity = useTransform(scrollY, [0, 400], [1, shouldReduceMotion ? 1 : 0.9]);
    const portraitExitY = useTransform(scrollY, [0, 400], [0, shouldReduceMotion ? 0 : -20]);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-16 md:py-24 text-center md:px-8">
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
                <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Left Side */}
                    <StaggerContainer className="flex w-full flex-col items-center lg:items-start justify-center gap-8 text-center lg:text-left">
                        <FadeIn delay={0.2}>
                            <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Available for New Opportunities
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <motion.div style={{ scale: headingScale }}>
                                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                                    <span className="block text-foreground mb-2 text-balance whitespace-nowrap text-3xl sm:text-5xl md:text-6xl">Kishore Kumar P S</span>
                                    <span className="block text-gradient text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal h-[1.2em] sm:h-[1.3em]">
                                        AI Full Stack Developer
                                    </span>
                                </h1>
                            </motion.div>
                        </FadeIn>

                        <FadeIn delay={0.5} className="max-w-2xl lg:max-w-none">
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                                I design and build scalable full-stack web applications with integrated AI, secure backend systems, and data-driven intelligence for real-world business use cases.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.7} className="flex flex-col sm:flex-row gap-4 w-full lg:justify-start justify-center">
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
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-base font-semibold px-8 h-12 gap-2"
                                    onClick={() => setIsResumeOpen(true)}
                                >
                                    <Eye className="w-4 h-4" />
                                    Preview Resume
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95, y: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <a
                                    href="/resume/KISHORE_KUMAR_PS_RESUME.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full sm:w-auto text-base font-semibold px-8 h-12 gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </a>
                            </motion.div>
                        </FadeIn>

                        <FadeIn delay={0.9} className="w-full flex lg:justify-start justify-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
                            <p className="text-sm font-medium text-zinc-500 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                AI & Full Stack Developer with experience building CRM platforms, AI pipelines, and production-ready web systems.
                            </p>
                        </FadeIn>
                    </StaggerContainer>

                    {/* 3D Cube Portrait - All Devices */}
                    <FadeIn delay={0.4} className="flex w-full h-[240px] lg:h-[320px] items-center justify-center px-4 lg:px-8">
                        <ProfileCube />
                    </FadeIn>
                </div>
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

            <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} className="sm:max-w-5xl" titleId="resume-preview-title">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
                        <h2 id="resume-preview-title" className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full bg-indigo-500" />
                            Resume Preview
                        </h2>
                        <a
                            href="/resume/KISHORE_KUMAR_PS_RESUME.pdf"
                            download="Kishore_Kumar_PS_Resume.pdf"
                            className="inline-flex items-center justify-center rounded-md bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </a>
                    </div>

                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 relative h-[75vh] sm:h-[80vh]">
                        <iframe
                            src="/resume/KISHORE_KUMAR_PS_RESUME.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="w-full h-full border-0"
                            title="Resume PDF"
                        />
                    </div>
                </div>
            </Modal>
        </section>
    );
}
