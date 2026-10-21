"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const sentences = {
  es: "Del problema a la solución. Desarrollo software moderno y escalable para PyMEs que necesitan crecer — automatizando procesos, integrando inteligencia artificial y tomando decisiones basadas en datos, con React, .NET y Python.",
  en: "From problem to solution. I build modern, scalable software for SMBs that need to grow — automating processes, integrating artificial intelligence and making data-driven decisions, with React, .NET and Python.",
};

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}

export default function ScrollRevealText({ locale }: { locale: Locale }) {
  const words = sentences[locale].split(" ");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.25"],
  });

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = Math.min((i + 1.5) / words.length, 1);
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
