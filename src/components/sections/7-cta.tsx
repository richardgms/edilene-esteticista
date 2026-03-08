import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
    return (
        <section id="cta" className="w-full py-16 md:py-20 px-4 bg-primary text-white flex flex-col items-center relative overflow-hidden">
            {/* Gold gradient dividers */}
            <div className="absolute top-0 left-0 w-full h-px z-20" style={{ background: 'linear-gradient(90deg, transparent, #c09847, #ebd275, #c49d45, transparent)', opacity: 0.5 }} />
            <div className="absolute bottom-0 left-0 w-full h-px z-20" style={{ background: 'linear-gradient(90deg, transparent, #c09847, #ebd275, #c49d45, transparent)', opacity: 0.5 }} />

            {/* Efeito de Luz Radial (Indireta) */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-accent-dark/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[35%] h-[50%] bg-accent-dark/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Sutil textura floral sobre o fundo escuro */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/floral-flourish.png')] opacity-[0.03] pointer-events-none"></div>

            <FadeIn direction="up" className="flex flex-col items-center z-10 text-center max-w-4xl">
                <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4 md:mb-8 text-white tracking-tight">
                    Pronta para sua transformação?
                </h2>
                <p className="text-text-light text-base md:text-2xl mb-8 md:mb-14 max-w-2xl text-balance leading-relaxed">
                    Agende uma avaliação personalizada e descubra o cuidado ideal para revelar a sua beleza de dentro para fora.
                </p>
                <a
                    href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-10 md:px-14 py-4 md:py-6 text-base md:text-xl flex items-center gap-3 shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-7 md:h-7">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Falar com a Edilene
                </a>
            </FadeIn>
        </section>
    );
}
