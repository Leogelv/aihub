"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const financialModel = {
  investment: {
    seed: "20 млн ₽",
    round_a: "100 млн ₽",
    marketing: "2 млн ₽ (первый месяц)"
  },
  metrics: {
    cac: "от 990₽",
    ltv: "от 12,000₽",
    margin: "80%",
    payback: "3-4 месяца"
  },
  projections: {
    year1: {
      revenue: "150+ млн ₽",
      users: "10,000+",
      margin: "70%"
    },
    year2: {
      revenue: "500+ млн ₽",
      users: "50,000+",
      margin: "75%"
    },
    year3: {
      revenue: "1.5+ млрд ₽",
      users: "200,000+",
      margin: "80%"
    }
  }
};

export const Investment = () => {
  const [showStrategy, setShowStrategy] = useState(false);

  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
          Инвестиционная привлекательность
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Прозрачная финансовая модель • Быстрый возврат инвестиций • Масштабируемый бизнес
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {/* Раунды */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 bg-slate-900/90 rounded-2xl border border-green-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Инвестиционные раунды</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Seed Round</h4>
              <p className="text-gray-300">Сумма: {financialModel.investment.seed}</p>
              <ul className="mt-2 space-y-1 text-gray-400">
                <li>• MVP и запуск базовых сервисов</li>
                <li>• Маркетинг и привлечение первых клиентов</li>
                <li>• Формирование core-команды</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Round A (2024)</h4>
              <p className="text-gray-300">Сумма: {financialModel.investment.round_a}</p>
              <ul className="mt-2 space-y-1 text-gray-400">
                <li>• Масштабирование продукта</li>
                <li>• Выход на международные рынки</li>
                <li>• R&D и новые технологии</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Метрики */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 bg-slate-900/90 rounded-2xl border border-green-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ключевые метрики</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400">CAC</p>
              <p className="text-2xl font-bold text-green-400">{financialModel.metrics.cac}</p>
            </div>
            <div>
              <p className="text-gray-400">LTV</p>
              <p className="text-2xl font-bold text-green-400">{financialModel.metrics.ltv}</p>
            </div>
            <div>
              <p className="text-gray-400">Маржинальность</p>
              <p className="text-2xl font-bold text-green-400">{financialModel.metrics.margin}</p>
            </div>
            <div>
              <p className="text-gray-400">Окупаемость</p>
              <p className="text-2xl font-bold text-green-400">{financialModel.metrics.payback}</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Прогноз роста</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">2024</span>
                <span className="text-green-400 font-bold">{financialModel.projections.year1.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">2025</span>
                <span className="text-green-400 font-bold">{financialModel.projections.year2.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">2026</span>
                <span className="text-green-400 font-bold">{financialModel.projections.year3.revenue}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Стратегия запуска */}
      <div className="text-center">
        <button
          onClick={() => setShowStrategy(!showStrategy)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          {showStrategy ? "Скрыть стратегию" : "Показать стратегию запуска"}
        </button>

        {showStrategy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-slate-900/90 rounded-2xl border border-purple-500/20 max-w-4xl mx-auto text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Стратегия быстрого запуска</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Этап 1: MVP (1-2 месяца)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Интеграция топовых API (Midjourney, ChatGPT, Stable Diffusion)</li>
                  <li>• Разработка удобного UI/UX</li>
                  <li>• Базовая автоматизация процессов</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Этап 2: Маркетинг (2-3 месяца)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Вложение {financialModel.investment.marketing} в таргет</li>
                  <li>• Партнёрства с блогерами и инфлюенсерами</li>
                  <li>• PR в профильных СМИ</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Этап 3: Рост (3-6 месяцев)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Оптимизация юнит-экономики</li>
                  <li>• Расширение функционала</li>
                  <li>• Запуск корпоративных решений</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 