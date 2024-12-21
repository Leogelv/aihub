"use client";
import { motion } from "framer-motion";

const services = [
  {
    name: "ChatGPT & Claude",
    description: "Самые мощные языковые модели для работы с текстом",
    features: ["Анализ данных", "Написание текстов", "Программирование"],
    price: "от 2000₽/мес",
    gradient: "from-green-500 to-emerald-500",
    category: "Text"
  },
  {
    name: "Midjourney & DALL-E",
    description: "Генерация изображений профессионального качества",
    features: ["Арт", "Дизайн", "Реалистичные фото"],
    price: "от 2500₽/мес",
    gradient: "from-purple-500 to-pink-500",
    category: "Image"
  },
  {
    name: "Runway & Pika",
    description: "Продвинутая генерация и редактирование видео",
    features: ["3D анимация", "Видеомонтаж", "Спецэффекты"],
    price: "от 3000₽/мес",
    gradient: "from-blue-500 to-cyan-500",
    category: "Video"
  },
  {
    name: "11Labs & RVC",
    description: "Синтез и клонирование голоса",
    features: ["Озвучка текста", "Клонирование голоса", "Локализация"],
    price: "от 2000₽/мес",
    gradient: "from-orange-500 to-red-500",
    category: "Audio"
  },
  {
    name: "Stable Diffusion",
    description: "Локальная генерация изображений без ограничений",
    features: ["Без цензуры", "Без очередей", "Полный контроль"],
    price: "от 1500₽/мес",
    gradient: "from-indigo-500 to-purple-500",
    category: "Image"
  },
  {
    name: "Custom Models",
    description: "Доступ к специализированным AI моделям",
    features: ["Обучение на ваших данных", "API доступ", "Интеграции"],
    price: "от 4500₽/мес",
    gradient: "from-rose-500 to-pink-500",
    category: "Enterprise"
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
          Все популярные AI сервисы
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Единая подписка на все необходимые инструменты • Экономия до 70% • Оплата в рублях
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