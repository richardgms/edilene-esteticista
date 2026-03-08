import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { clinicData } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jazmin = localFont({
  src: "./fonts/jazmin-regular.otf",
  variable: "--font-jazmin",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${clinicData.name} | Estética Avançada em Parnamirim RN`,
  description: "Transforme sua autoestima com tratamentos de Estética Avançada e Tricologia em Parnamirim RN. Agende sua avaliação gratuita com Edilene Barros hoje! ✓",
  keywords: ["estética avançada", "tricologia", "limpeza de pele", "drenagem linfática", "Parnamirim RN", "Cajupiranga", "Edilene Barros", "esteticista"],
  authors: [{ name: clinicData.name }],
  creator: clinicData.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://edileneestetica.com.br",
    title: `${clinicData.name} | Estética Avançada em Parnamirim RN`,
    description: "Transforme sua autoestima com tratamentos de Estética Avançada e Tricologia em Parnamirim RN. Agende sua avaliação gratuita com Edilene Barros hoje!",
    siteName: clinicData.name,
    images: [
      {
        url: "https://edileneestetica.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: clinicData.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": clinicData.name,
    "image": "https://edileneestetica.com.br/og-image.jpg",
    "@id": "https://edileneestetica.com.br",
    "url": "https://edileneestetica.com.br",
    "telephone": `+${clinicData.phone}`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Gilberto Roberto Gomes 20b, Bairro Cajupiranga",
      "addressLocality": "Parnamirim",
      "addressRegion": "RN",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="pt-BR" className={`scroll-smooth ${playfair.variable} ${jazmin.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#D4AF37]/30 selection:text-[#F8F8F8]">
        <Navbar />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}
