"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: {
    message: "Hola Octavio! Vi tu portfolio y me gustaría contactarte.",
    label: "Contactar por WhatsApp",
  },
  en: {
    message: "Hi Octavio! I saw your portfolio and would like to get in touch.",
    label: "Contact via WhatsApp",
  },
};

const WhatsAppButton = ({ locale }: { locale: Locale }) => {
  const phoneNumber = "5493512294285"; // +54 9 3512294285
  const message = copy[locale].message;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={copy[locale].label}
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      
      {/* Animated pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;
