"use client";
import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.4, 0.3]
          }} 
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[120px] gradient-blob" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[120px] gradient-blob" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [-45, 45, -45],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[120px] gradient-blob" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="grid-pattern"></div>
      </div>

      {/* Floating Tech Words */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[
          { text: "AI", x: 20, y: 30 },
          { text: "ML", x: 70, y: 60 },
          { text: "Neural Networks", x: 40, y: 80 },
          { text: "Deep Learning", x: 80, y: 20 },
          { text: "ROI", x: 30, y: 70 },
          { text: "API", x: 60, y: 40 }
        ].map((word, i) => (
          <motion.div
            key={word.text}
            className="absolute text-white/50 text-xl font-bold pointer-events-none"
            initial={{ x: `${word.x}%`, y: `${word.y}%` }}
            animate={{
              x: [`${word.x}%`, `${word.x + 5}%`, `${word.x}%`],
              y: [`${word.y}%`, `${word.y - 5}%`, `${word.y}%`],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          >
            {word.text}
          </motion.div>
        ))}
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay"></div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-30"></div>
    </div>
  );
}; 