"use client";
import { motion } from "framer-motion";

const marketSizeData = [
  {
    title: "TAM",
    value: "$1.2B",
    description: "Общий объем рынка AI-сервисов в СНГ (2024)",
    details: [
      "Рост: 42% ежегодно",
      "45M+ потенциальных пользователей",
      "156% рост спроса за 2023"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "SAM",
    value: "$320M",
    description: "Обслуживаемый рынок",
    details: [
      "Фрилансеры: 45%",
      "Малый бизнес: 30%",
      "Средний бизнес: 15%",
      "Образование: 10%"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "SOM",
    value: "$48M",
    description: "Достижимый рынок (3-й год)",
    details: [
      "1-й год: $8M (2.5% SAM)",
      "2-й год: $24M (7.5% SAM)",
      "3-й год: $48M (15% SAM)"
    ],
    gradient: "from-green-500 to-emerald-500"
  }
];

const financialMetrics = [
  {
    title: "Экономика продукта",
    metrics: [
      { label: "CAC", value: "2,000₽", trend: "↓" },
      { label: "LTV", value: "25,000₽", trend: "↑" },
      { label: "Окупаемость", value: "2-3 мес", trend: "↓" },
      { label: "Маржа", value: "25%", trend: "→" }
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Операционные расходы",
    metrics: [
      { label: "API", value: "25%", trend: "↓" },
      { label: "Маркетинг", value: "30%", trend: "→" },
      { label: "Разработка", value: "20%", trend: "→" },
      { label: "Прочее", value: "25%", trend: "↓" }
    ],
    gradient: "from-orange-500 to-red-500"
  }
];

export const MarketAnalysis = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Анализ рынка и финансы
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Прозрачная экономика проекта с фокусом на быстрый возврат инвестиций
        </p>
      </motion.div>

      {/* Market Size Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {marketSizeData.map((market, index) => (
          <motion.div
            key={market.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${market.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${market.gradient} bg-opacity-10 text-white/80`}>
                  {market.title}
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 * index, type: "spring" }}
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                >
                  {market.value}
                </motion.div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{market.description}</p>
              
              <ul className="space-y-2">
                {market.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${market.gradient} mr-2`}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {financialMetrics.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">{section.title}</h3>
              
              <div className="space-y-4">
                {section.metrics.map((metric, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">{metric.label}</span>
                      <div className="flex items-center">
                        <span className="text-purple-400 mr-2">{metric.value}</span>
                        <span className={`text-sm ${
                          metric.trend === "↑" ? "text-green-400" :
                          metric.trend === "↓" ? "text-purple-400" :
                          "text-gray-400"
                        }`}>{metric.trend}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: metric.value }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${section.gradient}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 