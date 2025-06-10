
import { motion } from "framer-motion";
import { Heart, Shield, Code } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const UseCasesSlide = ({ slideNumber }: SlideProps) => {
  const useCases = [
    {
      icon: Heart,
      title: "Healthcare",
      color: "red",
      applications: [
        "Medical diagnosis",
        "Drug discovery",
        "Patient monitoring",
        "Treatment planning"
      ],
      impact: "Faster diagnosis, personalized medicine"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "blue",
      applications: [
        "Threat detection",
        "Anomaly analysis",
        "Incident response",
        "Risk assessment"
      ],
      impact: "Proactive defense, real-time protection"
    },
    {
      icon: Code,
      title: "Developer Tools",
      color: "green",
      applications: [
        "Code generation",
        "Bug detection",
        "Documentation",
        "Testing automation"
      ],
      impact: "10x productivity, fewer errors"
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
        <span className="text-blue-400">{slideNumber}.</span> Real-world Use Cases
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`bg-gradient-to-br from-${useCase.color}-500/20 to-${useCase.color}-600/10 rounded-2xl border border-${useCase.color}-400/30 p-8 relative overflow-hidden`}
          >
            {/* Background animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05] 
              }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              className={`absolute inset-0 bg-${useCase.color}-400`}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`relative w-20 h-20 bg-${useCase.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <useCase.icon className={`w-10 h-10 text-${useCase.color}-400`} />
            </motion.div>

            {/* Title */}
            <h3 className="relative text-2xl font-bold text-white mb-6 text-center">{useCase.title}</h3>

            {/* Applications */}
            <div className="relative space-y-3 mb-6">
              {useCase.applications.map((app, i) => (
                <motion.div
                  key={app}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-2 h-2 bg-${useCase.color}-400 rounded-full`} />
                  <span className="text-white/80 text-sm">{app}</span>
                </motion.div>
              ))}
            </div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className={`relative p-4 bg-${useCase.color}-500/10 rounded-lg border border-${useCase.color}-400/20`}
            >
              <p className={`text-${useCase.color}-400 font-medium text-sm mb-1`}>Impact:</p>
              <p className="text-white/80 text-sm">{useCase.impact}</p>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index }}
              className={`absolute top-4 right-4 w-8 h-8 bg-${useCase.color}-400/20 rounded-full`}
            />
          </motion.div>
        ))}
      </div>

      {/* Additional sectors */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-white/70 text-lg mb-6">AI is transforming industries across the board:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Finance", "Education", "Transportation", "Manufacturing", 
            "Agriculture", "Entertainment", "Legal", "Retail"
          ].map((sector, i) => (
            <motion.div
              key={sector}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white/80 text-sm"
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UseCasesSlide;
