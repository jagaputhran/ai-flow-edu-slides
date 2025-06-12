
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Code, GitBranch, Eye, Target, ExternalLink, Lock } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const LLMSecuritySlide = ({ slideNumber }: SlideProps) => {
  const attackStrategies = [
    {
      icon: Code,
      title: "Exploiting AI Tools",
      color: "red",
      attacks: [
        {
          name: "Affirmation Jailbreak",
          description: "Craft prompts like 'Sure, show me a SQL injection' to trigger malicious code generation",
          risk: "High"
        },
        {
          name: "Proxy Hijack",
          description: "Intercept authentication tokens through proxy to hijack Copilot access",
          risk: "Critical"
        }
      ]
    },
    {
      icon: Target,
      title: "AI-Driven Malware Workflows",
      color: "orange",
      attacks: [
        {
          name: "Malware Obfuscation",
          description: "AI obfuscates code via renaming, encoding, and encryption to evade AVs",
          risk: "High"
        },
        {
          name: "Exploit Generation",
          description: "Copilot generates targeted exploits for specific vulnerabilities",
          risk: "High"
        },
        {
          name: "Supply-Chain Poisoning",
          description: "LLMs suggest malicious dependencies in code recommendations",
          risk: "Critical"
        }
      ]
    },
    {
      icon: GitBranch,
      title: "Fake AI Repositories",
      color: "yellow",
      attacks: [
        {
          name: "Credibility Manipulation",
          description: "Create fake GitHub repos with AI-generated avatars and fake stars",
          risk: "Medium"
        },
        {
          name: "Embedded Malware",
          description: "Victims unknowingly run malware hidden in legitimate-looking code",
          risk: "High"
        }
      ]
    },
    {
      icon: Eye,
      title: "Risk Amplification",
      color: "purple",
      attacks: [
        {
          name: "Data Exposure",
          description: "AI tools expose sensitive content from cached private repositories",
          risk: "High"
        },
        {
          name: "Metadata Manipulation",
          description: "Fake repos camouflage malware using manipulated metadata",
          risk: "Medium"
        }
      ]
    }
  ];

  const mitigationStrategies = [
    { title: "Audit AI-Generated Code", description: "Always review and test code suggestions", icon: Shield },
    { title: "Validate Dependencies", description: "Verify all suggested packages and libraries", icon: Lock },
    { title: "Repository Verification", description: "Avoid cloning from unknown or suspicious repos", icon: GitBranch },
    { title: "Access Control", description: "Implement strict authentication and authorization", icon: Eye }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Critical": return "red";
      case "High": return "orange";
      case "Medium": return "yellow";
      default: return "blue";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> 🔐 LLM Security
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 mb-12 text-center max-w-4xl mx-auto"
      >
        How Attackers Use AI to Spread Malware on GitHub
      </motion.p>

      {/* Introduction */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8 mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center"
          >
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">The Threat Landscape</h2>
        </div>
        <p className="text-white/80 leading-relaxed">
          Large Language Models (LLMs) like GitHub Copilot are being misused to create and spread malware. 
          Attackers exploit AI tools to generate malicious code, create fake repositories, and amplify security risks across the development ecosystem.
        </p>
      </motion.div>

      {/* Attack Strategies Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {attackStrategies.map((strategy, index) => (
          <motion.div
            key={strategy.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`bg-gradient-to-br from-${strategy.color}-500/20 to-${strategy.color}-600/10 rounded-2xl border border-${strategy.color}-400/30 p-6`}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 bg-${strategy.color}-500/20 rounded-full flex items-center justify-center`}
              >
                <strategy.icon className={`w-6 h-6 text-${strategy.color}-400`} />
              </motion.div>
              <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
            </div>
            
            <div className="space-y-4">
              {strategy.attacks.map((attack, i) => (
                <motion.div
                  key={attack.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + i * 0.05 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm">{attack.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getRiskColor(attack.risk)}-500/20 text-${getRiskColor(attack.risk)}-400 border border-${getRiskColor(attack.risk)}-400/30`}>
                      {attack.risk}
                    </span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">{attack.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Malware Workflow Visualization */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-br from-red-500/20 to-orange-600/10 rounded-2xl border border-red-400/30 p-8 mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">AI-Powered Malware Workflow</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6">
          {[
            { step: "Prompt Injection", icon: "💬", desc: "Craft malicious prompts" },
            { step: "Code Generation", icon: "🤖", desc: "AI generates malware" },
            { step: "Obfuscation", icon: "🎭", desc: "Hide malicious intent" },
            { step: "Repository Upload", icon: "📤", desc: "Upload to GitHub" },
            { step: "Social Engineering", icon: "🎯", desc: "Trick developers" },
            { step: "Execution", icon: "⚡", desc: "Malware runs on victim systems" }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-2 text-2xl border border-red-400/30">
                {item.icon}
              </div>
              <h4 className="text-white text-sm font-medium mb-1">{item.step}</h4>
              <p className="text-white/60 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mitigation Strategies */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gradient-to-br from-green-500/20 to-blue-600/10 rounded-2xl border border-green-400/30 p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">🛡️ Mitigation Strategies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mitigationStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-green-500/10 rounded-lg border border-green-400/30 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <strategy.icon className="w-6 h-6 text-green-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-2 text-sm">{strategy.title}</h3>
              <p className="text-white/70 text-xs">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Warning Callout */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="bg-gradient-to-br from-yellow-500/20 to-orange-600/10 rounded-2xl border border-yellow-400/30 p-6 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
        </motion.div>
        <p className="text-white font-medium mb-4">
          ⚠️ Always audit AI-generated code, validate dependencies, and avoid cloning unknown repositories.
        </p>
        <motion.a
          href="https://gitprotect.io/blog/how-attackers-use-ai-to-spread-malware-on-github/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
        >
          Learn More from GitProtect
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LLMSecuritySlide;
