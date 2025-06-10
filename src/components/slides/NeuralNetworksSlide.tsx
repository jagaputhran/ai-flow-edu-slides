
import { motion } from "framer-motion";
import { Layers, Zap, ArrowRight } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const NeuralNetworksSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Neural Networks & Transformers
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Neural Network Visualization */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-400/30 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-400" />
              Multi-layer Neural Network
            </h3>
            
            <div className="space-y-4">
              {/* Input Layer */}
              <div className="flex items-center gap-4">
                <span className="text-blue-400 text-sm w-16">Input</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-4 h-4 bg-blue-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Hidden Layers */}
              {[...Array(3)].map((_, layerIndex) => (
                <div key={layerIndex} className="flex items-center gap-4">
                  <span className="text-purple-400 text-sm w-16">Hidden {layerIndex + 1}</span>
                  <div className="flex gap-2">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: layerIndex * 0.3 + i * 0.05 
                        }}
                        className="w-3 h-3 bg-purple-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Output Layer */}
              <div className="flex items-center gap-4">
                <span className="text-green-400 text-sm w-16">Output</span>
                <div className="flex gap-2">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-4 h-4 bg-green-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transformer Architecture */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-400/30 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-400" />
              Transformer Block
            </h3>
            
            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-yellow-500/20 border border-yellow-400/30 rounded p-3 text-center"
              >
                <span className="text-yellow-400 font-medium">Multi-Head Attention</span>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-orange-500/20 border border-orange-400/30 rounded p-3 text-center"
              >
                <span className="text-orange-400 font-medium">Add & Norm</span>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-pink-500/20 border border-pink-400/30 rounded p-3 text-center"
              >
                <span className="text-pink-400 font-medium">Feed Forward</span>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-green-500/20 border border-green-400/30 rounded p-3 text-center"
              >
                <span className="text-green-400 font-medium">Add & Norm</span>
              </motion.div>
            </div>

            {/* Attention heads visualization */}
            <div className="mt-6 pt-4 border-t border-purple-400/20">
              <p className="text-white/70 text-sm mb-2">Attention Heads:</p>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className="w-4 h-4 bg-purple-400/60 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center text-white/80 text-lg mt-12 max-w-4xl mx-auto"
      >
        Transformers revolutionized AI with the <span className="text-yellow-400 font-semibold">attention mechanism</span>, 
        allowing models to focus on relevant parts of input sequences and enabling breakthroughs in language understanding.
      </motion.p>
    </div>
  );
};

export default NeuralNetworksSlide;
