
import { motion } from "framer-motion";
import { GitBranch, Layers, ArrowRight } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const MLvsDLSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> ML vs Deep Learning
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Machine Learning Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-400/30 p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Machine Learning</h2>
          </div>

          {/* Enhanced ML Pipeline Visualization */}
          <div className="mb-6">
            <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-400/20">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white text-sm font-medium">
                  Raw Data
                </div>
              </div>
              
              {/* Feature Engineering Step */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-6 bg-blue-300"></div>
              </div>
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-blue-300/80 rounded text-white text-xs">
                  Feature Engineering
                </div>
              </div>
              
              {/* Features Row */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="px-2 py-1 bg-blue-200/80 rounded text-blue-900 text-xs">Age</div>
                <div className="px-2 py-1 bg-blue-200/80 rounded text-blue-900 text-xs">Income</div>
                <div className="px-2 py-1 bg-blue-200/80 rounded text-blue-900 text-xs">Location</div>
                <div className="px-2 py-1 bg-blue-200/80 rounded text-blue-900 text-xs">Education</div>
              </div>
              
              {/* Algorithm Selection */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-6 bg-blue-300"></div>
              </div>
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded text-white text-xs">
                  Algorithm Selection
                </div>
              </div>
              
              {/* Algorithm Options */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="px-2 py-1 bg-blue-300/60 rounded text-white text-xs">SVM</div>
                <div className="px-2 py-1 bg-blue-300/80 rounded text-white text-xs font-medium">Random Forest</div>
                <div className="px-2 py-1 bg-blue-300/60 rounded text-white text-xs">Logistic Reg.</div>
              </div>
              
              {/* Final Prediction */}
              <div className="flex justify-center mb-2">
                <div className="w-px h-6 bg-blue-300"></div>
              </div>
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 rounded-lg text-white text-sm font-medium">
                  Prediction
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Feature engineering required
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Interpretable models
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Works with smaller datasets
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Less computational power
            </li>
          </ul>
        </motion.div>

        {/* Deep Learning Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-400/30 p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Layers className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Deep Learning</h2>
          </div>

          {/* Neural Network Visualization */}
          <div className="mb-6">
            <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs text-purple-400">Input → Hidden Layers → Output</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Automatic feature learning
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Black box models
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Requires large datasets
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              High computational power
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Central Arrow */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-12"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default MLvsDLSlide;
