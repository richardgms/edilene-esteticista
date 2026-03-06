import { clinicData } from "@/lib/data";
import { Instagram, MapPin, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-[#3d141a] text-white py-6 md:py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-1.5 md:gap-4">
                    <h3 className="font-serif text-xl md:text-3xl font-bold text-secondary">{clinicData.name}</h3>
                    {/* Slogan: compacto no mobile */}
                    <p className="text-xs md:text-base text-gray-400 md:text-gray-300 italic leading-snug">
                        "{clinicData.slogan}"
                    </p>
                    {/* RT: numa linha só no mobile | bloco no desktop */}
                    <p className="text-[11px] text-gray-400 md:hidden">
                        <span className="text-accent-light font-medium">Resp. Técnica</span> · {clinicData.professionalName}
                    </p>
                    <div className="hidden md:block mt-4">
                        <span className="font-bold block text-accent-light mb-2">Responsável Técnica</span>
                        <span className="text-gray-300 block">{clinicData.professionalName}</span>
                    </div>
                </div>

                {/* Contacts */}
                <div className="flex flex-col gap-2 md:gap-4">
                    <h4 className="hidden md:block font-bold text-lg text-secondary">Atendimento</h4>
                    {/* Mobile: itens em linha com flex-wrap | Desktop: coluna */}
                    <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-4">
                        <div className="flex items-center gap-2 text-gray-300">
                            <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 text-accent-light flex-shrink-0" />
                            <a href={`https://wa.me/${clinicData.phone}`} className="hover:text-white transition-colors text-xs md:text-base">
                                (84) 9 8146-2978
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent-light flex-shrink-0" />
                            <span className="text-xs md:text-base">{clinicData.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent-light flex-shrink-0" />
                            <span className="text-xs md:text-base">{clinicData.workingHours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Instagram className="w-4 h-4 md:w-5 md:h-5 text-accent-light flex-shrink-0" />
                            <a href={clinicData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs md:text-base">
                                {clinicData.instagramHandle}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-6 md:mt-16 pt-4 md:pt-8 border-t border-gray-700 text-center text-gray-400 text-xs md:text-sm">
                <p>© {new Date().getFullYear()} {clinicData.name}. Todos os direitos reservados.</p>
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
