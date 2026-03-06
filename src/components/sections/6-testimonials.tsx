import { FadeIn } from "@/components/ui/FadeIn";
import { clinicData } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 bg-primary flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-6xl px-4 flex flex-col items-center text-center mb-4 md:mb-16">
                <FadeIn className="max-w-2xl">
                    <h2 className="text-2xl md:text-5xl font-serif font-bold mb-3 md:mb-6 text-heading">
                        O que dizem sobre nós
                    </h2>
                    <p className="text-text-light text-sm md:text-lg">
                        Histórias reais de mulheres que resgataram a autoestima e a confiança através do nosso cuidado especializado.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="up" className="w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-stretch bg-primary">
                    {clinicData.testimonials.slice(0, 3).map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-secondary rounded-2xl p-3 md:p-8 border border-secondary/50 flex flex-col transition-all duration-300"
                        >
                            <div className="flex justify-center mb-2 md:mb-4 opacity-15">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent-dark">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </div>
                            <p className="text-sm md:text-base text-text-main leading-relaxed flex-grow">
                                "{testimonial.text}"
                            </p>
                            <div className="w-16 h-px bg-accent-dark/15 my-4 mx-auto" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-secondary/80 flex items-center justify-center text-accent-dark font-serif font-bold text-base md:text-xl shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-serif font-bold text-sm md:text-md text-text-main leading-tight">{testimonial.name}</h4>
                                        <span className="text-[10px] text-accent-dark uppercase tracking-wider font-semibold mt-1">
                                            Paciente Verificada
                                        </span>
                                    </div>
                                </div>
                                <div className="flex text-accent-dark">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
