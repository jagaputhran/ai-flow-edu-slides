import { motion } from "framer-motion";
import { ArrowRight, Settings, TrendingUp, Layers, Zap, Brain, Database, Network, ExternalLink } from "lucide-react";

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
      examples: ["Chess Programs", "Expert Systems"],
      articles: [
        { title: "History of Expert Systems", url: "https://en.wikipedia.org/wiki/Expert_system" },
        { title: "ELIZA: Early Chatbot", url: "https://en.wikipedia.org/wiki/ELIZA" }
      ]
    },
    {
      era: "Machine Learning",
      period: "1990s-2000s",
      icon: TrendingUp,
      color: "orange",
      description: "Algorithms that learn from data patterns",
      label: "Learns from data, but needs features.",
      examples: ["Email Filters", "Recommendation Systems"],
      articles: [
        { title: "Rise of Statistical Learning", url: "https://en.wikipedia.org/wiki/Statistical_learning_theory" },
        { title: "Support Vector Machines", url: "https://en.wikipedia.org/wiki/Support_vector_machine" }
      ]
    },
    {
      era: "Deep Learning",
      period: "2010s",
      icon: Layers,
      color: "blue",
      description: "Neural networks with multiple layers",
      label: "Learns features from raw data. Revolutionized vision and speech.",
      examples: ["Image Recognition", "Speech Recognition"],
      articles: [
        { title: "ImageNet Revolution", url: "https://en.wikipedia.org/wiki/ImageNet" },
        { title: "Convolutional Neural Networks", url: "https://en.wikipedia.org/wiki/Convolutional_neural_network" }
      ]
    },
    {
      era: "Transformers",
      period: "2017-Now",
      icon: Zap,
      color: "purple",
      description: "Attention mechanisms and large models",
      label: "Understands context. Powers ChatGPT, Copilot, Claude.",
      examples: ["ChatGPT", "Copilot", "Claude"],
      articles: [
        { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
        { title: "GPT Series Evolution", url: "https://en.wikipedia.org/wiki/GPT-3" }
      ]
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

      {/* Enhanced Timeline */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
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
            {/* Subtle Connection Lines */}
            <div className="absolute top-16 left-0 right-0 flex justify-between items-center px-10">
              {timeline.slice(0, -1).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 + index * 0.3 }}
                  className="flex-1 h-px bg-gradient-to-r from-white/20 to-white/10 mx-4 origin-left"
                />
              ))}
            </div>

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
                    <div className="space-y-1 mb-4">
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

                    {/* Embedded Article Links */}
                    <div className="space-y-2">
                      {milestone.articles.map((article, articleIndex) => (
                        <motion.a
                          key={article.title}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 1.5 + index * 0.3 + articleIndex * 0.1 }}
                          className={`group flex items-center justify-center space-x-2 text-${milestone.color}-400 hover:text-${milestone.color}-300 text-xs bg-${milestone.color}-500/5 hover:bg-${milestone.color}-500/10 px-3 py-2 rounded-lg border border-${milestone.color}-400/20 hover:border-${milestone.color}-400/40 transition-all duration-200`}
                        >
                          <span className="truncate">{article.title}</span>
                          <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Progress Arrow */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                      className="absolute top-16 -right-3 transform -translate-y-1/2 hidden lg:block"
                    >
                      <ArrowRight className="w-6 h-6 text-white/40" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-4 bg-white/5 rounded-full px-6 py-3 border border-white/10">
                <span className="text-white/80 text-sm font-medium">Current Evolution Stage:</span>
                <div className="flex space-x-2">
                  {['Static AI', 'Prompt Chaining', 'Autonomous Agents', 'Multi-Agent Systems'].map((stage, index) => (
                    <motion.div
                      key={stage}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 2.7 + index * 0.1 }}
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
