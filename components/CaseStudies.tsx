"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/caseStudies";

/** Resalta las frases marcadas con **dobles asteriscos** con el estilo del sitio. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-white font-medium">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

const bodyText = "text-gray-400 text-[15px] leading-relaxed";

/** Fila plegable: cerrada muestra solo el número y el título. */
function Step({
  index,
  title,
  isOpen,
  onToggle,
  children,
}: {
  index: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 sm:gap-4 px-5 sm:px-7 py-4 text-left group"
      >
        <span
          className={`text-xs font-mono shrink-0 transition-colors ${
            isOpen ? "text-white" : "text-gray-600 group-hover:text-gray-400"
          }`}
        >
          {index}
        </span>
        <span
          className={`flex-1 text-[13px] sm:text-sm font-semibold uppercase tracking-wider transition-colors ${
            isOpen ? "text-white" : "text-gray-500 group-hover:text-gray-300"
          }`}
        >
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-xl font-light leading-none shrink-0 transition-colors ${
            isOpen ? "text-white" : "text-gray-600 group-hover:text-gray-400"
          }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-7 pb-6 pt-1 sm:pl-[52px]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Una tarjeta por proyecto. El estado del acordeón se reinicia al cambiar de proyecto. */
function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const toggleStep = (i: number) =>
    setOpenSteps((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    );

  const steps = [
    {
      title: "El problema",
      content: (
        <p className={bodyText}>
          <RichText text={study.problem} />
        </p>
      ),
    },
    {
      title: "Lo que pensé antes de programar",
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="text-white text-[15px] font-semibold mb-3">
              Opciones que consideré
            </h5>
            <ul className="space-y-3">
              {study.thinking.options.map((opt) => (
                <li key={opt} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span className={bodyText}>
                    <RichText text={opt} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/[0.07] pt-5">
            <h5 className="text-white text-[15px] font-semibold mb-3">
              Por qué descarté las otras
            </h5>
            <ul className="space-y-4">
              {study.thinking.discarded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span className={bodyText}>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/[0.07] pt-5">
            <h5 className="text-white text-[15px] font-semibold mb-3">
              El trade-off que acepté a propósito
            </h5>
            <p className={bodyText}>
              <RichText text={study.thinking.tradeoff} />
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Cómo lo construí",
      content: (
        <div className="space-y-5">
          {study.build.map((item) => (
            <div key={item.title}>
              <h5 className="text-white text-[15px] font-semibold mb-2">
                {item.title}
              </h5>
              <p className={bodyText}>
                <RichText text={item.body} />
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "El obstáculo real",
      content: (
        <p className={bodyText}>
          <RichText text={study.obstacle} />
        </p>
      ),
    },
    {
      title: "Resultado",
      content: (
        <p className={bodyText}>
          <RichText text={study.result} />
        </p>
      ),
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
    >
      {/* Cabecera del proyecto */}
      <div className="flex flex-col lg:flex-row">
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#181818] to-[#0e0e0e] aspect-[16/10] lg:aspect-auto lg:w-[44%] flex items-center justify-center p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <img
            src={study.image}
            alt={study.name}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[56%]">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
            {study.name}
          </h4>
          <p className={`${bodyText} mt-3`}>{study.oneLiner}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="text-[13px] px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {study.demoUrl !== "#" && (
            <a
              href={study.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mt-5 group w-fit"
            >
              Ver el proyecto en vivo
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* Acordeón: cerrado por defecto, se abre de a un paso */}
      <div className="border-t border-white/[0.08]">
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-white/[0.06]">
          <span className="text-xs text-gray-500">
            El proceso, paso a paso
          </span>
          <button
            type="button"
            onClick={() =>
              setOpenSteps(
                openSteps.length === steps.length ? [] : steps.map((_, i) => i)
              )
            }
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            {openSteps.length === steps.length ? "Cerrar todo" : "Abrir todo"}
          </button>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {steps.map((step, i) => (
            <Step
              key={step.title}
              index={String(i + 1).padStart(2, "0")}
              title={step.title}
              isOpen={openSteps.includes(i)}
              onToggle={() => toggleStep(i)}
            >
              {step.content}
            </Step>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(caseStudies[0].id);
  const study = caseStudies.find((c) => c.id === active) ?? caseStudies[0];

  return (
    <div className="mt-16 sm:mt-20">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3"
        >
          Case studies
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
        >
          Detrás de los proyectos
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4 max-w-3xl"
        >
          El problema real del cliente, las decisiones que tomé antes de
          escribir una línea de código y qué pasó después. Tocá cada paso para
          desplegarlo.
        </motion.p>
      </div>

      {/* Selector — aparece cuando hay más de un case study */}
      {caseStudies.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudies.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className="relative rounded-full px-4 py-2"
            >
              {c.id === active && (
                <motion.span
                  layoutId="activeCaseStudy"
                  className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.07]"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span
                className={`relative text-sm font-medium transition-colors ${
                  c.id === active ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {c.name}
              </span>
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <CaseStudyCard key={study.id} study={study} />
      </AnimatePresence>
    </div>
  );
}
