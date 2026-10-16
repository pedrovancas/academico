"use client";

// components/Biografia.tsx
import { serif } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";

type Lang = "pt" | "en";

const linkClass =
  "text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-400";

const PROFILES = [
  ["Lattes", "https://lattes.cnpq.br/1970471858793746"],
  ["Academia.edu", "https://usp-br1.academia.edu/PedroCastro"],
  ["ORCID", "https://orcid.org/0009-0000-4556-3753"],
] as const;

// Uma "camada" por idioma. As duas ficam no DOM, sobrepostas na mesma célula
// do grid, e a troca é só um fade de opacidade (sem recarregar a página).
// Isso mantém os dois textos no HTML inicial, o que ajuda a indexação.
const Layer = ({ lang, active }: { lang: Lang; active: boolean }) => {
  const pt = lang === "pt";

  return (
    <div
      lang={pt ? "pt-BR" : "en"}
      aria-hidden={!active}
      inert={!active}
      className={
        serif.className +
        " col-start-1 row-start-1 transition-[opacity,visibility] duration-300 ease-in-out " +
        (active ? "opacity-100 visible" : "opacity-0 invisible")
      }
    >
      {/* Título da página, só para leitores de tela e buscadores */}
      <h1 className="sr-only">Pedro Vinícius de Castro</h1>

      {/* Apresentação, em corpo menor */}
      <div className="max-w-3xl space-y-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          <strong className="font-bold text-zinc-900 dark:text-zinc-50">
            Pedro Vinícius de Castro
          </strong>{" "}
          {pt
            ? "— mestrando em História Social pela "
            : "— Master's candidate in Social History at the "}
          <Link
            href="https://fflch.usp.br/"
            target="_blank"
            className={linkClass}
          >
            {pt
              ? "Universidade de São Paulo (PPGHS-FFLCH/USP)"
              : "University of São Paulo (PPGHS-FFLCH/USP)"}
          </Link>
          {pt
            ? " e pesquisador associado ao "
            : " and researcher associated with the "}
          <Link
            href="https://museudoipiranga.org.br/"
            target="_blank"
            className={linkClass}
          >
            {pt ? "Museu do Ipiranga (USP)" : "Ipiranga Museum (USP)"}
          </Link>
          {pt
            ? ". Sua pesquisa aborda história japonesa moderna, cultura material transnacional, espaço doméstico e a recepção da Antiguidade e da Idade Média em mídias visuais japonesas contemporâneas."
            : ". His research addresses modern Japanese history, transnational material culture, domestic space, and the reception of antiquity and the Middle Ages in contemporary Japanese visual media."}
        </p>
        <p>
          {pt
            ? "Seu projeto atual estuda o complexo doméstico-industrial da família Kojima, ceramistas imigrantes japoneses em Mauá (SP), a partir do cruzamento entre cultura material, história oral e arquivo."
            : "His current project examines the domestic-industrial complex of the Kojima family, Japanese immigrant ceramists in Mauá (SP), through the intersection of material culture, oral history, and archival research."}
        </p>
      </div>

      {/* Mais sobre mim: contato e perfis */}
      <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>{pt ? "Mais sobre mim:" : "More about me:"}</p>
        <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
          <a className={linkClass} href="mailto:pedro.cas@usp.br">
            pedro.cas@usp.br
          </a>
          {PROFILES.map(([label, href]) => (
            <a
              key={label}
              className={linkClass}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

const LangButton = ({
  value,
  current,
  onSelect,
}: {
  value: Lang;
  current: Lang;
  onSelect: (lang: Lang) => void;
}) => (
  <button
    type="button"
    onClick={() => onSelect(value)}
    aria-pressed={current === value}
    lang={value === "pt" ? "pt-BR" : "en"}
    className={
      "px-2 py-0.5 rounded-full transition-colors " +
      (current === value
        ? "bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white"
        : "hover:text-black dark:hover:text-white")
    }
  >
    {value.toUpperCase()}
  </button>
);

export default function Biografia() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <>
      {/* Seletor de idioma */}
      <div
        role="group"
        aria-label="Idioma / Language"
        className="mb-4 flex items-center justify-end gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400"
      >
        <LangButton value="pt" current={lang} onSelect={setLang} />
        <LangButton value="en" current={lang} onSelect={setLang} />
      </div>

      <div className="grid">
        <Layer lang="pt" active={lang === "pt"} />
        <Layer lang="en" active={lang === "en"} />
      </div>
    </>
  );
}
