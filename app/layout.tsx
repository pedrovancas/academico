import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import gradientImg from "@/public/images/gradient.webp";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "Pedro Vinícius de Castro",
  description: "Historiador; explorando as conexões entre cultura material, migração e identidade no Japão Meiji e no Brasil.",
  url: "https://pedrocas.vercel.app", 
  image: "/api/og",
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default: info.name,
    template: `%s | ${info.name}`,
  },
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  
  robots: {
    index: true,
    follow: true,
  },
  // A propriedade 'verification' foi removida daqui para evitar conflitos.

  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    images: info.image,
  },
};

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
            <Image
              className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
              src={gradientImg}
              role="presentation"
              alt="Gradient background"
              priority
            />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>

      {/* --- TAG DO GOOGLE ADICIONADA DIRETAMENTE AQUI --- */}
      <meta
        name="google-site-verification"
        content="ruQtSyF5ZLiSJ3IzXuzLOJ8wCMdUw5PyLdIuDR3wVpk"
      />

      <link
        href="/favicons/favicon-light.ico"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/favicons/favicon-dark.ico"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
    </html>
  );
}