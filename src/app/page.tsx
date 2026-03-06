import { Hero } from "@/components/sections/1-hero";
import { Stats } from "@/components/sections/2-stats";
import { About } from "@/components/sections/3-about";
import { Services } from "@/components/sections/4-services";
import { Transformations } from "@/components/sections/5-transformations";
import { Testimonials } from "@/components/sections/6-testimonials";
import { Certificates } from "@/components/sections/8-certificates";
import { FinalCTA } from "@/components/sections/7-cta";
import { InlineCTA } from "@/components/ui/InlineCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden">
      <Hero />
      <Stats />
      <About />
      <InlineCTA
        headline="Cada pele é única — descubra o protocolo certo para você."
        subtext="Avaliação personalizada, sem compromisso."
        buttonText="Agendar Avaliação Gratuita"
        variant="beige"
      />
      <Services />
      <Transformations />
      <FinalCTA />
      <Testimonials />
      <InlineCTA
        headline="Pronta para escrever a sua história de transformação?"
        subtext="Junte-se às centenas de pacientes que já conquistaram resultados reais."
        buttonText="Quero Minha Transformação"
        variant="rose"
      />
      <Certificates />
    </main>
  );
}
