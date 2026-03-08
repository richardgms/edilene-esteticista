"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    animateOnLoad?: boolean;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", animateOnLoad = false }: FadeInProps) {
    const directionOffset = {
        up: 40,
        down: -40,
        left: 40,
        right: -40,
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
                x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
            }}
            whileInView={!animateOnLoad ? {
                opacity: 1,
                y: 0,
                x: 0,
            } : undefined}
            animate={animateOnLoad ? {
                opacity: 1,
                y: 0,
                x: 0,
            } : undefined}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
