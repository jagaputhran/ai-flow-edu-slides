
import { motion } from "framer-motion";
import { Zap, Code, ExternalLink, Cpu, Network, Bot, Brain } from "lucide-react";

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
      {/* Advanced AI Brain Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mb-6 relative h-48 flex items-center justify-center"
      >
        {/* Central AI Brain */}
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative"
        >
          {/* Brain core */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.3)",
                "0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)",
                "0 0 30px rgba(16, 185, 129, 0.5), 0 0 50px rgba(59, 130, 246, 0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 rounded-full flex items-center justify-center relative z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 6, repeat: Infinity, ease: "linear" }
              }}
            >
              <Brain className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Neural network nodes */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const radius = 80;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 bg-blue-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                animate={{ 
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0.4, 1, 0.4],
                  backgroundColor: [
                    "rgb(59, 130, 246)",
                    "rgb(147, 51, 234)",
                    "rgb(16, 185, 129)",
                    "rgb(59, 130, 246)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            );
          })}

          {/* Neural connections */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const nextAngle = ((i + 1) * 30) * Math.PI / 180;
            
            return (
              <motion.div
                key={`connection-${i}`}
                className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-blue-400/60 to-transparent"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "50% 100%",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
                animate={{ 
                  opacity: [0.2, 0.8, 0.2],
                  scaleY: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}

          {/* Data flow particles */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const startRadius = 30;
            const endRadius = 100;
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  background: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#10b981"
                }}
                animate={{
                  x: [
                    Math.cos(angle) * startRadius,
                    Math.cos(angle) * endRadius,
                    Math.cos(angle) * startRadius
                  ],
                  y: [
                    Math.sin(angle) * startRadius,
                    Math.sin(angle) * endRadius,
                    Math.sin(angle) * startRadius
                  ],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Orbiting satellites */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`satellite-${i}`}
              className="absolute"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? "bg-blue-400" : i === 1 ? "bg-purple-400" : "bg-green-400"
                }`}
                style={{
                  transform: `translateY(-${60 + i * 15}px)`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Background energy waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute border border-blue-400/20 rounded-full"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Creative Animated "AI with JAGA" Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-8 relative"
      >
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981, #f59e0b)",
              "linear-gradient(45deg, #8b5cf6, #10b981, #f59e0b, #3b82f6)",
              "linear-gradient(45deg, #10b981, #f59e0b, #3b82f6, #8b5cf6)",
              "linear-gradient(45deg, #f59e0b, #3b82f6, #8b5cf6, #10b981)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="text-6xl md:text-8xl font-black bg-clip-text text-transparent relative inline-block"
          style={{
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 30px rgba(16, 185, 129, 0.5)",
                "0 0 35px rgba(245, 158, 11, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI
          </motion.span>
          <motion.span
            className="mx-4 text-white/60"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            with
          </motion.span>
          <motion.span
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            JAGA
          </motion.span>
        </motion.div>

        {/* Floating particles around text */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`text-particle-${i}`}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0 ? "bg-blue-400/60" : 
                i % 4 === 1 ? "bg-purple-400/60" : 
                i % 4 === 2 ? "bg-green-400/60" : "bg-yellow-400/60"
              }`}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 80 - 40, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          animate={{
            borderColor: [
              "rgba(59, 130, 246, 0.3)",
              "rgba(147, 51, 234, 0.3)",
              "rgba(16, 185, 129, 0.3)",
              "rgba(245, 158, 11, 0.3)"
            ],
            boxShadow: [
              "0 0 30px rgba(59, 130, 246, 0.2)",
              "0 0 40px rgba(147, 51, 234, 0.2)",
              "0 0 35px rgba(16, 185, 129, 0.2)",
              "0 0 38px rgba(245, 158, 11, 0.2)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
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
        className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto"
      >
        Welcome to your comprehensive journey through Artificial Intelligence.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
      >
        From foundational concepts to cutting-edge applications with interactive learning.
      </motion.p>

      {/* Enhanced feature highlights */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 items-center mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-400/30"
        >
          <Zap className="w-5 h-5" />
          <span className="whitespace-nowrap">Interactive</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-400/30"
        >
          <Code className="w-5 h-5" />
          <span className="whitespace-nowrap">Practical</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-2 rounded-lg border border-green-400/30"
        >
          <Brain className="w-5 h-5" />
          <span className="whitespace-nowrap">Comprehensive</span>
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
