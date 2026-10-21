"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { homePath, type Locale } from "@/lib/i18n";

const navItems = [
  { id: "home",     label: { es: "Inicio",    en: "Home"     }, icon: Home,       href: "#home"     },
  { id: "sobre-mi", label: { es: "Sobre mí",  en: "About"    }, icon: User,       href: "#sobre-mi" },
  { id: "projects", label: { es: "Proyectos", en: "Projects" }, icon: FolderOpen, href: "#projects" },
  { id: "contact",  label: { es: "Contacto",  en: "Contact"  }, icon: Mail,       href: "#contact"  },
];

const switchLabel = { es: "View in English", en: "Ver en español" };

export default function Navbar({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (nearBottom) { setActive("contact"); return; }

      const mid = window.scrollY + window.innerHeight / 2;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center transition-all duration-500 ease-in-out ${
          scrolled
            ? "gap-1 w-auto bg-[#161616]/90 border border-white/10 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "gap-1 sm:gap-2 w-full max-w-2xl justify-center bg-white/[0.04] border border-white/[0.08] rounded-2xl px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-md"
        }`}
      >
        {navItems.map(({ id, label: labels, icon: Icon, href }) => {
          const isActive = active === id;
          const label = labels[locale];
          return (
            <motion.a
              key={id}
              href={href}
              onClick={() => setActive(id)}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
              className={`relative flex items-center gap-2 rounded-full cursor-pointer transition-colors duration-200 ${
                scrolled ? "px-4 py-2" : "px-3 sm:px-5 py-2.5"
              } ${isActive ? "text-[#0a0a0a]" : "text-gray-400 hover:text-white"}`}
            >
              {/* Sliding pill background */}
              {isActive && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}

              <Icon className="relative z-10 w-[18px] h-[18px] shrink-0" />

              {/* Label: always visible when expanded, only when active when collapsed */}
              <AnimatePresence initial={false}>
                {(!scrolled || isActive) && (
                  <motion.span
                    key="label"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className={`relative z-10 text-sm font-semibold overflow-hidden whitespace-nowrap ${
                      !scrolled && !isActive ? "hidden sm:inline" : ""
                    }`}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>
          );
        })}

        {/* Cambio de idioma — conserva la sección en la que está el usuario */}
        <span className="mx-1 h-5 w-px shrink-0 bg-white/10" />
        <a
          href={`${homePath[otherLocale]}${active === "home" ? "" : `#${active}`}`}
          hrefLang={otherLocale}
          aria-label={switchLabel[locale]}
          title={switchLabel[locale]}
          className={`rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-200 ${
            scrolled ? "px-3 py-2" : "px-3 sm:px-4 py-2.5"
          }`}
        >
          {otherLocale}
        </a>
      </motion.nav>
    </div>
  );
}
