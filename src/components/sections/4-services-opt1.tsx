"use client";

import { useState, useMemo } from "react";
import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { FlipCard } from "@/components/ui/FlipCard";
import { cn } from "@/lib/utils";

// Adapter: Mapeamento de "Dores/Desejos" para IDs de serviços existentes (Read-Only clinicData)
const desireCategories = [
    {
        id: "reduzir-medidas",
        label: "Reduzir Medidas",
        serviceIds: ["c2", "c3", "c4"] // Massagem Modeladora, Eletrolipólise, Ultrassom
    },
    {
        id: "rejuvenescer",
        label: "Rejuvenescer o Rosto",
        serviceIds: ["c5", "f2", "f3"] // Radiofrequência, Peeling, Dermaplaning
    },
    {
        id: "relaxar",
        label: "Relaxar & Desinchar",
        serviceIds: ["c1"] // Drenagem Linfática
    },
    {
        id: "limpeza",
        label: "Limpeza Profunda",
        serviceIds: ["f1"] // Limpeza de Pele
    },
    {
        id: "pelos",
        label: "Pele Lisinha (Pelos)",
        serviceIds: ["d1", "d2"] // Espanhol, Roll-on
    },
    {
        id: "cabelos-detalhes",
        label: "Cabelos & Detalhes",
        serviceIds: ["a2", "a1", "f4"] // Mesoterapia, Acrocórdons, Designer
    }
];

export function ServicesOption1() {
    const [activeTab, setActiveTab] = useState(desireCategories[0].id);

    // Mapeamento flat de todos os serviços para busca rápida (O(1))
    const allServicesMap = useMemo(() => {
        const map = new Map();
        clinicData.services.forEach(cat => {
            cat.items.forEach(item => {
                map.set(item.id, item);
            });
        });
        return map;
    }, []);

    const activeCategory = desireCategories.find(c => c.id === activeTab);

    // Obter os objetos de serviço reais baseados nos IDs da categoria ativa
    const activeServices = activeCategory?.serviceIds
        .map(id => allServicesMap.get(id))
        .filter(Boolean) || []; // Filtra possíveis falsy se um ID de serviço for removido no futuro

    return (
        <section id="services-opt1" className="w-full py-10 md:py-16 px-4 bg-primary flex flex-col items-center">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-8 text-center text-heading">
                    Nossos Protocolos
                </h2>
                <p className="text-text-light text-center mb-6 md:mb-10 max-w-2xl mx-auto text-lg font-medium">
                    O que você deseja cuidar hoje?
                </p>
            </FadeIn>

            {/* Tabs Acessíveis */}
            <FadeIn delay={0.2} className="w-full max-w-4xl mb-8 md:mb-12">
                <div
                    className="flex flex-wrap justify-center gap-2 md:gap-4 scrollbar-hide"
                    role="tablist"
                    aria-label="Opções de tratamento por desejo"
                >
                    {desireCategories.map((cat) => {
                        const isSelected = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`panel-${cat.id}`}
                                id={`tab-${cat.id}`}
                                onClick={() => setActiveTab(cat.id)}
                                className={cn(
                                    "px-6 py-3 rounded-full font-medium transition-all duration-300 min-w-[140px] shadow-sm text-sm sm:text-base border",
                                    isSelected
                                        ? "bg-secondary text-white border-accent-dark/50 scale-105 shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent_70%)]"
                                        : "bg-white/5 text-text-light border-white/5 hover:bg-white/10 hover:text-text-main hover:scale-[1.02]"
                                )}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>
            </FadeIn>

            {/* Cards Grid ou Fallback */}
            <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="flex flex-wrap justify-center gap-6 max-w-6xl w-full"
            >
                {activeServices.length > 0 ? (
                    activeServices.map((srv, i) => (
                        <FadeIn key={srv.id} delay={0.1 * i} direction="up" className="w-full sm:w-72">
                            <FlipCard
                                title={srv.name}
                                description={srv.description}
                                iconName={srv.icon}
                                iconImage={srv.iconImage}
                                isLarge={!!srv.iconImage}
                            />
                        </FadeIn>
                    ))
                ) : (
                    <FadeIn delay={0.2} className="w-full flex justify-center mt-8">
                        <div className="bg-secondary/30 p-8 rounded-2xl text-center max-w-md border border-secondary/50">
                            <p className="text-text-main font-medium text-lg mb-2">Ops!</p>
                            <p className="text-text-light">
                                Não encontramos protocolos configurados para este objetivo no momento. Fale com a Edilene para uma avaliação personalizada.
                            </p>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
