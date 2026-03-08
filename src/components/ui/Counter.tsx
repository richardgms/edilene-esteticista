"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
    end: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export function Counter({ end, label, prefix = "", suffix = "" }: CounterProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, end]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center p-2 md:p-4">
            <span className="text-2xl md:text-5xl font-serif font-bold mb-0.5 md:mb-2 text-gradient-gold">
                {prefix}{count}{suffix}
            </span>
            <span className="text-[10px] md:text-sm font-medium text-text-main uppercase tracking-widest leading-tight">
                {label}
            </span>
        </div>
    );
}
