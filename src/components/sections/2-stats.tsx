import { clinicData } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
    return (
        <section className="w-full py-2 md:py-16 px-4 bg-section-dark border-b border-[#1a1710]">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
                <Counter end={clinicData.stats.yearsExperience} label="Anos de Experiência" prefix="+" />
                <Counter end={clinicData.stats.clientsServed} label="Pacientes Atendidas" prefix="+" />
                <Counter end={clinicData.stats.proceduresDone} label="Procedimentos Realizados" prefix="+" />
                <Counter end={clinicData.stats.qualifications} label="Formações" prefix="+" />
            </div>
        </section>
    );
}
