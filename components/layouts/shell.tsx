"use client";

import { usePathname } from "next/navigation";

// Coluna principal do site. A home usa uma largura maior (cabeçalho, imagem e
// cartões se alinham pelas bordas); as demais páginas mantêm a coluna estreita
// de leitura.
export default function Shell({ children }: { children: React.ReactNode }) {
  const wide = usePathname() === "/";

  return (
    <div
      className={
        "container mx-auto min-h-screen flex flex-col px-4 py-5 " +
        (wide ? "max-w-6xl" : "max-w-3xl")
      }
    >
      {children}
    </div>
  );
}
