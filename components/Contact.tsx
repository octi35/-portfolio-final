"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import type { Locale } from "@/lib/i18n";

const ContactScene3D = dynamic(() => import("./ContactScene3D"), { ssr: false });

const copy = {
  es: {
    eyebrow: "Hablemos",
    title: "Contacto",
    intro: "¿Tienes una pregunta o un proyecto en mente? No dudes en contactarme.",
    location: "Ubicación:",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Tu mensaje aquí...",
    send: "Enviar",
    sending: "Enviando...",
    sent: "Mensaje enviado",
    success: "¡Gracias por tu mensaje! Te responderé pronto.",
    sendError: "Error al enviar el mensaje. Intenta nuevamente.",
    connectionError: "Error de conexión. Por favor intenta nuevamente.",
  },
  en: {
    eyebrow: "Let's talk",
    title: "Contact",
    intro: "Have a question or a project in mind? Feel free to reach out.",
    location: "Location:",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Your message here...",
    send: "Send",
    sending: "Sending...",
    sent: "Message sent",
    success: "Thanks for your message! I'll get back to you soon.",
    sendError: "Something went wrong sending your message. Please try again.",
    connectionError: "Connection error. Please try again.",
  },
};

const Contact = ({ locale }: { locale: Locale }) => {
  const t = copy[locale];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // FormSubmit (endpoint AJAX -> responde JSON y permite CORS)
      const response = await fetch("https://formsubmit.co/ajax/2bbc8efaa9a66aa89e57fd4aaa07cb55", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} desde tu portfolio${locale === "en" ? " (versión en inglés)" : ""}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === true || data.success === "true")) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(t.sendError);
      }
    } catch (err) {
      setError(t.connectionError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* 3D scene divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[220px] sm:h-[280px] lg:h-[320px] w-full mb-8 sm:mb-12"
        >
          <ContactScene3D />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm font-medium mb-2"
              >
                {t.eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                {t.title}
              </motion.h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                {t.intro}
              </p>
              
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-400">{t.location}</p>
                  <p className="text-white">Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : isLoading
                      ? "bg-gray-300 text-black cursor-wait"
                      : "bg-white hover:bg-gray-200 text-black"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.span>
                      {t.sent}
                    </>
                  ) : isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.send}
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-center"
              >
                <p className="text-red-400 font-medium">
                  {error}
                </p>
              </motion.div>
            )}

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center"
              >
                <p className="text-green-400 font-medium">
                  {t.success}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
