
import { motion } from "framer-motion";
import { Bot, Target, Cog, RefreshCw, CheckCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const AgenticAISlide = ({ slideNumber }: SlideProps) => {
  const agentCapabilities = [
    {
      icon: Target,
      title: "Goal Setting",
      description: "Define objectives and break them into subtasks",
      color: "blue"
    },
    {
      icon: Cog,
      title: "Tool Usage",
      description: "Access and utilize external tools and APIs",
      color: "purple"
    },
    {
      icon: RefreshCw,
      title: "Feedback Loop",
      description: "Learn from outcomes and adjust strategies",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Task Execution",
      description: "Complete complex multi-step workflows",
      color: "orange"
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
        <span className="text-blue-400">{slideNumber}.</span> Agentic AI
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Agent Visualization */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-3xl border border-blue-400/30 p-8 text-center">
            {/* Central Agent */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative"
            >
              <Bot className="w-12 h-12 text-white" />
              
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400/30 rounded-full"
              />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">AI Agent</h3>
            <p className="text-white/70 mb-6">Autonomous problem solver</p>

            {/* Tool connections */}
            <div className="grid grid-cols-2 gap-4">
              {["Calculator", "Web Search", "Database", "API"].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="bg-white/10 rounded-lg p-3 border border-white/20"
                >
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="text-sm text-white/80"
                  >
                    {tool}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow arrows */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 w-8 h-8 text-blue-400"
          >
            <RefreshCw className="w-full h-full" />
          </motion.div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {agentCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ x: 10, scale: 1.02 }}
              className={`bg-gradient-to-r from-${capability.color}-500/20 to-${capability.color}-600/10 rounded-lg border border-${capability.color}-400/30 p-6 flex items-center gap-4`}
            >
              <div className={`w-12 h-12 bg-${capability.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                <capability.icon className={`w-6 h-6 text-${capability.color}-400`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Task Planning Flow */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Agent Planning Process</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {["Plan", "Execute", "Observe", "Reflect"].map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-2 text-white font-bold text-lg`}>
                  {i + 1}
                </div>
                <p className="text-white font-medium">{step}</p>
              </motion.div>
              
              {i < 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
                  className="hidden md:block mx-4 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 origin-left"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AgenticAISlide;
