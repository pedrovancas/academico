import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produção acadêmica",
  description: "Publicações, apresentações de trabalho e produção técnica de Pedro Vinícius de Castro.",
  alternates: {
    canonical: "/publicacoes",
  },
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
    {children}
  </span>
);

const ProducaoAcademicaPage = () => {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-4">Produção acadêmica</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Publicações, apresentações de trabalho e produção técnica desenvolvidas ao longo da minha trajetória acadêmica.
          </p>
        </div>

        <div className="space-y-12">
          {/* Seção 1: Publicações (artigos e capítulos) */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Publicações
            </h2>
            <div className="space-y-6 pl-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
                  Aceitos / no prelo
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      CASTRO, Pedro Vinícius de. <strong>&ldquo;A vontade de resistir está em suas mãos&rdquo;: neomedievalismo japonês, agência material e capitalismo tardio em Final Fantasy Tactics.</strong> Neomedieval. Madri: Universidad Rey Juan Carlos. (previsão: dez. 2026)
                    </p>
                    <div className="mt-1"><Tag>Artigo</Tag><Tag>Internacional</Tag></div>
                  </li>
                  <li>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      CASTRO, Pedro Vinícius de. <strong>O mangá que virou espelho: como Vinland Saga ressignifica a Idade Média europeia para refletir sobre o Japão.</strong> In: CRISTINA, Maria; DALLAQUA, Matheus; SILVA, Pedro de Oliveira e; COGHETTO, Vitor Eduardo; LOPES, Ana Vitória (orgs.). Medievalismos em imagens e outras mídias. São Paulo: FFLCH/USP, 2026. (Coleção Primeiros olhares). (previsão: dez. 2026)
                    </p>
                    <div className="mt-1"><Tag>Capítulo de livro</Tag></div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
                  Sob avaliação
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      CASTRO, Pedro Vinícius de. <strong>Hatshepsut, a faraó fabricada: agência dos artefatos, tecnologias de gênero e orientalismo deslocado no mangá Aoi Horus no Hitomi (碧いホルスの瞳).</strong> Revista do Museu de Arqueologia e Etnologia. São Paulo: MAE-USP.
                    </p>
                    <div className="mt-1"><Tag>Artigo</Tag></div>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Seção 2: Apresentações de trabalho (inclui resumos publicados em anais) */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Apresentações de trabalho
            </h2>
            <ul className="space-y-3 pl-4">
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. A Matriz Meiji nos trópicos: cultura material e domesticidade nipo-brasileira a partir da Coleção Kojima (São Paulo, 1956–1992). <strong>VIII Encontro de Pós-Graduandos em Estudos Japoneses</strong>. São Paulo, 2026.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Entre o anacronismo identitário e a performatividade material: a recepção de Hatshepsut no mangá <em>Aoi Horus no Hitomi</em>. <strong>II Semana GEAFRAS de Estudos Afro-Asiáticos – Quimérico Oriente: a imagética de espaços Afro-Asiáticos</strong>. 2026.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Orientalismo no Oriente: Hatshepsut, Egito Antigo e gênero nos mangás. <strong>II Encontro Discente de Estudos Japoneses</strong>. Niterói, 2025.{" "}
                  <a href="https://drive.google.com/file/d/1qXZk6whJBb3ugTd-zmCFNfp_2h_oGy7F/view" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">Resumo publicado no Caderno de Resumos (p. 120)</a>.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Orientalismo no Oriente: o Egito Antigo na cultura pop japonesa. <strong>International Seminar Egypopcult: Reception of Antiquity in Contemporary Popular Culture</strong>. 2024.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Orientalismo no Oriente: gênero e Egito Antigo nos mangás. <strong>IX Encontro de Pesquisa na Graduação em História</strong>. 2024.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Orientalismo no Oriente: representações do Egito na cultura pop japonesa. <strong>III Colóquio Internacional do Antigo Egito e Oriente Próximo, USP</strong>. São Paulo, 2023.{" "}
                  <a href="https://laop.fflch.usp.br/resumos" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">Resumo publicado nos anais</a>.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Orientalismo no Oriente: representações do Egito Antigo na cultura pop japonesa. <strong>Laboratório de Antigo Oriente Próximo, USP</strong>. 2022.
                </p>
              </li>
            </ul>
          </article>

          {/* Seção 3: Produção técnica */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Produção técnica
            </h2>
            <ul className="space-y-3 pl-4 text-sm">
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  <a href="https://revistas.usp.br/africa/pt_BR/issue/view/13308" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">CASTRO, Pedro Vinícius de. Revista África, n. 45. Centro de Estudos Africanos da USP, 2024.</a> Editoração.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Revista África, n. 44. Centro de Estudos Africanos da USP, 2024. Editoração.
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  <a href="https://www.ees.ac.uk/resource/being-egyptian.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">CASTRO, Pedro Vinícius de. Edição audiovisual do projeto <em>Being Egyptian — The Egyptian House</em>. Egypt Exploration Society, 2023.</a>
                </p>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  <Link href="/projetos/historiae" className="hover:opacity-60 transition-opacity">CASTRO, Pedro Vinícius de. <em>Historiae</em>: podcast de divulgação em história pública. 2022.</Link>
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProducaoAcademicaPage;
