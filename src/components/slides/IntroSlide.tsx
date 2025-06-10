
import { motion } from "framer-motion";
import { Brain, Zap, Code, ExternalLink, Cpu, Network, Bot } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const IntroSlide = ({ slideNumber }: SlideProps) => {
  const aiTopics = [
    { name: "Machine Learning", url: "https://www.google.com/search?q=machine+learning+basics", icon: Brain },
    { name: "Neural Networks", url: "https://www.google.com/search?q=neural+networks+explained", icon: Network },
    { name: "Deep Learning", url: "https://www.google.com/search?q=deep+learning+tutorial", icon: Cpu },
    { name: "AI Applications", url: "https://www.google.com/search?q=artificial+intelligence+applications", icon: Bot }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 text-center relative overflow-hidden">
      {/* Enhanced AI Brain Visual */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="relative inline-block">
          {/* Multiple rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            style={{ width: "160px", height: "160px" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-purple-400/40"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-green-400/30"
          />
          
          {/* Central AI brain */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.8)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 rounded-full flex items-center justify-center relative z-10 mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>

          {/* Neural connection lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-12 bg-gradient-to-t from-transparent via-blue-400/60 to-transparent"
              style={{
                left: "50%",
                top: "10%",
                transformOrigin: "50% 200px",
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{ 
                opacity: [0, 1, 0],
                height: [40, 48, 40]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        <span className="text-blue-400">{slideNumber}.</span> AI with{" "}
        <motion.span
          animate={{ 
            background: [
              "linear-gradient(45deg, #3b82f6, #8b5cf6)",
              "linear-gradient(45deg, #8b5cf6, #10b981)",
              "linear-gradient(45deg, #10b981, #3b82f6)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent font-extrabold"
        >
          JAGA
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
      >
        Welcome to your comprehensive journey through Artificial Intelligence.
        From foundational concepts to cutting-edge applications with interactive learning.
      </motion.p>

      {/* Enhanced feature highlights */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center gap-8 items-center mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-400/30"
        >
          <Zap className="w-5 h-5" />
          <span>Interactive</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-400/30"
        >
          <Code className="w-5 h-5" />
          <span>Practical</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-2 rounded-lg border border-green-400/30"
        >
          <Brain className="w-5 h-5" />
          <span>Comprehensive</span>
        </motion.div>
      </motion.div>

      {/* Embedded links section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {aiTopics.map((topic, index) => (
          <motion.a
            key={topic.name}
            href={topic.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              className="w-8 h-8 mx-auto mb-2 text-blue-400 group-hover:text-white transition-colors"
            >
              <topic.icon className="w-full h-full" />
            </motion.div>
            <p className="text-white/80 text-sm group-hover:text-white transition-colors">{topic.name}</p>
            <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-blue-400 transition-colors mx-auto mt-1" />
          </motion.a>
        ))}
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? "bg-blue-400/40" : 
              i % 3 === 1 ? "bg-purple-400/40" : "bg-green-400/40"
            }`}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * -150, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
          />
        ))}
      </div>

      {/* AI-themed background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-400/20 rounded-lg"
            style={{
              width: `${80 + i * 20}px`,
              height: `${60 + i * 15}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroSlide;
