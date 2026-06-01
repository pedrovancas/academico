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
            <div className="space-y-8 pl-4">
              {/* Projeto de mestrado — destaque principal */}
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold">Matriz Meiji: o complexo doméstico-industrial da família Kojima e a produção cerâmica nikkei em São Paulo</h3>
                <div className="my-2">
                  <Tag>2026 – Atual</Tag>
                  <Tag>Situação: Em andamento</Tag>
                  <Tag>Mestrado stricto sensu em História Social</Tag>
                </div>
                <dl className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 mb-3">
                  <div><dt className="inline font-medium">Instituição: </dt><dd className="inline">Programa de História Social da Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo (FFLCH/USP)</dd></div>
                  <div><dt className="inline font-medium">Orientação: </dt><dd className="inline">Profa. Dra. Vânia Carneiro de Carvalho</dd></div>
                  <div><dt className="inline font-medium">Vínculo: </dt><dd className="inline"><a href="https://museudoipiranga.org.br/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Museu Paulista (Museu do Ipiranga) da Universidade de São Paulo</a> / <a href="https://sites.usp.br/gema/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GEMA</a></dd></div>
                </dl>
                <p className="text-zinc-700 dark:text-zinc-300">
                  A investigação toma como objeto o complexo doméstico-industrial da família Kojima, ceramistas imigrantes japoneses estabelecidos em Mauá, SP, para analisar as interseções entre espaço doméstico, produção cerâmica e processos de enraizamento da comunidade nikkei no estado de São Paulo. O conceito operatório central, &ldquo;Matriz Meiji&rdquo;, designa o repertório de saberes técnicos, disposições corporais e arranjos espaciais transmitidos no interior do núcleo familiar e mobilizados na organização da olaria. A pesquisa articula metodologias de análise de cultura material, história oral e estudo do espaço doméstico, tendo como fontes a coleção cerâmica da família sob a guarda do Museu Paulista da USP, depoimentos de membros da família e documentação relativa à trajetória migratória e produtiva do grupo.
                </p>
              </div>

              {/* Pesquisa de catalogação — base empírica, concluída */}
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold">Pesquisa e catalogação da coleção cerâmica da família Kojima</h3>
                <div className="my-2">
                  <Tag>2025 – 2026</Tag>
                  <Tag>Situação: Concluído</Tag>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Análise e catalogação da produção cerâmica da família Kojima, imigrantes japoneses do período Pós-Guerra estabelecidos na Grande São Paulo. A pesquisa debruçou-se sobre a coleção de artefatos da família sob a guarda do Museu Paulista da Universidade de São Paulo, compreendendo o levantamento, a classificação tipológica e o registro de metadados de 55 peças cerâmicas em planilha institucional padronizada. O trabalho de catalogação foi acompanhado de pesquisa documental e de história oral junto a membros da família, com destaque para entrevista realizada com Yasuichi Kojima (março de 2025), que permitiu a reconstituição de etapas do processo produtivo e da trajetória de instalação da olaria familiar em Mauá, SP. Os resultados constituem a base empírica para o projeto de mestrado em desenvolvimento no PPGHS-USP.
                </p>
              </div>

              {/* IC — antecedente empírico, vinculada à família de pesquisas sobre o Oriente */}
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold">Orientalismo no Oriente: representações do Egito Antigo na cultura pop japonesa</h3>
                <div className="my-2"><Tag>2022 – 2024</Tag><Tag>Situação: Concluído</Tag></div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Iniciação Científica que visou mapear e analisar as representações do Egito Antigo nos mangás japoneses, baseada no interesse crescente da disciplina por estudos de recepção fora da Europa.
                </p>
              </div>
            </div>
          </article>

          {/* Seção 2: Grupos de Pesquisa */}
          <article>
            <h2 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-3">
              Grupos e laboratórios de pesquisa
            </h2>
            <div className="space-y-6 pl-4">
              <div className="flex items-start gap-4">
                <a href="https://sites.usp.br/gema/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-1">
                  <img
                    src="/logos/gema.png"
                    alt="Logo GEMA"
                    className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </a>
                <div>
                  <h3 className="text-lg font-semibold"><a href="https://sites.usp.br/gema/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GEMA</a> (Grupo de Pesquisa Espaço Doméstico, Corpo e Materialidades)</h3>
                  <div className="my-2"><Tag>2025 – Atual</Tag></div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    O Grupo de Pesquisa Espaço Doméstico, Corpo e Materialidades (GEMA), coordenado pela Profa. Dra. Vânia Carneiro de Carvalho junto ao Museu Paulista da Universidade de São Paulo (Museu do Ipiranga), tem o objetivo de aprofundar discussões teórico-metodológicas ligadas às relações entre o ambiente das casas, o corpo e os artefatos com a construção e as transformações da sociedade brasileira dos séculos XIX e XX. A partir do entendimento de que as materialidades têm capacidade agenciadora no mundo social, o grupo busca compreender as trajetórias biográficas dos objetos de decoração, de moda e de trabalho doméstico, em suas interações com questões de gênero e práticas cotidianas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <a href="https://nejap.paginas.ufsc.br" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-1">
                  <img
                    src="/logos/nejap.png"
                    alt="Logo NEJAP"
                    className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </a>
                <div>
                  <h3 className="text-lg font-semibold"><a href="https://nejap.paginas.ufsc.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">NEJAP</a> (Núcleo de Estudos Japoneses)</h3>
                  <div className="my-2"><Tag>2024 – Atual</Tag></div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    O NEJAP (Núcleo de Estudos Japoneses), fundado em 2008, é um grupo voltado para pesquisa e extensão na área de estudos japoneses e asiáticos, em especial nas áreas de história, literatura, artes e cultura. O Núcleo é formado por alunos de diversas áreas, fazendo jus à interdisciplinaridade exigida por tal empreendimento. O grupo tem como missão divulgar a cultura e história do Japão, preencher a lacuna institucional no que diz respeito à Ásia, possibilitar o aprofundamento de graduandos em sua área de pesquisa, e empreender estudos próprios dentro das áreas temáticas abrangidas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <a href="https://laop.fflch.usp.br" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-1">
                  <img
                    src="/logos/laop.png"
                    alt="Logo LAOP"
                    className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </a>
                <div>
                  <h3 className="text-lg font-semibold">Laboratório do Antigo Oriente Próximo (<a href="https://laop.fflch.usp.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LAOP</a>)</h3>
                  <div className="my-2"><Tag>2022 – 2025</Tag></div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Participação vinculada à pesquisa de Iniciação Científica sobre as representações do Egito Antigo na cultura pop japonesa — primeiro contato sistemático com questões de recepção, mediação cultural e ressignificação de objetos e imagens em contextos extra-ocidentais. A experiência no laboratório orientou o interesse pela cultura material e pelos processos de apropriação cultural que, deslocados para o campo da imigração japonesa no Brasil, constituem o núcleo da pesquisa de mestrado em desenvolvimento.
                  </p>
                </div>
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
                <h3 className="text-lg font-semibold">
                  <a href="https://www.youtube.com/playlist?list=PLkfdTU5bBwmPUADek4joJpLfjpBRTBw3t" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    Being Egyptian
                  </a>
                </h3>
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
