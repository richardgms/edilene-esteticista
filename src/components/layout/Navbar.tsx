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
            className={`fixed top-0 w-full z-50 transition-all duration-300 flex px-4 md:px-8 items-center justify-between ${scrolled ? "h-16 glass-nav text-text-main" : "h-24 bg-transparent text-white"
                }`}
        >
            <div className="font-serif font-bold text-2xl">
                {clinicData.name}
            </div>
            <nav className="hidden md:flex gap-8 font-medium items-center">
                <a href="#about" className="hover:text-accent-dark transition-colors">Sobre</a>
                <a href="#services" className="hover:text-accent-dark transition-colors">Serviços</a>
                <a href="#results" className="hover:text-accent-dark transition-colors">Transformações</a>
                <a
                    href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
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
