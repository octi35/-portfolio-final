import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";
import PageLoader from "@/components/PageLoader";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const title = "Octavio Fakiani | Full Stack Developer";

const descriptions: Record<Locale, string> = {
  es: "Portfolio personal de Octavio Fakiani - Full Stack Developer (React, Node.js, .NET) con experiencia remota internacional en desarrollo web, APIs REST, automatización e IA.",
  en: "Personal portfolio of Octavio Fakiani - Full Stack Developer (React, Node.js, .NET) with international remote experience in web development, REST APIs, automation and AI.",
};

const keywords: Record<Locale, string[]> = {
  es: ["Octavio Fakiani", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", ".NET", "PostgreSQL", "APIs REST", "Remote Developer", "Portfolio"],
  en: ["Octavio Fakiani", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", ".NET", "PostgreSQL", "REST APIs", "Remote Developer", "Portfolio"],
};

// Solo existen /es (servido en la raíz) y /en; cualquier otro segmento da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  return {
    title,
    description: descriptions[lang],
    keywords: keywords[lang],
    authors: [{ name: "Octavio Fakiani" }],
    openGraph: {
      title,
      description: descriptions[lang],
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <PageLoader />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
