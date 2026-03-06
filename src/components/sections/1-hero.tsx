import Image from "next/image";
import { clinicData } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import heroBg from "../../../public/images/hero.webp";

export function Hero() {
    return (
        <section className="relative w-full h-[100dvh] flex flex-col px-10 py-12 md:px-40 md:py-16 overflow-hidden">
            <Image
                src={heroBg}
                alt="Edilene Barros"
                fill
                priority
                fetchPriority="high"
                unoptimized={true}
                sizes="100vw"
                className="object-cover object-[80%_top] md:object-[center_top] z-0"
            />

            {/* Overlay Gradient for better readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 z-5" />

            {/* Top Branding */}
            <div className="relative z-10 w-full mb-auto">
                <FadeIn delay={0.1} direction="down">
                    <span className="text-white text-2xl md:text-3xl font-serif tracking-tight opacity-90">
                        Edilene Barros
                    </span>
                </FadeIn>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full flex flex-col items-start mt-auto mb-20 md:mb-32">
                <div className="max-w-4xl text-left">
                    <FadeIn delay={0.2} direction="right">
                        <h1 className="text-6xl md:text-8xl lg:text-[6.2rem] font-serif mb-10 text-white leading-[1.05] tracking-tight drop-shadow-md">
                            É hora de<br />
                            cuidar da sua<br />
                            autoestima!
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <div className="flex flex-row gap-5 flex-wrap">
                            <a
                                href={getWhatsAppUrl(clinicData.phone, clinicData.whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent-dark text-white rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 hover:brightness-110 active:scale-95 text-center shadow-lg"
                            >
                                Agendar Avaliação
                            </a>
                            <a
                                href="#services"
                                className="bg-secondary/90 backdrop-blur-sm border border-accent-dark/30 text-accent-light rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 hover:bg-secondary active:scale-95 text-center shadow-md"
                            >
                                Conhecer Serviços
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>


    );
}
