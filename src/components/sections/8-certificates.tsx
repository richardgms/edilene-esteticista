"use client";

import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { Award } from "lucide-react";
import Image from "next/image";
import { useMarquee } from "@/hooks/useMarquee";

function CertCard({ cert }: { cert: typeof clinicData.courses[number] }) {
    return (
        <div className="group flex-shrink-0 w-44 md:w-72 bg-secondary/10 rounded-2xl border border-secondary transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-secondary/30 overflow-hidden mx-2 md:mx-3">
            {/* Image */}
            <div className="w-full aspect-[1.3/1] bg-secondary/20 flex items-center justify-center border-b border-dashed border-accent-dark/20 group-hover:border-accent-dark/40 transition-colors overflow-hidden relative">
                {cert.image ? (
                    <Image
                        src={cert.image}
                        alt={`Certificado: ${cert.title}`}
                        fill
                        sizes="(max-width: 768px) 176px, 288px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-1 opacity-40">
                        <Award size={24} className="text-accent-dark" />
                        <span className="text-[10px] font-medium uppercase tracking-widest text-text-light text-center px-2">
                            Aguardando<br />Emissão
                        </span>
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-3 md:p-4">
                <h3 className="text-[11px] md:text-sm font-serif font-bold text-text-main leading-snug line-clamp-2 mb-1">
                    {cert.title}
                </h3>
                {cert.institution && (
                    <p className="text-[10px] md:text-[11px] text-accent-dark font-medium uppercase tracking-wide truncate">
                        {cert.institution}
                    </p>
                )}
                {cert.year && (
                    <p className="text-[9px] md:text-[10px] text-text-light italic mt-0.5">
                        {cert.year}
                    </p>
                )}
            </div>
        </div>
    );
}

function MarqueeRow({
    certs,
    direction,
    speedPx = 0.8,
}: {
    certs: typeof clinicData.courses;
    direction: "left" | "right";
    speedPx?: number;
}) {
    const doubled = [...certs, ...certs];
    const marquee = useMarquee({ direction, speedPx });

    return (
        <div
            className="w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "pan-y" }}
            onPointerDown={marquee.onPointerDown}
            onPointerMove={marquee.onPointerMove}
            onPointerUp={marquee.onPointerUp}
            onPointerCancel={marquee.onPointerCancel}
        >
            <div ref={marquee.trackRef} className="flex will-change-transform">
                {doubled.map((cert, i) => (
                    <CertCard key={`${cert.id}-${i}`} cert={cert} />
                ))}
            </div>
        </div>
    );
}

export function Certificates() {
    const all = clinicData.courses;
    const half = Math.ceil(all.length / 2);
    const row1 = all.slice(0, half);
    const row2 = all.slice(half);

    return (
        <section id="certificates" className="w-full py-12 md:py-24 bg-accent-light/7 flex flex-col items-center overflow-hidden">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-center text-heading px-4">
                    Certificados e Formações
                </h2>
                <p className="text-text-light text-center mb-6 md:mb-12 max-w-2xl text-balance mx-auto px-4">
                    A excelência em cada atendimento é fruto de uma formação sólida e constante atualização acadêmica.
                </p>
            </FadeIn>

            <div className="relative w-full">
                {/* Fade menor no mobile para não cortar os cards */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-6 md:w-40 z-10 bg-gradient-to-r from-primary to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-6 md:w-40 z-10 bg-gradient-to-l from-primary to-transparent" />

                <div className="flex flex-col gap-6">
                    <MarqueeRow certs={row1} direction="left" speedPx={0.7} />
                    <MarqueeRow certs={row2} direction="right" speedPx={0.9} />
                </div>
            </div>
        </section>
    );
}
