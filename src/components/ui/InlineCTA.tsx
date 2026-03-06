import { clinicData } from "@/lib/data";
import { FadeIn } from "./FadeIn";

interface InlineCTAProps {
    headline: string;
    subtext?: string;
    buttonText: string;
    variant?: "beige" | "rose";
}

export function InlineCTA({ headline, subtext, buttonText, variant = "beige" }: InlineCTAProps) {
    const whatsappUrl = `https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`;

    const bg = variant === "rose"
        ? "bg-accent-light/15 border-y border-accent-light/35"
        : "bg-secondary/60 border-y border-secondary";

    return (
        <div className={`w-full py-7 md:py-9 px-4 ${bg}`}>
            <FadeIn>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 text-center md:text-left">
                    <div>
                        <p className="text-base md:text-xl font-serif font-bold text-heading leading-snug">
                            {headline}
                        </p>
                        {subtext && (
                            <p className="text-xs md:text-sm text-text-light mt-1">{subtext}</p>
                        )}
                    </div>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm md:text-base whitespace-nowrap flex-shrink-0"
                    >
                        {buttonText}
                    </a>
                </div>
            </FadeIn>
        </div>
    );
}
