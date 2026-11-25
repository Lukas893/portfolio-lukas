import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-lukas.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050811",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lukas Macedo | Engenharia de Software, Back-end & Automação",
    template: "%s | Lukas Macedo",
  },
  description:
    "Portfólio de Lukas Fonseca Figueiredo Macedo — estudante de Engenharia de Software com foco em Back-end (Node.js, Express, MongoDB), desenvolvimento Full-Stack e automação inteligente.",
  keywords: [
    "Lukas Macedo",
    "Engenharia de Software",
    "Desenvolvedor Back-end",
    "Desenvolvedor Full-Stack",
    "Node.js",
    "Express",
    "MongoDB",
    "Automação",
    "Anápolis",
    "Portfólio",
  ],
  authors: [{ name: "Lukas Fonseca Figueiredo Macedo" }],
  creator: "Lukas Fonseca Figueiredo Macedo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Lukas Macedo — Portfólio",
    title: "Lukas Macedo | Engenharia de Software, Back-end & Automação",
    description:
      "Sistemas web, APIs RESTful em Node.js e automações comerciais construídos para escalar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Macedo | Engenharia de Software & Sistemas",
    description:
      "Desenvolvimento web, Back-end em Node.js e automação inteligente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="font-sans antialiased bg-[#050811] text-[#F5F7FA] selection:bg-[#38BDF8]/30 selection:text-[#F5F7FA]">
        {children}
      </body>
    </html>
  );
}