
import { motion } from "framer-motion";
import { Brain, Search, Trophy, Zap, ExternalLink, Play, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SlideProps {
  slideNumber: number;
}

const RAGQuestSlide = ({ slideNumber }: SlideProps) => {
  const [userQuestion, setUserQuestion] = useState("");
  const [llmResponse, setLlmResponse] = useState("Ask a question to see how I respond without external knowledge...");
  const [ragResponse, setRagResponse] = useState("Ask a question to see how RAG enhances my response...");
  const [tokenScore, setTokenScore] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const knowledgeBase = {
    "bitcoin": "Bitcoin was created in 2009 by an unknown person using the pseudonym Satoshi Nakamoto. It's a decentralized digital currency that operates without a central authority.",
    "kubernetes": "Kubernetes is an open-source platform developed by Google to automate containerized application deployment, scaling, and management.",
    "rag": "The RAG (Retrieval-Augmented Generation) architecture retrieves documents relevant to a user query and injects them into the prompt to improve response accuracy.",
    "machine learning": "Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed.",
    "docker": "Docker is a platform that uses containerization technology to package applications and their dependencies into lightweight, portable containers."
  };

  const handleQuestion = async () => {
    if (!userQuestion.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate responses
    setTimeout(() => {
      // Basic LLM response (simulated)
      const basicResponse = `Based on my training data, I can provide some general information about "${userQuestion}". However, my knowledge might be limited or outdated since I don't have access to recent documents or specific knowledge bases.`;
      
      // Check if question matches knowledge base
      const questionLower = userQuestion.toLowerCase();
      let relevantKnowledge = "";
      let hasRelevantKnowledge = false;
      
      Object.entries(knowledgeBase).forEach(([key, value]) => {
        if (questionLower.includes(key)) {
          relevantKnowledge = value;
          hasRelevantKnowledge = true;
        }
      });
      
      let ragResponseText;
      if (hasRelevantKnowledge) {
        ragResponseText = `Based on my knowledge base: ${relevantKnowledge} This information is retrieved from my external documents and provides accurate, up-to-date details about your question.`;
        setTokenScore(prev => prev + 1);
      } else {
        ragResponseText = `I searched my knowledge base but didn't find specific information about "${userQuestion}". RAG works best when the question matches available documents. Try asking about Bitcoin, Kubernetes, RAG, Machine Learning, or Docker.`;
      }
      
      setLlmResponse(basicResponse);
      setRagResponse(ragResponseText);
      setIsProcessing(false);
    }, 2000);
  };

  const resetGame = () => {
    setUserQuestion("");
    setLlmResponse("Ask a question to see how I respond without external knowledge...");
    setRagResponse("Ask a question to see how RAG enhances my response...");
    setTokenScore(0);
  };

  const sampleQuestions = [
    "What is Kubernetes?",
    "Who invented Bitcoin?",
    "How does RAG work?",
    "What is machine learning?",
    "Explain Docker containers"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> 🧠 RAG Quest
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 mb-12 text-center max-w-4xl mx-auto"
      >
        Learn Retrieval-Augmented Generation Through Play
      </motion.p>

      <Tabs defaultValue="game" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-white/10">
          <TabsTrigger value="game" className="text-white data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
            🎮 Play the Game
          </TabsTrigger>
          <TabsTrigger value="about" className="text-white data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
            📊 What is RAG?
          </TabsTrigger>
          <TabsTrigger value="resources" className="text-white data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
            🔗 Learn More
          </TabsTrigger>
        </TabsList>

        <TabsContent value="game" className="mt-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Game Description */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-2xl border border-blue-400/30 p-8">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
                >
                  <Brain className="w-6 h-6 text-blue-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white">Welcome to RAG Quest!</h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                In this interactive game, you'll explore how <strong>RAG</strong> helps AI generate more accurate and grounded answers. 
                Try asking questions to a basic LLM versus a RAG-powered one, and collect <strong>"Knowledge Tokens"</strong> when RAG provides better responses.
              </p>
            </div>

            {/* Question Input */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/10 rounded-2xl border border-indigo-400/30 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-lg font-medium mb-3">
                    🔍 Ask Any Question
                  </label>
                  <textarea
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="e.g., What is Kubernetes? or Who invented Bitcoin?"
                    className="w-full h-20 bg-white/5 border border-indigo-400/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400/60 resize-none"
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={handleQuestion}
                    disabled={!userQuestion.trim() || isProcessing}
                    className="flex-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 hover:bg-indigo-500/30"
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full mr-2"
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Ask Both Models
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={resetGame}
                    variant="outline"
                    className="bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sample Questions */}
            <div className="bg-gradient-to-br from-green-500/20 to-teal-600/10 rounded-2xl border border-green-400/30 p-6">
              <h3 className="text-white font-semibold mb-4">💡 Try These Sample Questions:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sampleQuestions.map((question, index) => (
                  <motion.button
                    key={question}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setUserQuestion(question)}
                    className="p-3 bg-green-500/10 border border-green-400/30 rounded-lg text-left text-green-400 text-sm hover:bg-green-500/20 transition-colors"
                  >
                    "{question}"
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Responses Comparison */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Basic LLM Response */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-2xl border border-orange-400/30 p-6">
                <h3 className="text-orange-400 font-bold text-lg mb-4">🤖 Without RAG</h3>
                <p className="text-white/60 text-sm mb-4">Here's how a plain LLM answers without access to external documents:</p>
                <div className="min-h-24 bg-white/5 border border-orange-400/30 rounded-lg px-4 py-3 text-white/80 text-sm">
                  {llmResponse}
                </div>
              </div>

              {/* RAG Response */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/10 rounded-2xl border border-green-400/30 p-6">
                <h3 className="text-green-400 font-bold text-lg mb-4">🧠 With RAG</h3>
                <p className="text-white/60 text-sm mb-4">Now here's how the same LLM responds with access to an external knowledge base:</p>
                <div className="min-h-24 bg-white/5 border border-green-400/30 rounded-lg px-4 py-3 text-white/80 text-sm">
                  {ragResponse}
                </div>
              </div>
            </div>

            {/* Score Display */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-600/10 rounded-2xl border border-yellow-400/30">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-white font-bold text-lg">🎖️ Knowledge Tokens Earned</h3>
                  <motion.div
                    key={tokenScore}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-yellow-400 text-center"
                  >
                    {tokenScore}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="about" className="mt-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/10 rounded-2xl border border-purple-400/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">📊 What is RAG?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                RAG = <strong>Retrieval-Augmented Generation</strong>. It helps LLMs answer questions more accurately by 
                <strong> retrieving</strong> relevant content from an external source and <strong>injecting</strong> it 
                into the prompt before generating a response.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Search, text: "📥 Retrieve relevant docs", color: "blue" },
                  { icon: Brain, text: "🧠 Inject them into the LLM prompt", color: "purple" },
                  { icon: Zap, text: "✍️ Generate grounded responses", color: "green" }
                ].map((step, index) => (
                  <motion.div
                    key={step.text}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`p-6 bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/10 border border-${step.color}-400/30 rounded-lg text-center`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-${step.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                    </motion.div>
                    <p className="text-white font-medium">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="resources" className="mt-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-600/10 rounded-2xl border border-teal-400/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">🔗 Learn More About RAG</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "OpenAI Cookbook: RAG",
                    url: "https://github.com/openai/openai-cookbook/blob/main/examples/RAG_example.ipynb",
                    description: "Complete RAG implementation examples and best practices"
                  },
                  {
                    title: "Haystack (RAG framework)",
                    url: "https://haystack.deepset.ai/",
                    description: "End-to-end NLP framework for building RAG applications"
                  },
                  {
                    title: "LangChain RAG Templates",
                    url: "https://docs.langchain.com/docs/use-cases/question-answering",
                    description: "Ready-to-use templates for RAG implementations"
                  }
                ].map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="block p-6 bg-teal-500/10 border border-teal-400/30 rounded-lg hover:bg-teal-500/20 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold">{resource.title}</h4>
                      <ExternalLink className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-white/70 text-sm">{resource.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RAGQuestSlide;
