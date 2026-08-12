import type { Metadata } from "next";
import Biografia from "@/components/Biografia";
import GridCards from "@/components/GridCards";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      {/* Dados estruturados (schema.org/Person) — ajuda o Google (e outros
          buscadores) a entender que esta é a página pessoal de um
          pesquisador, e a ligar o site aos seus perfis acadêmicos
          (Lattes, ORCID, Academia.edu). Pode contribuir para rich results
          e para o Knowledge Graph. */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pedro Vinícius de Castro",
            url: "https://pedrocas.vercel.app",
            jobTitle: "Historiador",
            description:
              "Historiador; explorando as conexões entre cultura material, migração e identidade no Japão Meiji e no Brasil.",
            email: "mailto:pedro.cas@usp.br",
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "Universidade de São Paulo (FFLCH/USP)",
              url: "https://fflch.usp.br/",
            },
            sameAs: [
              "https://lattes.cnpq.br/1970471858793746",
              "https://usp-br1.academia.edu/PedroCastro",
              "https://orcid.org/0009-0000-4556-3753",
            ],
          }),
        }}
      />
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