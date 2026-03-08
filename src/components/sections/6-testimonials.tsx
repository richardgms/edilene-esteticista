import { FadeIn } from "@/components/ui/FadeIn";
import { clinicData } from "@/lib/data";
import { Star } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 bg-primary flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-6xl px-4 flex flex-col items-center text-center mb-4 md:mb-16">
                <FadeIn className="max-w-2xl">
                    <h2 className="text-2xl md:text-5xl font-serif font-bold mb-3 md:mb-6 text-heading flex flex-wrap justify-center gap-x-2 md:gap-x-3">
                        <SplitText text="O que dizem sobre a" delay={30} textAlign="center" className="inline-block" tag="span" />
                        <SplitText text="Edilene" delay={50} textAlign="center" className="text-gradient-gold inline-block" tag="span" />
                    </h2>
                    <p className="text-text-light text-sm md:text-lg">
                        Histórias reais de mulheres que resgataram a autoestima e a confiança através do cuidado da Edilene.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="up" className="w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-stretch bg-primary">
                    {clinicData.testimonials.slice(0, 3).map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-secondary rounded-2xl p-3 md:p-8 border border-white/5 hover:border-accent-dark/50 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-dark/10"
                        >
                            <div className="flex justify-center mb-2 md:mb-4 opacity-15">
                                <svg viewBox="0 0 24 24" fill="#ebd275" className="w-8 h-8">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </div>
                            <p className="text-sm md:text-base text-text-main leading-relaxed flex-grow">
                                "{testimonial.text}"
                            </p>
                            <div className="w-16 h-px my-4 mx-auto" style={{ backgroundColor: '#ebd27533' }} />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-secondary/80 flex items-center justify-center font-serif font-bold text-base md:text-xl shrink-0 leading-none" style={{ color: '#ebd275', boxShadow: '0 0 0 1px #ebd27566', lineHeight: 1 }}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-serif font-bold text-sm md:text-md text-text-main leading-tight">{testimonial.name}</h4>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold mt-1" style={{ color: '#ebd275' }}>
                                            Paciente Verificada
                                        </span>
                                    </div>
                                </div>
                                <div className="flex" style={{ color: '#ebd275' }}>
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
