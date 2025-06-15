import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, Mic, MicOff, Search, Key, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  followUpQuestions?: string[];
  isSearchResult?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm JAGA, your AI learning companion with web search capabilities! 🔍 I can help you with our 19-slide AI presentation, search the web for latest AI/ML information, and answer any questions you have. To enable web search, please enter your Gemini API key in the settings below.",
      isUser: false,
      timestamp: new Date(),
      followUpQuestions: [
        "What's in slide 1?",
        "Search for latest AI news",
        "Explain neural networks",
        "What are transformer models?"
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && (window.webkitSpeechRecognition || window.SpeechRecognition)) {
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

    // Load saved API key
    const savedApiKey = localStorage.getItem('gemini-api-key');
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
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

  const saveApiKey = () => {
    localStorage.setItem('gemini-api-key', geminiApiKey);
    setShowApiKeyInput(false);
  };

  const searchWithGemini = async (query: string): Promise<string> => {
    if (!geminiApiKey) {
      return "Web search is not available. Please add your Gemini API key to enable search functionality.";
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Search and provide current, accurate information about: ${query}. Include recent developments, key facts, and practical applications. Focus on the latest trends and discoveries in AI/ML if relevant.`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't find information about that topic.";
    } catch (error) {
      console.error('Gemini API error:', error);
      return "Sorry, I encountered an error while searching. Please check your API key and try again.";
    }
  };

  const getFollowUpQuestions = (userMessage: string, aiResponse: string): string[] => {
    const userMsg = userMessage.toLowerCase();
    const aiMsg = aiResponse.toLowerCase();
    
    console.log('Generating follow-up for user message:', userMsg);
    
    // Search-related follow-ups
    if (userMsg.includes('search') || userMsg.includes('latest') || userMsg.includes('current')) {
      return [
        "Search for AI research papers",
        "Find latest ML frameworks",
        "What are current AI trends?",
        "Search for AI job market"
      ];
    }

    // Check for specific slide numbers first
    const slideMatch = userMsg.match(/slide\s*(\d+)/);
    if (slideMatch) {
      const slideNum = parseInt(slideMatch[1]);
      const questions = [];
      
      if (slideNum > 1) questions.push(`What's in slide ${slideNum - 1}?`);
      if (slideNum < 19) questions.push(`Tell me about slide ${slideNum + 1}`);
      questions.push("Search for related topics");
      questions.push("Show me the full agenda");
      
      return questions.slice(0, 4);
    }
    
    // Enhanced topic-based follow-ups with search integration
    if (userMsg.includes('neural network') || aiMsg.includes('neural network')) {
      return [
        "Search for latest neural network research",
        "How do neural networks learn?",
        "What about deep learning?",
        "Tell me about slide 7 - Neural Networks"
      ];
    }
    
    if (userMsg.includes('transformer') || aiMsg.includes('transformer')) {
      return [
        "Search for new transformer architectures",
        "What about attention mechanisms?",
        "How do LLMs use transformers?",
        "Tell me about slide 9 - Generative AI"
      ];
    }
    
    if (userMsg.includes('ai') && !userMsg.includes('slide')) {
      return [
        "Search for current AI breakthroughs",
        "What are the main types of AI?",
        "Show me slide 3 - What is AI?",
        "Find latest AI applications"
      ];
    }
    
    if (userMsg.includes('machine learning') || userMsg.includes('ml')) {
      return [
        "Search for ML job opportunities",
        "What's new in machine learning?",
        "Tell me about slide 6 - ML vs DL",
        "Find ML learning resources"
      ];
    }

    // Default contextual questions with search
    return [
      "Search for more information",
      "Can you explain this in simpler terms?",
      "Show me a related slide",
      "What's a practical example?"
    ];
  };

  const getAIResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    // Check if user wants to search
    if (message.includes('search') || message.includes('find') || message.includes('latest') || message.includes('current') || message.includes('recent')) {
      return await searchWithGemini(userMessage);
    }

    // Enhanced AI/ML knowledge base
    if (message.includes('machine learning') && !message.includes('slide')) {
      return "Machine Learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions. There are three main types: Supervised Learning (learning from labeled examples like email spam detection), Unsupervised Learning (finding hidden patterns in data like customer segmentation), and Reinforcement Learning (learning through trial and error like game playing). ML powers recommendation systems, fraud detection, medical diagnosis, and autonomous vehicles. Key algorithms include linear regression, decision trees, neural networks, and support vector machines.";
    }

    if (message.includes('deep learning') && !message.includes('slide')) {
      return "Deep Learning uses artificial neural networks with multiple layers (hence 'deep') to automatically learn hierarchical representations of data. Each layer learns increasingly complex features - in image recognition, early layers detect edges, middle layers recognize shapes, and deeper layers identify objects. Deep learning excels at computer vision, natural language processing, and speech recognition. Popular architectures include CNNs for images, RNNs for sequences, and Transformers for language. It requires large datasets and significant computational power but achieves human-level performance in many tasks.";
    }

    if (message.includes('neural network') && !message.includes('slide')) {
      return "Neural Networks are computational models inspired by biological neurons in the brain. They consist of interconnected nodes (artificial neurons) organized in layers: input layer (receives data), hidden layers (process information), and output layer (produces results). Each connection has a weight that determines its influence. During training, the network adjusts these weights using backpropagation to minimize prediction errors. Neural networks can approximate any continuous function and are universal function approximators, making them incredibly versatile for pattern recognition, classification, and regression tasks.";
    }

    if (message.includes('transformer') && !message.includes('slide')) {
      return "Transformers revolutionized AI with the 'attention mechanism', allowing models to focus on different parts of input simultaneously rather than processing sequentially. The key innovation is self-attention, which helps the model understand relationships between all words in a sentence regardless of their distance. Transformers consist of encoder-decoder architectures with multi-head attention, positional encoding, and feed-forward networks. They're the foundation of modern language models like GPT, BERT, and T5, and have been adapted for computer vision (Vision Transformers) and other domains.";
    }

    if (message.includes('rag') || message.includes('retrieval')) {
      return "Retrieval-Augmented Generation (RAG) combines large language models with external knowledge databases to provide more accurate, up-to-date, and contextually relevant responses. The process involves: 1) Retrieving relevant documents from a knowledge base using vector search, 2) Augmenting the user's query with this context, 3) Generating responses using both the context and the LLM's knowledge. RAG helps overcome knowledge cutoffs, reduces hallucinations, enables domain-specific expertise, and allows for real-time information updates without retraining the entire model.";
    }

    if (message.includes('generative ai') || message.includes('generative')) {
      return "Generative AI creates new content rather than just analyzing existing data. It includes text generation (GPT models), image creation (DALL-E, Midjourney, Stable Diffusion), music composition (AIVA), code generation (GitHub Copilot), and video synthesis. These models learn the underlying patterns and distributions of their training data to generate novel, realistic outputs. Key techniques include Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and autoregressive models. Applications span creative industries, software development, drug discovery, and content creation.";
    }

    if (message.includes('llm') || message.includes('large language model')) {
      return "Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like language. They use transformer architecture and are trained using self-supervised learning on internet text. Modern LLMs like GPT-4, Claude, and Gemini can write, summarize, translate, code, analyze, and engage in conversations. They exhibit emergent abilities - capabilities that appear suddenly at certain scales. Key challenges include hallucinations, bias, computational requirements, and alignment with human values. They're being integrated into search, coding assistants, and creative tools.";
    }

    if (message.includes('computer vision') || message.includes('cv')) {
      return "Computer Vision enables machines to interpret and understand visual information from the world. Key tasks include image classification, object detection, semantic segmentation, and facial recognition. Modern CV relies heavily on Convolutional Neural Networks (CNNs) and Vision Transformers. Applications include autonomous vehicles, medical imaging, surveillance, augmented reality, and quality control in manufacturing. Recent advances include few-shot learning, self-supervised learning, and multimodal models that combine vision with language understanding.";
    }

    if (message.includes('natural language processing') || message.includes('nlp')) {
      return "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. Core tasks include tokenization, part-of-speech tagging, named entity recognition, sentiment analysis, machine translation, and text summarization. Modern NLP is dominated by transformer-based models and large language models. Applications include chatbots, search engines, voice assistants, content moderation, and automated writing. Challenges include handling ambiguity, context, cultural nuances, and maintaining factual accuracy.";
    }

    if (message.includes('reinforcement learning') || message.includes('rl')) {
      return "Reinforcement Learning (RL) is learning through interaction with an environment to maximize cumulative rewards. An agent takes actions, receives rewards or penalties, and learns optimal strategies through trial and error. Key concepts include states, actions, rewards, policies, and value functions. RL has achieved superhuman performance in games (AlphaGo, Dota 2), robotics, autonomous driving, and recommendation systems. Modern approaches include Deep Q-Networks (DQN), Policy Gradient methods, and Actor-Critic algorithms.";
    }

    // Check for specific slide numbers
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

    // General conversational responses with enhanced knowledge
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm JAGA, your AI assistant with web search capabilities! I can help you with our AI presentation slides, search for the latest AI/ML information, explain complex concepts, or just chat about technology. What would you like to explore today?";
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
      "That's an interesting question! I can help you with our AI presentation, search for the latest information, explain technology concepts, or just have a conversation. Could you tell me more about what you're curious about?",
      "I'd love to help you with that! Feel free to ask about AI topics, our presentation slides, search for current information, or anything else on your mind. What interests you most?",
      "Great question! I'm here to help with both our AI presentation content and real-time search capabilities. You can ask about specific slides, AI concepts, or search for the latest developments. What would you like to explore?",
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

    try {
      const responseText = await getAIResponse(currentInput);
      const followUpQuestions = getFollowUpQuestions(currentInput, responseText);
      const isSearchResult = currentInput.toLowerCase().includes('search') || 
                           currentInput.toLowerCase().includes('find') || 
                           currentInput.toLowerCase().includes('latest');
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        followUpQuestions,
        isSearchResult,
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
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
        
        {/* Enhanced notification dot with search icon */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Search className="h-2 w-2 text-white" />
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
                    <div className="relative">
                      <Bot className="h-5 w-5" />
                      <Search className="h-2 w-2 absolute -top-1 -right-1 text-green-300" />
                    </div>
                    <CardTitle className="text-lg">JAGA - AI Assistant</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                      className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                      title="Configure API Key"
                    >
                      <Key className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mt-1">Ask me about slides, search the web, or discuss AI/ML topics!</p>
                
                {/* API Key Input */}
                {showApiKeyInput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-3 bg-white/10 rounded-lg"
                  >
                    <p className="text-xs text-blue-100 mb-2">Enter your Gemini API key for web search:</p>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type={showApiKey ? "text" : "password"}
                          value={geminiApiKey}
                          onChange={(e) => setGeminiApiKey(e.target.value)}
                          placeholder="Enter Gemini API key..."
                          className="text-sm bg-white/10 border-white/20 text-white placeholder:text-white/70 pr-8"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="absolute right-1 top-1 h-6 w-6 text-white/70 hover:bg-white/10"
                        >
                          {showApiKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                      <Button
                        onClick={saveApiKey}
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white px-3"
                      >
                        Save
                      </Button>
                    </div>
                    <p className="text-xs text-blue-200 mt-1">
                      Get your free API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline">Google AI Studio</a>
                    </p>
                  </motion.div>
                )}
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
                                : message.isSearchResult
                                ? 'bg-green-50 text-gray-800 border border-green-200'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {message.isSearchResult && (
                              <div className="flex items-center gap-1 mb-2">
                                <Search className="h-3 w-3 text-green-600" />
                                <span className="text-xs text-green-600 font-medium">Web Search Result</span>
                              </div>
                            )}
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
                      placeholder="Ask about slides, search the web, or discuss AI/ML..."
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
                  {!geminiApiKey && (
                    <p className="text-xs text-orange-600 mt-1 text-center">
                      💡 Add your Gemini API key to enable web search
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
