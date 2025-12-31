"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, LayoutDashboard, Rocket } from "lucide-react";
import { FadeIn, StaggerContainer, TRANSITION_DURATION, TRANSITION_EASE } from "@/components/ui/motion";

const strengths = [
    {
        title: "AI & Machine Learning Engineering",
        description: "Hands-on experience in ML model development, NLP pipelines, data analysis, and evaluation using real-world datasets.",
        icon: Brain,
    },
    {
        title: "Full Stack Web Development",
        description: "Designed and developed end-to-end web applications with clean frontend architecture and secure backend systems.",
        icon: Code2,
    },
    {
        title: "CRM & Product Systems",
        description: "Built role-based CRM platforms enabling centralized management of users, events, attendance, and analytics.",
        icon: LayoutDashboard,
    },
    {
        title: "Scalable Backend & APIs",
        description: "Designed RESTful APIs with authentication, authorization, and reliable data flows across applications.",
        icon: Database,
    },
    {
        title: "Deployment & Automation",
        description: "Experience deploying applications using modern cloud platforms with environment configuration and automation workflows.",
        icon: Rocket,
    },
];

export function About() {
    return (
        <section id="about" className="relative w-full bg-background py-24 px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Engineering <span className="text-gradient">Intelligence</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            AI Full Stack Developer with a strong foundation in full-stack web development, machine learning, and data-driven application design. Experienced in building scalable web applications using Java, Python, JavaScript, React, REST APIs, SQL/NoSQL databases, and modern deployment workflows.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {strengths.map((strength, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{
                                duration: TRANSITION_DURATION,
                                ease: TRANSITION_EASE,
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 p-8 hover:border-indigo-500/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-indigo-500/30 dark:hover:bg-zinc-900 transition-all duration-300"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                                <strength.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-foreground">{strength.title}</h3>
                            <p className="text-muted-foreground">{strength.description}</p>

                            {/* Decorative gradient blob */}
                            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
