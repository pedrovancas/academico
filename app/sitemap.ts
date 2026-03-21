export default async function sitemap() {
  const routes = ["", "/projetos", "/publicacoes", "/docs"].map((route) => ({
    url: `https://pedrocas.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
