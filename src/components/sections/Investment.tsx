"use client";
import { motion } from "framer-motion";

const investmentData = {
  amount: "10M ₽",
  distribution: [
    { label: "Разработка платформы", value: "40%", color: "from-blue-500 to-purple-500" },
    { label: "Маркетинг и привлечение", value: "35%", color: "from-purple-500 to-pink-500" },
    { label: "Операционные расходы", value: "25%", color: "from-pink-500 to-red-500" }
  ],
  roi: [
    { label: "Возврат инвестиций", value: "24-36 мес" },
    { label: "Целевая оценка", value: "300-400M ₽" },
    { label: "Доля инвестора", value: "15-20%" }
  ],
  metrics: [
    { label: "Retention Rate", value: "80%+", description: "на 3 месяц" },
    { label: "Churn Rate", value: "<5%", description: "в месяц" },
    { label: "NPS", value: "50+", description: "индекс лояльности" }
  ]
};

export const Investment = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Инвестиционная возможность
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Первый раунд для быстрого захвата рынка и масштабирования платформы
        </p>
      </motion.div>

      {/* Investment Amount */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-block relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur transition-all"></div>
          <div className="relative px-8 py-4 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
            <div className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {investmentData.amount}
            </div>
            <div className="text-sm text-gray-400">Сумма инвестиций</div>
          </div>
        </div>
      </motion.div>

      {/* Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
        {investmentData.distribution.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative h-full p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {item.value}
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROI & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ROI */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">ROI для инвестора</h3>
            <div className="space-y-4">
              {investmentData.roi.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-sm md:text-base font-medium text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Ключевые метрики успеха</h3>
            <div className="space-y-4">
              {investmentData.metrics.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm md:text-base font-medium text-white">{item.value}</div>
                    <div className="text-xs text-gray-500">({item.description})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 