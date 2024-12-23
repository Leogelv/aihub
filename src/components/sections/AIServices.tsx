"use client";
import { motion } from "framer-motion";

const services = [
  {
    name: "AI Фото Студия",
    description: "Создавай крутые фотки для бизнеса и личного бренда",
    features: [
      "Генерация фото для Instagram",
      "Обработка фото как у профи", 
      "Стильные аватарки",
      "Inpainting - умное удаление объектов",
      "Расширение изображений (Outpainting)",
      "Замена фона и объектов",
      "Апскейл фото в HD качество",
      "Генерация вариаций фото"
    ],
    price: "от 1500₽/мес",
    gradient: "from-pink-500 to-rose-500",
    category: "Фото"
  },
  {
    name: "Видео Мастер PRO",
    description: "Полный комплекс AI-инструментов для создания видео",
    features: [
      "Генерация видео из текста",
      "Виральные видео для TikTok и Reels",
      "Профессиональный монтаж за минуты", 
      "Реалистичные спецэффекты и анимация",
      "Липсинк и дипфейки",
      "Автоматическая цветокоррекция",
      "Генерация 3D-сцен",
      "Удаление/замена фона в видео",
      "Стабилизация тряски",
      "Апскейл видео до 4K"
    ],
    price: "от 3990₽/мес",
    gradient: "from-blue-500 to-cyan-500", 
    category: "Видео"
  },
  {
    name: "Текстовый Гений PRO",
    description: "Пиши тексты на уровне топовых копирайтеров и журналистов",
    features: [
      "Вирусные посты для соцсетей",
      "Продающие тексты и скрипты продаж",
      "Статьи и SEO-оптимизированный контент",
      "Автоматизация текстовых задач",
      "Юридические документы и договоры",
      "Email-маркетинг и рассылки",
      "Генерация идей для контента",
      "Рерайт и оптимизация текстов",
      "Проверка уникальности",
      "Многоязычный перевод"
    ],
    price: "от 2490₽/мес",
    gradient: "from-green-500 to-emerald-500",
    category: "Текст PRO"
  },
  {
    name: "Аудио Мастер PRO",
    description: "Полный комплекс AI-инструментов для работы со звуком",
    features: [
      "Реалистичная озвучка на 50+ языках",
      "Очистка голоса от шумов и эха",
      "Конвертация голоса в разные тембры",
      "Генерация музыки по описанию",
      "Преобразование нот в MIDI",
      "Автоматическая обработка подкастов",
      "Создание аудиокниг с эмоциями",
      "Генерация звуковых эффектов",
      "Мастеринг и сведение",
      "Изоляция вокала и инструментов"
    ],
    price: "от 2990₽/мес",
    gradient: "from-amber-500 to-orange-500",
    category: "Аудио PRO"
  },
  {
    name: "Бизнес Ассистент",
    description: "AI помощник для твоего бизнеса",
    features: ["Ответы клиентам 24/7", "Аналитика продаж", "Автоматизация рутины", "Аналитика больших данных", "Автоматизация документооборота", "Автоматизация продаж", "Автоматизация маркетинга"],
    price: "от 5000₽/мес",
    gradient: "from-violet-500 to-purple-500",
    category: "Бизнес"
  },
  {
    name: "Креатив Про MAX",
    description: "Революционная AI-система для взрывного креатива",
    features: [
      "Вирусные идеи для контента", 
      "Продвинутые маркетинговые стратегии",
      "Уникальные креативные концепции",
      "Анализ трендов в реальном времени",
      "Генерация визуальных референсов",
      "AI-брейншторминг сессии"
    ],
    price: "от 4990₽/мес",
    gradient: "from-indigo-600 to-blue-600",
    category: "Креатив PRO"
  }
];

export const AIServices = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          AI инструменты для всего
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Создавай контент как профи • Экономь время и деньги • Начни прямо сейчас
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
            <div className="relative p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${service.gradient} bg-opacity-10 text-white/80`}>
                  {service.category}
                </span>
                <span className="text-sm text-purple-400">{service.price}</span>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
      
      </motion.div>
    </section>
  );
}; 