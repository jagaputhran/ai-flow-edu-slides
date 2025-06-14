
import { motion } from "framer-motion";
import { GitBranch, Layers, ArrowRight, Zap } from "lucide-react";

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

          {/* Advanced Neural Network Visualization */}
          <div className="mb-6">
            <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-400/20 relative overflow-hidden">
              {/* Background Neural Connections */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{
                      left: `${10 + (i % 5) * 20}%`,
                      top: `${10 + Math.floor(i / 5) * 30}%`,
                      width: `${20 + (i % 3) * 10}%`,
                      height: '1px',
                      transform: `rotate(${(i * 23) % 180}deg)`,
                    }}
                    animate={{
                      opacity: [0.1, 0.6, 0.1],
                      scaleX: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Neural Network Layers */}
              <div className="relative z-10">
                <div className="flex justify-between items-center h-48">
                  {/* Input Layer */}
                  <div className="flex flex-col justify-center space-y-3">
                    <div className="text-xs text-purple-300 mb-2">Input</div>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            '0 0 5px rgba(147, 51, 234, 0.5)',
                            '0 0 20px rgba(147, 51, 234, 0.8)',
                            '0 0 5px rgba(147, 51, 234, 0.5)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Hidden Layer 1 */}
                  <div className="flex flex-col justify-center space-y-2">
                    <div className="text-xs text-purple-300 mb-2">Hidden 1</div>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.3 + i * 0.1,
                        }}
                      />
                    ))}
                  </div>

                  {/* Hidden Layer 2 */}
                  <div className="flex flex-col justify-center space-y-2">
                    <div className="text-xs text-purple-300 mb-2">Hidden 2</div>
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-red-400"
                        animate={{
                          scale: [0.7, 1.1, 0.7],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.6 + i * 0.08,
                        }}
                      />
                    ))}
                  </div>

                  {/* Hidden Layer 3 */}
                  <div className="flex flex-col justify-center space-y-2">
                    <div className="text-xs text-purple-300 mb-2">Hidden 3</div>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400"
                        animate={{
                          scale: [0.9, 1.4, 0.9],
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: 0.9 + i * 0.15,
                        }}
                      />
                    ))}
                  </div>

                  {/* Output Layer */}
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="text-xs text-purple-300 mb-2">Output</div>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-green-400 shadow-lg"
                        animate={{
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            '0 0 5px rgba(34, 197, 94, 0.5)',
                            '0 0 25px rgba(34, 197, 94, 0.9)',
                            '0 0 5px rgba(34, 197, 94, 0.5)',
                          ],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: 1.2 + i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Data Flow Animation */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-yellow-400 shadow-lg"
                      style={{ left: '0%' }}
                      animate={{
                        left: ['0%', '25%', '50%', '75%', '100%'],
                        opacity: [0, 1, 1, 1, 0],
                        scale: [0.5, 1, 0.8, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Neural Activity Indicator */}
                <div className="absolute top-2 right-2">
                  <motion.div
                    className="flex items-center gap-1 text-xs text-purple-300"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-3 h-3" />
                    <span>Processing...</span>
                  </motion.div>
                </div>
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
