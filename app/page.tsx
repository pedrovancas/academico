import Biografia from "@/components/Biografia";
import GridCards from "@/components/GridCards";

export default function Home() {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <Biografia />
      <GridCards />

      {/* Seção da Citação Atualizada */}
      <blockquote className="mt-12 p-4 border-l-4 border-zinc-300 dark:border-zinc-700">
        <p className="text-lg italic text-zinc-600 dark:text-zinc-400">
          “Um acontecimento vivido é finito, ou pelo menos encerrado na esfera do vivido, ao passo que o acontecimento lembrado é sem limites, porque é apenas uma chave para tudo que veio antes e depois.”
        </p>
        <footer className="mt-2 text-sm text-right text-zinc-500 dark:text-zinc-500">
          — Walter Benjamin
        </footer>
      </blockquote>
    </section>
  );
};