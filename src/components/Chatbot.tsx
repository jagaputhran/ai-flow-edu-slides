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
      text: "Hi! I'm JAGA, your AI learning companion for this presentation on 'AI with JAGA'. I can help you understand any topic from our 19-slide presentation covering everything from basic AI concepts to future trends. Ask me about specific slides, concepts, or anything you'd like to learn!",
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
    
    // Agenda and slide-specific responses
    if (message.includes('agenda') || message.includes('slides') || message.includes('presentation') || message.includes('outline')) {
      return "Our presentation covers 19 comprehensive slides: 1) Introduction, 2) Why AI Matters Now, 3) What is AI?, 4) Data Roles Comparison, 5) Evolution of AI, 6) ML vs DL, 7) Neural Networks, 8) Transformer Architecture, 9) Generative AI, 10) LLM RAM Calculator, 11) RAG Systems, 12) RAG Quest, 13) Agentic AI, 14) Evolution of Agentic AI, 15) Use Cases, 16) Risks & Ethics, 17) LLM Security, 18) LLM Injection Simulator, and 19) Future of AI. Which topic interests you most?";
    }
    
    if (message.includes('slide 1') || message.includes('introduction')) {
      return "Slide 1 introduces our presentation 'AI with JAGA' - your comprehensive guide to understanding artificial intelligence. We cover the journey from basic concepts to cutting-edge applications, making AI accessible for everyone!";
    }
    
    if (message.includes('slide 2') || message.includes('why ai matters')) {
      return "Slide 2 explains why AI matters now more than ever. We're at a pivotal moment where AI is transforming industries, enhancing human capabilities, and creating unprecedented opportunities for innovation and problem-solving across all sectors.";
    }
    
    if (message.includes('slide 3') || message.includes('what is ai')) {
      return "Slide 3 breaks down 'What is AI?' - Artificial Intelligence is the simulation of human intelligence in machines programmed to think, learn, and problem-solve. It encompasses machine learning, deep learning, and various specialized applications.";
    }
    
    if (message.includes('slide 4') || message.includes('data roles')) {
      return "Slide 4 compares different data roles including Data Scientists, ML Engineers, Data Engineers, and AI Researchers. Each role has unique responsibilities in the AI ecosystem, from data preparation to model deployment and research.";
    }
    
    if (message.includes('slide 5') || message.includes('evolution')) {
      return "Slide 5 traces the Evolution of AI from early rule-based systems to modern neural networks. We've progressed from simple automation to sophisticated systems that can understand language, recognize images, and make complex decisions.";
    }
    
    if (message.includes('slide 6') || message.includes('ml vs dl') || message.includes('machine learning vs deep learning')) {
      return "Slide 6 explains ML vs DL: Machine Learning uses algorithms to learn from data, while Deep Learning uses neural networks with multiple layers. DL is a subset of ML that's particularly powerful for complex pattern recognition tasks.";
    }
    
    if (message.includes('slide 7') || message.includes('neural networks')) {
      return "Slide 7 dives into Neural Networks - inspired by the human brain, these networks consist of interconnected nodes (neurons) that process information. They learn by adjusting connection weights through training on data.";
    }
    
    if (message.includes('slide 8') || message.includes('transformer')) {
      return "Slide 8 covers Transformer Architecture - the revolutionary neural network design that powers modern language models. Transformers use attention mechanisms to understand relationships between words regardless of their position in text.";
    }
    
    if (message.includes('slide 9') || message.includes('generative ai')) {
      return "Slide 9 explores Generative AI - systems that create new content rather than just analyzing existing data. This includes text generation (like GPT), image creation (like DALL-E), and other creative AI applications.";
    }
    
    if (message.includes('slide 10') || message.includes('llm calculator') || message.includes('ram calculator')) {
      return "Slide 10 features our LLM RAM Calculator - an interactive tool that helps you understand the computational requirements for running different language models. It shows how model size affects memory needs.";
    }
    
    if (message.includes('slide 11') || message.includes('rag systems') || message.includes('rag')) {
      return "Slide 11 explains RAG (Retrieval-Augmented Generation) Systems - these combine large language models with external knowledge bases to provide more accurate, up-to-date, and contextually relevant responses.";
    }
    
    if (message.includes('slide 12') || message.includes('rag quest')) {
      return "Slide 12 presents RAG Quest - an interactive exploration of how RAG systems work. You can experience firsthand how retrieval-augmented generation improves AI responses by accessing external knowledge.";
    }
    
    if (message.includes('slide 13') || message.includes('agentic ai')) {
      return "Slide 13 introduces Agentic AI - autonomous AI systems that can plan, use tools, make decisions, and take actions to achieve goals. Unlike traditional AI that responds to prompts, agentic AI can complete complex multi-step tasks independently.";
    }
    
    if (message.includes('slide 14') || message.includes('evolution of agentic')) {
      return "Slide 14 shows the Evolution of Agentic AI from simple rule-based agents to sophisticated autonomous systems. We're moving toward AI that can understand context, plan strategically, and adapt to changing environments.";
    }
    
    if (message.includes('slide 15') || message.includes('use cases')) {
      return "Slide 15 showcases real-world Use Cases of AI across industries: healthcare diagnostics, financial fraud detection, autonomous vehicles, content creation, customer service, and scientific research. AI is transforming how we work and live.";
    }
    
    if (message.includes('slide 16') || message.includes('risks') || message.includes('ethics')) {
      return "Slide 16 addresses Risks & Ethics in AI: bias in algorithms, privacy concerns, job displacement, and the need for responsible AI development. We must ensure AI benefits everyone fairly and transparently.";
    }
    
    if (message.includes('slide 17') || message.includes('llm security')) {
      return "Slide 17 covers LLM Security - protecting language models from attacks like prompt injection, data poisoning, and adversarial examples. Security is crucial as LLMs become more prevalent in critical applications.";
    }
    
    if (message.includes('slide 18') || message.includes('injection simulator')) {
      return "Slide 18 features our LLM Injection Simulator - an interactive tool that demonstrates how prompt injection attacks work and how to defend against them. It's essential for understanding AI security vulnerabilities.";
    }
    
    if (message.includes('slide 19') || message.includes('future of ai') || message.includes('future')) {
      return "Slide 19 explores the Future of AI with exciting developments like AGI (Artificial General Intelligence), advanced digital assistants, and deep society integration. We're moving toward AI that truly understands and collaborates with humans.";
    }

    // Existing topic-specific responses
    if (message.includes('neural network') || message.includes('neural')) {
      return "Neural networks are covered in Slide 7! They're inspired by the human brain and consist of interconnected nodes (neurons) that process information in layers. Each connection has a weight that determines influence, and through training, these weights adjust to recognize patterns.";
    }
    
    if (message.includes('transformer') || message.includes('attention')) {
      return "Transformers are detailed in Slide 8! They revolutionized AI with the 'attention mechanism', allowing models to focus on different parts of input simultaneously. This makes them incredibly powerful for language tasks and forms the basis of modern LLMs.";
    }
    
    if (message.includes('rag') || message.includes('retrieval')) {
      return "RAG is covered in Slides 11-12! RAG (Retrieval-Augmented Generation) combines large language models with external knowledge databases. It first retrieves relevant information, then uses that context to generate more accurate responses. Try our RAG Quest demo!";
    }
    
    if (message.includes('generative ai') || message.includes('generative')) {
      return "Generative AI is explored in Slide 9! It creates new content rather than just analyzing existing data - text, images, code, music, and more. Models like GPT and DALL-E learn patterns from training data to create novel outputs.";
    }
    
    if (message.includes('llm') || message.includes('language model')) {
      return "LLMs are discussed throughout our presentation! Large Language Models are AI systems trained on vast text data to understand and generate human-like language. Check out our LLM RAM Calculator in Slide 10 to understand their computational needs!";
    }
    
    if (message.includes('machine learning') || message.includes('ml')) {
      return "Machine Learning is covered in Slide 6! It's where computers learn patterns from data without explicit programming. There are three main types: supervised (labeled examples), unsupervised (hidden patterns), and reinforcement learning (trial and error).";
    }
    
    if (message.includes('deep learning') || message.includes('dl')) {
      return "Deep Learning is explained in Slide 6! It uses neural networks with many layers to automatically learn hierarchical data representations. Each layer learns increasingly complex features - perfect for computer vision and natural language processing.";
    }
    
    if (message.includes('agentic') || message.includes('agent')) {
      return "Agentic AI is featured in Slides 13-14! These are autonomous AI systems that can plan, use tools, make decisions, and take actions independently. Unlike traditional prompt-response AI, agentic systems can complete complex multi-step tasks autonomously.";
    }
    
    if (message.includes('security') || message.includes('injection') || message.includes('attack')) {
      return "AI Security is covered in Slides 17-18! Key concerns include prompt injection attacks, data poisoning, and adversarial examples. Try our LLM Injection Simulator in Slide 18 to see these vulnerabilities firsthand and learn defense strategies.";
    }
    
    if (message.includes('calculator') || message.includes('memory') || message.includes('ram')) {
      return "Our LLM RAM Calculator in Slide 10 helps you understand computational requirements for different language models! It shows how model parameters affect memory usage - essential for planning AI deployments.";
    }
    
    if (message.includes('comcast') || message.includes('company') || message.includes('business')) {
      return "As covered in Slide 15, companies use AI for customer service chatbots, network optimization, personalized recommendations, fraud detection, and predictive maintenance. AI transforms operations while improving service quality and reducing costs.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm excited to help you explore our 19-slide AI presentation! You can ask about specific slides (like 'What's slide 8?'), topics (neural networks, RAG, ethics), or our interactive demos. What would you like to learn about first?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here to help you understand any part of our AI presentation. Feel free to ask about specific slides, dive deeper into concepts, or explore our interactive tools. Keep learning! 🚀";
    }
    
    // Default responses for unclear questions
    const defaultResponses = [
      "That's an interesting question! I can help you understand any of our 19 slides covering AI topics from basics to advanced concepts. Try asking about specific slides (1-19) or topics like neural networks, transformers, RAG, or agentic AI!",
      "I'd love to help you with that! You can ask about our presentation outline, specific slides, or dive deep into topics like machine learning, LLM security, or the future of AI. What interests you most?",
      "Great question! Our presentation covers everything from 'What is AI?' to cutting-edge topics like agentic systems and AI security. You can also try our interactive demos - the LLM Calculator, RAG Quest, or Injection Simulator. What would you like to explore?",
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
                <p className="text-blue-100 text-sm mt-1">Ask me about any slide or AI topic!</p>
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
                      placeholder="Ask about slides, topics, or demos..."
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
