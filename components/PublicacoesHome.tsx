import Link from "next/link";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-white/20 text-white border border-white/30 rounded-full px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
    {children}
  </span>
);

const publicacoes = [
  {
    title: "Hatshepsut, a faraó fabricada: agência dos artefatos, tecnologias de gênero e orientalismo deslocado no mangá Aoi Horus no Hitomi",
    venue: "Revista do Museu de Arqueologia e Etnologia — MAE/USP",
    status: "Sob avaliação",
    imgSrc: "/publicacoes/aoi-horus.jpg",
    imgPosition: "object-center",
    href: "/publicacoes",
  },
  {
    title: '"A vontade de resistir está em suas mãos": neomedievalismo japonês, agência material e capitalismo tardio em Final Fantasy Tactics',
    venue: "Neomedieval — Universidad Rey Juan Carlos (Madri)",
    status: "Sob avaliação",
    imgSrc: "/publicacoes/fft-art.jpg",
    imgPosition: "object-right",
    href: "/publicacoes",
  },
  {
    title: "O mangá que virou espelho: como Vinland Saga ressignifica a Idade Média europeia para refletir sobre o Japão",
    venue: "Medievalismos em imagens e outras mídias — FFLCH/USP",
    status: "No prelo",
    imgSrc: "/publicacoes/vinland-saga.webp",
    imgPosition: "object-top",
    href: "/publicacoes",
  },
];

export default function PublicacoesHome() {
  return (
    <div className="mt-12">
      <div className="w-full border-t border-zinc-200 dark:border-zinc-800 mb-8" />
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="text-lg font-bold">Publicações recentes</h2>
        <Link href="/publicacoes" className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
          ver todas →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {publicacoes.map((pub) => (
          <Link
            key={pub.title}
            href={pub.href}
            className="group relative h-64 rounded-lg overflow-hidden"
          >
            <img
              src={pub.imgSrc}
              alt={pub.title}
              className={`absolute inset-0 w-full h-full object-cover ${pub.imgPosition} group-hover:scale-105 transition-transform duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold leading-snug line-clamp-3 text-white">
                {pub.title}
              </p>
              <p className="text-xs text-zinc-300 line-clamp-1">
                {pub.venue}
              </p>
              <div>
                <Tag>{pub.status}</Tag>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
