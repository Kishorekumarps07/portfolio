"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    image: string;
}

const certifications: Certification[] = [
    {
        id: "coursera-1",
        title: "Snowflake Cloud Data Platform",
        issuer: "Coursera",
        image: "/certifications/Coursera 3K020W2QP9DJ-page-00001.jpg",
    },
    {
        id: "coursera-2",
        title: "Data Structure & Backend with Java",
        issuer: "Coursera",
        image: "/certifications/Coursera 845R3LKUSRQK-page-00001.jpg",
    },
    {
        id: "coursera-3",
        title: "AI Workflow: Enterprise Model Deployment",
        issuer: "Coursera",
        image: "/certifications/Coursera 9DSNJP84O7Z3-page-00001.jpg",
    },
    {
        id: "coursera-4",
        title: "Getting Started with Leadership",
        issuer: "Coursera",
        image: "/certifications/Coursera C9NSCPRCS0OQ-page-00001.jpg",
    },
    {
        id: "coursera-5",
        title: "Business Architecture Using AWS Organisation",
        issuer: "Coursera",
        image: "/certifications/Coursera DY4LDAUUZRYY-page-00001.jpg",
    },
    {
        id: "coursera-6",
        title: "Advanced Microsoft: Power BI",
        issuer: "Coursera",
        image: "/certifications/Coursera F8B8ML91RL83-page-00001.jpg",
    },
    {
        id: "coursera-7",
        title: "Microsoft Azure",
        issuer: "Coursera",
        image: "/certifications/Coursera FTG0XKD2CM1M-page-00001.jpg",
    },
    {
        id: "coursera-8",
        title: "Data Warehouse Using BigQuery",
        issuer: "Coursera",
        image: "/certifications/Coursera JH48VT9YBTYD-page-00001.jpg",
    },
    {
        id: "coursera-9",
        title: "Advanced Data Analysis",
        issuer: "Coursera",
        image: "/certifications/Coursera KZPZ08FVJNS4-page-00001.jpg",
    },
    {
        id: "coursera-10",
        title: "Professional Achievement",
        issuer: "Coursera",
        image: "/certifications/Coursera QQC012JPVUYE-page-00001.jpg",
    },
    {
        id: "coursera-11",
        title: "NVIDIA Certificate",
        issuer: "Coursera & NVIDIA",
        image: "/certifications/Coursera nvidia-page-00001.jpg",
    },
    {
        id: "cert-c1",
        title: "Artificial Intelligence",
        issuer: "Organization",
        image: "/certifications/c1.jpeg",
    },
    {
        id: "cert-c2",
        title: "AI Conclave",
        issuer: "Organization",
        image: "/certifications/c2.jpeg",
    },
    {
        id: "cert-c3",
        title: "Prompt Engineering",
        issuer: "Organization",
        image: "/certifications/c3.jpeg",
    },
    {
        id: "cert-c4",
        title: "Generative AI",
        issuer: "Organization",
        image: "/certifications/c4.jpeg",
    },
    {
        id: "cert-c5",
        title: "Java & Runtime",
        issuer: "Infosys Springboard",
        image: "/certifications/c5.jpeg",
    },
    {
        id: "cert-c6",
        title: "Introduction to Python",
        issuer: "Infosys Springboard",
        image: "/certifications/c6.jpeg",
    },
    {
        id: "cert-c7",
        title: "Selenium: Continuous Testing",
        issuer: "Infosys Springboard",
        image: "/certifications/c7.jpeg",
    },
    {
        id: "cert-c10",
        title: "NPTEL",
        issuer: "NPTEL",
        image: "/certifications/c10.jpeg",
    },
    {
        id: "cert-c11",
        title: "AI Internship",
        issuer: "Organization",
        image: "/certifications/c11.jpeg",
    }
];

const displayCertifications = [...certifications, ...certifications];

export function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    return (
        <section id="certifications" className="w-full bg-background py-24 px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Certifications
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-muted-foreground">
                            Recognized learning and professional credentials
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="flex w-full overflow-hidden">
                    <div className={`flex gap-8 md:gap-6 animate-scroll-right-slow md:animate-scroll-right md:hover:[animation-play-state:paused] motion-reduce:animate-none ${selectedCert ? "[animation-play-state:paused]" : ""}`}>
                        {displayCertifications.map((cert, index) => (
                            <FadeIn key={`${cert.id}-${index}`} className="min-w-[300px] flex-shrink-0 sm:min-w-[350px]">
                                <div
                                    className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:border-indigo-500/50 hover:shadow-lg dark:hover:shadow-indigo-500/10 cursor-pointer active:scale-[0.98] active:opacity-90"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setSelectedCert(cert)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            setSelectedCert(cert);
                                        }
                                    }}
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>

                                    <div className="p-5">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-xs font-medium uppercase tracking-wider text-indigo-500">
                                                {cert.issuer}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </StaggerContainer>

                <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
                    {selectedCert && (
                        <div className="flex flex-col gap-6">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                    {selectedCert.title}
                                </h3>
                                <div className="inline-flex items-center justify-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500">
                                    {selectedCert.issuer}
                                </div>
                            </div>

                            <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden rounded-xl bg-zinc-950/50">
                                <Image
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
}
