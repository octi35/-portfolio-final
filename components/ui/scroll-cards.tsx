"use client";

import { FC } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag?: string;
  src: string;
  link: string;
  color?: string;
  textColor?: string;
  tech?: string;
  status?: "Deployed" | "In development";
}

interface iCardProps extends iCardItem {
  i: number;
  total: number;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  src,
  link,
  tech,
  status,
  i,
  total,
}) => {
  const hasLink = link && link !== "#";

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4">
      <div
        className="relative flex flex-col justify-end overflow-hidden rounded-3xl
        h-[460px] w-full max-w-[820px] mx-auto shadow-2xl border border-white/10
        bg-[#111]"
        style={{
          transform: `scale(${1 - (total - 1 - i) * 0.04})`,
        }}
      >
        {/* Background image */}
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 820px) 100vw, 820px"
          className="object-cover object-top"
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        {/* Index number */}
        <span className="absolute top-6 right-7 z-10 font-serif text-5xl md:text-6xl font-bold text-white/25">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative z-10 p-7 sm:p-10">
          {status && (
            <span
              className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${
                status === "Deployed"
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "bg-amber-500/20 text-amber-300"
              }`}
            >
              {status === "Deployed" ? "Desplegado" : "En desarrollo"}
            </span>
          )}

          <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white">
            {title}
          </h3>

          <p className="font-sans text-sm md:text-base text-gray-300 mt-3 max-w-xl leading-relaxed line-clamp-3">
            {description}
          </p>

          {tech && (
            <div className="flex flex-wrap gap-2 mt-5">
              {tech
                .split(",")
                .slice(0, 5)
                .map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200"
                  >
                    {t.trim()}
                  </span>
                ))}
            </div>
          )}

          {hasLink && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Ingresar al proyecto
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * CardsParallax displays a series of cards in a vertical sticky-scroll layout.
 * As the user scrolls, each card stacks on top of the previous one.
 */
interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} total={items.length} />
      ))}
    </div>
  );
};

export { CardsParallax, type iCardItem };
