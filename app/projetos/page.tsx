import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de pesquisa, grupos e outras iniciativas de Pedro de Castro.",
};

// Um pequeno componente para as 'tags' de status e período, para reutilização
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
    {children}
  </span>
);

const ProjetosPage = () => {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-4">Projetos</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Uma visão geral dos meus projetos de pesquisa, afiliações a grupos e outras iniciativas acadêmicas e de divulgação científica.
          </p>
        </div>

        <div className="space-y-12">
          {/* Seção 1: Pesquisa Atual */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Projeto de pesquisa atual
            </h2>
            <div className="pl-4">
              <h3 className="text-lg font-semibold">Pesquisa e catalogação da coleção cerâmica da familia Kojima</h3>
              <div className="my-2">
                <Tag>2025 – Atual</Tag>
                <Tag>Situação: Em andamento</Tag>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Análise e catalogação da produção cerâmica da família Kojima, imigrantes japoneses do período Pós-Guerra estabelecidos na Grande São Paulo. A pesquisa debruça-se sobre a coleção de artefatos da família sob a guarda do Museu Paulista, servindo como base para o projeto de mestrado que analisa as adaptações, permanências e rupturas no espaço doméstico dos imigrantes japoneses.
              </p>
            </div>
          </article>
          
          {/* Seção 2: Grupos de Pesquisa */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Grupos e laboratórios de pesquisa
            </h2>
            <div className="space-y-6 pl-4">
              <div>
                <h3 className="text-lg font-semibold">GEMA (Grupo de Pesquisa Espaço Doméstico, Corpo e Materialidades)</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Pesquisador vinculado ao grupo da USP/Museu Paulista.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">NEJAP (Núcleo de Estudos Japoneses)</h3>
                 <div className="my-2"><Tag>2024 – Atual</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Grupo de pesquisa e extensão da UFSC dedicado aos estudos japoneses e asiáticos, com foco em história, literatura, artes e cultura do Japão.
                </p>
              </div>
               <div>
                <h3 className="text-lg font-semibold">Laboratório do Antigo Oriente Próximo (LAOP)</h3>
                <div className="my-2"><Tag>2022 – 2025</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Núcleo interdisciplinar vinculado ao Departamento de História da USP, com o objetivo de promover atividades acadêmicas que fortaleçam a pesquisa sobre o Antigo Oriente Próximo.
                </p>
              </div>
            </div>
          </article>

          {/* Seção 3: Projetos Anteriores e Divulgação */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Projetos anteriores e divulgação científica
            </h2>
            <div className="space-y-6 pl-4">
              <div>
                <h3 className="text-lg font-semibold">Orientalismo no Oriente: representações do Egito Antigo na cultura pop japonesa</h3>
                <div className="my-2"><Tag>2022 – 2024</Tag><Tag>Situação: Concluído</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Iniciação Científica que visou mapear e analisar as representações do Egito Antigo nos mangás japoneses, baseada no interesse crescente da disciplina por estudos de recepção fora da Europa.
                </p>
              </div>
               <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/projetos/historiae" className="hover:opacity-60 transition-opacity">
                    Historiae: podcast de divulgação em história pública
                  </Link>
                </h3>
                <div className="my-2"><Tag>2022</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Podcast de divulgação histórica com enfoque em História Pública. A produção técnica inclui planejamento, roteirização, edição e divulgação de temas históricos com base em bibliografia especializada para o público geral.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Being Egyptian</h3>
                <div className="my-2"><Tag>2022 – 2023</Tag><Tag>Situação: Concluído</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Organização e edição de material para divulgação científica em História do Antigo Egito. O projeto foi organizado pela Egypt Exploration Society (EES).
                </p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ProjetosPage;