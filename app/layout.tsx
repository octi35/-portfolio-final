import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";
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
  title: "Octavio Fakiani | Software Developer",
  description: "Portfolio personal de Octavio Fakiani - Analista de sistemas especializado en desarrollo web, automatización y análisis de datos.",
  keywords: ["Octavio Fakiani", "Software Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Octavio Fakiani" }],
  openGraph: {
    title: "Octavio Fakiani | Software Developer",
    description: "Portfolio personal de Octavio Fakiani - Analista de sistemas especializado en desarrollo web, automatización y análisis de datos.",
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
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
