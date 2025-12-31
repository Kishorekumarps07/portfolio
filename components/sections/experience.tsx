"use client";

import { Briefcase, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, TRANSITION_DURATION } from "@/components/ui/motion";

const experienceData = [
    {
        role: "AI & Full Stack Developer",
        company: "PromptiX",
        date: "December 2025 – Present",
        description: "Focusing on AI-driven full stack web applications and secure backend systems.",
        achievements: [
            "Built and deployed AI-driven full stack web applications focusing on scalability, performance, and real-world business requirements",
            "Designed and implemented secure backend systems and RESTful APIs for contact forms, career applications, and admin dashboards",
            "Integrated AI tools, automation workflows, and cloud services to improve operational efficiency and reduce manual processing",
            "Collaborated with stakeholders to convert business requirements into reliable technical solutions",
            "Optimized frontend UI/UX and database architecture for responsiveness and system reliability"
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="relative w-full bg-background py-24 px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Professional <span className="text-gradient">Journey</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
                            A timeline of solving complex problems and delivering business value.
                        </p>
                    </div>
                </FadeIn>

                <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8 space-y-12">
                    {experienceData.map((exp, index) => (
                        <FadeIn
                            key={index}
                            direction="up"
                            delay={index * 0.1}
                            className="relative pl-8 md:pl-12"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Timeline Dot - Static, no pulse */}
                            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <div className="flex items-center text-indigo-500 font-medium">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0 font-mono">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {exp.date}
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <FadeIn
                                        key={i}
                                        direction="up"
                                        delay={0.1 + (i * 0.1)}
                                        className="flex items-start text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                                        viewport={{ once: true }}
                                    >
                                        <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50" />
                                        <span>{item}</span>
                                    </FadeIn>
                                ))}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
