"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export type SliderSlide = string | { src: string; badge: string };

interface AutoImageSliderProps {
    images: SliderSlide[];
    priority?: boolean;
    unoptimized?: boolean;
    aspectRatio?: "aspect-[4/5]" | "aspect-[4/3]" | "aspect-square";
}

export function AutoImageSlider({ images, priority = false, unoptimized = false, aspectRatio = "aspect-[4/5]" }: AutoImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getSlideData = useCallback((slide: SliderSlide, index: number) => {
        if (typeof slide === 'string') {
            return {
                src: slide,
                badge: index === 0 ? "ANTES" : "DEPOIS"
            };
        }
        return slide;
    }, []);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className={`relative w-full ${aspectRatio} overflow-hidden group bg-secondary/20`}>
            <div
                className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`
                }}
            >
                {images.map((img, i) => {
                    const slideData = getSlideData(img, i);
                    return (
                        <div key={i} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
                            <Image
                                src={slideData.src}
                                alt={`Transformação ${slideData.badge}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={priority && i === 0}
                                quality={90}
                            />
                            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded text-xs font-bold tracking-wider bg-primary/90 backdrop-blur-sm border border-white/10 shadow-sm" style={{ color: '#ebd275' }}>
                                {slideData.badge.toUpperCase()}
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* Pagination bullets */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6" : "w-1.5"}`}
                            style={{ backgroundColor: i === currentIndex ? '#ebd275' : '#ebd27580' }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
