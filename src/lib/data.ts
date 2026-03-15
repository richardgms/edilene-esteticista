export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconImage?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export interface Transformation {
  id: string;
  beforeImage?: string;
  afterImage?: string;
  label: string;
  description?: string;
  timeline?: { src: string; badge: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  procedure: string;
}

export interface Course {
  id: string;
  title: string;
  institution?: string;
  year?: string;
  image?: string;
}

export const clinicData = {
  name: "Edilene Barros",
  professionalName: "Edilene Barros",
  slogan: "Mais de 11 anos lapidando a sua melhor versão.",
  phone: "5584981462978",
  bookingUrl: "https://maapp.com.br/edilenebarros",
  whatsappMessage: "Olá Edilene! Vim pelo seu site e gostaria de agendar uma avaliação.",
  address: "Natal, RN",
  instagram: "https://instagram.com/edilene.esteticista",
  instagramHandle: "@edilene.esteticista",
  workingHours: "Atendimento com hora marcada",
  stats: {
    yearsExperience: 11,
    clientsServed: 500,
    proceduresDone: 2000,
    qualifications: 15,
  },
  credentials: [
    { text: "Sócia Fundadora — UNESTE (União Nacional dos Esteticistas)", icon: "Shield" },
    { text: "Graduação em Estética e Cosmética — UnP (2014)", icon: "GraduationCap" },
    { text: "Pós-Graduação em Estética Avançada — ESB Natal", icon: "Award" },
    { text: "Pós-Graduação em Tricologia e Terapias Capilares — Fac. Alcance (2026)", icon: "Award" },
    { text: "Certificação em Toxina Botulínica — CTEM (2023)", icon: "Award" },
  ],
  about: {
    title: "Quem é Edilene Barros",
    description:
      "Com <strong>mais de 11 anos de prática clínica</strong> e uma trajetória de formação que atravessa 17 anos, Edilene Barros é esteticista e <strong>sócia fundadora da UNESTE</strong> — União Nacional dos Esteticistas — onde atua ativamente em defesa dos direitos e do reconhecimento da categoria. Graduada pela UnP e com múltiplas pós-graduações, une <strong>rigor científico e sensibilidade humana</strong> para construir protocolos que entregam o que mais importa: <strong>resultados reais e duradouros</strong>.",
    metaDescription:
      "Esteticista graduada há mais de 11 anos, sócia fundadora da UNESTE e especialista em Estética Avançada, Tricologia e Terapias Integrativas. Referência em resultados reais e duradouros em Natal, RN.",
    quote: "Cada resultado aqui começa em você — e é concluído com anos de estudo, prática e a escolha de nunca parar de evoluir.",
  },
  services: [
    {
      category: "Corporal",
      items: [
        { id: "c1", name: "Drenagem Linfática Manual", description: "Corpo mais leve, sem inchaço — melhora circulação, elimina toxinas e define contornos.", icon: "HandMetal", iconImage: "/icons/v3-final-drenagem-linfatica.webp" },
        { id: "c2", name: "Massagem Modeladora", description: "Escultura manual para definir contornos e reduzir medidas localizadas.", icon: "Activity", iconImage: "/icons/v3-massagem-modeladora.webp" },
        { id: "c3", name: "Eletrolipólise", description: "Microcorrentes que agem direto nos adipócitos, reduzindo gordura localizada e celulite.", icon: "Zap", iconImage: "/icons/v3-eletrolipolise.webp" },
        { id: "c4", name: "Ultrassom Estético", description: "Ondas que remodelam o corpo por dentro, sem dor e sem corte.", icon: "Waves", iconImage: "/icons/v3-new-ultrassom-estetico.webp" },
        { id: "c6", name: "Massagem Relaxante", description: "Alívio profundo de tensões com toques suaves que devolvem bem-estar ao corpo e à mente.", icon: "Heart", iconImage: "/icons/massagem-relaxante.webp" },
        { id: "c7", name: "Enzimas para Gordura Localizada", description: "Lipo sem cortes: enzimas naturais que aceleram a eliminação de gordura localizada.", icon: "Syringe", iconImage: "/icons/enzimas-gordura-localizada-icon.webp" },
        { id: "c8", name: "Manta Térmica Corporal", description: "Calor terapêutico que reduz medidas, elimina retenção de líquido e potencializa ativos.", icon: "Thermometer", iconImage: "/icons/manta-termica-corporal-icon.webp" },
        { id: "c9", name: "Hidrolipoclasia Não Aspirativa", description: "Redução de gordura sem cortes nem aspiração — resultados graduais e seguros.", icon: "Droplets", iconImage: "/icons/hidrolipoclasia-nao-aspirativa-icon.webp" },
        { id: "c10", name: "Vacuoterapia", description: "Sucção a vácuo que remodela, reduz celulite, fibroses e estimula produção de colágeno.", icon: "Wind", iconImage: "/icons/vacuoterapia-icon.webp" },
        { id: "c11", name: "Ventosaterapia", description: "Ventosas que aliviam dores musculares, melhoram a circulação e liberam tensões.", icon: "Circle", iconImage: "/icons/ventosaterapia.webp" },
      ],
    },
    {
      category: "Facial",
      items: [
        { id: "f1", name: "Limpeza de Pele Profissional", description: "Limpeza completa com extração, LED e hidratação para uma pele clara e luminosa.", icon: "Sparkles", iconImage: "/icons/v3-icone-limpeza-pele.webp" },
        { id: "f2", name: "Peeling de Diamante", description: "Renovação celular que suaviza marcas, clareia manchas e ilumina a textura.", icon: "Diamond", iconImage: "/icons/v3-icone-peeling-diamante.webp" },
        { id: "f3", name: "Dermaplaning", description: "Pele com toque de seda, radiante e sem penugem — melhora a absorção de skincare.", icon: "Scissors", iconImage: "/icons/v3-icone-dermaplaning.webp" },
        { id: "f4", name: "Design de Sobrancelha", description: "Modelagem personalizada que valoriza o olhar, corrige falhas e destaca sua beleza natural.", icon: "Eye", iconImage: "/icons/v3-icone-designer-sobrancelhas.webp" },
        { id: "f5", name: "Botox / Toxina Botulínica", description: "Suaviza linhas de expressão e previne rugas com resultado natural de 3 a 6 meses.", icon: "Syringe", iconImage: "/icons/botox-rosto-icon.webp" },
      ],
    },
    {
      category: "Facial e Corporal",
      items: [
        { id: "c5", name: "Radiofrequência", description: "Pele firme e rejuvenescida no rosto e no corpo — sem cirurgia, com resultado real.", icon: "RefreshCw", iconImage: "/icons/v3-new-radiofrequencia.webp" },
        { id: "fc1", name: "Microagulhamento", description: "Estímulo de colágeno e elastina que rejuvenesce e trata cicatrizes de acne.", icon: "Target", iconImage: "/icons/microagulhamento.webp" },
      ],
    },
    {
      category: "Depilação",
      items: [
        { id: "d1", name: "Depilação Método Espanhol", description: "Cera quente aplicada à mão, ideal para áreas sensíveis — menos dor e 100% descartável.", icon: "Scissors", iconImage: "/icons/v3-icone-metodo-espanhol.webp" },
        { id: "d2", name: "Depilação Roll-On", description: "Método prático e higiênico para áreas grandes — pernas e braços lisos rapidamente.", icon: "Spline", iconImage: "/icons/v3-icone-rollon.webp" },
      ],
    },
    {
      category: "Capilar",
      items: [
        { id: "a2", name: "Intradermoterapia Capilar", description: "Vitaminas e minerais direto no couro cabeludo para fios fortes e crescimento saudável.", icon: "Activity", iconImage: "/icons/v3-icone-mesoterapia-capilar.webp" },
        { id: "fk1", name: "LED Terapia", description: "Luz terapêutica que acelera cicatrização, combate inflamação e estimula os fios.", icon: "Sun", iconImage: "/icons/ledterapia.webp" },
      ],
    },
    {
      category: "Procedimentos Estéticos",
      items: [
        { id: "a1", name: "Remoção de Acrocórdons", description: "Pontinhos indesejados removidos com rapidez, segurança e sem cicatriz.", icon: "Zap", iconImage: "/icons/v3-icone-remocao-acrocordons.webp" },
        { id: "pe1", name: "PEIM", description: "Secagem de vasinhos aparentes com técnica precisa e minimamente invasiva.", icon: "Crosshair", iconImage: "/icons/secagem-vasinhos-icon.webp" },
        { id: "pe2", name: "Tratamento para Estrias", description: "Estrias atenuadas com protocolos que estimulam a regeneração natural da pele.", icon: "Paintbrush", iconImage: "/icons/tratamento-estrias-icon.webp" },
      ],
    },
  ] as ServiceCategory[],
  transformations: [
    {
      id: "t1",
      label: "Drenagem Linfática",
      description: "Evolução incrível após 5 semanas de drenagem linfática. O protocolo eliminou o inchaço e a retenção de líquidos, revelando curvas muito mais definidas e trazendo mais leveza ao corpo.",
      beforeImage: "/images/transformacoes/nano-antes.webp",
      afterImage: "/images/transformacoes/nano-depois.webp",
    },
    {
      id: "t2",
      label: "Limpeza Facial Profunda",
      description: "Protocolo completo de renovação com extração de cravos e impurezas. Utilizamos alta frequência e Led terapia para limpar os poros e controlar a oleosidade, deixando a pele muito mais limpa, saudável e iluminada.",
      beforeImage: "/images/transformacoes/limpeza-antes.webp",
      afterImage: "/images/transformacoes/limpeza-depois.webp",
    },
    {
      id: "t3",
      label: "Drenagem Linfática",
      description: "Resultado surpreendente com apenas 3 semanas de drenagem linfática. Conseguimos reduzir medidas e desinflamar a região abdominal em poucas sessões, garantindo um contorno muito mais bonito e saudável.",
      beforeImage: "/images/transformacoes/mesoterapia-antes.webp",
      afterImage: "/images/transformacoes/mesoterapia-depois.webp",
    }
  ] as Transformation[],
  testimonials: [
    {
      id: 1,
      name: "Luzia Silvino",
      rating: 5,
      procedure: "Estética e Bem-estar",
      text: "A melhor profissional, comprometidas com o horário marcado e a satisfação do cliente!! Super recomendo, é a melhor!",
    },
    {
      id: 2,
      name: "Rafaela Nogueira",
      rating: 5,
      procedure: "Cuidados com a Pele",
      text: "Experiência maravilhosa, equipamentos super limpos e bem cuidados, local organizado, confortável e relaxante.",
    },
    {
      id: 3,
      name: "Luziabranca Luzineide",
      rating: 5,
      procedure: "Estética Avançada",
      text: "Atendimento maravilhoso, profissional preparada, espaço confortável e adequado. Valores ótimos para um serviço de qualidade.",
    },
  ] as Testimonial[],
  courses: [
    { id: "cert-1", title: "Pós-Graduação em Terapias Integrativas e Complementares", institution: "Faculdade Alcance", year: "2026", image: "/images/certificados/pos-terapias-integrativas.png" },
    { id: "cert-2", title: "Pós-Graduação em Tricologia e Terapias Capilares", institution: "Faculdade Alcance", year: "2026", image: "/images/certificados/pos-tricologia-capilar.png" },
    { id: "cert-3", title: "Curso de Toxina Botulínica", institution: "CTEM", year: "2023", image: "/images/certificados/toxina-botulinica.png" },
    { id: "cert-4", title: "Pós-Graduação em Saúde Estética", institution: "Faculdade FETAC", year: "2023", image: "/images/certificados/pos-saude-estetica.png" },
    { id: "cert-5", title: "Curso de PEIM", institution: "CTEM", year: "2022", image: "/images/certificados/curso-peim.png" },
    { id: "cert-6", title: "Socorrista APH Profissional", institution: "BRASTEC", year: "2022", image: "/images/certificados/socorrista-aph.png" },
    { id: "cert-7", title: "Curso de Ventosaterapia", institution: "Flor de Lotus", year: "2019", image: "/images/certificados/ventosaterapia.png" },
    { id: "cert-8", title: "Curso de Jato de Plasma", institution: "", year: "2019", image: "/images/certificados/jato-de-plasma.png" },
    { id: "cert-9", title: "Auxiliar em Saúde Bucal (ASB)", institution: "Min. da Defesa — Aeronáutica", year: "2018", image: "/images/certificados/auxiliar-saude-bucal.png" },
    { id: "cert-10", title: "Curso de Microagulhamento Drug Delivery System", institution: "", year: "2017", image: "/images/certificados/microagulhamento.png" },
    { id: "cert-11", title: "Graduação em Estética e Cosmética", institution: "Universidade Potiguar - UnP", year: "2014", image: "/images/certificados/graduacao-estetica-unp.png" },
    { id: "cert-12", title: "Design de Sobrancelhas", institution: "Instituto Embelleze", year: "2009", image: "/images/certificados/design-sobrancelhas.png" },
    { id: "cert-13", title: "Curso de Florais de Bach", institution: "Portal Era da Energia", year: "2024", image: "/images/certificados/florais-de-bach.png" },
  ] as Course[],
};
