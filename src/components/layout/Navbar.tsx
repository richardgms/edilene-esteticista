"use client";

import { useState, useEffect } from "react";
import { clinicData } from "@/lib/data";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 flex px-4 md:px-8 items-center justify-between ${scrolled ? "h-20 glass-nav text-text-main" : "h-20 md:h-28 bg-transparent text-white"
                }`}
        >
            <div className="flex items-center">
                <div
                    className="w-28 h-10 md:w-36 md:h-16"
                    style={{
                        background: 'linear-gradient(90deg, #c09847, #ebd275, #c49d45)',
                        maskImage: 'url(/icons/logo-simple.svg)',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'left',
                        WebkitMaskImage: 'url(/icons/logo-simple.svg)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'left'
                    }}
                />
            </div>
            <nav className="hidden md:flex gap-8 font-medium items-center">
                <a href="#about" className="hover:text-[#ebd275] transition-colors">Sobre</a>
                <a href="#services" className="hover:text-[#ebd275] transition-colors">Serviços</a>
                <a href="#results" className="hover:text-[#ebd275] transition-colors">Transformações</a>
                <a
                    href={clinicData.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 px-4"
                >
                    Agendar
                </a>
            </nav>
        </header>
    );
}
