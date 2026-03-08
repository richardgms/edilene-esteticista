import { clinicData } from "@/lib/data";
import { Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-primary border-t border-[#D4AF37]/20 text-white py-12 md:py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                {/* Brand & Identity */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    <div className="relative w-48 h-16 md:w-56 md:h-20">
                        {/* 
                          Applying next/image for better optimization.
                          Assuming the user has the /icons/logo.svg available, we use the mask technique but structured safely.
                        */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(90deg, #c09847, #ebd275, #c49d45)',
                                maskImage: 'url(/icons/logo.svg)',
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'left',
                                WebkitMaskImage: 'url(/icons/logo.svg)',
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'left'
                            }}
                        />
                    </div>
                    <p className="text-sm md:text-base text-gray-300 italic leading-relaxed max-w-sm">
                        "{clinicData.slogan}"
                    </p>
                    <div className="mt-2">
                        <span className="font-semibold block mb-1 text-[#ebd275] text-sm uppercase tracking-wider">
                            Responsável Técnica
                        </span>
                        <span className="text-gray-200 text-lg">{clinicData.professionalName}</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-3 flex flex-col gap-4">
                    <h4 className="font-semibold text-lg text-[#ebd275] mb-2">Navegação</h4>
                    <nav className="flex flex-col gap-3">
                        <Link href="#inicio" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 w-fit">
                            Início <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </Link>
                        <Link href="#sobre" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 w-fit">
                            Sobre Edilene <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </Link>
                        <Link href="#servicos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 w-fit">
                            Tratamentos <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </Link>
                        <Link href="#depoimentos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 w-fit">
                            Resultados <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </Link>
                    </nav>
                </div>

                {/* Contacts & Location */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <h4 className="font-semibold text-lg text-[#ebd275] mb-2">Atendimento</h4>
                    <div className="flex flex-col gap-5">
                        <a
                            href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group"
                        >
                            <div className="bg-[#D4AF37]/10 p-2 rounded-full group-hover:bg-[#D4AF37]/20 transition-colors">
                                <WhatsAppIcon className="w-5 h-5 text-[#ebd275]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">WhatsApp</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">(84) 9 8146-2978</span>
                            </div>
                        </a>

                        <div className="flex items-start gap-3">
                            <div className="bg-[#D4AF37]/10 p-2 rounded-full">
                                <MapPin className="w-5 h-5 text-[#ebd275]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">Localização</span>
                                <span className="text-gray-200">
                                    Rua Gilberto Roberto Gomes 20b<br />
                                    Bairro Cajupiranga<br />
                                    Parnamirim, RN
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-[#D4AF37]/10 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-[#ebd275]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">Horário</span>
                                <span className="text-gray-200">{clinicData.workingHours}</span>
                            </div>
                        </div>

                        <a
                            href={clinicData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group"
                        >
                            <div className="bg-[#D4AF37]/10 p-2 rounded-full group-hover:bg-[#D4AF37]/20 transition-colors">
                                <Instagram className="w-5 h-5 text-[#ebd275]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">Instagram</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{clinicData.instagramHandle}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
                <p>© {new Date().getFullYear()} {clinicData.name}. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                    <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
