import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm JAGA, your AI learning companion. I can help you understand any topic from our AI presentation. Ask me about neural networks, transformers, RAG systems, or anything else you'd like to learn!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('neural network') || message.includes('neural')) {
      return "Neural networks are inspired by the human brain! They consist of interconnected nodes (neurons) that process information in layers. Each connection has a weight that determines how much influence one neuron has on another. Through training, these weights are adjusted to recognize patterns and make predictions.";
    }
    
    if (message.includes('transformer') || message.includes('attention')) {
      return "Transformers revolutionized AI with the 'attention mechanism'! They can focus on different parts of input data simultaneously, making them incredibly powerful for language tasks. The key innovation is self-attention, which allows the model to understand relationships between words regardless of their distance in a sentence.";
    }
    
    if (message.includes('rag') || message.includes('retrieval')) {
      return "RAG (Retrieval-Augmented Generation) combines the power of large language models with external knowledge! It works by first retrieving relevant information from a database, then using that context to generate more accurate and up-to-date responses. Think of it as giving AI access to a library of information!";
    }
    
    if (message.includes('generative ai') || message.includes('generative')) {
      return "Generative AI creates new content rather than just analyzing existing data! It can generate text, images, code, music, and more. Models like GPT, DALL-E, and others learn patterns from training data to create novel outputs that follow similar patterns.";
    }
    
    if (message.includes('llm') || message.includes('language model')) {
      return "Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like language. They learn statistical patterns in language to predict the next word in a sequence, enabling them to engage in conversations, write code, and perform various language tasks!";
    }
    
    if (message.includes('machine learning') || message.includes('ml')) {
      return "Machine Learning is a subset of AI where computers learn patterns from data without being explicitly programmed for every scenario. There are three main types: supervised learning (learning from labeled examples), unsupervised learning (finding hidden patterns), and reinforcement learning (learning through trial and error).";
    }
    
    if (message.includes('deep learning') || message.includes('dl')) {
      return "Deep Learning uses neural networks with many layers (hence 'deep') to automatically learn hierarchical representations of data. Each layer learns increasingly complex features - like edges, then shapes, then objects in image recognition. It's particularly powerful for tasks like computer vision and natural language processing.";
    }
    
    if (message.includes('agentic') || message.includes('agent')) {
      return "Agentic AI refers to AI systems that can act autonomously to achieve goals! Unlike traditional AI that responds to prompts, agentic AI can plan, use tools, make decisions, and take actions in the real world. Think of it as AI that can complete complex multi-step tasks independently.";
    }
    
    if (message.includes('ethics') || message.includes('bias') || message.includes('risk')) {
      return "AI ethics is crucial! Key concerns include bias in training data leading to unfair outcomes, privacy issues with data collection, job displacement, and the need for transparency in AI decision-making. We must develop AI responsibly to ensure it benefits everyone fairly.";
    }
    
    if (message.includes('future') || message.includes('agi')) {
      return "The future of AI is exciting! We're moving toward AGI (Artificial General Intelligence) - AI that matches human cognitive abilities across all domains. This could lead to AI assistants that truly understand context, revolutionary scientific discoveries, and seamless integration of AI into every aspect of society.";
    }
    
    if (message.includes('comcast') || message.includes('company')) {
      return "Companies like Comcast are using AI to transform their operations! They use AI for customer service chatbots, network optimization, personalized content recommendations, fraud detection, and predictive maintenance. AI helps them provide better service while reducing costs.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm excited to help you learn about AI. You can ask me about any topic from our presentation - neural networks, transformers, RAG systems, generative AI, ethics, the future of AI, and much more. What would you like to explore first?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here to help you understand AI concepts anytime. Keep the questions coming - learning about AI is an exciting journey! 🚀";
    }
    
    // Default responses for unclear questions
    const defaultResponses = [
      "That's an interesting question! Could you be more specific about which AI topic you'd like to learn about? I can explain neural networks, transformers, RAG systems, generative AI, and more!",
      "I'd love to help you understand that better! Try asking about specific topics like 'What are neural networks?' or 'How does generative AI work?' for more detailed explanations.",
      "Great question! I cover many AI topics from our presentation. You could ask about machine learning, deep learning, LLMs, agentic AI, ethics, or the future of AI. What interests you most?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </Button>
        
        {/* Notification dot for new feature */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Bot className="h-2 w-2 text-white" />
          </motion.div>
        )}
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 left-6 z-40 w-96 h-[500px]"
          >
            <Card className="h-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl flex flex-col">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg pb-3 flex-shrink-0 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    <CardTitle className="text-lg">JAGA - AI Learning Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-blue-100 text-sm mt-1">Ask me about any AI topic!</p>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 flex flex-col min-h-0">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.isUser
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                          <motion.div
                            className="flex space-x-1"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-gray-500 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-500 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-500 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-gray-200 flex-shrink-0">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about AI topics..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      size="icon"
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
