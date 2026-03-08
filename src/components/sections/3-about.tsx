import Image from "next/image";
import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, Shield } from "lucide-react";

export function About() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-0 lg:h-screen lg:justify-center px-4 bg-section-warm flex flex-col items-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

                <FadeIn direction="right" className="w-full">
                    <div className="w-full aspect-[4/5] bg-secondary/50 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-accent-light/20 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/images/sobre-nos.webp"
                                alt="Edilene Barros"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="left" className="flex flex-col">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-heading">
                        Quem é <span className="text-gradient-gold">Edilene Barros</span>
                    </h2>
                    <p
                        className="text-lg text-text-light mb-8 leading-relaxed [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: clinicData.about.description }}
                    />

                    <div className="flex flex-col gap-4 mb-8">
                        {clinicData.credentials.map((cred, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                {cred.icon === "Shield"
                                    ? <Shield className="w-5 h-5 flex-shrink-0" style={{ color: '#ebd275' }} />
                                    : <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#ebd275' }} />
                                }
                                <span className="text-text-main font-medium">{cred.text}</span>
                            </div>
                        ))}
                    </div>

                    <blockquote className="border-l-4 pl-6 italic text-xl md:text-2xl font-serif text-text-main bg-secondary/50 py-4 pr-4 rounded-r-xl" style={{ borderColor: '#ebd275' }}>
                        "{clinicData.about.quote}"
                    </blockquote>
                </FadeIn>

            </div>
        </section>
    );
}
