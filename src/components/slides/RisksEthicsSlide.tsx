
import { motion } from "framer-motion";
import { Scale, AlertTriangle, Eye, Brain } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const RisksEthicsSlide = ({ slideNumber }: SlideProps) => {
  const concerns = [
    {
      icon: Brain,
      title: "Bias",
      description: "AI systems can perpetuate or amplify human biases",
      color: "red",
      examples: ["Hiring discrimination", "Facial recognition errors", "Loan approval bias"]
    },
    {
      icon: Eye,
      title: "Hallucination",
      description: "AI can generate false or misleading information",
      color: "orange",
      examples: ["Fake citations", "Incorrect facts", "Made-up statistics"]
    },
    {
      icon: AlertTriangle,
      title: "Misuse",
      description: "AI technology can be used for harmful purposes",
      color: "yellow",
      examples: ["Deepfakes", "Autonomous weapons", "Mass surveillance"]
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
        <span className="text-blue-400">{slideNumber}.</span> Risks & Ethics
      </motion.h1>

      {/* Balance Scale Visualization */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mb-16"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-64 h-32 relative"
          >
            {/* Scale base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-20 bg-white/30 rounded"></div>
            
            {/* Scale beam */}
            <div className="absolute top-8 left-0 right-0 h-2 bg-white/50 rounded"></div>
            
            {/* Left pan - Benefits */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 left-0 w-20 h-16 bg-green-500/30 border-2 border-green-400 rounded-lg flex items-center justify-center"
            >
              <span className="text-green-400 text-xs font-bold">Benefits</span>
            </motion.div>
            
            {/* Right pan - Risks */}
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute top-10 right-0 w-20 h-16 bg-red-500/30 border-2 border-red-400 rounded-lg flex items-center justify-center"
            >
              <span className="text-red-400 text-xs font-bold">Risks</span>
            </motion.div>
            
            {/* Scale icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Risk Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {concerns.map((concern, index) => (
          <motion.div
            key={concern.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`bg-gradient-to-br from-${concern.color}-500/20 to-${concern.color}-600/10 rounded-2xl border border-${concern.color}-400/30 p-6`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-16 h-16 bg-${concern.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <concern.icon className={`w-8 h-8 text-${concern.color}-400`} />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center">{concern.title}</h3>
            <p className="text-white/80 text-sm mb-4 text-center">{concern.description}</p>
            
            <div className="space-y-2">
              <p className={`text-${concern.color}-400 text-sm font-medium`}>Examples:</p>
              {concern.examples.map((example, i) => (
                <motion.div
                  key={example}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-1.5 h-1.5 bg-${concern.color}-400 rounded-full`} />
                  <span className="text-white/70 text-xs">{example}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mitigation Strategies */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-2xl border border-blue-400/30 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Mitigation Strategies</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Transparency", desc: "Explainable AI systems" },
            { title: "Regulation", desc: "Government oversight" },
            { title: "Diverse Teams", desc: "Inclusive development" },
            { title: "Testing", desc: "Rigorous validation" }
          ].map((strategy, i) => (
            <motion.div
              key={strategy.title}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <h4 className="text-blue-400 font-semibold mb-2">{strategy.title}</h4>
              <p className="text-white/70 text-sm">{strategy.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RisksEthicsSlide;
