
import { motion } from "framer-motion";
import { Calculator, Brain, Info, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface SlideProps {
  slideNumber: number;
}

const LLMCalculatorSlide = ({ slideNumber }: SlideProps) => {
  const [modelSize, setModelSize] = useState<string>('7');
  const [suffix, setSuffix] = useState<'M' | 'B'>('B');
  const [precision, setPrecision] = useState<'FP32' | 'FP16' | 'INT8'>('FP16');
  const [showDetails, setShowDetails] = useState(false);
  const [results, setResults] = useState({ rawRAM: 0, recommendedRAM: 0 });

  const bytesPerParam = {
    'FP32': 4,
    'FP16': 2,
    'INT8': 1
  };

  const precisionColors = {
    'FP32': 'red',
    'FP16': 'blue',
    'INT8': 'green'
  };

  const exampleModels = [
    { name: 'GPT-2', size: 1.5, suffix: 'B' as const, precision: 'FP16' as const },
    { name: 'LLaMA-7B', size: 7, suffix: 'B' as const, precision: 'FP16' as const },
    { name: 'GPT-3', size: 175, suffix: 'B' as const, precision: 'FP16' as const },
    { name: 'LLaMA-13B', size: 13, suffix: 'B' as const, precision: 'FP16' as const }
  ];

  useEffect(() => {
    const calculateRAM = () => {
      const inputSize = parseFloat(modelSize) || 0;
      const multiplier = suffix === 'M' ? 1e6 : 1e9;
      const modelParams = inputSize * multiplier;
      const rawRAMBytes = modelParams * bytesPerParam[precision];
      const rawRAMGB = rawRAMBytes / (1024 ** 3);
      const recommendedRAM = rawRAMGB * 1.3;

      setResults({
        rawRAM: rawRAMGB,
        recommendedRAM: recommendedRAM
      });
    };

    calculateRAM();
  }, [modelSize, suffix, precision]);

  const loadExample = (model: typeof exampleModels[0]) => {
    setModelSize(model.size.toString());
    setSuffix(model.suffix);
    setPrecision(model.precision);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> LLM RAM Calculator
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Input */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Calculate RAM Requirements</h2>
          </div>

          {/* Model Size Input */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-3">Model Size</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={modelSize}
                onChange={(e) => setModelSize(e.target.value)}
                placeholder="7"
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
              />
              <select
                value={suffix}
                onChange={(e) => setSuffix(e.target.value as 'M' | 'B')}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
              >
                <option value="M">Million (M)</option>
                <option value="B">Billion (B)</option>
              </select>
            </div>
          </div>

          {/* Precision Type */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-3">Precision Type</label>
            <div className="grid grid-cols-3 gap-2">
              {(['FP32', 'FP16', 'INT8'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setPrecision(type)}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    precision === type
                      ? `bg-${precisionColors[type]}-500/20 border-${precisionColors[type]}-400 text-${precisionColors[type]}-400`
                      : 'bg-slate-700/30 border-slate-600 text-white/70 hover:border-white/30'
                  }`}
                >
                  <div className="font-medium">{type}</div>
                  <div className="text-xs opacity-70">{bytesPerParam[type]} bytes</div>
                </button>
              ))}
            </div>
          </div>

          {/* Example Models */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-3">Quick Examples</label>
            <div className="grid grid-cols-2 gap-2">
              {exampleModels.map((model) => (
                <button
                  key={model.name}
                  onClick={() => loadExample(model)}
                  className="p-2 bg-slate-700/30 border border-slate-600 rounded-lg text-white/80 hover:border-white/30 hover:bg-slate-700/50 transition-all duration-300 text-sm"
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>

          {/* Info Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Info className="w-4 h-4" />
            <span className="text-sm">How is this calculated?</span>
          </button>
        </motion.div>

        {/* Results Display */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-2xl border border-blue-400/30 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">RAM Estimates</h2>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <motion.div
              key={results.rawRAM}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">🧠</span>
                </div>
                <span className="text-white/80 font-medium">Raw RAM Requirement</span>
              </div>
              <div className="text-3xl font-bold text-blue-400">
                {results.rawRAM.toFixed(2)} GB
              </div>
            </motion.div>

            <motion.div
              key={results.recommendedRAM}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">✅</span>
                </div>
                <span className="text-white/80 font-medium">Recommended Total RAM</span>
              </div>
              <div className="text-3xl font-bold text-green-400">
                {results.recommendedRAM.toFixed(2)} GB
              </div>
              <div className="text-white/60 text-sm mt-2">
                1.3× multiplier for real-world usage
              </div>
            </motion.div>

            {/* Warning for invalid input */}
            {(!modelSize || parseFloat(modelSize) <= 0) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-500/20 border border-red-400/30 rounded-lg p-4"
              >
                <div className="text-red-400 text-sm">
                  ⚠️ Please enter a valid model size greater than 0
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Calculation Details */}
      {showDetails && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8 overflow-hidden"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Calculation Explanation
          </h3>
          
          <div className="space-y-4 text-white/80">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <div className="font-medium text-white mb-2">Formula:</div>
              <code className="text-blue-400 text-sm">
                RAM (GB) = (Model Parameters × Bytes per Parameter) ÷ (1024³)
              </code>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                <div className="text-red-400 font-medium mb-2">FP32 (32-bit)</div>
                <div className="text-sm">4 bytes per parameter. Highest precision, most memory.</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                <div className="text-blue-400 font-medium mb-2">FP16 (16-bit)</div>
                <div className="text-sm">2 bytes per parameter. Good balance of precision and memory.</div>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                <div className="text-green-400 font-medium mb-2">INT8 (8-bit)</div>
                <div className="text-sm">1 byte per parameter. Quantized, lowest memory usage.</div>
              </div>
            </div>
            
            <div className="text-sm text-white/60">
              * The 1.3× multiplier accounts for additional overhead including gradients, optimizer states, and system processes.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LLMCalculatorSlide;
