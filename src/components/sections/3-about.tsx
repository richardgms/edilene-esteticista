import Image from "next/image";
import { clinicData } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="w-full py-12 md:py-24 px-4 bg-accent-light/7 flex flex-col items-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

                <FadeIn direction="right" className="w-full">
                    <div className="w-full aspect-[4/5] bg-secondary/50 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-accent-light/20 flex flex-col items-center justify-center text-accent-dark transition-transform duration-500 group-hover:scale-105">
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
                        Quem é <span className="text-accent-dark">Edilene Barros</span>
                    </h2>
                    <p
                        className="text-lg text-text-light mb-8 leading-relaxed [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: clinicData.about.description }}
                    />

                    <div className="flex flex-col gap-4 mb-8">
                        {clinicData.credentials.map((cred, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent-dark" />
                                <span className="text-text-main font-medium">{cred.text}</span>
                            </div>
                        ))}
                    </div>

                    <blockquote className="border-l-4 border-accent-dark pl-6 italic text-xl md:text-2xl font-serif text-text-main bg-white/50 py-4 pr-4 rounded-r-xl">
                        "{clinicData.about.quote}"
                    </blockquote>
                </FadeIn>

            </div>
        </section>
    );
}
