"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

function LeetCodeIcon({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
        >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 6.434l3.482-3.82c.49-.536.467-1.359-.051-1.872a1.365 1.365 0 0 0-.943-.448Zm3.302 5.466c-.632.062-1.226.338-1.636.758l-3.666 3.748a1.379 1.379 0 0 0 .012 1.952c.54.536 1.415.534 1.953-.017l3.666-3.748c.319-.327.42-.765.267-1.144-.153-.38-.492-.626-.884-.663-.037-.003-.075-.005-.112-.005Zm-4.966 6.008c-.76.012-1.377.633-1.366 1.393.008.575.367 1.082.894 1.259l7.357 1.838a1.381 1.381 0 1 0 .67-2.677l-7.357-1.838a1.374 1.374 0 0 0-.198-.015Z" />
        </svg>
    );
}

export function Contact() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState("success");

        // Reset after showing success
        setTimeout(() => {
            setFormState("idle");
            (e.target as HTMLFormElement).reset();
        }, 3000);
    };

    return (
        <section id="contact" className="relative w-full bg-background py-24 px-4 md:px-8 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-6">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Open to Opportunities
                            </div>

                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                                Let’s build <span className="text-gradient">reliable and scalable software systems.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Open to full-stack development roles, AI-driven product development, and real-world software projects.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:kishore3kumar4@gmail.com" className="flex items-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group">
                                    <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                                        <p className="text-lg font-semibold text-foreground">kishore3kumar4@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group">
                                    <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                                        <p className="text-lg font-semibold text-foreground">Madurai, India</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <a href="https://github.com/Kishorekumarps07" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group">
                                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                                            <Github className="w-5 h-5" />
                                        </div>
                                        <span className="ml-3 font-medium">GitHub</span>
                                    </a>

                                    <a href="https://linkedin.com/in/kishore" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group">
                                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-300">
                                            <Linkedin className="w-5 h-5" />
                                        </div>
                                        <span className="ml-3 font-medium">LinkedIn</span>
                                    </a>

                                    <a href="https://leetcode.com/u/kishore_kumar_p_s/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group">
                                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FFA116] group-hover:text-white transition-colors duration-300">
                                            <LeetCodeIcon className="w-5 h-5" />
                                        </div>
                                        <span className="ml-3 font-medium">LeetCode</span>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={0.2}>
                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <fieldset disabled={formState !== "idle"} className="space-y-6 group-disabled:opacity-50 transition-opacity duration-300">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium leading-none text-muted-foreground group-focus-within:text-indigo-500 transition-colors">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                required
                                                placeholder="John Doe"
                                                className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none text-muted-foreground group-focus-within:text-indigo-500 transition-colors">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium leading-none text-muted-foreground group-focus-within:text-indigo-500 transition-colors">
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                            >
                                                <option className="bg-zinc-950 text-zinc-100">Project Inquiry</option>
                                                <option className="bg-zinc-950 text-zinc-100">Job Opportunity</option>
                                                <option className="bg-zinc-950 text-zinc-100">Speaking Request</option>
                                                <option className="bg-zinc-950 text-zinc-100">Other</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none text-muted-foreground group-focus-within:text-indigo-500 transition-colors">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            placeholder="Tell me about your project..."
                                            className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200"
                                        />
                                    </div>
                                </fieldset>

                                <div className="relative overflow-hidden rounded-md">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={formState !== "idle"}
                                        className={cn(
                                            "w-full text-base font-semibold transition-all duration-300",
                                            formState === "success" ? "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600" : "hover:shadow-lg hover:translate-y-[-1px]"
                                        )}
                                    >
                                        <span className={cn("flex items-center transition-all duration-300", formState !== "idle" ? "opacity-0" : "opacity-100")}>
                                            Send Message <Send className="ml-2 h-4 w-4" />
                                        </span>
                                    </Button>

                                    {/* Loading State Overlay */}
                                    {formState === "submitting" && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground font-medium">
                                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                            Sending...
                                        </div>
                                    )}

                                    {/* Success State Overlay */}
                                    {formState === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute inset-0 flex items-center justify-center bg-emerald-600 text-white font-medium"
                                        >
                                            <CheckCircle className="mr-2 h-5 w-5" />
                                            Message Sent Successfully
                                        </motion.div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
