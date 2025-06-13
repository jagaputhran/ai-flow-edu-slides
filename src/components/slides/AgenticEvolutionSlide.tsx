
import { motion } from "framer-motion";
import { Clock, Zap, Bot, Users, Target, Calendar, TrendingUp, Code, Search, DollarSign, ShoppingCart, Play, CheckCircle, RefreshCw, Database, MessageCircle, ArrowRight, Brain, Network, Layers, Cpu, GitBranch } from "lucide-react";
import { useState } from "react";

interface SlideProps {
  slideNumber: number;
}

const AgenticEvolutionSlide = ({ slideNumber }: SlideProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      period: "Pre-2022",
      title: "Static AI Models",
      color: "red",
      icon: Brain,
      features: ["Single task prediction", "No memory or context", "Static responses", "Rule-based systems"],
      examples: ["Image classifiers", "Sentiment analysis", "Basic chatbots"]
    },
    {
      period: "2022–2023", 
      title: "Prompt Engineering Era",
      color: "orange",
      icon: MessageCircle,
      features: ["Chain-of-thought reasoning", "Manual multi-step instructions", "Tool use via plugins/APIs", "Context-aware responses"],
      examples: ["ChatGPT plugins", "GPT-4 with browsing", "Code interpreters"]
    },
    {
      period: "2023–2024",
      title: "Tool-Augmented LLMs",
      color: "blue", 
      icon: Zap,
      features: ["Agents use tools via LangChain, ReAct", "Can observe → reason → act", "API integrations", "Multi-modal capabilities"],
      examples: ["AutoGPT", "LangChain agents", "Function calling"]
    },
    {
      period: "2024–2025",
      title: "Autonomous Agents",
      color: "green",
      icon: Bot,
      features: ["Full loop: Observe → Plan → Execute → Learn", "Self-correction abilities", "Long-term memory", "Complex workflow execution"],
      examples: ["BabyAGI", "GPT Engineer", "Devin AI", "OpenAgents"]
    },
    {
      period: "2025+",
      title: "Multi-Agent Collaboration",
      color: "purple",
      icon: Users,
      features: ["Agents communicate with each other", "Distributed problem solving", "Specialized agent roles", "Swarm intelligence"],
      examples: ["CrewAI teams", "AutoGen", "Multi-agent frameworks"]
    }
  ];

  const architectureComparison = [
    {
      type: "Traditional AI",
      description: "Static, single-purpose models",
      flow: ["Input", "Process", "Output"],
      color: "gray"
    },
    {
      type: "LLM + Tools",
      description: "LLMs with external tool access",
      flow: ["Query", "Tool Selection", "Execution", "Response"],
      color: "blue"
    },
    {
      type: "Agentic AI",
      description: "Autonomous planning and execution",
      flow: ["Goal", "Plan", "Execute", "Observe", "Reflect", "Adapt"],
      color: "green"
    }
  ];

  const frameworks = [
    { name: "LangChain", purpose: "Tool calling, chains, memory", category: "Framework", popularity: "High" },
    { name: "LangGraph", purpose: "State machines for agents", category: "State Management", popularity: "Growing" },
    { name: "AutoGPT", purpose: "Autonomous task completion", category: "Agent", popularity: "High" },
    { name: "BabyAGI", purpose: "Task planning with recursive memory", category: "Agent", popularity: "Medium" },
    { name: "CrewAI", purpose: "Multi-agent teams with roles", category: "Multi-Agent", popularity: "Growing" },
    { name: "AutoGen", purpose: "Conversation-driven agents", category: "Multi-Agent", popularity: "High" }
  ];

  const capabilities = [
    { 
      icon: Target, 
      title: "Goal Decomposition", 
      description: "Breaking complex tasks into manageable subtasks",
      level: "Advanced"
    },
    { 
      icon: RefreshCw, 
      title: "Self-Correction", 
      description: "Learning from mistakes and adjusting approach",
      level: "Expert"
    },
    { 
      icon: Database, 
      title: "Memory Systems", 
      description: "Storing and retrieving relevant information",
      level: "Intermediate"
    },
    { 
      icon: Network, 
      title: "Tool Integration", 
      description: "Seamlessly using external APIs and services",
      level: "Advanced"
    },
    { 
      icon: Users, 
      title: "Multi-Agent Coordination", 
      description: "Collaborating with other AI agents",
      level: "Expert"
    },
    { 
      icon: Brain, 
      title: "Reasoning Chains", 
      description: "Complex logical reasoning and planning",
      level: "Advanced"
    }
  ];

  const useCases = [
    { icon: Search, title: "Research Agent", description: "Autonomous research and analysis", impact: "High" },
    { icon: Code, title: "Development Assistant", description: "End-to-end software development", impact: "Very High" },
    { icon: Calendar, title: "Personal Assistant", description: "Schedule and task management", impact: "Medium" },
    { icon: DollarSign, title: "Financial Advisor", description: "Investment and financial planning", impact: "High" },
    { icon: TrendingUp, title: "Business Analyst", description: "Market analysis and reporting", impact: "High" },
    { icon: ShoppingCart, title: "E-commerce Agent", description: "Product research and purchasing", impact: "Medium" }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'red':
        return {
          bg: 'bg-gradient-to-br from-red-500/20 to-red-600/10',
          border: 'border-red-400/30',
          text: 'text-red-400',
          bgColor: 'bg-red-400',
          ring: 'ring-red-400'
        };
      case 'orange':
        return {
          bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/10',
          border: 'border-orange-400/30',
          text: 'text-orange-400',
          bgColor: 'bg-orange-400',
          ring: 'ring-orange-400'
        };
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
          border: 'border-blue-400/30',
          text: 'text-blue-400',
          bgColor: 'bg-blue-400',
          ring: 'ring-blue-400'
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-br from-green-500/20 to-green-600/10',
          border: 'border-green-400/30',
          text: 'text-green-400',
          bgColor: 'bg-green-400',
          ring: 'ring-green-400'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/10',
          border: 'border-purple-400/30',
          text: 'text-purple-400',
          bgColor: 'bg-purple-400',
          ring: 'ring-purple-400'
        };
      case 'gray':
        return {
          bg: 'bg-gradient-to-br from-gray-500/20 to-gray-600/10',
          border: 'border-gray-400/30',
          text: 'text-gray-400',
          bgColor: 'bg-gray-400',
          ring: 'ring-gray-400'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
          border: 'border-blue-400/30',
          text: 'text-blue-400',
          bgColor: 'bg-blue-400',
          ring: 'ring-blue-400'
        };
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Evolution of Agentic AI
      </motion.h1>

      {/* Interactive Timeline */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Interactive Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-blue-400 to-purple-400" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              return (
                <motion.div
                  key={`timeline-${item.period}-${index}`}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveTimeline(index)}
                      className={`cursor-pointer ${colorClasses.bg} rounded-lg border ${colorClasses.border} p-6 transition-all duration-300 ${
                        activeTimeline === index ? `ring-2 ${colorClasses.ring}` : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className={`w-6 h-6 ${colorClasses.text}`} />
                        <div className={`${colorClasses.text} font-bold text-lg`}>{item.period}</div>
                      </div>
                      <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
                      <div className="space-y-2">
                        {item.features.map((feature, i) => (
                          <div key={`feature-${index}-${i}`} className="text-white/70 text-sm">• {feature}</div>
                        ))}
                      </div>
                      
                      {activeTimeline === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-white/20"
                        >
                          <h4 className="text-white font-medium mb-2">Examples:</h4>
                          {item.examples.map((example, i) => (
                            <div key={`example-${index}-${i}`} className={`${colorClasses.text} text-sm`}>→ {example}</div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    animate={{ scale: activeTimeline === index ? [1, 1.3, 1] : [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className={`w-8 h-8 ${colorClasses.bgColor} rounded-full border-4 border-slate-900 z-10 flex items-center justify-center`}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Architecture Comparison */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Architecture Evolution</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {architectureComparison.map((arch, index) => {
            const colorClasses = getColorClasses(arch.color);
            return (
              <motion.div
                key={`arch-${arch.type}-${index}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${colorClasses.bg} rounded-lg border ${colorClasses.border} p-6`}
              >
                <h3 className={`${colorClasses.text} font-semibold text-lg mb-2`}>{arch.type}</h3>
                <p className="text-white/70 text-sm mb-4">{arch.description}</p>
                <div className="space-y-2">
                  {arch.flow.map((step, i) => (
                    <div key={`flow-${index}-${i}`} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${colorClasses.bgColor} rounded-full`} />
                      <span className="text-white/80 text-sm">{step}</span>
                      {i < arch.flow.length - 1 && <ArrowRight className="w-3 h-3 text-white/40" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Advanced Capabilities */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Advanced Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={`capability-${capability.title}-${index}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-lg border border-indigo-400/30 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <capability.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  capability.level === 'Expert' ? 'bg-red-500/20 text-red-400' :
                  capability.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {capability.level}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{capability.title}</h3>
              <p className="text-white/70 text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Frameworks & Tools */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16 bg-gradient-to-br from-green-500/20 to-teal-600/10 rounded-2xl border border-green-400/30 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Frameworks & Popularity</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map((framework, index) => (
            <motion.div
              key={`framework-${framework.name}-${index}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg border border-green-400/30 p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-green-400 font-semibold">{framework.name}</h3>
                <div className={`px-2 py-1 rounded text-xs ${
                  framework.popularity === 'High' ? 'bg-green-500/20 text-green-400' :
                  framework.popularity === 'Growing' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {framework.popularity}
                </div>
              </div>
              <p className="text-white/70 text-sm mb-2">{framework.purpose}</p>
              <div className="text-green-400/70 text-xs">{framework.category}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Real-World Applications */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-600/10 rounded-2xl border border-purple-400/30 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Real-World Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={`usecase-${useCase.title}-${index}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-400/30 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <useCase.icon className="w-6 h-6 text-purple-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
              <p className="text-white/70 text-sm mb-3">{useCase.description}</p>
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                useCase.impact === 'Very High' ? 'bg-red-500/20 text-red-400' :
                useCase.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {useCase.impact} Impact
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/30 rounded-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Bot className="w-6 h-6 text-purple-400" />
            </motion.div>
            <span className="text-white font-medium text-lg">The Future: AI Agents Working Together</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AgenticEvolutionSlide;
