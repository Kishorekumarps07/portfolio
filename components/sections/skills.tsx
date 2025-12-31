"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { MouseEvent } from "react";
import {
    Code2,
    Server,
    Brain,
    Wrench,
    Layout,
    Database,
    Cpu,
    Cloud,
    GitBranch,
    Terminal,
    Layers,
    Smartphone
} from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const skillsData = {
    programming: [
        { name: "Java", icon: Code2, context: "Object-Oriented Programming (OOP), Data Structures & Algorithms" },
        { name: "Python", icon: Terminal, context: "AI Model Development, Scripting, Automation" },
        { name: "JavaScript", icon: Code2, context: "ES6+, Async Programming, DOM Manipulation" },
    ],
    frontend: [
        { name: "React.js", icon: Layout, context: "Component-Based Architecture, State Management, Hooks" },
        { name: "UI/UX", icon: Layers, context: "Responsive Design, Tailwind CSS, Accessibility Best Practices" },
        { name: "HTML5/CSS3", icon: Code2, context: "Semantic HTML, Flexbox/Grid, Animations" },
    ],
    backend: [
        { name: "Spring Boot", icon: Server, context: "Microservices, Dependency Injection, Security" },
        { name: "FastAPI", icon: Terminal, context: "High-performance Async APIs, Pydantic Models" },
        { name: "REST APIs", icon: GitBranch, context: "MVC Architecture, Authentication, Rate Limiting" },
    ],
    database: [
        { name: "MySQL", icon: Database, context: "Relational Design, Complex Joins, Stored Procedures" },
        { name: "MongoDB", icon: Database, context: "NoSQL Modeling, Aggregation Pipelines" },
        { name: "Data Design", icon: Layers, context: "Normalization, Indexing, CRUD Operations" },
    ],
    ai_ml: [
        { name: "Machine Learning", icon: Brain, context: "Scikit-learn, Logistic Regression, Feature Engineering" },
        { name: "NLP", icon: Brain, context: "TF-IDF, Text Processing, Sentiment Analysis" },
        { name: "Model Training", icon: Cpu, context: "Evaluation Metrics, Hyperparameter Tuning" },
    ],
    tools: [
        { name: "Git & GitHub", icon: GitBranch, context: "Version Control, Branching Strategies, Pull Requests" },
        { name: "Docker", icon: Layout, context: "Containerization, Multi-stage Builds, Docker Compose" },
        { name: "Postman", icon: Wrench, context: "API Testing, Automated Collections, Documentation" },
        { name: "VS Code", icon: Code2, context: "Advanced Debugging, Extensions, Remote Development" },
    ],
    deployment: [
        { name: "Cloud Platforms", icon: Cloud, context: "Vercel, Render, AWS (Basic EC2/S3)" },
        { name: "Best Practices", icon: Wrench, context: "Agile Methodology, Code Reviews, Documentation" },
        { name: "Optimization", icon: Terminal, context: "Lighthouse Performance, SEO, Clean Code Principles" },
    ]
};

const tabs = [
    { id: "programming", label: "Programming" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "ai_ml", label: "AI / ML" },
    { id: "tools", label: "Tools" },
    { id: "deployment", label: "Deployment" },
];

function SkillCard({ skill, index }: { skill: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (shouldReduceMotion) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - currentTarget.clientWidth / 2);
        y.set(clientY - top - currentTarget.clientHeight / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // Micro-parallax transform (dampened range)
    const rotateX = useTransform(mouseY, [-300, 300], [2, -2]); // Very subtle tilt
    const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
    const translateX = useTransform(mouseX, [-300, 300], [-4, 4]); // Max 4px movement
    const translateY = useTransform(mouseY, [-300, 300], [-4, 4]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                perspective: 1000
            }}
            whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.1)",
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-colors duration-300 h-full w-full max-w-sm cursor-default transform-gpu"
        >
            <motion.div
                className="p-3 mb-4 rounded-full bg-indigo-500/5 text-indigo-500 group-hover:bg-indigo-500/10 transition-colors duration-300"
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <skill.icon size={24} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-lg font-medium mb-2 text-zinc-700 dark:text-zinc-200">{skill.name}</h3>
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
                {skill.context}
            </p>

            {/* Subtle Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 pointer-events-none transition-all duration-500" />
        </motion.div>
    );
}

export function Skills() {
    const [activeTab, setActiveTab] = useState("programming");

    return (
        <section id="skills" className="relative w-full bg-background py-24 px-4 md:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

            <div className="mx-auto max-w-5xl">
                <FadeIn>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Technical <span className="text-gradient">Arsenal</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            A curated stack of tools and technologies used to build production-grade software.
                        </p>
                    </div>
                </FadeIn>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 outline-none",
                                activeTab === tab.id
                                    ? "text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            )}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-indigo-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            layout
                            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center"
                        >
                            {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
