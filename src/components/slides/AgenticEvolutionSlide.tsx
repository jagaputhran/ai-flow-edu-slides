
import { motion } from "framer-motion";
import { Clock, Zap, Bot, Users, Target, Calendar, TrendingUp, Code, Search, DollarSign, ShoppingCart, Play, CheckCircle, RefreshCw, Database, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

interface SlideProps {
  slideNumber: number;
}

const AgenticEvolutionSlide = ({ slideNumber }: SlideProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineData = [
    {
      period: "Pre-2022",
      title: "Static Models",
      color: "red",
      features: ["Predict next token / classification", "No memory or planning"]
    },
    {
      period: "2022–2023",
      title: "Prompt Engineering Era",
      color: "orange",
      features: ["Chain-of-thought reasoning", "Manual multi-step instructions", "Tool use via plugins/APIs"]
    },
    {
      period: "2023–2024",
      title: "Tool-Augmented LLMs",
      color: "blue",
      features: ["Agents use tools via LangChain, ReAct", "Can observe → reason → act"]
    },
    {
      period: "2024–2025",
      title: "Autonomous Agents",
      color: "green",
      features: ["Full loop: Observe → Plan → Execute → Learn", "Frameworks like AutoGPT, BabyAGI, OpenAgents"]
    },
    {
      period: "2025+",
      title: "Multi-Agent Collaboration",
      color: "purple",
      features: ["Agents talk to each other", "Distributed problem solving"]
    }
  ];

  const frameworks = [
    { name: "LangChain", purpose: "Tool calling, chains, memory" },
    { name: "LangGraph", purpose: "State machines for agents" },
    { name: "AutoGPT", purpose: "Autonomous task completion" },
    { name: "BabyAGI", purpose: "Task planning with recursive memory" },
    { name: "OpenAgents", purpose: "Multimodal, open-ended task agents" },
    { name: "CrewAI", purpose: "Multi-agent teams with roles" }
  ];

  const useCases = [
    { icon: Search, title: "Web Research Agent", description: "Researches and compiles info on a topic" },
    { icon: Calendar, title: "Scheduling Assistant", description: "Books meetings, checks calendars" },
    { icon: DollarSign, title: "Finance Agent", description: "Tracks expenses, pays bills" },
    { icon: ShoppingCart, title: "Shopping Assistant", description: "Compares prices, buys products" },
    { icon: Code, title: "Dev Agent", description: "Writes, tests, and debugs code" },
    { icon: TrendingUp, title: "Business Analyst Agent", description: "Analyzes trends, summarizes reports" }
  ];

  const agentWorkflow = [
    {
      id: 'goal',
      title: 'Goal Setting',
      icon: Target,
      color: 'blue',
      description: 'Human provides goal: "Book a flight to Paris"',
      details: ['Task decomposition', 'Priority assignment', 'Success criteria']
    },
    {
      id: 'planning',
      title: 'Planning',
      icon: CheckCircle,
      color: 'purple',
      description: 'AI breaks task into actionable steps',
      details: ['Search flights', 'Compare prices', 'Check dates', 'Make booking']
    },
    {
      id: 'tools',
      title: 'Tool Usage',
      icon: Zap,
      color: 'orange',
      description: 'Access external tools and APIs',
      details: ['Web browser', 'Flight APIs', 'Calendar', 'Payment system']
    },
    {
      id: 'execution',
      title: 'Execution Loop',
      icon: RefreshCw,
      color: 'green',
      description: 'Take actions, observe results, adjust',
      details: ['Action execution', 'Result analysis', 'Plan adjustment', 'Error handling']
    },
    {
      id: 'memory',
      title: 'Memory Systems',
      icon: Database,
      color: 'cyan',
      description: 'Store and recall information',
      details: ['Short-term context', 'Long-term storage', 'Pattern recognition', 'Learning']
    },
    {
      id: 'feedback',
      title: 'Feedback Loop',
      icon: MessageCircle,
      color: 'yellow',
      description: 'Self-correction and user feedback',
      details: ['Performance monitoring', 'User validation', 'Strategy updates', 'Continuous improvement']
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
        <span className="text-blue-400">{slideNumber}.</span> Evolution of Agentic AI
      </motion.h1>

      {/* Timeline */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-blue-400 to-purple-400" />
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/10 rounded-lg border border-${item.color}-400/30 p-6`}>
                    <div className={`text-${item.color}-400 font-bold text-lg mb-1`}>{item.period}</div>
                    <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
                    <ul className="space-y-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="text-white/70 text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`w-6 h-6 bg-${item.color}-400 rounded-full border-4 border-slate-900 z-10`}
                />
                
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Frameworks Table */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Common Frameworks for Agentic AI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-lg border border-blue-400/30 p-4"
            >
              <h3 className="text-blue-400 font-semibold mb-2">{framework.name}</h3>
              <p className="text-white/70 text-sm">{framework.purpose}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-lg border border-indigo-400/30 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <useCase.icon className="w-6 h-6 text-indigo-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
              <p className="text-white/70 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Agentic AI Workflow */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gradient-to-br from-green-500/20 to-teal-600/10 rounded-2xl border border-green-400/30 p-8"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
          >
            <Bot className="w-8 h-8 text-green-400" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Interactive Agentic AI Workflow</h2>
          <p className="text-white/70">Click on each step to explore how AI agents work</p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agentWorkflow.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer rounded-xl p-6 border transition-all duration-300 ${
                activeStep === index
                  ? `bg-gradient-to-br from-${step.color}-500/30 to-${step.color}-600/20 border-${step.color}-400`
                  : `bg-gradient-to-br from-${step.color}-500/10 to-${step.color}-600/5 border-${step.color}-400/30 hover:border-${step.color}-400/50`
              }`}
            >
              <motion.div
                animate={activeStep === index ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 bg-${step.color}-500/20 rounded-full flex items-center justify-center mb-4`}
              >
                <step.icon className={`w-6 h-6 text-${step.color}-400`} />
              </motion.div>
              
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm mb-3">{step.description}</p>
              
              {activeStep === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2 mt-4"
                >
                  {step.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-xs bg-white/5 rounded px-2 py-1 text-white/80"
                    >
                      • {detail}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Step number indicator */}
              <div className={`absolute top-2 right-2 w-6 h-6 bg-${step.color}-500/30 rounded-full flex items-center justify-center`}>
                <span className={`text-${step.color}-400 text-xs font-bold`}>{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow Arrows */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-4">
            {['Goal', 'Plan', 'Execute', 'Learn', 'Repeat'].map((step, index) => (
              <div key={step} className="flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-400/30"
                >
                  <span className="text-blue-400 text-sm font-medium">{step}</span>
                </motion.div>
                {index < 4 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 text-white/40 mx-2" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success indicator */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Agent successfully books flight to Paris!</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AgenticEvolutionSlide;
