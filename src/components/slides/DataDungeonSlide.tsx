
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Zap, 
  Search, 
  Code, 
  Shuffle, 
  Upload, 
  Clock, 
  HelpCircle, 
  RefreshCw,
  Play,
  Trophy,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Target,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SlideProps {
  slideNumber: number;
}

const DataDungeonSlide = ({ slideNumber }: SlideProps) => {
  const [selectedTool, setSelectedTool] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [currentDataset, setCurrentDataset] = useState(0);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [showResult, setShowResult] = useState(false);
  const [aiTip, setAiTip] = useState("");
  const [usedTools, setUsedTools] = useState<string[]>([]);

  const tools = [
    {
      id: "llm-schema",
      name: "🧠 LLM Schema Generator",
      description: "Auto-generates structured schema",
      power: "GPT-4 / AutoML inference",
      effectiveness: { nulls: 30, format: 90, outliers: 20, duplicates: 40 }
    },
    {
      id: "gpt-cleaner",
      name: "🧹 GPT-4 Cleaner",
      description: "Cleans nulls, formats JSON, detects dirty columns",
      power: "LLM-powered cleansing",
      effectiveness: { nulls: 95, format: 85, outliers: 60, duplicates: 70 }
    },
    {
      id: "anomaly-detector",
      name: "🔍 Anomaly Detector",
      description: "Detects outliers & suspicious rows",
      power: "Isolation Forest / LLM",
      effectiveness: { nulls: 20, format: 30, outliers: 95, duplicates: 60 }
    },
    {
      id: "regex-warrior",
      name: "🧬 Regex Warrior",
      description: "Pattern matches & regex extraction",
      power: "Rule-based AI",
      effectiveness: { nulls: 50, format: 95, outliers: 40, duplicates: 80 }
    },
    {
      id: "column-combiner",
      name: "🧩 Column Combiner",
      description: "Suggests merging/splitting features",
      power: "Feature engineering LLM",
      effectiveness: { nulls: 40, format: 70, outliers: 30, duplicates: 85 }
    }
  ];

  const datasets = [
    {
      name: "Customer Data",
      data: `name, age, salary, join_date
Alice, , 52000, 2023/01/12
Bob, 27, NA, 2023-02-15
Charlie, 29, 57000, 2023-15-01
, 34, 60000, 2023-03-05`,
      issues: ["nulls", "format"],
      monster: "Null Knight"
    },
    {
      name: "Sales Records",
      data: `product, price, quantity, date
Laptop, 999, 2, 2023-01-01
Phone, 50000, 1, 2023-01-02
Tablet, 499, -5, 2023-01-03
Mouse, 25, 100, 2023-01-04`,
      issues: ["outliers", "format"],
      monster: "Schema Shifter"
    },
    {
      name: "User Logs",
      data: `user_id, action, timestamp
1001, login, 2023-01-01 10:00
1001, login, 2023-01-01 10:00
1002, logout, 2023-01-01 11:00
1002, logout, 2023-01-01 11:00`,
      issues: ["duplicates"],
      monster: "Duplication Demon"
    }
  ];

  const aiTips = [
    "💡 Null values detected! Try the GPT-4 Cleaner for best results!",
    "🎯 Date format issues? The Regex Warrior excels at pattern matching!",
    "⚠️ Outliers spotted! Anomaly Detector is your best weapon here!",
    "🔄 Duplicate records found! Column Combiner can help merge them!",
    "🧙‍♂️ Pro tip: Combine multiple tools for maximum effectiveness!"
  ];

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [gameActive, timeLeft]);

  const generateRandomDataset = () => {
    const randomIndex = Math.floor(Math.random() * datasets.length);
    setCurrentDataset(randomIndex);
    setMonsterHealth(100);
    setShowResult(false);
    setUsedTools([]);
    
    // Generate AI tip based on dataset issues
    const dataset = datasets[randomIndex];
    const relevantTips = aiTips.filter(tip => 
      dataset.issues.some(issue => tip.toLowerCase().includes(issue))
    );
    setAiTip(relevantTips[Math.floor(Math.random() * relevantTips.length)] || aiTips[4]);
  };

  const startGame = () => {
    setGameActive(true);
    setTimeLeft(60);
    setScore(0);
    generateRandomDataset();
  };

  const useTool = () => {
    if (!selectedTool) return;

    const tool = tools.find(t => t.id === selectedTool);
    const dataset = datasets[currentDataset];
    
    if (!tool || !dataset) return;

    // Calculate effectiveness
    let damage = 0;
    dataset.issues.forEach(issue => {
      damage += tool.effectiveness[issue as keyof typeof tool.effectiveness] || 0;
    });
    
    damage = Math.min(damage, monsterHealth);
    const newHealth = Math.max(0, monsterHealth - damage);
    
    setMonsterHealth(newHealth);
    setScore(prev => prev + damage);
    setUsedTools(prev => [...prev, tool.name]);
    setShowResult(true);

    if (newHealth === 0) {
      setScore(prev => prev + 100); // Bonus for defeating monster
      setTimeout(generateRandomDataset, 2000);
    }
  };

  const getCleanedDataset = () => {
    if (!selectedTool) return datasets[currentDataset].data;
    
    const tool = tools.find(t => t.id === selectedTool);
    const dataset = datasets[currentDataset];
    
    if (tool?.id === "gpt-cleaner") {
      return `name, age, salary, join_date
Alice, 25, 52000, 2023-01-12
Bob, 27, 0, 2023-02-15
Charlie, 29, 57000, 2023-01-15
John, 34, 60000, 2023-03-05

✅ Fixed: Filled missing values, standardized date format`;
    }
    
    return dataset.data + "\n\n🔧 " + tool?.description;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> ⚔️ Data Dungeon: Clean or Corrupt?
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 text-center"
      >
        <p className="text-xl text-white/80 mb-6">
          Fight data chaos in the realm of automation! Battle corrupted datasets using AI-powered tools.
        </p>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/609/609803.png" 
          alt="Data Monster" 
          className="w-20 h-20 mx-auto mb-6 opacity-80"
        />
      </motion.div>

      <Tabs defaultValue="battle" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="battle" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            🎮 Battle Mode
          </TabsTrigger>
          <TabsTrigger value="scoreboard" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            🏆 Scoreboard
          </TabsTrigger>
          <TabsTrigger value="learn" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            📚 Learn Automation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="battle" className="space-y-6">
          {/* Game Controls */}
          <Card className="bg-gradient-to-br from-purple-500/20 to-blue-600/10 border-purple-400/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-white">Game Controls</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-purple-400 border-purple-400/50">
                    Score: {score}
                  </Badge>
                  {gameActive && (
                    <Badge variant="outline" className="text-red-400 border-red-400/50">
                      <Clock className="w-3 h-3 mr-1" />
                      {timeLeft}s
                    </Badge>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button 
                  onClick={startGame} 
                  disabled={gameActive}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Game
                </Button>
                <Button 
                  onClick={generateRandomDataset}
                  variant="outline"
                  className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  🎲 Random Dataset
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  💾 Upload CSV
                </Button>
              </div>
              
              {gameActive && (
                <Progress value={(60 - timeLeft) / 60 * 100} className="w-full" />
              )}
            </CardContent>
          </Card>

          {/* Current Battle */}
          {datasets[currentDataset] && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Dataset & Monster */}
              <Card className="bg-gradient-to-br from-red-500/20 to-orange-600/10 border-red-400/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-white">{datasets[currentDataset].name}</span>
                    <motion.div
                      animate={{ 
                        scale: monsterHealth > 50 ? [1, 1.1, 1] : monsterHealth > 0 ? [1, 0.9, 1] : [1, 0.5, 0]
                      }}
                      transition={{ duration: 0.5, repeat: monsterHealth > 0 ? Infinity : 0 }}
                      className="text-2xl"
                    >
                      {monsterHealth > 0 ? "👹" : "💀"}
                    </motion.div>
                  </CardTitle>
                  <div className="text-red-400 font-medium">
                    Monster: {datasets[currentDataset].monster}
                  </div>
                  <Progress value={monsterHealth} className="mt-2" />
                  <div className="text-white/70 text-sm">Health: {monsterHealth}/100</div>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-black/30 p-4 rounded overflow-x-auto text-white/80">
                    {datasets[currentDataset].data}
                  </pre>
                </CardContent>
              </Card>

              {/* AI Weapons */}
              <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-600/10 border-blue-400/30">
                <CardHeader>
                  <CardTitle className="text-white">Choose Your AI Weapon</CardTitle>
                  {aiTip && (
                    <Alert className="bg-yellow-500/20 border-yellow-400/50">
                      <HelpCircle className="h-4 w-4 text-yellow-400" />
                      <AlertDescription className="text-yellow-200">
                        {aiTip}
                      </AlertDescription>
                    </Alert>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={selectedTool} onValueChange={setSelectedTool}>
                    <SelectTrigger className="bg-black/30 border-blue-400/50 text-white">
                      <SelectValue placeholder="Select an AI tool..." />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-blue-400/50">
                      {tools.map((tool) => (
                        <SelectItem key={tool.id} value={tool.id} className="text-white hover:bg-blue-500/20">
                          <div className="flex flex-col">
                            <span>{tool.name}</span>
                            <span className="text-xs text-white/60">{tool.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={useTool} 
                    disabled={!selectedTool || !gameActive}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Attack Monster!
                  </Button>

                  {usedTools.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">🔁 Tools Used:</h4>
                      {usedTools.map((tool, index) => (
                        <Badge key={index} variant="outline" className="mr-2 text-green-400 border-green-400/50">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Battle Result */}
          {showResult && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-6"
            >
              <Card className="bg-gradient-to-br from-green-500/20 to-emerald-600/10 border-green-400/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    {monsterHealth === 0 ? "Monster Defeated! 🎉" : "Hit Landed! ⚔️"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-black/30 p-4 rounded overflow-x-auto text-white/80 mb-4">
                    {getCleanedDataset()}
                  </pre>
                  {monsterHealth === 0 && (
                    <Alert className="bg-green-500/20 border-green-400/50">
                      <Sparkles className="h-4 w-4 text-green-400" />
                      <AlertDescription className="text-green-200">
                        ✅ You've struck a blow against the Data Monster! +100 Bonus XP!
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="scoreboard">
          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-600/10 border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                🧠 Knowledge XP: {score}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p className="mb-4">Score is based on effective cleaning, correct AI tool use, and quick action.</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monsters Defeated:</span>
                  <span className="text-green-400">{Math.floor(score / 100)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Points Cleaned:</span>
                  <span className="text-blue-400">{score % 100}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tools Mastered:</span>
                  <span className="text-purple-400">{new Set(usedTools).size}/5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learn">
          <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 border-indigo-400/30">
            <CardHeader>
              <CardTitle className="text-white">📚 Learn Real-World Automation</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>Behind the scenes, this game simulates real-world tools like:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>LLMs (e.g., GPT-4) for schema generation, cleaning, summaries</li>
                <li>Vector search for finding similar logs or datasets</li>
                <li>Airflow or Databricks jobs with LLM-triggered agents</li>
              </ul>
              
              <div className="mt-6 space-y-2">
                <h4 className="font-semibold text-white">Further Reading:</h4>
                <div className="space-y-1">
                  <a 
                    href="https://docs.langchain.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline"
                  >
                    → LangChain for DataOps
                  </a>
                  <a 
                    href="https://openai.com/blog/chatgpt-plugins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline"
                  >
                    → GPT-powered ETL
                  </a>
                  <a 
                    href="https://www.linkedin.com/pulse/ai-driven-data-governance-prateek-joshi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline"
                  >
                    → AI + Metadata Automation
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataDungeonSlide;
