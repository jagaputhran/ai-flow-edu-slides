import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  followUpQuestions?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm JAGA, your AI learning companion. I can help you with our 19-slide AI presentation, but I'm also here to answer any general questions you might have. Ask me about AI concepts, technology, our slides, or anything else you're curious about!",
      isUser: false,
      timestamp: new Date(),
      followUpQuestions: [
        "What's in slide 1?",
        "Show me the presentation agenda",
        "Explain what AI is",
        "What are neural networks?"
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';
      
      recognitionInstance.onstart = () => {
        setIsListening(true);
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleVoiceInput = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const getFollowUpQuestions = (userMessage: string, aiResponse: string): string[] => {
    const message = userMessage.toLowerCase();
    const response = aiResponse.toLowerCase();
    
    // Generate follow-up questions based on the topic discussed
    if (message.includes('slide') && message.match(/\d+/)) {
      const slideNum = parseInt(message.match(/\d+/)![0]);
      const nextSlide = slideNum + 1;
      const prevSlide = slideNum - 1;
      
      const questions = [];
      if (prevSlide >= 1) questions.push(`What about slide ${prevSlide}?`);
      if (nextSlide <= 19) questions.push(`Tell me about slide ${nextSlide}`);
      questions.push("Show me the full agenda");
      questions.push("How does this relate to the overall presentation?");
      
      return questions.slice(0, 3);
    }
    
    if (message.includes('agenda') || message.includes('presentation') || message.includes('slides')) {
      return [
        "Tell me about slide 3 - What is AI?",
        "Jump to slide 10 - LLM Calculator",
        "What's covered in the RAG slides?",
        "Show me the security-related slides"
      ];
    }
    
    if (message.includes('neural network') || message.includes('neural')) {
      return [
        "How do transformers work?",
        "What's the difference between ML and DL?",
        "Tell me about slide 8 - Transformer Architecture",
        "How are neural networks trained?"
      ];
    }
    
    if (message.includes('transformer') || message.includes('attention')) {
      return [
        "What about generative AI?",
        "How do LLMs work?",
        "Tell me about slide 9 - Generative AI",
        "What's the relationship with neural networks?"
      ];
    }
    
    if (message.includes('rag') || message.includes('retrieval')) {
      return [
        "Try the RAG Quest demo",
        "What about slide 12 - RAG Quest?",
        "How does RAG improve AI responses?",
        "What are the limitations of RAG?"
      ];
    }
    
    if (message.includes('generative ai') || message.includes('generative')) {
      return [
        "How do LLMs calculate memory needs?",
        "What about slide 10 - LLM Calculator?",
        "Tell me about AI creativity",
        "What are the risks of generative AI?"
      ];
    }
    
    if (message.includes('llm') || message.includes('language model')) {
      return [
        "How much RAM do LLMs need?",
        "What about LLM security?",
        "Tell me about slide 17 - LLM Security",
        "Try the injection simulator"
      ];
    }
    
    if (message.includes('agentic') || message.includes('agent')) {
      return [
        "How has agentic AI evolved?",
        "What about slide 14 - Evolution of Agentic AI?",
        "Show me real-world use cases",
        "What's the future of AI agents?"
      ];
    }
    
    if (message.includes('security') || message.includes('injection') || message.includes('attack')) {
      return [
        "Try the injection simulator",
        "What about slide 18 - LLM Injection Simulator?",
        "What are other AI risks?",
        "How can we protect AI systems?"
      ];
    }
    
    if (message.includes('ethics') || message.includes('risk') || message.includes('bias')) {
      return [
        "What about AI security?",
        "Tell me about slide 17 - LLM Security",
        "How do we ensure fair AI?",
        "What's being done about AI bias?"
      ];
    }
    
    if (message.includes('future') || message.includes('agi') || message.includes('prediction')) {
      return [
        "What's AGI exactly?",
        "When will we achieve AGI?",
        "What are current AI limitations?",
        "How will AI change society?"
      ];
    }
    
    if (message.includes('use case') || message.includes('application') || message.includes('industry')) {
      return [
        "Which industries use AI most?",
        "What about healthcare AI?",
        "Tell me about AI in finance",
        "How is AI changing education?"
      ];
    }
    
    // General learning questions
    if (message.includes('learn') || message.includes('study') || message.includes('career')) {
      return [
        "What skills do I need for AI?",
        "Tell me about slide 4 - Data Roles",
        "How do I start in machine learning?",
        "What programming languages for AI?"
      ];
    }
    
    // Default follow-up questions for general topics
    return [
      "Tell me more about this topic",
      "How does this relate to our slides?",
      "Show me a practical example",
      "What should I learn next?"
    ];
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for specific slide numbers first
    const slideNumberMatch = message.match(/slide\s*(\d+)/);
    if (slideNumberMatch) {
      const slideNum = parseInt(slideNumberMatch[1]);
      
      switch (slideNum) {
        case 1:
          return "Slide 1 introduces our presentation 'AI with JAGA' - your comprehensive guide to understanding artificial intelligence. We cover the journey from basic concepts to cutting-edge applications, making AI accessible for everyone!";
        case 2:
          return "Slide 2 explains why AI matters now more than ever. We're at a pivotal moment where AI is transforming industries, enhancing human capabilities, and creating unprecedented opportunities for innovation and problem-solving across all sectors.";
        case 3:
          return "Slide 3 breaks down 'What is AI?' - Artificial Intelligence is the simulation of human intelligence in machines programmed to think, learn, and problem-solve. It encompasses machine learning, deep learning, and various specialized applications.";
        case 4:
          return "Slide 4 compares different data roles including Data Scientists, ML Engineers, Data Engineers, and AI Researchers. Each role has unique responsibilities in the AI ecosystem, from data preparation to model deployment and research.";
        case 5:
          return "Slide 5 traces the Evolution of AI from early rule-based systems to modern neural networks. We've progressed from simple automation to sophisticated systems that can understand language, recognize images, and make complex decisions.";
        case 6:
          return "Slide 6 explains ML vs DL: Machine Learning uses algorithms to learn from data, while Deep Learning uses neural networks with multiple layers. Each layer learns increasingly complex features - perfect for computer vision and natural language processing.";
        case 7:
          return "Slide 7 dives into Neural Networks - inspired by the human brain, these networks consist of interconnected nodes (neurons) that process information. They learn by adjusting connection weights through training on data.";
        case 8:
          return "Slide 8 covers Transformer Architecture - the revolutionary neural network design that powers modern language models. Transformers use attention mechanisms to understand relationships between words regardless of their position in text.";
        case 9:
          return "Slide 9 explores Generative AI - systems that create new content rather than just analyzing existing data. This includes text generation (like GPT), image creation (like DALL-E), and other creative AI applications.";
        case 10:
          return "Slide 10 features our LLM RAM Calculator - an interactive tool that helps you understand the computational requirements for different language models. It shows how model size affects memory needs.";
        case 11:
          return "Slide 11 explains RAG (Retrieval-Augmented Generation) Systems - these combine large language models with external knowledge bases to provide more accurate, up-to-date, and contextually relevant responses.";
        case 12:
          return "Slide 12 presents RAG Quest - an interactive exploration of how RAG systems work. You can experience firsthand how retrieval-augmented generation improves AI responses by accessing external knowledge.";
        case 13:
          return "Slide 13 introduces Agentic AI - autonomous AI systems that can plan, use tools, make decisions, and take actions to achieve goals. Unlike traditional AI that responds to prompts, agentic AI can complete complex multi-step tasks independently.";
        case 14:
          return "Slide 14 shows the Evolution of Agentic AI from simple rule-based agents to sophisticated autonomous systems. We're moving toward AI that can understand context, plan strategically, and adapt to changing environments.";
        case 15:
          return "Slide 15 showcases real-world Use Cases of AI across industries: healthcare diagnostics, financial fraud detection, autonomous vehicles, content creation, customer service, and scientific research. AI is transforming how we work and live.";
        case 16:
          return "Slide 16 addresses Risks & Ethics in AI: bias in algorithms, privacy concerns, job displacement, and the need for responsible AI development. We must ensure AI benefits everyone fairly and transparently.";
        case 17:
          return "Slide 17 covers LLM Security - protecting language models from attacks like prompt injection, data poisoning, and adversarial examples. Security is crucial as LLMs become more prevalent in critical applications.";
        case 18:
          return "Slide 18 features our LLM Injection Simulator - an interactive tool that demonstrates how prompt injection attacks work and how to defend against them. It's essential for understanding AI security vulnerabilities.";
        case 19:
          return "Slide 19 explores the Future of AI with exciting developments like AGI (Artificial General Intelligence), advanced digital assistants, and deep society integration. We're moving toward AI that truly understands and collaborates with humans.";
        default:
          return `I don't have information about slide ${slideNum}. Our presentation has 19 slides covering various AI topics. You can ask about slides 1-19 or our general agenda.`;
      }
    }

    // Check for general slide/agenda questions
    if (message.includes('agenda') || message.includes('slides') || message.includes('presentation') || message.includes('outline')) {
      return "Our presentation covers 19 comprehensive slides: 1) Introduction, 2) Why AI Matters Now, 3) What is AI?, 4) Data Roles Comparison, 5) Evolution of AI, 6) ML vs DL, 7) Neural Networks, 8) Transformer Architecture, 9) Generative AI, 10) LLM RAM Calculator, 11) RAG Systems, 12) RAG Quest, 13) Agentic AI, 14) Evolution of Agentic AI, 15) Use Cases, 16) Risks & Ethics, 17) LLM Security, 18) LLM Injection Simulator, and 19) Future of AI. Which topic interests you most?";
    }

    // Check for topic-specific questions (without slide references)
    if (message.includes('evolution of agentic') || message.includes('agentic evolution')) {
      return "The Evolution of Agentic AI shows our progression from simple rule-based agents to sophisticated autonomous systems. We're moving toward AI that can understand context, plan strategically, and adapt to changing environments. This represents a major shift from reactive to proactive AI systems.";
    }

    // AI topic-specific responses (without slide references)
    if (message.includes('neural network') || message.includes('neural')) {
      return "Neural networks are inspired by the human brain and consist of interconnected nodes (neurons) that process information in layers. Each connection has a weight that determines influence, and through training, these weights adjust to recognize patterns. They're fundamental to modern AI!";
    }
    
    if (message.includes('transformer') || message.includes('attention')) {
      return "Transformers revolutionized AI with the 'attention mechanism', allowing models to focus on different parts of input simultaneously. This makes them incredibly powerful for language tasks and forms the basis of modern language models like GPT and BERT.";
    }
    
    if (message.includes('rag') || message.includes('retrieval')) {
      return "RAG (Retrieval-Augmented Generation) combines large language models with external knowledge databases. It first retrieves relevant information, then uses that context to generate more accurate, up-to-date responses. It's great for overcoming knowledge cutoffs!";
    }
    
    if (message.includes('generative ai') || message.includes('generative')) {
      return "Generative AI creates new content rather than just analyzing existing data - text, images, code, music, and more. Models like GPT, DALL-E, and Midjourney learn patterns from training data to create novel, creative outputs.";
    }
    
    if (message.includes('llm') || message.includes('language model')) {
      return "Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like language. They can write, summarize, translate, code, and engage in conversations. Examples include GPT, Claude, and Gemini.";
    }
    
    if (message.includes('machine learning') || message.includes('ml')) {
      return "Machine Learning is where computers learn patterns from data without explicit programming. There are three main types: supervised (learning from labeled examples), unsupervised (finding hidden patterns), and reinforcement learning (learning through trial and error).";
    }
    
    if (message.includes('deep learning') || message.includes('dl')) {
      return "Deep Learning uses neural networks with many layers to automatically learn hierarchical data representations. Each layer learns increasingly complex features - starting with edges in images and building up to recognizing objects. It's particularly powerful for vision and language tasks.";
    }
    
    if (message.includes('agentic') || message.includes('agent')) {
      return "Agentic AI refers to autonomous AI systems that can plan, use tools, make decisions, and take actions independently to achieve goals. Unlike traditional prompt-response AI, agentic systems can complete complex multi-step tasks without constant human guidance.";
    }

    // General conversational responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm JAGA, your AI assistant. I can help you with our AI presentation slides, explain AI concepts, or chat about technology in general. What would you like to know about?";
    }
    
    if (message.includes('how are you') || message.includes('how do you do')) {
      return "I'm doing great, thank you for asking! I'm excited to help you learn about AI and answer any questions you have. What's on your mind today?";
    }
    
    if (message.includes('what can you do') || message.includes('help me') || message.includes('capabilities')) {
      return "I can help you with many things! I can explain our AI presentation slides, discuss AI concepts like neural networks and machine learning, answer general technology questions, or just have a friendly conversation. What interests you most?";
    }
    
    if (message.includes('weather') || message.includes('temperature')) {
      return "I don't have access to real-time weather data, but I'd be happy to discuss AI applications in weather forecasting! Machine learning models are used extensively for weather prediction and climate modeling.";
    }
    
    if (message.includes('time') || message.includes('date')) {
      return "I don't have access to the current time, but I can tell you that AI systems often work with temporal data for predictions, scheduling, and time-series analysis. Is there something specific about time-based AI applications you'd like to know?";
    }
    
    if (message.includes('programming') || message.includes('coding') || message.includes('development')) {
      return "Programming is a great topic! AI is revolutionizing software development with code generation tools like GitHub Copilot, automated testing, and even AI pair programming. Are you interested in learning how AI can assist with coding?";
    }
    
    if (message.includes('career') || message.includes('job') || message.includes('work')) {
      return "AI is creating exciting career opportunities! There are roles in AI research, machine learning engineering, data science, AI ethics, and more. Many traditional roles are also being enhanced by AI tools. What aspect of AI careers interests you?";
    }
    
    if (message.includes('learn') || message.includes('study') || message.includes('education')) {
      return "That's wonderful that you want to learn! AI education is evolving rapidly with interactive tutorials, personalized learning paths, and AI tutors. I'm here to help you understand any AI concepts. What would you like to start with?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here whenever you need help understanding AI concepts, want to discuss our presentation, or just chat about technology. Keep exploring and learning! 🚀";
    }

    // Default responses for unclear questions
    const defaultResponses = [
      "That's an interesting question! I can help you with our AI presentation, explain technology concepts, or just have a conversation. Could you tell me more about what you're curious about?",
      "I'd love to help you with that! Feel free to ask about AI topics, our presentation slides, technology in general, or anything else on your mind. What interests you most?",
      "Great question! I'm here to help with both our AI presentation content and general questions. You can ask about specific slides, AI concepts, technology trends, or just chat. What would you like to explore?",
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
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const responseText = getAIResponse(currentInput);
      const followUpQuestions = getFollowUpQuestions(currentInput, responseText);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        followUpQuestions,
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleFollowUpClick = (question: string) => {
    setInputValue(question);
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
                    <CardTitle className="text-lg">JAGA - AI Assistant</CardTitle>
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
                <p className="text-blue-100 text-sm mt-1">Ask me about slides, AI topics, or anything!</p>
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
                        <div className={`max-w-[80%] ${message.isUser ? 'text-right' : 'text-left'}`}>
                          <div
                            className={`p-3 rounded-lg ${
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
                          
                          {/* Follow-up Questions */}
                          {!message.isUser && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                            <div className="mt-2 space-y-1">
                              <p className="text-xs text-gray-500 mb-1">💡 Follow-up questions:</p>
                              {message.followUpQuestions.map((question, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleFollowUpClick(question)}
                                  className="block w-full text-left text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200 transition-colors"
                                >
                                  {question}
                                </button>
                              ))}
                            </div>
                          )}
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
                      placeholder="Ask about slides, AI topics, or anything..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={toggleVoiceInput}
                      disabled={isTyping}
                      size="icon"
                      className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'} transition-colors`}
                      title={isListening ? 'Stop listening' : 'Start voice input'}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      size="icon"
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  {isListening && (
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      🎤 Listening... Speak now
                    </p>
                  )}
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
