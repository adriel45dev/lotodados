import Hero from "./components/Hero";
import { MODALIDADES_LOTERIA } from "../config";
import CardModalidade from "./components/CardModalidade";

export default function Estatisticas() {
  const MOD = {
    title: "Estatísticas",
    name: "estatisticas",
    primaryColor: "#0065B7",
    secondaryColor: "#F99500",
  };
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <Hero modalidade={MOD} />
      <section className="flex flex-col md:grid md:grid-cols-3 md:justify-center md:items-center gap-2 min-w-full min-h-screen px-2 md:px-8 py-4 my-8">
        {MODALIDADES_LOTERIA.map((modalidade, key) => (
          <CardModalidade modalidade={modalidade} key={key} />
        ))}
      </section>
    </main>
  );
}
