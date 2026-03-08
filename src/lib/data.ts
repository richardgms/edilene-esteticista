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
        { id: "c1", name: "Drenagem Linfática", description: "Aquela leveza de sair do tratamento sentindo o corpo mais leve e sem inchaço.", icon: "HandMetal", iconImage: "/icons/v3-final-drenagem-linfatica.webp" },
        { id: "c2", name: "Massagem Modeladora", description: "Escultura manual para definir contornos e reduzir medidas localizadas.", icon: "Activity", iconImage: "/icons/v3-massagem-modeladora.webp" },
        { id: "c3", name: "Eletrolipólise", description: "Tecnologia que age onde a dieta não chega, reduzindo medidas de forma segura.", icon: "Zap", iconImage: "/icons/v3-eletrolipolise.webp" },
        { id: "c4", name: "Ultrassom Estético", description: "Ondas que remodelam o corpo por dentro, sem dor e sem corte.", icon: "Waves", iconImage: "/icons/v3-new-ultrassom-estetico.webp" },
        { id: "c5", name: "Radiofrequência", description: "A pele firme e rejuvenescida que você sente quando passa a mão — sem cirurgia.", icon: "RefreshCw", iconImage: "/icons/v3-new-radiofrequencia.webp" },
      ],
    },
    {
      category: "Facial",
      items: [
        { id: "f1", name: "Limpeza de Pele", description: "Desintoxicação profunda para uma pele radiante e livre de impurezas.", icon: "Sparkles", iconImage: "/icons/v3-icone-limpeza-pele.webp" },
        { id: "f2", name: "Peeling de Diamante", description: "Renovação celular que suaviza marcas e ilumina a textura facial.", icon: "Diamond", iconImage: "/icons/v3-icone-peeling-diamante.webp" },
        { id: "f3", name: "Dermaplaning", description: "Pele com aquele toque de seda, iluminada e sem penugem — resultado imediato.", icon: "Scissors", iconImage: "/icons/v3-icone-dermaplaning.webp" },
        { id: "f4", name: "Designer de Sobrancelhas", description: "Sobrancelhas que emolduram seu olhar e harmonizam toda a expressão do rosto.", icon: "Eye", iconImage: "/icons/v3-icone-designer-sobrancelhas.webp" },
      ],
    },
    {
      category: "Depilação",
      items: [
        { id: "d1", name: "Método Espanhol", description: "A depilação que dói menos, dura mais e deixa a pele lisinha por mais tempo.", icon: "Scissors", iconImage: "/icons/v3-icone-metodo-espanhol.webp" },
        { id: "d2", name: "Roll-On", description: "Pernas e braços lisos de forma rápida, sem complicação.", icon: "Spline", iconImage: "/icons/v3-icone-rollon.webp" },
      ],
    },
    {
      category: "Avançados & Capilar",
      items: [
        { id: "a1", name: "Remoção de Acrocórdons", description: "Aqueles pontinhos indesejados removidos com rapidez, segurança e sem cicatriz.", icon: "Zap", iconImage: "/icons/v3-icone-remocao-acrocordons.webp" },
        { id: "a2", name: "Mesoterapia Capilar", description: "Nutrição profunda do couro cabeludo para fios fortes e densos.", icon: "Activity", iconImage: "/icons/v3-icone-mesoterapia-capilar.webp" },
      ],
    },
  ] as ServiceCategory[],
  transformations: [
    {
      id: "t1",
      label: "Drenagem Linfática + Modeladora",
      description: "A leveza que transformou a rotina. Após 6 meses de um protocolo focado em desinflamação, a redução do inchaço revelou contornos que estavam escondidos. Mais do que uma mudança visual, foi a retomada do bem-estar e da confiança em cada movimento.",
      timeline: [
        { src: "/images/transformacoes/dia1.webp", badge: "1 DIA" },
        { src: "/images/transformacoes/mes3.webp", badge: "3 MESES" },
        { src: "/images/transformacoes/mes6.webp", badge: "6 MESES" },
      ]
    },
    {
      id: "t2",
      label: "Limpeza Facial Profunda",
      description: "O respiro que a pele precisava. Uma limpeza profunda que foi além da extração: renovou a luminosidade e devolveu o toque uniforme. O controle da oleosidade trouxe a segurança de uma pele saudável, pronta para brilhar sem filtros.",
      beforeImage: "/images/transformacoes/1/antes.webp",
      afterImage: "/images/transformacoes/1/depois.webp",
    },
    {
      id: "t3",
      label: "Mesoterapia Capilar",
      description: "Densidade e força da raiz às pontas. Este protocolo não apenas interrompeu a queda, mas despertou novos fios onde antes havia falhas. Ver o cabelo ganhar volume e densidade trouxe de volta a satisfação de se olhar no espelho com orgulho.",
      beforeImage: "/images/transformacoes/3/mesoterapia-capilar-antes.webp",
      afterImage: "/images/transformacoes/3/mesoterapia-capilar-depois.webp",
    }
  ] as Transformation[],
  testimonials: [
    {
      id: 1,
      name: "Clara Medeiros",
      rating: 5,
      procedure: "Drenagem Linfática",
      text: "A Edilene cuida de cada detalhe com uma precisão incrível. Meus resultados com a drenagem foram visíveis logo na primeira sessão: o alívio do inchaço e a sensação de leveza superaram todas as minhas expectativas.",
    },
    {
      id: 2,
      name: "Ana (Amiga e Cliente)",
      rating: 5,
      procedure: "Limpeza de Pele",
      text: "Uma profissional de excelência que transmite muita segurança. O tratamento facial renovou a textura da minha pele, e o ambiente acolhedor faz com que cada visita seja um momento de puro cuidado e renovação.",
    },
    {
      id: 3,
      name: "Camila Rodrigues",
      rating: 5,
      procedure: "Ultrassom Estético",
      text: "Eu tinha muita dificuldade em reduzir medidas em áreas específicas, mas o protocolo corporal da Edilene entregou resultados que eu nunca imaginei alcançar. Sinto-me renovada e com a autoestima lá no alto!",
    },
  ] as Testimonial[],
  courses: [
    { id: "cert-1", title: "Pós-Graduação em Terapias Integrativas e Complementares", institution: "Faculdade Alcance", year: "2026", image: "/images/certificados/CERTIFICADOTERAPIASINTEGRATIVASECOMPLEMENTARES.png" },
    { id: "cert-2", title: "Pós-Graduação em Tricologia e Terapias Capilares", institution: "Faculdade Alcance", year: "2026", image: "/images/certificados/CERTIFICADOTRICOLOGIAETERAPIASCAPILARES.png" },
    { id: "cert-3", title: "Curso de Toxina Botulínica", institution: "CTEM", year: "2023", image: "/images/certificados/img20260221_page_07.png" },
    { id: "cert-4", title: "Pós-Graduação em Saúde Estética", institution: "Faculdade FETAC", year: "2023", image: "/images/certificados/docEDL.png" },
    { id: "cert-5", title: "Curso de PEIM", institution: "CTEM", year: "2022", image: "/images/certificados/img20260221_page_01.png" },
    { id: "cert-6", title: "Socorrista APH Profissional", institution: "BRASTEC", year: "2022", image: "/images/certificados/img20260221_page_03.png" },
    { id: "cert-7", title: "Curso de Ventosaterapia", institution: "Flor de Lotus", year: "2019", image: "/images/certificados/img20260221_page_02.png" },
    { id: "cert-8", title: "Curso de Jato de Plasma", institution: "", year: "2019", image: "/images/certificados/img20260221_page_08.png" },
    { id: "cert-9", title: "Auxiliar em Saúde Bucal (ASB)", institution: "Min. da Defesa — Aeronáutica", year: "2018", image: "/images/certificados/img20260221_page_05.png" },
    { id: "cert-10", title: "Curso de Microagulhamento Drug Delivery System", institution: "", year: "2017", image: "/images/certificados/img20260221_page_09.png" },
    { id: "cert-11", title: "Graduação em Estética e Cosmética", institution: "Universidade Potiguar - UnP", year: "2014", image: "/images/certificados/unp.png" },
    { id: "cert-12", title: "Design de Sobrancelhas", institution: "Instituto Embelleze", year: "2009", image: "/images/certificados/img20260221_page_10.png" },
  ] as Course[],
};
