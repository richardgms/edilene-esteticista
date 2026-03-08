import { Hero } from "@/components/sections/1-hero";
import { Stats } from "@/components/sections/2-stats";
import { About } from "@/components/sections/3-about";
import { ServicesOption1 as Services } from "@/components/sections/4-services-opt1";
import { Transformations } from "@/components/sections/5-transformations";
import { Testimonials } from "@/components/sections/6-testimonials";
import { Certificates } from "@/components/sections/8-certificates";
import { FinalCTA } from "@/components/sections/7-cta";
import { InlineCTA } from "@/components/ui/InlineCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden">
      <div className="w-full min-h-[100dvh] flex flex-col">
        <Hero />
        <Stats />
      </div>
      <About />
      <Services />
      <InlineCTA
        headline="Cada pele é única — descubra o cuidado certo para a sua."
        subtext="Avaliação personalizada, sem compromisso."
        buttonText="Agendar Avaliação Gratuita"
        variant="beige"
      />
      <Transformations />
      <FinalCTA />
      <Testimonials />
      <Certificates />
    </main>
  );
}
