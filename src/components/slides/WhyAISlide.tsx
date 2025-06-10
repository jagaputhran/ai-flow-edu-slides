
import { motion } from "framer-motion";
import { Clock, TrendingUp, Globe, Zap } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const WhyAISlide = ({ slideNumber }: SlideProps) => {
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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-blue-400/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-purple-400/30 rounded-full"
            />
            <div className="absolute inset-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
              <Clock className="w-24 h-24 text-blue-400" />
            </div>
            
            {/* Data streams */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-transparent to-blue-400"
                style={{
                  left: "50%",
                  top: "10%",
                  transformOrigin: "50% 150px",
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Exponential Growth</h3>
              <p className="text-white/70">Data generation doubles every 12 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <Globe className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Global Impact</h3>
              <p className="text-white/70">AI will contribute $13 trillion to global economy by 2030</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <Zap className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Acceleration</h3>
              <p className="text-white/70">Tasks that took months now happen in minutes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAISlide;
