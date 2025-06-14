
import { motion } from "framer-motion";
import { Clock, TrendingUp, Globe, Zap, Brain, Users, Building2, ExternalLink, Database, Cpu, Network, Tv } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const WhyAISlide = ({ slideNumber }: SlideProps) => {
  const articles = [
    {
      title: "AI Could Contribute $13 Trillion to Global Economy by 2030",
      source: "McKinsey Global Institute",
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-age-of-ai",
      icon: Building2
    },
    {
      title: "How Comcast is Using AI to Enhance Customer Service and Network Management",
      source: "Tech Target",
      url: "https://www.techtarget.com/searchenterpriseai/news/252519622/Comcast-uses-AI-to-improve-customer-service-network-ops",
      icon: Tv
    },
    {
      title: "ChatGPT Reaches 100M Users in 2 Months",
      source: "Reuters",
      url: "https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/",
      icon: Users
    },
    {
      title: "AI Investment Reaches $93.5B in 2021",
      source: "Stanford AI Index",
      url: "https://aiindex.stanford.edu/report/",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Why AI Matters Now
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Animated Visualization with Orbiting Elements */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-1"
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-blue-400/20 rounded-full"
            />
            {/* Middle rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-purple-400/30 rounded-full"
            />
            {/* Inner pulsing core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center"
            >
              <Brain className="w-24 h-24 text-blue-400" />
            </motion.div>
            
            {/* Animated data particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: "50%",
                  top: "10%",
                  transformOrigin: "50% 150px",
                  transform: `rotate(${i * 30}deg)`,
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.17,
                }}
              />
            ))}

            {/* Orbiting AI Icons */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full"
                whileHover={{ scale: 1.2 }}
              >
                <Database className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-full"
                whileHover={{ scale: 1.2 }}
              >
                <Cpu className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-full"
                whileHover={{ scale: 1.2 }}
              >
                <Network className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gradient-to-r from-teal-400 to-cyan-500 p-2 rounded-full"
                whileHover={{ scale: 1.2 }}
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            {/* Additional orbiting elements at different distances */}
            <motion.div
              className="absolute w-full h-full scale-125"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-8 right-8 bg-gradient-to-r from-indigo-400 to-blue-600 p-1.5 rounded-full"
                whileHover={{ scale: 1.3 }}
              >
                <Globe className="w-3 h-3 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute w-full h-full scale-125"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute bottom-8 left-8 bg-gradient-to-r from-pink-400 to-purple-600 p-1.5 rounded-full"
                whileHover={{ scale: 1.3 }}
              >
                <TrendingUp className="w-3 h-3 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating AI icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full"
            >
              <Globe className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 lg:col-span-1"
        >
          <motion.div 
            className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.4)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Exponential Growth</h3>
              <p className="text-white/70">Data generation doubles every 12 hours</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(147, 51, 234, 0.4)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe className="w-8 h-8 text-purple-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Global Impact</h3>
              <p className="text-white/70">AI will contribute $13 trillion to global economy by 2030</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-8 h-8 text-green-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Acceleration</h3>
              <p className="text-white/70">Tasks that took months now happen in minutes</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(249, 115, 22, 0.4)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ 
                y: [-2, 2, -2],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="w-8 h-8 text-orange-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Adoption Rate</h3>
              <p className="text-white/70">ChatGPT reached 100M users in just 2 months</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Web Articles */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 lg:col-span-1"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Latest AI Impact</h3>
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.08)"
                }}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-white/60 text-xs">{article.source}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            );
          })}

          {/* Additional animated counter */}
          <motion.div
            className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                $93.5B
              </motion.div>
              <p className="text-white/70 text-sm">Global AI Investment in 2021</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAISlide;
