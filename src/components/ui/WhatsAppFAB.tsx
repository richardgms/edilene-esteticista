"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { clinicData } from "@/lib/data";

export function WhatsAppFAB() {
    const whatsappUrl = `https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 md:p-4 group hover:scale-110 transition-transform duration-300 flex items-center justify-center rounded-full"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* Pulse effect (Back layer) */}
            <span className="absolute inset-0 rounded-full animate-ping -z-20" style={{ animationDuration: '3s', background: 'linear-gradient(90deg, #c0984730, #ebd27530, #c49d4530)' }}></span>

            {/* Background & Border (Middle layer) */}
            <span
                className="absolute inset-0 rounded-full -z-10 shadow-[0_0_20px_#ebd27520]"
                style={{
                    backgroundImage: 'linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(90deg, #c09847, #ebd275, #c49d45)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '1.5px solid transparent',
                }}
            ></span>

            {/* Icon (Front) — gradient fill via SVG linearGradient */}
            <svg className="relative z-10 w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="wha-gold" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#c09847" />
                        <stop offset="50%" stopColor="#ebd275" />
                        <stop offset="100%" stopColor="#c49d45" />
                    </linearGradient>
                </defs>
                <path fill="url(#wha-gold)" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.632 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>

            {/* Tooltip on hover */}
            <span
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary/95 px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block z-20 text-gradient-gold"
                style={{
                    backgroundImage: 'linear-gradient(#0a0a0af2, #0a0a0af2), linear-gradient(90deg, #c09847, #ebd275, #c49d45)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '1px solid transparent',
                }}
            >
                Agende sua avaliação
            </span>
        </a>
    );
}
