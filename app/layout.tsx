import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Octavio Fakiani | Full Stack Developer",
  description: "Portfolio personal de Octavio Fakiani - Full Stack Developer (React, Node.js, .NET) con experiencia remota internacional en desarrollo web, APIs REST, automatización e IA.",
  keywords: ["Octavio Fakiani", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", ".NET", "PostgreSQL", "APIs REST", "Remote Developer", "Portfolio"],
  authors: [{ name: "Octavio Fakiani" }],
  openGraph: {
    title: "Octavio Fakiani | Full Stack Developer",
    description: "Portfolio personal de Octavio Fakiani - Full Stack Developer (React, Node.js, .NET) con experiencia remota internacional en desarrollo web, APIs REST, automatización e IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <PageLoader />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
