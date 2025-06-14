
import { motion } from "framer-motion";
import { Zap, Globe, Users, Sparkles, Brain, Network, Shield } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const FutureSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Future of AI
      </motion.h1>

      {/* Enhanced AGI Visualization */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-center mb-16"
      >
        <div className="relative">
          {/* Pulsing background energy rings */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 w-64 h-64 border border-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute inset-0 w-64 h-64 border border-purple-400/20 rounded-full"
          />
          
          {/* Main rotating framework */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border-2 border-blue-400/30 rounded-full relative"
          >
            {/* Neural network-like connections */}
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
              className="absolute inset-4 border border-purple-400/40 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: 360,
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2, repeat: Infinity }
              }}
              className="absolute inset-8 border border-green-400/30 rounded-full"
            />
          </motion.div>
          
          {/* Central AGI core with morphing effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 360],
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.7)",
                  "0 0 20px rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 4, repeat: Infinity }
              }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating capability nodes with complex paths */}
          {[
            { icon: Globe, color: "blue", angle: 0, radius: 80 },
            { icon: Users, color: "purple", angle: 120, radius: 90 },
            { icon: Sparkles, color: "green", angle: 240, radius: 85 },
            { icon: Network, color: "cyan", angle: 60, radius: 75 },
            { icon: Shield, color: "orange", angle: 180, radius: 95 },
            { icon: Zap, color: "yellow", angle: 300, radius: 70 }
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1],
                x: [
                  Math.cos((item.angle + i * 15) * Math.PI / 180) * item.radius,
                  Math.cos((item.angle + i * 15 + 180) * Math.PI / 180) * (item.radius + 20),
                  Math.cos((item.angle + i * 15) * Math.PI / 180) * item.radius
                ],
                y: [
                  Math.sin((item.angle + i * 15) * Math.PI / 180) * item.radius,
                  Math.sin((item.angle + i * 15 + 180) * Math.PI / 180) * (item.radius + 20),
                  Math.sin((item.angle + i * 15) * Math.PI / 180) * item.radius
                ]
              }}
              transition={{ 
                rotate: { duration: 12 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 },
                x: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2"
              style={{ transformOrigin: "0 0" }}
            >
              <div 
                className={`w-8 h-8 bg-${item.color}-500/80 rounded-full flex items-center justify-center shadow-lg`}
              >
                <item.icon className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Future Scenarios */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* AGI Card with brain-like pulsing */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
          }}
          className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-400/30 p-6 text-center relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl"
          />
          
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.6)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 3, repeat: Infinity },
              scale: { duration: 0.3 },
              rotate: { duration: 0.8 }
            }}
            className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
          >
            <Brain className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3 relative z-10">Artificial General Intelligence</h3>
          <p className="text-white/80 text-sm mb-4 relative z-10">Human-level cognitive abilities across all domains</p>
          <div className="text-blue-400 text-xs relative z-10">Timeline: 2030-2040</div>
        </motion.div>

        {/* Digital Assistants Card with connection animations */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
          }}
          className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-400/30 p-6 text-center relative overflow-hidden"
        >
          {/* Flowing data streams */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.2))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), transparent)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
          />
          
          <motion.div
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 0 20px rgba(147, 51, 234, 0.3)",
                "0 0 30px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.3)"
              ]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              boxShadow: { duration: 2.5, repeat: Infinity }
            }}
            className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
          >
            <Users className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3 relative z-10">Digital Assistants</h3>
          <p className="text-white/80 text-sm mb-4 relative z-10">Personalized AI companions for every individual</p>
          <div className="text-purple-400 text-xs relative z-10">Timeline: 2025-2030</div>
        </motion.div>

        {/* Society Integration Card with network effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
          }}
          className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl border border-green-400/30 p-6 text-center relative overflow-hidden"
        >
          {/* Network grid animation */}
          <motion.div
            animate={{
              opacity: [0.1, 0.4, 0.1],
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 2px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 2px, transparent 2px)",
              backgroundSize: "30px 30px"
            }}
          />
          
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            animate={{
              rotate: [0, 360],
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 35px rgba(34, 197, 94, 0.6)",
                "0 0 20px rgba(34, 197, 94, 0.3)"
              ]
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 3, repeat: Infinity },
              scale: { duration: 0.3 }
            }}
            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
          >
            <Globe className="w-8 h-8 text-green-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3 relative z-10">Society Integration</h3>
          <p className="text-white/80 text-sm mb-4 relative z-10">AI embedded in every aspect of human society</p>
          <div className="text-green-400 text-xs relative z-10">Timeline: 2030+</div>
        </motion.div>
      </div>

      {/* Key Considerations */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-2xl border border-indigo-400/30 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Preparing for the Future</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-indigo-400 font-semibold mb-4">Opportunities</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Accelerated scientific discovery
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Personalized education and healthcare
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Enhanced human capabilities
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Climate change solutions
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Challenges</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                Job displacement and reskilling
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                AI safety and alignment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                Privacy and surveillance concerns
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                Inequality and access
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Closing message */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center text-xl text-white/80 mt-12"
      >
        The future of AI is not predetermined — it's shaped by the choices we make today.
      </motion.p>
    </div>
  );
};

export default FutureSlide;
