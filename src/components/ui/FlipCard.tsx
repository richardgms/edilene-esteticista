"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface FlipCardProps {
    title: string;
    description: string;
    iconName: string;
    iconImage?: string;
    isLarge?: boolean;
}

export function FlipCard({ title, description, iconName, iconImage, isLarge }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const Icon = Icons[iconName as keyof typeof Icons] as React.ElementType;

    return (
        <div
            className="h-52 w-full perspective-1000 group cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)} /* Mobile tap validation as per @mobile-design */
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500 rounded-2xl border border-secondary/50"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-secondary/50 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    {iconImage ? (
                        <div
                            className="relative mb-4 rounded-lg overflow-hidden shrink-0"
                            style={{
                                width: isLarge ? '84px' : '64px',
                                height: isLarge ? '84px' : '64px'
                            }}
                        >
                            <Image
                                src={iconImage}
                                alt={title}
                                fill
                                className="object-contain transition-all"
                                sizes={isLarge ? "84px" : "64px"}
                            />
                        </div>
                    ) : (
                        Icon && <Icon className="w-10 h-10 text-accent-dark mb-4" />
                    )}
                    <h3 className="font-serif font-semibold text-xl text-text-main">{title}</h3>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-accent-light text-text-main rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180">
                    <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm font-medium leading-relaxed">{description}</p>
                </div>
            </motion.div>
        </div>
    );
}
