"use client";

import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export const TRANSITION_EASE = [0.16, 1, 0.3, 1]; // "Executive" ease-out
export const TRANSITION_DURATION = 0.6; // Within 0.4s - 0.7s range

interface FadeInProps extends MotionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    viewport?: { once?: boolean; margin?: string };
}

export function FadeIn({
    children,
    delay = 0,
    className,
    direction = "up",
    viewport = { once: true, margin: "-10%" },
    ...props
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: shouldReduceMotion ? 0 : 16 },
        down: { y: shouldReduceMotion ? 0 : -16 },
        left: { x: shouldReduceMotion ? 0 : 16 },
        right: { x: shouldReduceMotion ? 0 : -16 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={viewport}
            transition={{
                duration: TRANSITION_DURATION,
                delay,
                ease: TRANSITION_EASE,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export const StaggerContainer = ({ children, className, stagger = 0.1, viewport = { once: true, margin: "-10%" } }: { children: ReactNode; className?: string; stagger?: number; viewport?: any }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: stagger,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
