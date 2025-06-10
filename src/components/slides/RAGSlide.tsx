
import { motion } from "framer-motion";
import { Database, Search, Brain, ArrowRight } from "lucide-react";

interface SlideProps {
  slideNumber: number;
}

const RAGSlide = ({ slideNumber }: SlideProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> RAG Systems
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-xl text-white/80 mb-12"
      >
        Retrieval-Augmented Generation
      </motion.p>

      {/* RAG Flow Diagram */}
      <div className="space-y-8">
        {/* User Query */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-lg border border-blue-400/30 p-4 max-w-md">
            <h3 className="text-blue-400 font-semibold mb-2">1. User Query</h3>
            <p className="text-white/80 text-sm">"What are the latest developments in quantum computing?"</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-center"
        >
          <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
        </motion.div>

        {/* Retrieval Process */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Vector Database */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-400/30 p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Database className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h3 className="text-purple-400 font-semibold mb-2">2. Vector Database</h3>
            <p className="text-white/70 text-sm">Store document embeddings for semantic search</p>
            
            {/* Vector visualization */}
            <div className="mt-4 space-y-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="h-1 bg-purple-400/40 rounded"
                  style={{ width: `${60 + i * 10}%` }}
                />
              ))}
            </div>
          </div>

          {/* Similarity Search */}
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg border border-orange-400/30 p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Search className="w-8 h-8 text-orange-400" />
            </motion.div>
            <h3 className="text-orange-400 font-semibold mb-2">3. Similarity Search</h3>
            <p className="text-white/70 text-sm">Find most relevant documents using cosine similarity</p>
            
            {/* Search results */}
            <div className="mt-4 space-y-2">
              {["Doc A", "Doc B", "Doc C"].map((doc, i) => (
                <motion.div
                  key={doc}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className={`text-xs p-2 rounded bg-orange-400/20 text-orange-300 opacity-${100 - i * 20}`}
                >
                  {doc}: {95 - i * 10}% match
                </motion.div>
              ))}
            </div>
          </div>

          {/* Retrieved Context */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg border border-green-400/30 p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Brain className="w-8 h-8 text-green-400" />
            </motion.div>
            <h3 className="text-green-400 font-semibold mb-2">4. Context Injection</h3>
            <p className="text-white/70 text-sm">Combine query with retrieved documents</p>
            
            {/* Context flow */}
            <div className="mt-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs p-2 rounded bg-green-400/20 text-green-300"
              >
                Query + Context → LLM
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="flex justify-center"
        >
          <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
        </motion.div>

        {/* Final Response */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 rounded-lg border border-indigo-400/30 p-6 max-w-2xl">
            <h3 className="text-indigo-400 font-semibold mb-3">5. Enhanced Response</h3>
            <p className="text-white/80 text-sm">
              "Based on the latest research papers, quantum computing has seen significant advances in error correction, 
              with Google's recent breakthrough in quantum error correction showing a 50% reduction in error rates..."
            </p>
            <div className="mt-3 text-xs text-indigo-400">
              ✓ Factually accurate ✓ Up-to-date ✓ Source-grounded
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RAGSlide;
