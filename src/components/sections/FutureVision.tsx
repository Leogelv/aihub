"use client";
import { motion } from "framer-motion";

const futureRoadmap = [
  {
    year: "2024",
    title: "Захват рынка контент-мейкеров",
    description: "Станем главной платформой для создания контента в России",
    milestones: [
      "100,000+ активных пользователей",
      "Интеграции с топ-20 блог-платформами",
      "Выручка 150+ млн рублей"
    ]
  },
  {
    year: "2025",
    title: "Масштабирование на бизнес-сегмент",
    description: "Автоматизация бизнес-процессов для компаний",
    milestones: [
      "1000+ корпоративных клиентов",
      "Интеграции со всеми популярными CRM",
      "Выручка 500+ млн рублей"
    ]
  },
  {
    year: "2026",
    title: "Международная экспансия",
    description: "Выход на рынки СНГ и Азии",
    milestones: [
      "Представительства в 5 странах",
      "1+ млн пользователей globally",
      "Выручка 1.5+ млрд рублей"
    ]
  }
];

export const FutureVision = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
          План развития
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Чёткая стратегия роста и масштабирования бизнеса
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {futureRoadmap.map((period, index) => (
          <motion.div
            key={period.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-12 last:mb-0"
          >
            {/* Connecting Line */}
            {index !== futureRoadmap.length - 1 && (
              <div className="absolute left-[2.25rem] top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
            )}

            <div className="flex items-start gap-8">
              {/* Year Badge */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-white font-bold">{period.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{period.title}</h3>
                <p className="text-gray-400 mb-4">{period.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {period.milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                    >
                      <p className="text-gray-300">{milestone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 