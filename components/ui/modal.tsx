"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    titleId?: string;
}

export function Modal({ isOpen, onClose, children, className, titleId }: ModalProps) {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const lastFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleMethod = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key === "Tab") {
                const focusableElements = modalRef.current?.querySelectorAll(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );

                if (focusableElements && focusableElements.length > 0) {
                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            }
        };

        if (isOpen) {
            lastFocusedElement.current = document.activeElement as HTMLElement;
            document.addEventListener("keydown", handleMethod);

            // Prevent layout shift by adding padding
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = "hidden";

            // Wait for animation frame to focus
            requestAnimationFrame(() => {
                modalRef.current?.focus();
            });
        } else {
            // Restore focus when modal closes
            if (lastFocusedElement.current) {
                lastFocusedElement.current.focus();
                lastFocusedElement.current = null;
            }
            document.removeEventListener("keydown", handleMethod);
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }

        return () => {
            document.removeEventListener("keydown", handleMethod);
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen, onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                            "relative w-[95%] sm:w-full max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto transform rounded-2xl bg-zinc-950 border border-zinc-800 p-4 sm:p-6 shadow-2xl scrollbar-hide",
                            className
                        )}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        tabIndex={-1}
                    >
                        <div className="sticky top-0 z-50 flex justify-end pb-2">
                            <button
                                onClick={onClose}
                                className="rounded-full bg-zinc-950/50 p-3 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-zinc-800 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
