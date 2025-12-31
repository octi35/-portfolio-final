"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { certifications } from "@/lib/certifications";

const Certifications = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Star className="w-8 h-8 text-orange-400" fill="currentColor" />
            Certificaciones
          </h2>
          <p className="text-gray-500">
            Formación y desarrollo profesional
          </p>
        </motion.div>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-800/50 pb-12 last:border-0"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="mt-1">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-orange-400">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-400"
                      >
                        {skill}{idx < cert.skills.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
