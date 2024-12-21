"use client";
import { motion } from "framer-motion";

const whyNowData = {
  market: [
    { title: "2024 - точка перелома", description: "Доступность AI-технологий достигла критической массы" },
    { title: "Рост нейросетей", description: "С 5-7 ключевых игроков в 2023 до 30+ в 2024" },
    { title: "Массовый переход", description: "Рост использования AI в малом бизнесе на 300% за год" },
    { title: "Критическая масса", description: "40% фрилансеров уже используют AI регулярно" }
  ],
  protection: [
    { title: "Сетевой эффект", description: "Каждый новый пользователь улучшает сервис" },
    { title: "Технологический барьер", description: "Сложная система балансировки и оптимизации" },
    { title: "Долгосрочные контракты", description: "Эксклюзивные соглашения с поставщиками" },
    { title: "База знаний", description: "Уникальные кейсы для каждой аудитории" }
  ],
  risks: [
    { title: "Конкуренты", description: "Появление сильных игроков через 6-12 месяцев" },
    { title: "Вход на рынок", description: "Усложнение входа и рост барьеров" },
    { title: "Стоимость привлечения", description: "Рост CAC на раннем рынке" },
    { title: "Консолидация", description: "Поглощение рынка крупными компаниями" }
  ]
};

export const WhyNow = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Почему время действовать — сейчас
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Уникальное окно возможностей на рынке AI-сервисов
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Market Moment */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Переломный момент рынка</h3>
            <div className="space-y-4">
              {whyNowData.market.map((item, index) => (
                <div key={index} className="relative group/item">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5"></div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Защита от конкурентов</h3>
            <div className="space-y-4">
              {whyNowData.protection.map((item, index) => (
                <div key={index} className="relative group/item">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-1.5"></div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Risks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Риски промедления</h3>
            <div className="space-y-4">
              {whyNowData.risks.map((item, index) => (
                <div key={index} className="relative group/item">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-red-400 mt-1.5"></div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto text-center"
      >
        {[
          { value: "200%", label: "Рост спроса год к году" },
          { value: "6-12", label: "Месяцев до усиления конкуренции" },
          { value: "40%", label: "Organic Growth от рекомендаций" },
          { value: "30%", label: "Рост ARPU каждые 6 месяцев" }
        ].map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur-sm group-hover:blur transition-all"></div>
            <div className="relative px-4 md:px-6 py-3 md:py-4 bg-slate-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <div className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 tracking-tight">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}; 