"use client";

import { useEffect, useState } from "react";
import "./ProfileCube.css";

export default function ProfileCube() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);
        }
    }, []);

    return (
        <div className="cube-scene">
            <div className={`cube ${prefersReducedMotion ? "no-animation" : ""}`}>
                <div className="cube-face front" />
                <div className="cube-face back" />
                <div className="cube-face right" />
                <div className="cube-face left" />
                <div className="cube-face top" />
                <div className="cube-face bottom" />
            </div>
        </div>
    );
}
