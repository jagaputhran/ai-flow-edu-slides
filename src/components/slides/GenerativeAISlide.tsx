
import { motion } from "framer-motion";
import { MessageSquare, Image, Code, Music, ArrowRight, ExternalLink, Layers, Zap } from "lucide-react";

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
      description: "Text generation and conversation",
      url: "https://www.google.com/search?q=GPT+language+model+explained"
    },
    {
      name: "DALL-E",
      type: "Images",
      icon: Image,
      color: "pink",
      description: "Text-to-image generation",
      url: "https://www.google.com/search?q=DALL-E+image+generation"
    },
    {
      name: "Codex",
      type: "Code",
      icon: Code,
      color: "blue",
      description: "Code generation and completion",
      url: "https://www.google.com/search?q=OpenAI+Codex+code+generation"
    },
    {
      name: "MuseNet",
      type: "Audio",
      icon: Music,
      color: "purple",
      description: "Music composition and audio",
      url: "https://www.google.com/search?q=MuseNet+AI+music+generation"
    }
  ];

  const pipelineSteps = [
    {
      title: "Input Preprocessing",
      subtitle: "Tokenization & Encoding",
      description: "Text → Token IDs → Embeddings",
      color: "blue",
      details: ["Byte Pair Encoding", "WordPiece Tokenization", "Positional Encoding"]
    },
    {
      title: "Embedding Layer",
      subtitle: "Vector Representation",
      description: "Token + Position = Input Vector",
      color: "purple",
      details: ["Token Embeddings", "Positional Embeddings", "Learned Representations"]
    },
    {
      title: "Transformer Blocks",
      subtitle: "N Stacked Layers",
      description: "Self-Attention + Feed Forward",
      color: "green",
      details: ["Multi-Head Attention", "Layer Normalization", "Residual Connections"]
    },
    {
      title: "Output Generation",
      subtitle: "Token Prediction",
      description: "Softmax → Next Token",
      color: "orange",
      details: ["Linear Projection", "Vocabulary Softmax", "Sampling Strategies"]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Generative AI & LLMs
      </motion.h1>

      {/* Enhanced model cards with links */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {models.map((model, index) => (
          <motion.a
            key={model.name}
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`group bg-gradient-to-br from-${model.color}-500/20 to-${model.color}-600/10 rounded-2xl border border-${model.color}-400/30 p-6 text-center relative overflow-hidden cursor-pointer`}
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
            <p className="text-white/70 text-sm mb-3">{model.description}</p>
            
            <ExternalLink className={`w-4 h-4 text-${model.color}-400 group-hover:text-white transition-colors mx-auto`} />

            {/* Generation indicator */}
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className={`absolute bottom-0 left-0 h-1 bg-${model.color}-400`}
            />
          </motion.a>
        ))}
      </div>

      {/* Enhanced LLM Pipeline with detailed explanation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8 mb-8"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <Layers className="w-8 h-8 text-indigo-400" />
          Extended LLM Pipeline
          <motion.a
            href="https://www.google.com/search?q=transformer+architecture+explained"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="ml-2"
          >
            <ExternalLink className="w-5 h-5 text-indigo-400 hover:text-white transition-colors" />
          </motion.a>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pipelineSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-${step.color}-500/10 border border-${step.color}-400/30 rounded-xl p-4 text-center relative overflow-hidden`}
            >
              <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute inset-0 bg-${step.color}-400/5 rounded-xl`}
              />
              
              <div className={`relative w-12 h-12 bg-${step.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className={`text-${step.color}-400 font-bold text-lg`}>{index + 1}</span>
              </div>
              
              <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
              <p className={`text-${step.color}-400 text-xs font-medium mb-2`}>{step.subtitle}</p>
              <p className="text-white/70 text-xs mb-3">{step.description}</p>
              
              <div className="space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + detailIndex * 0.1 }}
                    className="text-xs text-white/60 bg-white/5 rounded px-2 py-1"
                  >
                    {detail}
                  </motion.div>
                ))}
              </div>

              {index < pipelineSteps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2"
                >
                  <ArrowRight className="w-6 h-6 text-white/40" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed Architecture Visualization */}
        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Transformer Block Detail</h4>
          
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 text-center"
            >
              <span className="text-yellow-400 font-medium">Input: X ∈ ℝ^(seq_len × d_model)</span>
            </motion.div>
            
            <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 text-center"
            >
              <span className="text-blue-400 font-medium">Multi-Head Attention</span>
              <p className="text-xs text-white/60 mt-1">Q = XWq, K = XWk, V = XWv</p>
            </motion.div>
            
            <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-green-500/20 border border-green-400/30 rounded-lg p-3 text-center"
            >
              <span className="text-green-400 font-medium">Add & LayerNorm</span>
              <p className="text-xs text-white/60 mt-1">Residual Connection + Normalization</p>
            </motion.div>
            
            <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-purple-500/20 border border-purple-400/30 rounded-lg p-3 text-center"
            >
              <span className="text-purple-400 font-medium">Feed Forward Network</span>
              <p className="text-xs text-white/60 mt-1">FFN(x) = GELU(xW₁ + b₁)W₂ + b₂</p>
            </motion.div>
            
            <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-orange-500/20 border border-orange-400/30 rounded-lg p-3 text-center"
            >
              <span className="text-orange-400 font-medium">Add & LayerNorm</span>
              <p className="text-xs text-white/60 mt-1">Final Output to Next Layer</p>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-white/70 text-sm mt-6"
        >
          LLMs use autoregressive generation: each token is predicted based on all previous tokens in the sequence
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GenerativeAISlide;
