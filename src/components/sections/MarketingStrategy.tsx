"use client";
import { motion } from "framer-motion";

const marketingChannels = [
  {
    title: "Influencer Marketing",
    gradient: "from-purple-500 to-pink-500",
    description: "Коллаборации с ключевыми лидерами мнений",
    segments: [
      { name: "Tech & AI Блогеры", reach: "2.5M+" },
      { name: "Бизнес и Стартапы", reach: "4.1M+" },
      { name: "Дизайн и Креатив", reach: "3.2M+" },
      { name: "Digital & SMM", reach: "1.8M+" }
    ],
    tactics: [
      "Эксклюзивные промокоды для подписчиков",
      "Совместные прямые эфиры и туториалы",
      "Челленджи с использованием AI Hub",
      "Программа амбассадоров бренда"
    ]
  },
  {
    title: "Контент Стратегия",
    gradient: "from-blue-500 to-purple-500",
    description: "Мультиформатный контент на всех площадках",
    segments: [
      { name: "YouTube", reach: "500K просмотров/мес" },
      { name: "Instagram Reels", reach: "1M+ охват" },
      { name: "TikTok", reach: "2M+ просмотров" },
      { name: "Telegram", reach: "100K+ подписчиков" }
    ],
    tactics: [
      "AI туториалы и кейсы использования",
      "Вирусные ролики с AI-генерацией",
      "Behind the scenes разработки",
      "Интервью с экспертами рынка"
    ]
  },
  {
    title: "PR & Media",
    gradient: "from-pink-500 to-red-500",
    description: "Системная работа со СМИ и лидерами мнений",
    segments: [
      { name: "VC.ru & RB.ru", reach: "Топ-3 публикации" },
      { name: "Forbes & РБК", reach: "Ключевые СМИ" },
      { name: "Tech-блоги", reach: "50+ публикаций" },
      { name: "Подкасты", reach: "20+ выпусков" }
    ],
    tactics: [
      "Эксклюзивные интервью с основателями",
      "Публикация исследований рынка AI",
      "Кейсы успеха клиентов",
      "Экспертные колонки и комментарии"
    ]
  },
  {
    title: "Performance Marketing",
    gradient: "from-green-500 to-teal-500",
    description: "Таргетированная реклама и платный трафик",
    segments: [
      { name: "VK Ads", reach: "2M+ охват" },
      { name: "MyTarget", reach: "1.5M+ охват" },
      { name: "Яндекс", reach: "500K+ клики" },
      { name: "Google Ads", reach: "300K+ клики" }
    ],
    tactics: [
      "Look-alike аудитории по клиентам",
      "Ретаргетинг по взаимодействиям",
      "Programmatic размещения",
      "A/B тестирование креативов"
    ]
  }
];

const kpis = [
  { metric: "CAC", value: "$15-25", description: "Стоимость привлечения клиента" },
  { metric: "CPO", value: "$2-5", description: "Стоимость целевого действия" },
  { metric: "ROI", value: "350%+", description: "Возврат на маркетинговые инвестиции" },
  { metric: "CRR", value: "25%+", description: "Коэффициент конверсии в подписку" }
];

export const MarketingStrategy = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Стратегия продвижения
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Комплексный подход к масштабированию с фокусом на ключевые каналы привлечения
        </p>
      </motion.div>

      {/* Marketing Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {marketingChannels.map((channel, index) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${channel.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative h-full p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{channel.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{channel.description}</p>

              {/* Segments */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Ключевые сегменты:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {channel.segments.map((segment, i) => (
                    <div key={i} className="flex items-center justify-between text-xs md:text-sm p-2 bg-slate-800/50 rounded-lg">
                      <span className="text-gray-300">{segment.name}</span>
                      <span className="text-purple-400">{segment.reach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tactics */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Тактики:</h4>
                <ul className="space-y-1">
                  {channel.tactics.map((tactic, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${channel.gradient} mr-2 flex-shrink-0`}></div>
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {kpis.map((kpi, index) => (
          <div key={kpi.metric} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur transition-all"></div>
            <div className="relative px-4 py-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">{kpi.metric}</span>
                <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {kpi.value}
                </span>
              </div>
              <div className="text-xs text-gray-500">{kpi.description}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}; 