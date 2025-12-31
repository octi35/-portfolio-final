import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
