"use client"

import { useState } from "react"
import { SkillModal } from "./skill-modal"

const skillsData = {
  Python: {
    name: "Python",
    logo: "🐍",
    proficiency: 95,
    yearsOfExperience: 3,
    description:
      "Python is a powerful language I have mastered for developing complex applications, data analysis, and machine learning.",
    experience:
      "I have extensive experience in Python, including building scalable applications, performing advanced data analysis, and implementing machine learning models using libraries like NumPy, Pandas, and TensorFlow.",
    projects: [
      "Developed scalable web applications using Python frameworks",
      "Implemented machine learning pipelines for predictive analytics",
      "Automated complex workflows and data processing tasks",
    ],
  },
  NumPy: {
    name: "NumPy",
    logo: "📊",
    proficiency: 90,
    yearsOfExperience: 2,
    description:
      "NumPy is a library I have mastered for high-performance numerical computations and array manipulations.",
    experience:
      "I have used NumPy extensively for numerical simulations, data preprocessing, and implementing mathematical algorithms in production-grade projects.",
    projects: [
      "Optimized numerical computations for large-scale datasets",
      "Developed algorithms for scientific simulations",
      "Integrated NumPy with machine learning workflows",
    ],
  },
  Pandas: {
    name: "Pandas",
    logo: "🐼",
    proficiency: 90,
    yearsOfExperience: 2,
    description:
      "Pandas is a library I have mastered for advanced data manipulation and analysis in large-scale projects.",
    experience:
      "I have utilized Pandas for cleaning, transforming, and analyzing complex datasets, as well as creating advanced data visualizations.",
    projects: [
      "Built data pipelines for enterprise-level applications",
      "Performed advanced data analysis for business intelligence",
      "Integrated Pandas with machine learning workflows",
    ],
  },
  "Scikit-Learn": {
    name: "Scikit-Learn",
    logo: "📈",
    proficiency: 95,
    yearsOfExperience: 2,
    description:
      "Scikit-Learn is a library I have mastered for building and optimizing machine learning models.",
    experience:
      "I have applied Scikit-Learn extensively for developing, tuning, and deploying machine learning models in production environments.",
    projects: [
      "Developed and deployed machine learning models for enterprise applications",
      "Optimized model performance using advanced Scikit-Learn techniques",
      "Implemented end-to-end machine learning pipelines",
    ],
  },
  TensorFlow: {
    name: "TensorFlow",
    logo: "🤖",
    proficiency: 90,
    yearsOfExperience: 2,
    description:
      "TensorFlow is a framework I have mastered for developing and deploying deep learning models.",
    experience:
      "I have extensive experience with TensorFlow, including building complex neural networks and deploying deep learning models in production.",
    projects: [
      "Developed deep learning models for image and text processing",
      "Deployed TensorFlow models in production environments",
      "Explored TensorFlow's advanced features for optimization",
    ],
  },
  NLTK: {
    name: "NLTK",
    logo: "📚",
    proficiency: 80,
    yearsOfExperience: 1,
    description:
      "NLTK is a library I have mastered for advanced natural language processing tasks.",
    experience:
      "I have applied NLTK for text preprocessing, sentiment analysis, and building NLP pipelines in production-grade projects.",
    projects: [
      "Developed NLP pipelines for text analysis",
      "Performed sentiment analysis using NLTK",
      "Integrated NLTK with machine learning workflows",
    ],
  },
  PostgreSQL: {
    name: "PostgreSQL",
    logo: "🐘",
    proficiency: 85,
    yearsOfExperience: 1,
    description:
      "PostgreSQL is a database I have mastered for managing and optimizing large-scale structured data.",
    experience:
      "I have designed complex schemas, written optimized queries, and managed database performance for enterprise applications.",
    projects: [
      "Designed and optimized databases for large-scale applications",
      "Implemented complex queries for data analysis",
      "Explored advanced PostgreSQL features for performance tuning",
    ],
  },
  MySQL: {
    name: "MySQL",
    logo: "🐬",
    proficiency: 90,
    yearsOfExperience: 3,
    description:
      "MySQL is a database I have mastered for efficient data storage and retrieval in large-scale projects.",
    experience:
      "I have designed schemas, implemented complex queries, and managed databases for high-performance applications.",
    projects: [
      "Developed and optimized MySQL databases for enterprise applications",
      "Implemented advanced queries for data analysis",
      "Explored MySQL's advanced functionalities for scalability",
    ],
  },
  LangChain: {
    name: "LangChain",
    logo: "🔗",
    proficiency: 80,
    yearsOfExperience: 1,
    description:
      "LangChain is a tool I have mastered for building advanced applications with language models.",
    experience:
      "I have applied LangChain for creating complex conversational AI applications and chaining prompts effectively.",
    projects: [
      "Developed advanced conversational AI prototypes",
      "Integrated LangChain with enterprise applications",
      "Explored LangChain's advanced features for optimization",
    ],
  },
  "Gemini API": {
    name: "Gemini API",
    logo: "💎",
    proficiency: 85,
    yearsOfExperience: 1,
    description:
      "Gemini API is a tool I have mastered for cryptocurrency trading and market analysis.",
    experience:
      "I have worked with Gemini API for developing trading algorithms and analyzing market trends.",
    projects: [
      "Developed cryptocurrency trading algorithms",
      "Performed market analysis using Gemini API",
      "Built prototypes for trading applications",
    ],
  },
  Docker: {
    name: "Docker",
    logo: "🐳",
    proficiency: 65,
    yearsOfExperience: 1,
    description:
      "Docker is a tool I have mastered for containerizing applications and managing scalable environments.",
    experience:
      "I have applied Docker for deploying applications, managing environments, and exploring advanced containerization concepts.",
    projects: [
      "Containerized applications for enterprise projects",
      "Explored Docker's advanced commands and features",
      "Developed scalable DevOps workflows",
    ],
  },
  AWS: {
    name: "AWS",
    logo: "☁️",
    proficiency: 62,
    yearsOfExperience: 1,
    description:
      "AWS is a cloud platform I have mastered for deploying and managing scalable applications.",
    experience:
      "I have worked with AWS services like EC2, S3, and Lambda for hosting applications and managing cloud resources.",
    projects: [
      "Deployed scalable applications using AWS services",
      "Explored AWS's advanced cloud computing features",
      "Developed prototypes for cloud-based solutions",
    ],
  },
  n8n: {
    name: "n8n",
    logo: "🔁",
    proficiency: 70,
    yearsOfExperience: 1,
    description:
      "n8n is a workflow automation platform I use to integrate APIs, automate data pipelines, and orchestrate ML-related tasks.",
    experience:
      "I have built multi-step automations connecting services like PostgreSQL, webhooks, OpenAI/HuggingFace models, and email/SaaS tools to streamline data processing and model deployment workflows.",
    projects: [
      "Implemented automated data ingestion and preprocessing pipelines feeding ML models",
      "Orchestrated model inference workflows triggered by external webhooks",
      "Integrated monitoring and alerting flows for deployed ML endpoints",
    ],
  },
  JavaScript: {
    name: "JavaScript",
    logo: "📜",
    proficiency: 90,
    yearsOfExperience: 4,
    description:
      "JavaScript is a language I have mastered for building dynamic and interactive web applications.",
    experience:
      "I have extensive experience with JavaScript, including developing front-end applications, working with frameworks, and implementing complex functionalities.",
    projects: [
      "Built dynamic web applications using JavaScript",
      "Integrated JavaScript with various APIs",
      "Optimized JavaScript code for performance",
    ],
  },
  Matplotlib: {
    name: "Matplotlib",
    logo: "📊",
    proficiency: 95,
    yearsOfExperience: 3,
    description:
      "Matplotlib is a library I have mastered for creating advanced data visualizations.",
    experience:
      "I have used Matplotlib extensively for visualizing complex datasets and creating publication-quality plots.",
    projects: [
      "Developed data visualizations for academic research",
      "Created interactive plots for data analysis",
      "Explored advanced Matplotlib features",
    ],
  },
  FastAPI: {
    name: "FastAPI",
    logo: "⚡",
    proficiency: 65,
    yearsOfExperience: 1,
    description:
      "FastAPI is a framework I have mastered for building high-performance APIs.",
    experience:
      "I have developed and deployed scalable APIs using FastAPI, including integrating with databases and authentication systems.",
    projects: [
      "Built RESTful APIs for enterprise applications",
      "Integrated FastAPI with databases and third-party services",
      "Explored FastAPI's advanced features for optimization",
    ],
  },
  SQLAlchemy: {
    name: "SQLAlchemy",
    logo: "🛠️",
    proficiency: 75,
    yearsOfExperience: 3,
    description:
      "SQLAlchemy is a library I have mastered for database management and ORM.",
    experience:
      "I have used SQLAlchemy extensively for ORM-based data modeling, migrations, session management, and composing optimized queries across PostgreSQL and MySQL backends.",
    projects: [
      "Built scalable front-end applications using React",
      "Integrated React with back-end APIs",
      "Explored advanced React features like hooks and context",
    ],
  },
  Seaborn: {
    name: "Seaborn",
    logo: "📈",
    proficiency: 95,
    yearsOfExperience: 2,
    description:
      "Seaborn is a library I have mastered for creating statistical data visualizations.",
    experience:
      "I have used Seaborn extensively for visualizing data distributions, correlations, and trends in datasets.",
    projects: [
      "Created statistical visualizations for data analysis",
      "Explored advanced Seaborn functionalities",
      "Integrated Seaborn with data analysis workflows",
    ],
  },
  HuggingFace: {
    name: "HuggingFace",
    logo: "🤗",
    proficiency: 70,
    yearsOfExperience: 1,
    description:
      "HuggingFace is a library I have mastered for natural language processing and working with pre-trained models.",
    experience:
      "I have used HuggingFace for fine-tuning transformers, building NLP pipelines, and deploying language models.",
    projects: [
      "Fine-tuned transformers for text classification",
      "Developed NLP pipelines using HuggingFace",
      "Explored HuggingFace's advanced features for optimization",
    ],
  },
  React: {
    name: "React",
    logo: "⚛️",
    proficiency: 80,
    yearsOfExperience: 2,
    description:
      "React is my primary front-end library for building component-driven, performant web interfaces.",
    experience:
      "Built SPA dashboards, interactive data visualizations, and reusable design system components with hooks, context, dynamic routing, and API integrations.",
    projects: [
      "Developed a real-time analytics dashboard with dynamic chart components",
      "Implemented a modular component library shared across multiple apps",
      "Optimized bundle size and interaction performance using code-splitting and memoization",
    ],
  },
}

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "NLTK", "JavaScript", "FastAPI", "SQLAlchemy", "React"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "LangChain", "Gemini API", "Matplotlib", "Seaborn", "HuggingFace", "n8n"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS"],
  },
]

