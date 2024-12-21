"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "$320M", label: "SAM" },
  { number: "42%", label: "Рост рынка/год" },
  { number: "45M", label: "Потенциальных клиентов в СНГ" },
  { number: "70%", label: "Маржинальность" }
];

export const MarketStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur transition-all"></div>
            <div className="relative px-6 py-4 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 tracking-tight">{stat.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 