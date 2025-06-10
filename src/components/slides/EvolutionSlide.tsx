
import { motion } from "framer-motion";
import { ArrowRight, Settings, TrendingUp, Layers, Zap, Palette } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const EvolutionSlide = ({ slideNumber }: SlideProps) => {
  const timeline = [
    {
      era: "Rule-based",
      period: "1950s-1980s",
      icon: Settings,
      color: "red",
      description: "Expert systems with hand-coded rules"
    },
    {
      era: "Machine Learning",
      period: "1990s-2000s",
      icon: TrendingUp,
      color: "orange",
      description: "Algorithms that learn from data patterns"
    },
    {
      era: "Deep Learning",
      period: "2010s",
      icon: Layers,
      color: "blue",
      description: "Neural networks with multiple layers"
    },
    {
      era: "Transformers",
      period: "2017-Now",
      icon: Zap,
      color: "purple",
      description: "Attention mechanisms and large models"
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
        <span className="text-blue-400">{slideNumber}.</span> Evolution of AI
      </motion.h1>

      <div className="relative mb-16">
        {/* Timeline line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-orange-400 via-blue-400 to-purple-400 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {timeline.map((era, index) => (
            <motion.div
              key={era.era}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-${era.color}-400 rounded-full border-2 border-white shadow-lg z-10`} />
              
              <div className={`bg-gradient-to-br from-${era.color}-500/20 to-${era.color}-600/10 rounded-2xl border border-${era.color}-400/30 p-6 text-center mt-8`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-${era.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <era.icon className={`w-8 h-8 text-${era.color}-400`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2">{era.era}</h3>
                <p className={`text-${era.color}-400 text-sm font-medium mb-3`}>{era.period}</p>
                <p className="text-white/70 text-sm">{era.description}</p>
              </div>

              {/* Milestone markers */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="mt-4 text-center"
              >
                <div className={`inline-block px-3 py-1 bg-${era.color}-500/20 rounded-full border border-${era.color}-400/40`}>
                  <span className={`text-${era.color}-400 text-xs font-medium`}>
                    {index === 0 && "ELIZA, Expert Systems"}
                    {index === 1 && "SVM, Random Forest"}
                    {index === 2 && "CNNs, RNNs"}
                    {index === 3 && "GPT, BERT, ChatGPT"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Timeline Diagram Prompt */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="inline-block w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4"
          >
            <Palette className="w-6 h-6 text-indigo-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-4">Visual Prompt for Timeline Diagram</h2>
        </div>
        
        <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-400/20">
          <p className="text-indigo-400 font-medium mb-4">Design Prompt for Visual Tools:</p>
          <div className="text-white/80 text-sm leading-relaxed space-y-4">
            <p>"Design a beautiful horizontal animated timeline showing the Evolution of AI with 4 key milestones:</p>
            
            <div className="pl-4 space-y-3">
              <p>• <span className="text-red-400">Rule-Based AI (1950s–1980s):</span> Use icon of flowchart or logic gate. Add label: 'Hand-crafted logic. No learning.'</p>
              <p>• <span className="text-orange-400">Machine Learning (1990s–2010s):</span> Show dataset + algorithm icon. Add label: 'Learns from data, but needs features.'</p>
              <p>• <span className="text-blue-400">Deep Learning (2012–2017):</span> Show brain or neuron net. Add label: 'Learns features from raw data. Revolutionized vision and speech.'</p>
              <p>• <span className="text-purple-400">Transformers & LLMs (2017–Now):</span> Show attention map or neural network reading text. Add label: 'Understands context. Powers ChatGPT, Copilot, Claude.'</p>
            </div>
            
            <p>Use a soft gradient background (dark-to-light), animated lines connecting each milestone, and floating icons for real-world examples (e.g., chess board, Netflix logo, brain, GPT logo). Add subtle pulsing effects on each era as narration progresses. Use timeline arrows to show progress and key transitions."</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EvolutionSlide;
