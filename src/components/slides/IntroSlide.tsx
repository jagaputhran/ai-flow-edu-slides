
import { motion } from "framer-motion";
import { Brain, Zap, Code } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const IntroSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative inline-block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            style={{ width: "120px", height: "120px" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-purple-400/40"
          />
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative z-10 mx-auto">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        <span className="text-blue-400">{slideNumber}.</span> Introduction
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
      >
        Welcome to your comprehensive journey through Artificial Intelligence.
        From foundational concepts to cutting-edge applications.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center gap-8 items-center"
      >
        <div className="flex items-center gap-2 text-blue-400">
          <Zap className="w-5 h-5" />
          <span>Interactive</span>
        </div>
        <div className="flex items-center gap-2 text-purple-400">
          <Code className="w-5 h-5" />
          <span>Practical</span>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <Brain className="w-5 h-5" />
          <span>Comprehensive</span>
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroSlide;
