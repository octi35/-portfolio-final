"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import CodeAnimation from "./CodeAnimation";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/octi35?tab=repositories",
      color: "hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/octavio-fakiani-6662b5274/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:octifaki@gmail.com",
      color: "hover:bg-orange-600",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Small intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-orange-400 text-sm font-medium tracking-wide uppercase"
            >
              Hola, soy Octavio Fakiani
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white leading-none tracking-tight"
            >
              Software
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Developer
              </span>
            </motion.h1>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </motion.a>
              ))}
              
              {/* CV Download Button */}
              <motion.a
                href="/documents/CV_Octavio_Fakiani_ATS.docx"
                download
                className="px-3 sm:px-4 py-3 rounded-lg border border-orange-500/50 bg-orange-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Descargar CV"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-orange-400">Descargar CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 lg:pt-4 relative"
          >
            {/* Code Animation Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <CodeAnimation />
            </div>

            {/* Content with backdrop */}
            <div className="relative z-10 p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-orange-500/20">
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Analista de sistemas con experiencia en desarrollo web, automatización y análisis de datos. 
                Especializado en soluciones que integran inteligencia artificial, sistemas automatizados y dashboards de negocio.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-4">
                Experiencia en aplicaciones web modernas con React, .NET, SQL Server y Python, con foco en eficiencia operativa 
                y toma de decisiones basada en datos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
