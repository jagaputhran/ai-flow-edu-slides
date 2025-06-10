
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import IntroSlide from "@/components/slides/IntroSlide";
import WhyAISlide from "@/components/slides/WhyAISlide";
import WhatIsAISlide from "@/components/slides/WhatIsAISlide";
import EvolutionSlide from "@/components/slides/EvolutionSlide";
import MLvsDLSlide from "@/components/slides/MLvsDLSlide";
import NeuralNetworksSlide from "@/components/slides/NeuralNetworksSlide";
import TransformerArchitectureSlide from "@/components/slides/TransformerArchitectureSlide";
import GenerativeAISlide from "@/components/slides/GenerativeAISlide";
import RAGSlide from "@/components/slides/RAGSlide";
import AgenticAISlide from "@/components/slides/AgenticAISlide";
import AgenticEvolutionSlide from "@/components/slides/AgenticEvolutionSlide";
import UseCasesSlide from "@/components/slides/UseCasesSlide";
import RisksEthicsSlide from "@/components/slides/RisksEthicsSlide";
import FutureSlide from "@/components/slides/FutureSlide";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slides = [
    { component: IntroSlide, title: "Introduction" },
    { component: WhyAISlide, title: "Why AI Matters Now" },
    { component: WhatIsAISlide, title: "What is AI?" },
    { component: EvolutionSlide, title: "Evolution of AI" },
    { component: MLvsDLSlide, title: "ML vs DL" },
    { component: NeuralNetworksSlide, title: "Neural Networks" },
    { component: TransformerArchitectureSlide, title: "Transformer Architecture" },
    { component: GenerativeAISlide, title: "Generative AI" },
    { component: RAGSlide, title: "RAG Systems" },
    { component: AgenticAISlide, title: "Agentic AI" },
    { component: AgenticEvolutionSlide, title: "Evolution of Agentic AI" },
    { component: UseCasesSlide, title: "Use Cases" },
    { component: RisksEthicsSlide, title: "Risks & Ethics" },
    { component: FutureSlide, title: "Future of AI" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);

      // Update current slide based on scroll position
      const slideHeight = window.innerHeight;
      const newSlide = Math.floor(scrollTop / slideHeight);
      setCurrentSlide(Math.min(newSlide, slides.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slides.length]);

  const scrollToSlide = (index: number) => {
    const slideHeight = window.innerHeight;
    window.scrollTo({
      top: index * slideHeight,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <Progress value={scrollProgress} className="h-1 rounded-none" />
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-white font-semibold">
            AI with JAGA
          </div>
          <div className="text-white/70 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-400 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-black/20 border-white/20 text-white hover:bg-white/10"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-black/20 border-white/20 text-white hover:bg-white/10"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <motion.div
              key={index}
              className="min-h-screen flex items-center justify-center relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <SlideComponent slideNumber={index + 1} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
