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
  title: `${clinicData.name} | Estética Avançada`,
  description: clinicData.about.metaDescription,
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Natal",
      "addressRegion": "RN",
      "addressCountry": "BR"
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
