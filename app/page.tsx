import type { Metadata } from "next";
import Image from "next/image";
import Biografia from "@/components/Biografia";
import GridCards from "@/components/GridCards";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <section className="pt-4 md:mt-2 pb-16">
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
            alternateName: "ペドロ・ヴィニシウス・デ・カストロ",
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
      {/* Figura no topo, como uma ilustração de abertura: em telas grandes ocupa a
          largura toda, com filetes finos em cima e embaixo e legenda abaixo. */}
      <figure className="mb-8">
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm lg:left-1/2 lg:aspect-[7/2] lg:w-screen lg:max-h-[26rem] lg:-translate-x-1/2 lg:rounded-none lg:border-x-0 lg:border-zinc-300 lg:shadow-none xl:aspect-[4/1] 2xl:aspect-[9/2] lg:dark:border-zinc-700">
          <Image
            src="/images/amp-card-benjamin.jpg"
            alt="Gravura de uma mulher lendo ao lado de um globo, entre pirâmides, camelos no deserto e uma baía com barcos e montanhas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center dark:brightness-90"
          />
        </div>
        <figcaption className="mt-2 text-xs italic text-zinc-500 dark:text-zinc-400">
          Gravura; imagem ampliada digitalmente nas laterais.
        </figcaption>
      </figure>
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