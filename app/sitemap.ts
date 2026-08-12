export default async function sitemap() {
  // Todas as rotas públicas e indexáveis do site.
  // Importante: toda página real e linkada na navegação precisa estar aqui,
  // senão motores de busca (especialmente o Bing, que depende mais do
  // sitemap do que o Google) podem demorar muito para descobri-la.
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/projetos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projetos/historiae", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/publicacoes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/docs", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `https://pedrocas.vercel.app${path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency,
    priority,
  }));
}
