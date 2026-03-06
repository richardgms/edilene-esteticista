import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
    return (
        <section className="w-full py-8 md:py-24 px-4 bg-accent-dark text-white flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/floral-flourish.png')] opacity-10 pointer-events-none"></div>

            <FadeIn direction="up" className="flex flex-col items-center z-10 text-center max-w-3xl">
                <h2 className="text-2xl md:text-5xl font-serif font-bold mb-3 md:mb-6">Pronta para sua transformação?</h2>
                <p className="text-white/80 text-sm md:text-xl mb-4 md:mb-10 max-w-2xl text-balance">
                    Agende uma avaliação personalizada com a Edilene e descubra o protocolo ideal para destacar sua beleza autêntica.
                </p>
                <a
                    href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-dark text-primary px-8 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-accent-light transition-all duration-300 hover:scale-105 flex items-center gap-2 md:gap-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Falar com a Clínica
                </a>
            </FadeIn>
        </section>
    );
}
