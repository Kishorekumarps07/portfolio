"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Project, ProjectModal } from "@/components/ui/project-modal";

const projects: Project[] = [
    {
        id: "crm-platform",
        title: "CRM Platform",
        category: "Full Stack Product",
        shortDescription: "Role-based operations management system for centralized administration.",
        fullDescription: "A comprehensive internal operations management system designed with role-based portals for Admin, Employees, and Students. It enables centralized management of users, events, attendance, and feedback.",
        problem: "Managing decentralized operations across multiple user roles led to data inconsistency and administrative overhead.",
        role: "Lead Full Stack Developer",
        architecture: ["Java/Spring Boot", "React.js", "MySQL", "REST APIs"],
        pipeline: [
            { step: "Auth", detail: "Role-Based Access Control" },
            { step: "Dashboard", detail: "Real-time Metrics & Analytics" },
            { step: "Operations", detail: "Event & User Management" },
            { step: "Reporting", detail: "Automated Feedback & Logs" }
        ],
        features: [
            "Secure Authentication & Authorization",
            "Real-time Dashboards",
            "Event Lifecycle Management",
            "Attendance Tracking & Feedback"
        ],
        outcome: "Streamlined operational workflows by unifying user management and event coordination into a single secure platform.",
        tags: ["Java", "Spring Boot", "React.js", "MySQL"],
        links: { github: "#" },
    },
    {
        id: "text-sentiment",
        title: "Text Sentiment Classification",
        category: "AI & Machine Learning",
        shortDescription: "End-to-end NLP pipeline achieving >85% accuracy on review data.",
        fullDescription: "An end-to-end Natural Language Processing pipeline designed to classify text sentiment with high precision. It leverages advanced text preprocessing and logistic regression.",
        problem: "Need for automated sentiment analysis to process large volumes of user reviews efficiently.",
        role: "AI Engineer",
        architecture: ["Python", "Scikit-learn", "Pandas", "NLTK"],
        pipeline: [
            { step: "Preprocessing", detail: "Tokenization & Stopword Removal" },
            { step: "Vectorization", detail: "TF-IDF Feature Extraction" },
            { step: "Training", detail: "Logistic Regression Model" },
            { step: "Evaluation", detail: "F1-Score Metrics" }
        ],
        features: [
            "Advanced Text Preprocessing",
            "TF-IDF Vectorization",
            "Precision/Recall Evaluation",
            "Reproducible ML Pipeline"
        ],
        outcome: "Achieved over 85% accuracy on real-world datasets, validating the pipeline's reliability for sentiment analysis.",
        tags: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
        links: { github: "#" },
    },
    {
        id: "personality-predictor",
        title: "Personality Predictor",
        category: "Machine Learning",
        shortDescription: "ML system predicting Big Five personality traits from user inputs.",
        fullDescription: "A machine learning application that predicts personality traits based on the Big Five model. It processes structured user inputs through a scalable classification pipeline.",
        problem: "Complex psychological assessments often lack automated, data-driven scoring mechanisms.",
        role: "ML Engineer",
        architecture: ["Python", "Scikit-learn", "Flask", "NumPy"],
        pipeline: [
            { step: "Input", detail: "Structured Data Collection" },
            { step: "Processing", detail: "Feature Extraction" },
            { step: "Prediction", detail: "Classification Model" },
            { step: "Output", detail: "Trait Profiling" }
        ],
        features: [
            "Scalable ML Architecture",
            "Big Five Trait Mapping",
            "Clear Documentation",
            "Interactive User Prompts"
        ],
        outcome: "Successfully implemented a scalable classification system improving assessment accessibility and scoring speed.",
        tags: ["Machine Learning", "Python", "Data Science", "Classification"],
        links: { github: "#" },
    },
    {
        id: "mobile-recharge",
        title: "Online Mobile Recharge",
        category: "Full Stack App",
        shortDescription: "Secure web application for seamless mobile transactions.",
        fullDescription: "A secure full-stack web portal for mobile recharge services. It focuses on reliable payment integration and robust error handling to ensure successful transactions.",
        problem: "High transaction failure rates and poor user feedback in existing recharge portals.",
        role: "Full Stack Developer",
        architecture: ["React.js", "Node.js", "Express", "Payment Gateway"],
        pipeline: [
            { step: "Frontend", detail: "Plan Selection UI" },
            { step: "Backend", detail: "Transaction Processing" },
            { step: "Gateway", detail: "Secure Payment API" },
            { step: "Confirmation", detail: "Status Notification" }
        ],
        features: [
            "Payment Gateway Integration",
            "Error handling workflows",
            "Transaction History",
            "Responsive UI"
        ],
        outcome: "Reduced transaction failures by 15% through improved debugging and frontend-backend synchronization.",
        tags: ["React.js", "Node.js", "API Integration", "Web Security"],
        links: { github: "#" },
    },
    {
        id: "bookstore-management",
        title: "Online Bookstore System",
        category: "Full Stack & REST APIs",
        shortDescription: "Java-based inventory and order management system.",
        fullDescription: "A robust back-office system for managing book inventory, orders, and users. Built with Java and Spring Boot, it emphasizes data integrity and API reliability.",
        problem: "Manual inventory tracking was prone to errors and scalability issues.",
        role: "Backend Lead",
        architecture: ["Java", "Spring Boot", "SQL", "REST Architecture"],
        pipeline: [
            { step: "API", detail: "RESTful Endpoints" },
            { step: "Logic", detail: "Service Layer Processing" },
            { step: "Data", detail: "SQL Transactions" },
            { step: "Security", detail: "User Validation" }
        ],
        features: [
            "Multi-user Order Processing",
            "Inventory Management",
            "Secure SQL Transactions",
            "API Lifecycle Management"
        ],
        outcome: "Implemented secure transaction handling for concurrent user orders and reliable inventory updates.",
        tags: ["Java", "Spring Boot", "SQL", "REST API"],
        links: { github: "#" },
    }
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="projects" className="relative w-full bg-background py-24 px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Featured <span className="text-gradient">Case Studies</span>
                        </h2>
                    </FadeIn>

                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent my-6"
                    />

                    <FadeIn delay={0.4}>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Deep dives into complex problems I've solved. Click on any project to see the architecture and impact.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <FadeIn key={project.id}>
                            <motion.div
                                layoutId={`project-card-${project.id}`}
                                onClick={() => setSelectedProject(project)}
                                whileHover={shouldReduceMotion ? { scale: 1 } : {
                                    scale: 1.02,
                                    y: -5,
                                    boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)",
                                    borderColor: "rgba(99, 102, 241, 0.4)",
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                                className="group cursor-pointer relative flex flex-col justify-between rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 transition-colors duration-300 h-full"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-colors duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-indigo-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                                        </div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded-full bg-white dark:bg-zinc-900">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                                    <p className="text-muted-foreground line-clamp-3 mb-6">
                                        {project.shortDescription}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-xs text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">#{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </StaggerContainer>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
