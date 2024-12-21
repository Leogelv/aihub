"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Генерация видео",
    description: "Создавайте профессиональные видео с помощью ведущих AI-моделей",
    gradient: "from-blue-500 to-purple-500",
    tools: [
      { name: "Synthesia", description: "Видео с AI-ведущими" },
      { name: "Runway", description: "Генерация и редактирование видео" },
      { name: "Pika", description: "Текст в видео" },
      { name: "Hauluio Minimax", description: "Анимация персонажей" },
      { name: "Kling", description: "Короткие видео" },
      { name: "Sora", description: "Генерация видео от OpenAI" },
      { name: "Veo2", description: "Профессиональный видеоконтент" }
    ]
  },
  {
    title: "3D генерация",
    description: "Создавайте 3D модели и сцены с помощью AI",
    gradient: "from-purple-500 to-pink-500",
    tools: [
      { name: "3D Characters", description: "Генерация персонажей" },
      { name: "3D Scenes", description: "Создание сцен и окружения" },
      { name: "3D Animation", description: "Анимация объектов" }
    ]
  },
  {
    title: "Генерация музыки",
    description: "Создавайте уникальные треки и звуковые эффекты",
    gradient: "from-pink-500 to-red-500",
    tools: [
      { name: "Music Generation", description: "Создание полных треков" },
      { name: "Sound Effects", description: "Генерация звуковых эффектов" },
      { name: "Voice Mixing", description: "Микширование голоса и музыки" }
    ]
  },
  {
    title: "Генерация аватаров",
    description: "Создавайте уникальные аватары для любых целей",
    gradient: "from-red-500 to-orange-500",
    tools: [
      { name: "Profile Avatars", description: "Для соцсетей и профилей" },
      { name: "Character Design", description: "Дизайн персонажей" },
      { name: "Style Transfer", description: "Перенос стиля на фото" }
    ]
  },
  {
    title: "Генерация голоса",
    description: "Профессиональное озвучивание и клонирование голоса",
    gradient: "from-orange-500 to-yellow-500",
    tools: [
      { name: "11labs", description: "Премиум голосовые модели" },
      { name: "Voice Cloning", description: "Клонирование голоса" },
      { name: "Text to Speech", description: "Преобразование текста в речь" }
    ]
  },
  {
    title: "Управление подписками",
    description: "Удобные инструменты для работы с платформой",
    gradient: "from-yellow-500 to-green-500",
    tools: [
      { name: "Биллинг", description: "Управление подписками" },
      { name: "Mini App", description: "Мобильное приложение" },
      { name: "Web App", description: "Веб-интерфейс" },
      { name: "API v1.0", description: "Для разработчиков" }
    ]
  }
];

export const AIFeatures = () => {
  return (
    <section className="mb-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-4">
          AI-инструменты нового поколения
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Все популярные нейросети в одной подписке с единым API
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative h-full p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
              {/* Feature Header */}
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className={`px-2 md:px-3 py-1 rounded-full text-xs bg-gradient-to-r ${feature.gradient} bg-opacity-10 text-white/80`}>
                  {feature.title}
                </span>
              </div>
              
              <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">{feature.description}</p>
              
              {/* Tools List */}
              <ul className="space-y-2 md:space-y-3">
                {feature.tools.map((tool, i) => (
                  <li key={i} className="relative group/tool">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <div className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-2`}></div>
                        <span className="text-xs md:text-sm font-medium text-white">{tool.name}</span>
                      </div>
                      <span className="text-[10px] md:text-xs text-gray-500 group-hover/tool:text-gray-400 transition-colors">
                        {tool.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 