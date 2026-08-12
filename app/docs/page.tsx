import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentos e Questionário",
  description: "Questionário para levantamento de dados de famílias nipo-descendentes para o projeto de pesquisa.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-4">Questionário para Famílias Nipo-descendentes</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Este questionário faz parte da pesquisa de mestrado e visa coletar informações sobre a cultura material e os espaços domésticos. A sua participação é voluntária e de grande importância para o projeto.
          </p>
        </div>

        {/* Link para o questionário estilizado como um botão */}
        <div className="mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIpLKfMmLSSifh3wu3uktdL4lQVoIfPTGQw_BTV2FILg9vSg/viewform?usp=sf_link" // <-- SEU LINK FOI INSERIDO AQUI
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black font-bold py-3 px-6 rounded-lg hover:opacity-80 transition-opacity"
          >
            Acessar o Questionário
          </a>
        </div>
      </div>
    </section>
  );
}