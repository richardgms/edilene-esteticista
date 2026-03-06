"use client";

import { useState } from "react";
import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { FlipCard } from "@/components/ui/FlipCard";

export function Services() {
    const [activeTab, setActiveTab] = useState(clinicData.services[0].category);

    const activeCategory = clinicData.services.find(c => c.category === activeTab);

    return (
        <section id="services" className="w-full py-10 md:py-16 px-4 bg-white flex flex-col items-center">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-8 text-center text-heading">
                    Nossos Protocolos
                </h2>
                <p className="text-text-light text-center mb-4 md:mb-8 max-w-2xl mx-auto">
                    Descubra nossa gama completa de mais de 20 serviços estéticos projetados para o seu bem-estar e beleza.
                </p>
            </FadeIn>

            {/* Tabs */}
            <FadeIn delay={0.2} className="w-full max-w-4xl mb-4 md:mb-8">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 scrollbar-hide">
                    {clinicData.services.map((cat) => (
                        <button
                            key={cat.category}
                            onClick={() => setActiveTab(cat.category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 min-w-[120px] ${activeTab === cat.category
                                ? "bg-accent-dark text-white scale-105"
                                : "bg-secondary/50 text-text-main hover:bg-secondary"
                                }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>
            </FadeIn>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
                {activeCategory?.items.map((srv, i) => (
                    <FadeIn key={srv.id} delay={0.1 * i} direction="up" className="w-full sm:w-72">
                        <FlipCard
                            title={srv.name}
                            description={srv.description}
                            iconName={srv.icon}
                            iconImage={srv.iconImage}
                            isLarge={!!srv.iconImage}
                        />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
