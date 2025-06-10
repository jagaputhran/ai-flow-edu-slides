
import { motion } from "framer-motion";
import { Brain, ArrowRight, Layers, Zap, RotateCcw, Plus } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const TransformerArchitectureSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Transformer Architecture Deep Dive
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/80 text-lg text-center mb-12 max-w-4xl mx-auto"
      >
        A detailed look at how tokens flow through embeddings, multi-layer neural networks, 
        and the internal structure of Transformer blocks with attention mechanisms.
      </motion.p>

      <div className="space-y-12">
        {/* Tokenization and Embedding Process */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500/20 to-blue-600/10 rounded-2xl border border-purple-400/30 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            1. Tokenization → Embedding Process
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20"
            >
              <div className="text-purple-400 font-semibold mb-2">Input Text</div>
              <div className="text-white/80 text-sm mb-3">"The cat sat"</div>
              <div className="text-purple-300 text-xs">Natural language input</div>
            </motion.div>

            <motion.div
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20"
            >
              <div className="text-blue-400 font-semibold mb-2">Token IDs</div>
              <div className="text-white/80 text-sm mb-3">[101, 456, 983]</div>
              <div className="text-blue-300 text-xs">Tokenizer output</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-500/10 rounded-lg p-4 border border-green-400/20"
            >
              <div className="text-green-400 font-semibold mb-2">Embeddings</div>
              <div className="text-white/80 text-sm mb-3">E + P = X</div>
              <div className="text-green-300 text-xs">Token + Positional</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Multi-Layer Neural Network */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-2xl border border-orange-400/30 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-orange-400" />
            2. Multi-Layer Neural Network Processing
          </h3>
          
          <div className="flex items-center justify-center gap-8">
            {["Input X", "Dense + ReLU", "Dense + GELU", "To Transformer"].map((layer, i) => (
              <div key={layer} className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: i === 1 || i === 2 ? [
                      "0 0 10px rgba(251, 146, 60, 0.3)",
                      "0 0 20px rgba(251, 146, 60, 0.6)",
                      "0 0 10px rgba(251, 146, 60, 0.3)"
                    ] : undefined
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="bg-orange-500/10 rounded-lg p-4 border border-orange-400/20 min-w-[120px] text-center"
                >
                  <div className="text-orange-400 font-medium text-sm">{layer}</div>
                  {i === 1 && <div className="text-orange-300 text-xs mt-1">ReLU activation</div>}
                  {i === 2 && <div className="text-orange-300 text-xs mt-1">GELU activation</div>}
                </motion.div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-orange-400" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Transformer Block Internal Structure */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-cyan-500/20 to-teal-600/10 rounded-2xl border border-cyan-400/30 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-cyan-400" />
            3. Transformer Block Internal Components
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Multi-Head Attention */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Multi-Head Self-Attention</h4>
              
              {/* Q, K, V Computation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/20"
              >
                <div className="text-cyan-300 font-medium mb-2">Q, K, V Projections</div>
                <div className="text-white/80 text-sm space-y-1">
                  <div>Q = X × Wq (Queries)</div>
                  <div>K = X × Wk (Keys)</div>
                  <div>V = X × Wv (Values)</div>
                </div>
              </motion.div>

              {/* Attention Computation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/20"
              >
                <div className="text-cyan-300 font-medium mb-2">Attention Weights</div>
                <div className="text-white/80 text-sm">
                  A = softmax(QK<sup>T</sup> / √d<sub>k</sub>)
                </div>
              </motion.div>

              {/* Multiple Heads */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/20"
              >
                <div className="text-cyan-300 font-medium mb-3">Attention Heads</div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-8 h-8 bg-cyan-400/60 rounded text-xs flex items-center justify-center text-white"
                    >
                      H{i+1}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Residual Connections and FFN */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-teal-400 mb-4">Residual & Feed-Forward</h4>
              
              {/* Add & Norm */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-teal-500/10 rounded-lg p-4 border border-teal-400/20 flex items-center gap-3"
              >
                <Plus className="w-5 h-5 text-teal-400" />
                <div>
                  <div className="text-teal-300 font-medium">Add & Norm</div>
                  <div className="text-white/80 text-sm">Residual + LayerNorm</div>
                </div>
              </motion.div>

              {/* FFN */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-teal-500/10 rounded-lg p-4 border border-teal-400/20"
              >
                <div className="text-teal-300 font-medium mb-2">Feed-Forward Network</div>
                <div className="text-white/80 text-sm space-y-1">
                  <div>Linear → GELU → Linear</div>
                  <div className="text-teal-200 text-xs">FFN(x) = max(0, xW₁ + b₁)W₂ + b₂</div>
                </div>
              </motion.div>

              {/* Second Add & Norm */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-teal-500/10 rounded-lg p-4 border border-teal-400/20 flex items-center gap-3"
              >
                <RotateCcw className="w-5 h-5 text-teal-400" />
                <div>
                  <div className="text-teal-300 font-medium">Second Add & Norm</div>
                  <div className="text-white/80 text-sm">Final residual connection</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Output Flow */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-br from-violet-500/20 to-pink-600/10 rounded-2xl border border-violet-400/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">4. Output & Generation</h3>
          <div className="flex items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-violet-500/10 rounded-lg p-4 border border-violet-400/20"
            >
              <div className="text-violet-400 font-medium">Contextualized Embeddings</div>
              <div className="text-white/80 text-sm mt-2">Rich token representations</div>
            </motion.div>
            
            <ArrowRight className="w-6 h-6 text-violet-400" />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-pink-500/10 rounded-lg p-4 border border-pink-400/20"
            >
              <div className="text-pink-400 font-medium">Decoder/Generator</div>
              <div className="text-white/80 text-sm mt-2">Next token prediction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TransformerArchitectureSlide;
