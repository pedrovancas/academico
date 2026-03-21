import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Historiae",
  description:
    "Podcast de divulgação histórica com enfoque em História Pública. Produção solo: pesquisa, roteiro, narração e edição de áudio.",
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
    {children}
  </span>
);

const HistoriaePage = () => {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-2">
          <Link
            href="/projetos"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
          >
            ← Projetos
          </Link>
        </div>

        <div className="pt-6 pb-8">
          <h1 className="text-2xl font-bold pb-4">
            Historiae: podcast de divulgação em história pública
          </h1>
          <div className="mb-4">
            <Tag>2022</Tag>
            <Tag>Situação: Concluído</Tag>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Podcast de divulgação histórica com enfoque em História Pública. A
            produção técnica inclui planejamento, roteirização, edição e
            divulgação de temas históricos com base em bibliografia especializada
            para o público geral. Produção solo: pesquisa, roteiro, narração e
            edição de áudio.
          </p>
        </div>

        <div className="space-y-6">
          <iframe
            src="https://open.spotify.com/embed/show/3TCZvfeu66ZUDczxvF3PS0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />

          <a
            href="https://open.spotify.com/show/3TCZvfeu66ZUDczxvF3PS0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Ouvir no Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default HistoriaePage;
