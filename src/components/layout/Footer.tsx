import { clinicData } from "@/lib/data";
import { Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-primary border-t border-[#D4AF37]/20 text-white pt-16 pb-8 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-dark/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Larger) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="relative w-48 h-16 md:w-56 md:h-20 -ml-2">
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
                        <p className="text-gray-300 leading-relaxed max-w-sm">
                            Realçando sua beleza natural com tratamentos estéticos avançados e personalizados para o seu bem-estar e autoestima.
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href={clinicData.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#ebd275] transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#ebd275] transition-all"
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 flex flex-col gap-5 lg:ml-8">
                        <h4 className="font-serif text-xl text-white">Links Rápidos</h4>
                        <nav className="flex flex-col gap-6 mt-1">
                            <Link href="#inicio" className="text-gray-400 hover:text-[#ebd275] transition-colors flex items-center gap-2 w-fit group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#ebd275] transition-colors"></span>
                                Início
                            </Link>
                            <Link href="#sobre" className="text-gray-400 hover:text-[#ebd275] transition-colors flex items-center gap-2 w-fit group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#ebd275] transition-colors"></span>
                                Sobre Edilene
                            </Link>
                            <Link href="#servicos" className="text-gray-400 hover:text-[#ebd275] transition-colors flex items-center gap-2 w-fit group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#ebd275] transition-colors"></span>
                                Tratamentos
                            </Link>
                            <Link href="#depoimentos" className="text-gray-400 hover:text-[#ebd275] transition-colors flex items-center gap-2 w-fit group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#ebd275] transition-colors"></span>
                                Resultados
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <h4 className="font-serif text-xl text-white">Contato</h4>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#ebd275] shrink-0 mt-0.5" />
                                <span className="text-gray-400 leading-relaxed text-sm">
                                    <strong className="text-gray-200 block mb-1">Endereço</strong>
                                    Rua Gilberto Roberto Gomes 20b, <br />
                                    Bairro Cajupiranga - Parnamirim, RN
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <WhatsAppIcon className="w-5 h-5 text-[#ebd275] shrink-0 mt-0.5" />
                                <span className="text-gray-400 leading-relaxed text-sm">
                                    <strong className="text-gray-200 block mb-1">WhatsApp</strong>
                                    (84) 9 8146-2978
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-[#ebd275] shrink-0 mt-0.5" />
                                <span className="text-gray-400 leading-relaxed text-sm">
                                    <strong className="text-gray-200 block mb-1">Horário</strong>
                                    {clinicData.workingHours}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Info Card / Certifications */}
                    <div className="lg:col-span-3 flex flex-col">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 overflow-hidden relative">
                                <Image
                                    src="/icons/favico.png"
                                    alt="Ícone Responsável Técnica"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h5 className="font-serif text-lg text-white mb-2">Responsável Técnica</h5>
                            <p className="text-[#ebd275] font-medium text-lg mb-1">{clinicData.professionalName}</p>
                            <p className="text-gray-400 text-sm">Esteticista Avançada</p>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <a
                                    href={`https://wa.me/${clinicData.phone}?text=${encodeURIComponent(clinicData.whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white flex items-center gap-2 group w-fit"
                                >
                                    Agendar avaliação
                                    <ArrowUpRight className="w-4 h-4 text-[#ebd275] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} {clinicData.name}. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.632 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

