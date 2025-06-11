
import { motion } from "framer-motion";
import { BarChart3, Database, Brain, TrendingUp, Code, Settings } from "lucide-react";
import { useState } from "react";

interface SlideProps {
  slideNumber: number;
}

const DataRolesSlide = ({ slideNumber }: SlideProps) => {
  const [activeView, setActiveView] = useState<'overview' | 'skills' | 'tools' | 'outcomes'>('overview');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const roles = [
    {
      id: 'analyst',
      title: 'Data Analyst',
      icon: BarChart3,
      color: 'blue',
      description: 'Transforms data into actionable insights through analysis and visualization.',
      mainFocus: 'Past & Present Analysis',
      tools: ['SQL', 'Excel', 'Tableau', 'Power BI', 'Python/R'],
      responsibilities: ['Create reports and dashboards', 'Analyze business metrics', 'Identify trends and patterns', 'Present findings to stakeholders'],
      outcome: 'Explains what happened',
      skills: ['Statistical Analysis', 'Data Visualization', 'Business Intelligence', 'SQL Querying'],
      detailedOutcome: 'Provides historical insights and current performance metrics to guide business decisions.'
    },
    {
      id: 'engineer',
      title: 'Data Engineer',
      icon: Database,
      color: 'orange',
      description: 'Builds and maintains the infrastructure that makes data accessible and reliable.',
      mainFocus: 'Data Infrastructure',
      tools: ['Apache Spark', 'Kafka', 'Docker', 'AWS/Azure', 'Python'],
      responsibilities: ['Build data pipelines', 'Ensure data quality', 'Design databases', 'Optimize data flow'],
      outcome: 'Builds data systems',
      skills: ['ETL/ELT Processes', 'Cloud Architecture', 'Database Design', 'Pipeline Automation'],
      detailedOutcome: 'Creates robust data infrastructure that enables scalable analytics and machine learning.'
    },
    {
      id: 'scientist',
      title: 'Data Scientist',
      icon: Brain,
      color: 'green',
      description: 'Uses advanced analytics and machine learning to predict future outcomes.',
      mainFocus: 'Predictive Modeling',
      tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Jupyter', 'R'],
      responsibilities: ['Build ML models', 'Feature engineering', 'Statistical modeling', 'Hypothesis testing'],
      outcome: 'Predicts what will happen',
      skills: ['Machine Learning', 'Statistical Modeling', 'Feature Engineering', 'Model Deployment'],
      detailedOutcome: 'Develops predictive models and algorithms to forecast trends and automate decisions.'
    }
  ];

  const getViewContent = (role: any) => {
    switch (activeView) {
      case 'skills':
        return role.skills;
      case 'tools':
        return role.tools;
      case 'outcomes':
        return [role.detailedOutcome];
      default:
        return role.responsibilities;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
      >
        <span className="text-blue-400">{slideNumber}.</span> Data Roles Comparison
      </motion.h1>

      {/* View Toggle */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-slate-800/50 rounded-lg p-1 border border-white/10">
          {['overview', 'skills', 'tools', 'outcomes'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 ${
                activeView === view
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Role Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onHoverStart={() => setExpandedCard(role.id)}
            onHoverEnd={() => setExpandedCard(null)}
            className={`bg-gradient-to-br from-${role.color}-500/20 to-${role.color}-600/10 rounded-2xl border border-${role.color}-400/30 p-6 relative overflow-hidden cursor-pointer transition-all duration-300`}
          >
            {/* Background Animation */}
            <motion.div
              animate={{ 
                scale: expandedCard === role.id ? [1, 1.1, 1] : 1,
                opacity: expandedCard === role.id ? [0.1, 0.2, 0.1] : 0.05
              }}
              transition={{ duration: 2, repeat: expandedCard === role.id ? Infinity : 0 }}
              className={`absolute inset-0 bg-${role.color}-400/10 rounded-2xl`}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`relative w-16 h-16 bg-${role.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <role.icon className={`w-8 h-8 text-${role.color}-400`} />
            </motion.div>

            {/* Content */}
            <div className="relative text-center">
              <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
              <p className="text-white/70 text-sm mb-4">{role.description}</p>
              
              <div className={`text-${role.color}-400 font-medium text-sm mb-3`}>
                {activeView === 'overview' ? 'Key Responsibilities:' : 
                 activeView === 'skills' ? 'Core Skills:' :
                 activeView === 'tools' ? 'Tools Used:' : 'Primary Outcome:'}
              </div>

              <div className="space-y-2">
                {getViewContent(role).map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + i * 0.05 }}
                    className="text-white/80 text-sm bg-white/5 rounded px-3 py-1"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Outcome Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className={`mt-4 inline-block px-3 py-1 bg-${role.color}-500/20 border border-${role.color}-400/30 rounded-full`}
              >
                <span className={`text-${role.color}-400 text-xs font-medium`}>
                  {role.outcome}
                </span>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className={`absolute top-4 right-4 w-6 h-6 bg-${role.color}-400/20 rounded-full`}
            />
          </motion.div>
        ))}
      </div>

      {/* Summary Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-2xl border border-slate-600/30 p-6 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <TrendingUp className="w-6 h-6 text-purple-400" />
        </motion.div>
        
        <p className="text-white text-lg font-medium">
          <span className="text-blue-400">Analysts</span> explain what happened, {" "}
          <span className="text-orange-400">Engineers</span> build data pipelines, {" "}
          <span className="text-green-400">Scientists</span> predict what will happen.
        </p>
      </motion.div>
    </div>
  );
};

export default DataRolesSlide;
