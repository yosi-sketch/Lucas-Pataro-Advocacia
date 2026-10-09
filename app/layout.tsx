/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#18110d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucasepataroadvocacia.com.br"),
  title: "Lucas & Pataro Advocacia e Consultoria Jurídica | Ponte Nova - MG",
  description:
    "Escritório de advocacia com atuação estratégica e excelência em Direito Previdenciário, Penal, Cível, Família & Sucessões e Consultoria Jurídica. Conduzido pela Dra. Clarissa Pataro e pelo Dr. Diego Lucas. Atendimento presencial no Edifício Milênio em Ponte Nova - MG e on-line em todo o Brasil.",
  keywords: [
    "Lucas & Pataro Advocacia",
    "Lucas e Pataro Advocacia e Consultoria Jurídica",
    "Dra. Clarissa Pataro",
    "Dr. Diego Lucas",
    "advogado em Ponte Nova",
    "advocacia Ponte Nova MG",
    "direito previdenciário Ponte Nova",
    "aposentadoria e benefícios INSS",
    "advogado criminalista Ponte Nova",
    "direito penal e defesa criminal",
    "direito de família e inventário",
    "consultoria jurídica empresarial",
  ],
  authors: [
    { name: "Dra. Clarissa Pataro" },
    { name: "Dr. Diego Lucas" },
  ],
  creator: "Lucas & Pataro Advocacia e Consultoria Jurídica",
  publisher: "Lucas & Pataro Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.lucasepataroadvocacia.com.br",
    title: "Lucas & Pataro Advocacia e Consultoria Jurídica | Segurança & Rigor Técnico",
    description:
      "Advocacia estratégica, ética e resolutiva com atendimento humanizado. Sede em Ponte Nova - MG e atendimento digital para todo o Brasil.",
    siteName: "Lucas & Pataro Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 2172,
        height: 724,
        alt: "Lucas & Pataro Advocacia e Consultoria Jurídica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
