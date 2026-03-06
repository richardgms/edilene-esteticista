import { clinicData } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
    return (
        <section className="w-full py-8 md:py-16 px-4 bg-white border-b border-secondary">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <Counter end={clinicData.stats.yearsExperience} label="Anos de Experiência" prefix="+" />
                <Counter end={clinicData.stats.clientsServed} label="Pacientes Atendidas" prefix="+" />
                <Counter end={clinicData.stats.proceduresDone} label="Procedimentos Realizados" prefix="+" />
                <Counter end={clinicData.stats.qualifications} label="Especializações" prefix="+" />
            </div>
        </section>
    );
}
