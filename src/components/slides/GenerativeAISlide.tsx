
import { motion } from "framer-motion";
import { MessageSquare, Image, Code, Music } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const GenerativeAISlide = ({ slideNumber }: SlideProps) => {
  const models = [
    {
      name: "GPT",
      type: "Language",
      icon: MessageSquare,
      color: "green",
      description: "Text generation and conversation"
    },
    {
      name: "DALL-E",
      type: "Images",
      icon: Image,
      color: "pink",
      description: "Text-to-image generation"
    },
    {
      name: "Codex",
      type: "Code",
      icon: Code,
      color: "blue",
      description: "Code generation and completion"
    },
    {
      name: "MuseNet",
      type: "Audio",
      icon: Music,
      color: "purple",
      description: "Music composition and audio"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Generative AI & LLMs
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br from-${model.color}-500/20 to-${model.color}-600/10 rounded-2xl border border-${model.color}-400/30 p-6 text-center relative overflow-hidden`}
          >
            {/* Background animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute inset-0 bg-${model.color}-400/10 rounded-2xl`}
            />

            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`relative w-16 h-16 bg-${model.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <model.icon className={`w-8 h-8 text-${model.color}-400`} />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
            <p className={`text-${model.color}-400 text-sm font-medium mb-3`}>{model.type}</p>
            <p className="text-white/70 text-sm">{model.description}</p>

            {/* Generation indicator */}
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className={`absolute bottom-0 left-0 h-1 bg-${model.color}-400`}
            />
          </motion.div>
        ))}
      </div>

      {/* LLM Architecture Overview */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Large Language Model Pipeline</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-blue-400 font-bold text-lg">Input</span>
            </div>
            <p className="text-white/80 text-sm">Token<br/>Embedding</p>
          </div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden md:block text-blue-400"
          >
            →
          </motion.div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-purple-400 font-bold text-lg">🧠</span>
            </div>
            <p className="text-white/80 text-sm">Transformer<br/>Layers</p>
          </div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="hidden md:block text-purple-400"
          >
            →
          </motion.div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-green-400 font-bold text-lg">Output</span>
            </div>
            <p className="text-white/80 text-sm">Generated<br/>Text</p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-white/70 text-sm mt-6"
        >
          LLMs predict the next token based on previous context, enabling human-like text generation
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GenerativeAISlide;
