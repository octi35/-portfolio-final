"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { timelineData } from "@/lib/timeline";

const Timeline = () => {
  const experienceItems = timelineData.filter(item => item.type === "experience");
  const educationItems = timelineData.filter(item => item.type === "education");

  const TimelineSection = ({ 
    items, 
    title, 
    icon: Icon, 
    colorClass 
  }: { 
    items: typeof timelineData, 
    title: string, 
    icon: any, 
    colorClass: string 
  }) => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colorClass.includes('orange') ? 'from-orange-500 via-orange-500/30' : 'from-blue-500 via-blue-500/30'} to-transparent`} />

        {/* Timeline items */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-20"
            >
              {/* Icon */}
              <div className="absolute left-0 top-0">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${
                    item.type === "experience"
                      ? "bg-orange-500/10 border-orange-500/50 text-orange-400"
                      : "bg-blue-500/10 border-blue-500/50 text-blue-400"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <div className="group">
                <div className="rounded-xl bg-gray-900/40 border border-gray-800 hover:border-orange-500/30 hover:bg-gray-900/60 transition-all duration-300 p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-lg text-gray-300 font-medium">
                        {item.organization}
                      </p>
                    </div>
                    {item.current && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        Actualidad
                      </span>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-300 hover:border-orange-500/50 hover:text-orange-300 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mi Trayectoria
          </h2>
          <p className="text-gray-400 text-lg">
            Experiencia profesional y formación académica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <TimelineSection 
            items={experienceItems} 
            title="Experiencia" 
            icon={Briefcase}
            colorClass="bg-orange-500/10 text-orange-400"
          />
          <TimelineSection 
            items={educationItems} 
            title="Educación" 
            icon={GraduationCap}
            colorClass="bg-blue-500/10 text-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
