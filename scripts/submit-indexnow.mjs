// Envia todas as URLs do site para o IndexNow (protocolo aberto suportado
// pelo Bing, Yandex, Naver, Seznam e outros — o Google NÃO participa dele,
// mas o Bing sim, e é a forma mais rápida de avisar "essas páginas mudaram,
// vem rastrear agora" em vez de esperar o crawler passar sozinho).
//
// Uso:
//   node scripts/submit-indexnow.mjs
//
// Rode isso manualmente depois de publicar mudanças importantes, ou
// automatize num passo de deploy (ex: GitHub Action pós-deploy da Vercel).

const HOST = "pedrocas.vercel.app";
const KEY = "751116de02557f93a574e662eeaa1642";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Mantenha esta lista alinhada com app/sitemap.ts.
const ROUTES = ["", "/projetos", "/projetos/historiae", "/publicacoes", "/docs"];

const urlList = ROUTES.map((route) => `https://${HOST}${route}`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow respondeu: ${res.status} ${res.statusText}`);
if (!res.ok) {
  const text = await res.text().catch(() => "");
  console.error(text);
  process.exit(1);
}
console.log(`${urlList.length} URLs enviadas com sucesso:`);
for (const url of urlList) console.log(`  - ${url}`);
