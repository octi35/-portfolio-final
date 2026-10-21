import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollRevealText from "@/components/ScrollRevealText";
import TechStack from "@/components/TechStack";
import WhatIDo from "@/components/WhatIDo";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import LanguagesSoftSkills from "@/components/LanguagesSoftSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar locale={lang} />
      <Hero locale={lang} />
      <ScrollRevealText locale={lang} />
      <TechStack locale={lang} />
      <WhatIDo locale={lang} />
      <Timeline locale={lang} />
      <Certifications locale={lang} />
      <LanguagesSoftSkills locale={lang} />
      <Projects locale={lang} />
      <Contact locale={lang} />
      <Footer />
      <WhatsAppButton locale={lang} />
    </main>
  );
}
