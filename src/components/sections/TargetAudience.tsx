"use client";
import { motion } from "framer-motion";

const audienceData = [
  {
    title: "Частные лица",
    share: "40%",
    gradient: "from-blue-500 to-purple-500",
    segments: [
      "Блогеры и инфлюенсеры",
      "Предприниматели-одиночки",
      "Студенты и преподаватели",
      "Творческие личности",
      "Специалисты на фрилансе"
    ],
    problems: [
      "Высокая стоимость отдельных подписок",
      "Сложность выбора нужных AI-сервисов",
      "Отсутствие единого интерфейса",
      "Проблемы с оплатой зарубежных сервисов"
    ],
    trigger: "Доступ ко всем AI-сервисам по цене одного"
  },
  {
    title: "Креативные профессионалы",
    share: "35%",
    gradient: "from-purple-500 to-pink-500",
    segments: [
      "Контент-мейкеры и копирайтеры",
      "Дизайнеры и художники",
      "Видеографы и монтажеры",
      "Маркетологи и SMM",
      "Разработчики и UI/UX"
    ],
    problems: [
      "Потребность в разных типах контента",
      "Высокие временные затраты",
      "Необходимость в специализированных AI",
      "Сложность интеграции в рабочий процесс"
    ],
    trigger: "Ускорение работы в 3-5 раз с AI-автоматизацией"
  },
  {
    title: "Бизнес",
    share: "25%",
    gradient: "from-pink-500 to-red-500",
    segments: [
      "Малый и средний бизнес",
      "Digital-агентства",
      "Образовательные проекты",
      "Стартапы и IT-компании",
      "Корпоративные клиенты"
    ],
    problems: [
      "Высокие затраты на контент-продакшн",
      "Сложность масштабирования процессов",
      "Безопасность и конфиденциальность",
      "Необходимость в API и интеграциях"
    ],
    trigger: "Единая платформа для всех AI-задач компании"
  }
];

export const TargetAudience = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          Целевая аудитория
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Три ключевых сегмента с разными потребностями и высоким потенциалом роста
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {audienceData.map((segment, index) => (
          <motion.div
            key={segment.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${segment.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative h-full p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{segment.title}</h3>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs bg-gradient-to-r ${segment.gradient} bg-opacity-10 text-white/80`}>
                    Доля рынка: {segment.share}
                  </div>
                </div>
              </div>

              {/* Segments */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Ключевые подсегменты:</h4>
                <ul className="space-y-1">
                  {segment.segments.map((item, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${segment.gradient} mr-2 flex-shrink-0`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problems */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Ключевые проблемы:</h4>
                <ul className="space-y-1">
                  {segment.problems.map((problem, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${segment.gradient} mr-2 flex-shrink-0`}></div>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trigger */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Триггер покупки:</h4>
                <p className="text-xs md:text-sm text-gray-400">{segment.trigger}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {[
          { value: "92%", label: "используют минимум 2 AI-сервиса" },
          { value: "70%", label: "готовы сменить текущие сервисы" },
          { value: "3.5x", label: "рост спроса за последний год" },
          { value: "85%", label: "ищут единое решение" }
        ].map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur transition-all"></div>
            <div className="relative px-4 py-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 tracking-tight">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}; 