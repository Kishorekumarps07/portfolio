"use client";

import { GraduationCap, School } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";

const educationData = [
    {
        degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
        institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
        year: "Graduated: April 2025",
        icon: GraduationCap,
    },
    {
        degree: "High School – Computer Mathematics",
        institution: "Velammal Vidyalaya, Madurai",
        year: "Graduated: July 2021",
        icon: School,
    }
];

export function Education() {
    return (
        <section id="education" className="relative w-full bg-background py-24 px-4 md:px-8 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="mx-auto max-w-4xl">
                <FadeIn>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Education <span className="text-gradient">History</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
                            Academic foundation and qualifications.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-2">
                    {educationData.map((edu, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <div className="relative h-full flex flex-col p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-indigo-500/30 transition-colors duration-300">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                                    <edu.icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                                    {edu.degree}
                                </h3>

                                <p className="text-muted-foreground font-medium mb-4 flex-grow">
                                    {edu.institution}
                                </p>

                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                                        {edu.year}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
