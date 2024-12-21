"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    period: "Q1 2025",
    title: "Фундамент",
    description: "Запуск базовой платформы и интеграция ключевых сервисов",
    gradient: "from-blue-500 to-purple-500",
    status: 'current',
    items: [
      "Базовая WEB платформа и инфраструктура",
      "Интеграция ключевых LLM (GPT, Claude, Gemini)",
      "Базовые инструменты генерации изображений",
      "Базовые инструменты генерации видео",
      "Система управления подписками и биллинг, mini app"
    ]
  },
  {
    period: "Q2 2025",
    title: "Расширение",
    description: "Добавление новых сервисов и улучшение платформы",
    gradient: "from-purple-500 to-pink-500",
    items: [
      "3D генерация и анимация",
      "Генерация музыки и звуков",
      "Клонирование голоса",
      "API для разработчиков v1.0"
    ]
  },
  {
    period: "Q3 2025",
    title: "Масштабирование",
    description: "Выход на новые рынки и аудитории",
    gradient: "from-pink-500 to-red-500",
    items: [
      "Выход на рынки СНГ",
      "Мобильное приложение",
      "Корпоративные решения",
      "Маркетплейс AI-сценариев",
      "API для разработчиков v2.0"
    ]
  }
];

export const Timeline = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Дорожная карта развития
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Четкий план развития с фокусом на быстрый рост и масштабирование
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line - Hidden on Mobile */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent hidden md:block"></div>

        {/* Mobile Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent md:hidden"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className={`relative flex items-start mb-8 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
          >
            {/* Timeline Point */}
            <div className="absolute left-4 md:left-[50%] w-4 h-4 transform -translate-x-1/2 z-10">
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur opacity-60`}></div>
              <div className={`relative w-full h-full rounded-full border-2 ${
                item.status === 'current' 
                  ? 'bg-purple-500 border-white' 
                  : 'bg-slate-900 border-purple-500/50'
              }`}></div>
            </div>

            {/* Content */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? "md:pr-8 pl-8 md:pl-0" : "md:pl-8 pl-8 md:pr-0"
            }`}>
              <div className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
                <div className="relative p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
                  {/* Period Badge */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs bg-gradient-to-r ${item.gradient} bg-opacity-10 text-white/80`}>
                      {item.period}
                    </span>
                    {item.status === 'current' && (
                      <span className="flex items-center text-xs text-green-400">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                        В процессе
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 mb-4">{item.description}</p>

                  <ul className="space-y-2">
                    {item.items.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs md:text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} mr-2 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 