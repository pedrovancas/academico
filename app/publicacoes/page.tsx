import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produção acadêmica",
  description: "Publicações, apresentações de trabalho e produção técnica de Pedro de Castro.",
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
          {/* Seção 1: Publicações */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Publicações
            </h2>
            <ul className="space-y-4 pl-4">
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Capítulo de livro. {/* substituir pelo capítulo de livro */}
                </p>
              </li>
            </ul>
          </article>

          {/* Seção 2: Apresentações de trabalho */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Apresentações de trabalho
            </h2>
            <ul className="space-y-5 pl-4">
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. &ldquo;Orientalismo no Oriente: o Egito Antigo na cultura pop japonesa&rdquo;. <em>International Seminar Egypopcult: Reception of Antiquity in Contemporary Popular Culture</em>. 2024.
                </p>
                <div className="mt-1"><Tag>Apresentação de trabalho/Seminário</Tag></div>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. &ldquo;Orientalismo no Oriente: gênero e Egito Antigo nos mangás&rdquo;. <em>IX Encontro de Pesquisa na Graduação em História</em>. 2024.
                </p>
                <div className="mt-1"><Tag>Apresentação de trabalho/Seminário</Tag></div>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. &ldquo;Orientalismo no Oriente: representações do Egito na cultura pop japonesa&rdquo;. <em>III Colóquio Internacional do Antigo Egito e Oriente Próximo, USP</em>. 2023.
                </p>
                <div className="mt-1"><Tag>Apresentação de trabalho</Tag></div>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. &ldquo;Orientalismo no Oriente: representações do Egito Antigo na cultura pop japonesa&rdquo;. 2022.
                </p>
                <div className="mt-1"><Tag>Apresentação de trabalho/Seminário</Tag></div>
              </li>
            </ul>
          </article>

          {/* Seção 3: Produção técnica */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Produção técnica
            </h2>
            <ul className="space-y-5 pl-4">
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. <em>Revista África</em>. CEA-USP, 2024.
                </p>
                <div className="mt-1"><Tag>Editoração/Periódico</Tag></div>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. Edição audiovisual do projeto <em>Being Egyptian — The Egyptian House</em>. Egypt Exploration Society, 2023.
                </p>
                <div className="mt-1"><Tag>Editoração audiovisual</Tag></div>
              </li>
              <li>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CASTRO, Pedro Vinícius de. <em>Historiae</em>: podcast de divulgação em história pública. 2022.
                </p>
                <div className="mt-1"><Tag>Podcast</Tag></div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProducaoAcademicaPage;
