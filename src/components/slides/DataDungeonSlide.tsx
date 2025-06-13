
import { motion } from "framer-motion";
import { Sword, Shield, Zap, Search, Puzzle, ExternalLink, Trophy, Target } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface SlideProps {
  slideNumber: number;
}

const DataDungeonSlide = ({ slideNumber }: SlideProps) => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const [battleResult, setBattleResult] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const tools = [
    {
      name: "🧠 LLM Schema Generator",
      icon: Zap,
      description: "Auto-generates structured schema",
      power: "GPT-4 / AutoML inference"
    },
    {
      name: "🧹 GPT-4 Cleaner",
      icon: Shield,
      description: "Cleans nulls, formats JSON, detects dirty columns",
      power: "LLM-powered cleansing"
    },
    {
      name: "🔍 Anomaly Detector",
      icon: Search,
      description: "Detects outliers & suspicious rows",
      power: "Isolation Forest / LLM"
    },
    {
      name: "🧬 Regex Warrior",
      icon: Sword,
      description: "Pattern matches & regex extraction",
      power: "Rule-based AI"
    },
    {
      name: "🧩 Column Combiner",
      icon: Puzzle,
      description: "Suggests merging/splitting features",
      power: "Feature engineering LLM"
    }
  ];

  const corruptedDataset = `name, age, salary, join_date
Alice, , 52000, 2023/01/12
Bob, 27, NA, 2023-02-15
Charlie, 29, 57000, 2023-15-01
, 34, 60000, 2023-03-05`;

  const handleBattle = () => {
    if (!selectedTool) return;

    let result = "";
    let points = 0;

    switch (selectedTool) {
      case "🧠 LLM Schema Generator":
        result = `🧠 Schema Generated Successfully!

**Generated Schema:**
\`\`\`json
{
  "name": "string (required)",
  "age": "integer (nullable)",
  "salary": "number (required)",
  "join_date": "date (ISO format)"
}
\`\`\`

**Fixed Issues:** Standardized data types and identified missing value patterns.`;
        points = 15;
        break;

      case "🧹 GPT-4 Cleaner":
        result = `🧹 Dataset Cleaned Successfully!

**Cleaned Dataset:**
\`\`\`csv
name, age, salary, join_date
Alice, 25, 52000, 2023-01-12
Bob, 27, 55000, 2023-02-15
Charlie, 29, 57000, 2023-01-15
John Doe, 34, 60000, 2023-03-05
\`\`\`

**Fixes Applied:** 
- Filled missing ages with median
- Replaced "NA" with estimated salary
- Fixed invalid date format
- Added name for missing entry`;
        points = 25;
        break;

      case "🔍 Anomaly Detector":
        result = `🔍 Anomalies Detected!

**Anomalies Found:**
- Row 3: Invalid date "2023-15-01" (month 15 doesn't exist)
- Row 1: Missing age value
- Row 4: Missing name field
- Row 2: "NA" in salary field

**Recommendation:** Use GPT-4 Cleaner to fix these issues.`;
        points = 20;
        break;

      case "🧬 Regex Warrior":
        result = `🧬 Pattern Matching Complete!

**Patterns Applied:**
- Date format: \`\\d{4}[-/]\\d{2}[-/]\\d{2}\`
- Name validation: \`^[A-Za-z\\s]+$\`
- Salary pattern: \`^\\d+$\`

**Results:** 
- 3 invalid date formats found
- 1 missing name detected
- 1 non-numeric salary ("NA") identified`;
        points = 18;
        break;

      case "🧩 Column Combiner":
        result = `🧩 Feature Engineering Applied!

**Suggestions:**
- Split join_date into year, month, day columns
- Create experience_months from join_date
- Combine name validation with data quality score
- Generate salary_range categories (entry, mid, senior)

**New Features Generated:** 4 additional columns for better analysis`;
        points = 22;
        break;

      default:
        result = "Please select a tool to battle the Data Monster!";
        points = 0;
    }

    setBattleResult(result);
    setScore(prev => prev + points);
    setShowResult(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> ⚔️ Data Dungeon
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 mb-8 text-center max-w-4xl mx-auto"
      >
        Clean or Corrupt? Battle data chaos with AI-powered weapons!
      </motion.p>

      {/* Game Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl border border-purple-400/30 p-8 mb-8 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          🧌
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to the Data Dungeon!</h2>
        <p className="text-white/80 leading-relaxed">
          Messy datasets spawn dangerous "Data Monsters" — Null Knights, Schema Shifters, and Duplication Demons! 
          As a Data Engineer Mage, wield AI-powered weapons to clean, transform, and secure the data realm.
        </p>
      </motion.div>

      <Tabs defaultValue="battle" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="battle">🎮 Battle Mode</TabsTrigger>
          <TabsTrigger value="scoreboard">🏆 Scoreboard</TabsTrigger>
          <TabsTrigger value="learn">📚 Learn Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="battle" className="space-y-8">
          {/* AI-Powered Tools */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">⚔️ Choose Your AI Weapon</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-blue-400/50 transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white text-sm flex items-center gap-2">
                        <tool.icon className="w-4 h-4 text-blue-400" />
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-white/70 text-xs mb-2">{tool.description}</p>
                      <p className="text-blue-400 text-xs font-medium">Power: {tool.power}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Corrupted Dataset */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-red-500/20 to-orange-600/10 rounded-2xl border border-red-400/30 p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-400" />
              💀 Corrupted Dataset (Data Monster)
            </h3>
            <pre className="bg-black/30 rounded-lg p-4 text-white/80 text-sm overflow-x-auto border border-red-400/20">
              {corruptedDataset}
            </pre>
            <p className="text-red-400 text-sm mt-2">
              ⚠️ Issues detected: Missing values, invalid dates, inconsistent formats, null entries
            </p>
          </motion.div>

          {/* Battle Interface */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-green-500/20 to-blue-600/10 rounded-2xl border border-green-400/30 p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">🎯 Your Mission</h3>
            <p className="text-white/80 mb-6">Choose the right AI-powered tool to defeat the Data Monster!</p>
            
            <div className="flex gap-4 mb-6">
              <Select value={selectedTool} onValueChange={setSelectedTool}>
                <SelectTrigger className="flex-1 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue placeholder="Choose Your Weapon" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {tools.map((tool) => (
                    <SelectItem key={tool.name} value={tool.name} className="text-white hover:bg-slate-700">
                      {tool.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleBattle}
                disabled={!selectedTool}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8"
              >
                ⚔️ Attack!
              </Button>
            </div>

            {showResult && battleResult && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-500/10 border border-green-400/30 rounded-lg p-6 mt-6"
              >
                <div className="text-green-400 whitespace-pre-line text-sm leading-relaxed">
                  {battleResult}
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-4 text-center"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 font-semibold">
                    <Trophy className="w-4 h-4" />
                    Victory! +{score > 0 ? (selectedTool === "🧹 GPT-4 Cleaner" ? 25 : selectedTool === "🧩 Column Combiner" ? 22 : selectedTool === "🔍 Anomaly Detector" ? 20 : selectedTool === "🧬 Regex Warrior" ? 18 : 15) : 0} XP
                  </span>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="scoreboard" className="space-y-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-600/10 rounded-2xl border border-yellow-400/30 p-8 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">Knowledge XP</h2>
            <motion.div
              key={score}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-bold text-yellow-400 mb-4"
            >
              {score}
            </motion.div>
            <p className="text-white/80">
              Score is based on effective cleaning, correct AI tool usage, and quick action.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">🥉 Novice</h4>
                <p className="text-white/70 text-sm">0-50 XP</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">🥈 Expert</h4>
                <p className="text-white/70 text-sm">51-150 XP</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">🥇 Master</h4>
                <p className="text-white/70 text-sm">151+ XP</p>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="learn" className="space-y-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">📚 Real-World AI Data Automation</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Behind the scenes, this game simulates real-world tools and techniques used in modern data engineering:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-400">🤖 AI-Powered Tools</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• LLMs (GPT-4) for schema generation and data cleaning</li>
                  <li>• Vector search for finding similar datasets</li>
                  <li>• Automated anomaly detection with ML models</li>
                  <li>• Natural language data profiling</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">🔧 Integration Platforms</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Airflow with LLM-triggered workflows</li>
                  <li>• Databricks jobs with AI assistance</li>
                  <li>• Real-time data quality monitoring</li>
                  <li>• Automated data governance</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">🔗 Learn More</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <motion.a
                  href="https://docs.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors text-sm"
                >
                  LangChain for DataOps
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
                <motion.a
                  href="https://openai.com/blog/chatgpt-plugins"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-colors text-sm"
                >
                  GPT-powered ETL
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/pulse/ai-driven-data-governance-prateek-joshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors text-sm"
                >
                  AI + Metadata Automation
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataDungeonSlide;
