"use client";

import { clinicData } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";

import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";

export function Hero() {
    return (
        <section className="relative w-full min-h-[60dvh] lg:min-h-[100dvh] flex flex-col justify-center px-6 pt-24 pb-8 md:px-20 lg:px-40 overflow-hidden bg-primary flex-1">

            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, #ebd27520, #c0984710)' }}></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, #c49d4515, #ebd27508)' }}></div>

            {/* Subtle animated overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/floral-flourish.png')] pointer-events-none z-1"
            ></motion.div>

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <div className="flex flex-col items-start">
                    <FadeIn delay={0.2} direction="down" animateOnLoad>
                        <span className="text-gradient-gold uppercase tracking-[0.3em] text-[12px] md:text-sm font-medium mb-8 block whitespace-nowrap">
                            Cuidado que transforma vidas
                        </span>
                    </FadeIn>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-10 text-white leading-[1.1] tracking-tight flex flex-col items-start min-h-[160px] md:min-h-[220px]">
                        <SplitText text="É hora de" delay={30} textAlign="left" className="block" animateOnLoad />
                        <SplitText text="cuidar da sua" delay={50} textAlign="left" className="italic block mt-1" animateOnLoad />
                        <SplitText text="autoestima!" delay={70} textAlign="left" className="text-gradient-gold block" animateOnLoad />
                    </h1>

                    <SplitText
                        text="Cada cuidado criado para o seu corpo, a sua pele, a sua história."
                        className="text-text-light text-lg md:text-xl max-w-lg mb-6 md:mb-14 leading-relaxed"
                        delay={30}
                        textAlign="left"
                        animateOnLoad
                    />

                    <FadeIn delay={0.6} direction="up" animateOnLoad>
                        <div className="flex flex-row gap-2 md:gap-5 w-full md:w-auto">
                            <a
                                href={clinicData.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none btn-primary text-center py-3.5 md:py-4 px-2 md:px-10 text-[12px] md:text-sm"
                            >
                                Agendar Avaliação
                            </a>
                            <a
                                href="#services"
                                className="flex-1 md:flex-none btn-secondary text-center py-3.5 md:py-4 px-2 md:px-10 text-[12px] md:text-sm"
                            >
                                Conhecer Serviços
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column: Logo Visual */}
                <div className="hidden lg:flex justify-center items-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Aura effect around logo */}
                        <div className="absolute inset-0 rounded-full blur-[80px] animate-pulse" style={{ background: 'radial-gradient(circle, #ebd27520, #c0984710)' }}></div>

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <div
                                style={{
                                    width: 500,
                                    height: 250,
                                    background: 'linear-gradient(90deg, #c09847, #ebd275, #c49d45)',
                                    maskImage: 'url(/icons/logo.svg)',
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskImage: 'url(/icons/logo.svg)',
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    filter: 'drop-shadow(0 0 24px #ebd27540)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}

