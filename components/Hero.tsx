"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const socialLinks = [
  { name: "GitHub",   icon: Github,   href: "https://github.com/octi35" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/octavio-fakiani-6662b5274/" },
  { name: "Email",    icon: Mail,     href: "mailto:octifaki@gmail.com" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase"
            >
              Hola, soy Octavio Fakiani
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-serif text-6xl sm:text-7xl lg:text-8xl font-medium text-white leading-[0.95]"
            >
              Software
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Analista de sistemas especializado en desarrollo web, automatización
              e inteligencia artificial. Construyo productos limpios y escalables
              con React, .NET y Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/15 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </motion.a>
              ))}

              <motion.a
                href="/documents/CV_Octavio_Fakiani_ATS.docx"
                download
                className="px-4 py-3 rounded-lg bg-white text-black font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:bg-gray-200"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Descargar CV"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Descargar CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 lg:order-2 h-[300px] sm:h-[420px] lg:h-[520px] w-full"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
