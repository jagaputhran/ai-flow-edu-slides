
import { motion } from "framer-motion";
import { Zap, Globe, Users, Sparkles } from "lucide-react";

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

      {/* Central AGI Visualization */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-center mb-16"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border-2 border-blue-400/30 rounded-full relative"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-purple-400/40 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-green-400/30 rounded-full"
            />
          </motion.div>
          
          {/* Central AGI core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          {/* Orbiting capabilities */}
          {[
            { icon: Globe, color: "blue", delay: 0 },
            { icon: Users, color: "purple", delay: 0.5 },
            { icon: Sparkles, color: "green", delay: 1 },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: item.delay }
              }}
              className="absolute inset-0"
            >
              <div 
                className={`absolute w-8 h-8 bg-${item.color}-500/80 rounded-full flex items-center justify-center`}
                style={{
                  top: `${20 + i * 20}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  transformOrigin: "50% 76px"
                }}
              >
                <item.icon className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Future Scenarios */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-400/30 p-6 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Zap className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3">Artificial General Intelligence</h3>
          <p className="text-white/80 text-sm mb-4">Human-level cognitive abilities across all domains</p>
          <div className="text-blue-400 text-xs">Timeline: 2030-2040</div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-400/30 p-6 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Users className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3">Digital Assistants</h3>
          <p className="text-white/80 text-sm mb-4">Personalized AI companions for every individual</p>
          <div className="text-purple-400 text-xs">Timeline: 2025-2030</div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl border border-green-400/30 p-6 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Globe className="w-8 h-8 text-green-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3">Society Integration</h3>
          <p className="text-white/80 text-sm mb-4">AI embedded in every aspect of human society</p>
          <div className="text-green-400 text-xs">Timeline: 2030+</div>
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
