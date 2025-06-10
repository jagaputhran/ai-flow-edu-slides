
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Brain, Zap } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const WhatIsAISlide = ({ slideNumber }: SlideProps) => {
  const aiTypes = [
    {
      title: "Narrow AI",
      subtitle: "Task-specific",
      icon: Cpu,
      color: "blue",
      description: "Designed for specific tasks like image recognition or chess"
    },
    {
      title: "General AI",
      subtitle: "Human-level",
      icon: Brain,
      color: "purple",
      description: "Matches human cognitive abilities across all domains"
    },
    {
      title: "Super AI",
      subtitle: "Beyond human",
      icon: Zap,
      color: "yellow",
      description: "Surpasses human intelligence in all areas"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> What is AI?
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {aiTypes.map((type, index) => (
          <div key={type.title} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`w-48 h-64 bg-gradient-to-br from-${type.color}-500/20 to-${type.color}-600/10 rounded-2xl border border-${type.color}-400/30 p-6 flex flex-col items-center justify-center text-center`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-${type.color}-500/20 rounded-full flex items-center justify-center mb-4`}
                >
                  <type.icon className={`w-8 h-8 text-${type.color}-400`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className={`text-${type.color}-400 text-sm font-medium mb-3`}>{type.subtitle}</p>
                <p className="text-white/70 text-sm">{type.description}</p>
              </div>

              {/* Connection lines */}
              {index < aiTypes.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 origin-left"
                >
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-purple-400" />
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center text-white/80 text-lg mt-12 max-w-3xl mx-auto"
      >
        Currently, we operate in the <span className="text-blue-400 font-semibold">Narrow AI</span> era, 
        with glimpses of progress toward General AI through large language models and multimodal systems.
      </motion.p>
    </div>
  );
};

export default WhatIsAISlide;
