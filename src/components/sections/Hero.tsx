"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "45M+", label: "Пользователей AI в СНГ" },
  { value: "$1.2B", label: "Объем рынка" },
  { value: "156%", label: "Рост за 2023" },
];

export const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] flex flex-col justify-center text-center relative px-4 md:px-6">
      {/* Investment Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-8 md:mb-12"
      >
        <div className="group px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <span className="text-sm md:text-base text-purple-400 tracking-tight">
            SEED ROUND • 
            <span className="text-purple-300 group-hover:text-purple-200 transition-colors ml-1">
              $100K - $5M
            </span>
          </span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="text-xs md:text-sm uppercase text-gray-400 tracking-widest mb-3 md:mb-4">Первый в СНГ</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-4">
          AI Marketplace
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300/80 tracking-tight max-w-2xl mx-auto">
          Единая подписка на все AI‑сервисы <br className="hidden sm:block"/>с экономией до 70%
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-16"
      >
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur-sm group-hover:blur transition-all"></div>
            <div className="relative px-4 md:px-8 py-3 md:py-4 bg-slate-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <div className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 tracking-tight">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
       
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
          <span className="text-xs md:text-sm tracking-tight">Scroll to explore</span>
        </div>
      </motion.div>
    </div>
  );
}; 