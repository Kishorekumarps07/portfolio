"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Sparkles } from "lucide-react";

interface Achievement {
    id: string;
    title: string;
    description: string;
}

const achievements: Achievement[] = [
    {
        id: "ach-1",
        title: "Production CRM Platform",
        description: "Built a production-ready CRM platform with role-based access and real-time analytics dashboards.",
    },
    {
        id: "ach-2",
        title: "NLP Model Optimization",
        description: "Achieved 85%+ accuracy in an end-to-end NLP sentiment classification pipeline using Logistic Regression.",
    },
    {
        id: "ach-3",
        title: "API Reliability Improvement",
        description: "Reduced payment transaction failures by 15% by improving API integration and debugging workflows.",
    },
    {
        id: "ach-4",
        title: "Scalable Backend Architecture",
        description: "Designed scalable RESTful backend services supporting secure authentication and authorization.",
    },
    {
        id: "ach-5",
        title: "AI-Driven Application Delivery",
        description: "Delivered AI-driven full-stack applications aligned with real-world business workflows.",
    },
];

export function Achievements() {
    return (
        <section id="achievements" className="w-full bg-background py-24 px-4 md:px-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Achievements
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Measurable outcomes and real-world impact
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8" viewport={{ once: true, margin: "-10%" }}>
                    {achievements.map((achievement) => (
                        <FadeIn key={achievement.id}>
                            <div
                                className="group relative flex flex-col justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 transition-all hover:border-indigo-500/50 hover:shadow-lg dark:hover:shadow-indigo-500/10 md:p-8"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                        <Sparkles className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors md:text-xl">
                                        {achievement.title}
                                    </h3>
                                </div>
                                <p className="text-base leading-loose text-zinc-600 dark:text-zinc-400 pl-11">
                                    {achievement.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
