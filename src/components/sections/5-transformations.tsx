import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { AutoImageSlider } from "@/components/ui/AutoImageSlider";
import SplitText from "@/components/ui/SplitText";

export function Transformations() {
    return (
        <section id="results" className="w-full py-12 md:py-24 px-4 bg-section-warm flex flex-col items-center">
            <FadeIn>
                <SplitText
                    text="Transformações Reais"
                    className="text-3xl md:text-5xl font-serif font-bold mb-6 text-center text-heading block"
                    delay={40}
                    tag="h2"
                />
                <p className="text-text-light text-center mb-6 md:mb-12 max-w-2xl text-balance mx-auto">
                    Cada resultado é real, documentado e conquistado com dedicação. Veja a evolução de quem passou pelas mãos da Edilene.
                </p>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clinicData.transformations.slice(0, 3).map((transform, index) => {
                        const sliderImages = transform.timeline
                            ? transform.timeline
                            : (transform.beforeImage && transform.afterImage ? [transform.beforeImage, transform.afterImage] : []);

                        return (
                            <div
                                key={transform.id}
                                className="bg-secondary rounded-2xl overflow-hidden flex flex-col transition-all duration-500 border border-white/5 hover:border-accent-dark/50 h-full cursor-pointer group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-dark/10"
                            >
                                <div className="px-6 py-4 border-b border-secondary flex justify-center bg-secondary z-10 shrink-0">
                                    <span className="font-serif font-bold text-gradient-gold text-lg text-center leading-tight">
                                        {transform.label}
                                    </span>
                                </div>
                                <div className="flex-grow flex flex-col">
                                    <AutoImageSlider
                                        images={sliderImages}
                                        priority={index === 0}
                                        aspectRatio="aspect-square"
                                    />
                                    {transform.description && (
                                        <div className="p-4 md:p-6 bg-secondary flex-grow flex flex-col justify-center relative">
                                            <div className="flex justify-center mb-2 opacity-20">
                                                <svg viewBox="0 0 24 24" fill="#ebd275" className="w-6 h-6">
                                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm md:text-base font-serif text-text-main leading-relaxed text-center max-w-[90%] mx-auto">
                                                "{transform.description}"
                                            </p>
                                            <div className="mt-4 flex justify-center opacity-50">
                                                <div className="w-12 h-px opacity-50" style={{ background: 'linear-gradient(90deg, #c09847, #ebd275, #c49d45)' }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FadeIn>
        </section>
    );
}
