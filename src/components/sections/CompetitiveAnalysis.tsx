"use client";
import { motion } from "framer-motion";

const competitors = [
  {
    name: "Syntx & Аналоги",
    examples: "Syntx, Writesonic, Copy.ai",
    disadvantages: [
      "Высокие тарифы ($50-100/мес)",
      "Ограниченный набор моделей",
      "Проблемы с локализацией",
      "Слабая поддержка на русском",
      "Нет интеграции с популярными сервисами"
    ],
    marketShare: "25%",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "SCADE & Платформы",
    examples: "SCADE, Jasper, Runway",
    disadvantages: [
      "Сложный технический интерфейс",
      "Высокий порог входа",
      "Избыточный функционал",
      "Дорогие тарифы для команд",
      "Отсутствие локальных способов оплаты"
    ],
    marketShare: "20%",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    name: "Зарубежные AI-сервисы",
    examples: "OpenAI, Midjourney, Anthropic",
    disadvantages: [
      "Сложности с оплатой из СНГ",
      "Высокая стоимость в валюте",
      "Отсутствие локализации",
      "Нет поддержки на русском",
      "Риски блокировки"
    ],
    marketShare: "35%",
    gradient: "from-pink-500 to-red-500"
  },
  {
    name: "Локальные AI-стартапы",
    examples: "GigaChat, Various AI Tools",
    disadvantages: [
      "Ограниченный функционал",
      "Нестабильное качество",
      "Отсутствие экосистемы",
      "Малый выбор моделей",
      "Высокая стоимость"
    ],
    marketShare: "15%",
    gradient: "from-orange-500 to-red-500"
  }
];

const advantages = [
  {
    title: "Единый доступ",
    description: "Все популярные AI-сервисы в одном месте с единой оплатой в рублях",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Экономия",
    description: "До 70% экономии на подписках по сравнению с отдельными сервисами",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Простота",
    description: "Интуитивный интерфейс и быстрый старт работы без сложных настроек",
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Локализация",
    description: "Полная русификация и адаптация под рынок СНГ",
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Интеграции",
    description: "API и готовые интеграции с популярными сервисами",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Поддержка",
    description: "Техподдержка 24/7 на русском языке и обучающие материалы",
    gradient: "from-yellow-500 to-green-500"
  }
];

const features = [
  {
    category: "Оплата",
    ourFeature: "Единая подписка в рублях",
    competitors: "Множество подписок в валюте"
  },
  {
    category: "Доступ",
    ourFeature: "Все сервисы в одном окне",
    competitors: "Отдельные кабинеты и аккаунты"
  },
  {
    category: "Интерфейс",
    ourFeature: "Единый русскоязычный интерфейс",
    competitors: "Разные интерфейсы на английском"
  },
  {
    category: "API",
    ourFeature: "Единый API для всех сервисов",
    competitors: "Отдельные API для каждого сервиса"
  },
  {
    category: "Поддержка",
    ourFeature: "24/7 на русском языке",
    competitors: "Ограниченная, только на английском"
  }
];

export const CompetitiveAnalysis = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Конкурентный анализ
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Почему пользователи выберут нашу платформу
        </p>
      </motion.div>

      {/* Competitors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${competitor.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-white">{competitor.name}</h3>
                <span className="text-sm text-purple-400">{competitor.marketShare} рынка</span>
              </div>
              <div className="text-xs md:text-sm text-gray-400 mb-4">Примеры: {competitor.examples}</div>
              
              {/* Market Share Bar */}
              <div className="mb-4">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: competitor.marketShare }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={`h-full bg-gradient-to-r ${competitor.gradient}`}
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-2">
                {competitor.disadvantages.map((disadvantage, i) => (
                  <div key={i} className="flex items-center text-xs md:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-2 flex-shrink-0"></div>
                    {disadvantage}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative group mb-12"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative overflow-x-auto">
          <table className="w-full bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-gray-400">Характеристика</th>
                <th className="p-4 text-left text-sm font-medium text-purple-400">AI Hub</th>
                <th className="p-4 text-left text-sm font-medium text-gray-400">Конкуренты</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-sm text-gray-300">{feature.category}</td>
                  <td className="p-4 text-sm text-white">{feature.ourFeature}</td>
                  <td className="p-4 text-sm text-gray-400">{feature.competitors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${advantage.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-400">{advantage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 