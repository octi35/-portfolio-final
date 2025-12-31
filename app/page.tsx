import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import WhatIDo from "@/components/WhatIDo";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <TechStack />
      <WhatIDo />
      <Timeline />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
