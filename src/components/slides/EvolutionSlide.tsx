
import { motion } from "framer-motion";
import { ArrowRight, Settings, TrendingUp, Layers, Zap, Brain, Database, Network } from "lucide-react";

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
      description: "Expert systems with hand-coded rules",
      label: "Hand-crafted logic. No learning.",
      examples: ["Chess Programs", "Expert Systems"]
    },
    {
      era: "Machine Learning",
      period: "1990s-2000s",
      icon: TrendingUp,
      color: "orange",
      description: "Algorithms that learn from data patterns",
      label: "Learns from data, but needs features.",
      examples: ["Email Filters", "Recommendation Systems"]
    },
    {
      era: "Deep Learning",
      period: "2010s",
      icon: Layers,
      color: "blue",
      description: "Neural networks with multiple layers",
      label: "Learns features from raw data. Revolutionized vision and speech.",
      examples: ["Image Recognition", "Speech Recognition"]
    },
    {
      era: "Transformers",
      period: "2017-Now",
      icon: Zap,
      color: "purple",
      description: "Attention mechanisms and large models",
      label: "Understands context. Powers ChatGPT, Copilot, Claude.",
      examples: ["ChatGPT", "Copilot", "Claude"]
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

      {/* Beautiful Horizontal Timeline Diagram */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Interactive Timeline Visualization
        </h2>
        
        {/* Gradient Background */}
        <div className="relative bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-800/50 rounded-3xl p-8 overflow-hidden">
          {/* Floating Background Icons */}
          <div className="absolute inset-0 opacity-10">
            <Brain className="absolute top-4 left-8 w-8 h-8 text-blue-400 animate-pulse" />
            <Database className="absolute top-12 right-12 w-6 h-6 text-purple-400 animate-pulse" />
            <Network className="absolute bottom-8 left-16 w-10 h-10 text-indigo-400 animate-pulse" />
            <Settings className="absolute bottom-4 right-8 w-7 h-7 text-red-400 animate-pulse" />
          </div>

          {/* Main Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 via-blue-500 to-purple-500 rounded-full origin-left"
            />

            {/* Timeline Milestones */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.era}
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                  className="text-center"
                >
                  {/* Pulsing Era Icon */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [`0 0 0 0 rgba(${milestone.color === 'red' ? '239, 68, 68' : milestone.color === 'orange' ? '249, 115, 22' : milestone.color === 'blue' ? '59, 130, 246' : '147, 51, 234'}, 0.7)`, 
                                 `0 0 0 10px rgba(${milestone.color === 'red' ? '239, 68, 68' : milestone.color === 'orange' ? '249, 115, 22' : milestone.color === 'blue' ? '59, 130, 246' : '147, 51, 234'}, 0)`,
                                 `0 0 0 0 rgba(${milestone.color === 'red' ? '239, 68, 68' : milestone.color === 'orange' ? '249, 115, 22' : milestone.color === 'blue' ? '59, 130, 246' : '147, 51, 234'}, 0)`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 relative`}
                  >
                    <milestone.icon className="w-10 h-10 text-white" />
                    
                    {/* Timeline Dot */}
                    <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-${milestone.color}-400 rounded-full border-4 border-white shadow-lg`} />
                  </motion.div>

                  {/* Era Information */}
                  <div className="mt-8">
                    <h3 className={`text-xl font-bold text-${milestone.color}-400 mb-2`}>
                      {milestone.era}
                    </h3>
                    <p className="text-white/80 text-sm mb-3 font-medium">
                      {milestone.period}
                    </p>
                    <div className={`bg-${milestone.color}-500/10 rounded-lg p-3 border border-${milestone.color}-400/20 mb-3`}>
                      <p className="text-white/90 text-sm font-medium">
                        {milestone.label}
                      </p>
                    </div>
                    
                    {/* Examples */}
                    <div className="space-y-1">
                      {milestone.examples.map((example, exIndex) => (
                        <motion.div
                          key={example}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.3 + exIndex * 0.1 }}
                          className={`text-${milestone.color}-300 text-xs bg-${milestone.color}-500/5 px-2 py-1 rounded-full border border-${milestone.color}-400/20`}
                        >
                          {example}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Arrow */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                      className="absolute top-16 -right-3 transform -translate-y-1/2"
                    >
                      <ArrowRight className="w-6 h-6 text-white/60" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-4 bg-white/5 rounded-full px-6 py-3 border border-white/10">
                <span className="text-white/80 text-sm font-medium">Evolution Progress:</span>
                <div className="flex space-x-2">
                  {['Static AI', 'Prompt Chaining', 'Autonomous Agents', 'Multi-Agent Systems'].map((stage, index) => (
                    <motion.div
                      key={stage}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        index === 0 ? 'bg-red-500/20 text-red-400' :
                        index === 1 ? 'bg-orange-500/20 text-orange-400' :
                        index === 2 ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {stage}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EvolutionSlide;