// Adjusted the size of skill buttons and logos for better mobile view
const SkillLogo = ({ skill }: { skill: string }) => {
  const skillData = skillsData[skill as keyof typeof skillsData]
  if (!skillData) {
    return (
      <div className="w-5 h-5 md:w-7 md:h-7 rounded bg-primary/10 flex items-center justify-center text-[10px] md:text-xs font-medium">
        {skill.substring(0, 3)}
      </div>
    )
  }

  const logoUrls: { [key: string]: string } = {
    Python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    NumPy: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    Pandas: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
    "Scikit-Learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    TensorFlow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    NLTK: "https://miro.medium.com/1*YM2HXc7f4v02pZBEO8h-qw.png",
    PostgreSQL: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    MySQL: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    LangChain: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.64.0/files/dark/langchain.png",
    "Gemini API": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png",
    Docker: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    Matplotlib: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    FastAPI: "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
    SQLAlchemy: "https://icon.icepanel.io/Technology/png-shadow-512/SQLAlchemy.png",
    React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    Seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    HuggingFace: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    n8n: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
  }

  return (
    <div className="w-5 h-5 md:w-7 md:h-7 rounded bg-primary/10 flex items-center justify-center">
      <img
        src={logoUrls[skill] || `/public/${skillData.name.toLowerCase().replace(/\s+/g, '-')}.png`}
        alt={`${skillData.name} logo`}
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skillsData)[keyof typeof skillsData] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSkillClick = (skillName: string) => {
    const skill = skillsData[skillName as keyof typeof skillsData]
    if (skill) {
      setSelectedSkill(skill)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedSkill(null)
  }

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-foreground mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <button
                  key={skillIndex}
                  className="group flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-primary/5"
                  onClick={() => handleSkillClick(skill)}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    <SkillLogo skill={skill} />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {skill}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SkillModal skill={selectedSkill} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
