"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("investor"); // investor, partner, other

  return (
    <section className="mb-24">
      <div className="max-w-4xl mx-auto relative">
        {/* Background Effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-xl"></div>

        {/* Content */}
        <div className="relative p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Присоединяйтесь к будущему AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Инвестиционная возможность: Seed Round • $500K - $1.5M • ROI 24-36 мес
            </p>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: "42%", label: "Рост рынка/год" },
              { value: "70%", label: "Маржинальность" },
              { value: "15%", label: "Доля рынка (цель)" },
              { value: "x10", label: "Потенциал роста" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4 mb-4">
              {[
                { value: "investor", label: "Инвестор" },
                { value: "partner", label: "Партнер" },
                { value: "other", label: "Другое" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setRole(option.value)}
                  className={`flex-1 px-4 py-2 rounded-full text-sm transition-all ${
                    role === option.value
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "border border-purple-500/20 hover:border-purple-500/40 text-gray-400"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="relative group mb-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-50 transition blur"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="relative w-full px-6 py-3 bg-slate-900/90 rounded-full border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
              />
            </div>

            <button className="w-full relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition"></div>
              <span className="relative block bg-slate-900 text-white px-8 py-3 rounded-full text-center">
                Получить питч-дек
              </span>
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              Отправляя форму, вы соглашаетесь на обработку персональных данных
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 