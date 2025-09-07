"use client"

import { useState } from "react"
import { SkillModal } from "./skill-modal"

const skillsData = {
  JavaScript: {
    name: "JavaScript",
    logo: "JS",
    proficiency: 95,
    yearsOfExperience: 6,
    description:
      "JavaScript is my primary programming language and the foundation of my web development expertise. I have deep knowledge of ES6+ features, async programming, and modern JavaScript patterns.",
    experience:
      "I've been working with JavaScript professionally for 6 years, building everything from simple interactive websites to complex single-page applications. I'm proficient in both vanilla JavaScript and modern frameworks, with extensive experience in debugging, performance optimization, and code architecture.",
    projects: [
      "Neural Net dashboard interface",
      "Project Net real-time collaboration features",
      "Wallet Net Web3 integration",
    ],
  },
  TypeScript: {
    name: "TypeScript",
    logo: "TS",
    proficiency: 90,
    yearsOfExperience: 4,
    description:
      "TypeScript has become my go-to choice for large-scale applications. I leverage its type system to write more maintainable and bug-free code, especially in team environments.",
    experience:
      "I adopted TypeScript 4 years ago and have since used it in all major projects. I'm skilled in advanced type patterns, generics, and creating type-safe APIs. I've also mentored team members in TypeScript adoption and best practices.",
    projects: [
      "Project Net backend API",
      "Wallet Net smart contract interfaces",
      "Multiple client projects with strict type safety requirements",
    ],
  },
  Python: {
    name: "Python",
    logo: "PY",
    proficiency: 85,
    yearsOfExperience: 5,
    description:
      "Python is my language of choice for data science, machine learning, and backend development. I appreciate its readability and the vast ecosystem of libraries available.",
    experience:
      "I've used Python extensively for machine learning projects, data analysis, and API development. My experience includes working with frameworks like Django, Flask, and FastAPI, as well as ML libraries like TensorFlow, PyTorch, and scikit-learn.",
    projects: [
      "Neural Net machine learning backend",
      "Data analysis scripts for various clients",
      "Automated trading algorithms",
    ],
  },
  React: {
    name: "React",
    logo: "⚛️",
    proficiency: 95,
    yearsOfExperience: 5,
    description:
      "React is my primary frontend framework. I'm experienced with hooks, context, performance optimization, and the entire React ecosystem including testing and state management.",
    experience:
      "I've built numerous React applications ranging from simple landing pages to complex dashboards. I'm proficient in React best practices, component architecture, and performance optimization techniques like memoization and code splitting.",
    projects: [
      "Neural Net visualization interface",
      "Project Net collaborative dashboard",
      "Wallet Net user interface",
    ],
  },
  "Next.js": {
    name: "Next.js",
    logo: "▲",
    proficiency: 90,
    yearsOfExperience: 3,
    description:
      "Next.js is my preferred React framework for production applications. I leverage its SSR, SSG, and API routes capabilities to build performant, SEO-friendly applications.",
    experience:
      "I've used Next.js for both client projects and personal applications, taking advantage of its file-based routing, automatic code splitting, and deployment optimizations. I'm experienced with both the Pages Router and the newer App Router.",
    projects: [
      "Project Net full-stack application",
      "Multiple client websites and web applications",
      "This portfolio website",
    ],
  },
  "Node.js": {
    name: "Node.js",
    logo: "NODE",
    proficiency: 85,
    yearsOfExperience: 4,
    description:
      "Node.js enables me to use JavaScript for backend development, creating a unified development experience. I'm skilled in building scalable APIs and real-time applications.",
    experience:
      "I've built numerous REST APIs and real-time applications using Node.js. My experience includes working with Express.js, Socket.io for real-time features, and various databases. I'm also experienced in Node.js performance optimization and deployment.",
    projects: ["Project Net backend API", "Real-time chat applications", "Various microservices and API integrations"],
  },
  Git: {
    name: "Git",
    logo: "GIT",
    proficiency: 90,
    yearsOfExperience: 6,
    description:
      "Git is essential to my development workflow. I'm proficient in advanced Git operations, branching strategies, and collaborative development practices.",
    experience:
      "I use Git daily for version control and have experience with various branching strategies like Git Flow and GitHub Flow. I'm skilled in resolving merge conflicts, rebasing, and maintaining clean commit histories in team environments.",
    projects: ["All professional projects", "Open source contributions", "Team collaboration on multiple repositories"],
  },
  Docker: {
    name: "Docker",
    logo: "🐳",
    proficiency: 75,
    yearsOfExperience: 3,
    description:
      "Docker has streamlined my development and deployment processes. I use it for creating consistent development environments and deploying applications.",
    experience:
      "I've containerized multiple applications and set up Docker-based development environments. My experience includes writing Dockerfiles, docker-compose configurations, and deploying containerized applications to various cloud platforms.",
    projects: [
      "Project Net deployment pipeline",
      "Development environment standardization",
      "Microservices architecture implementations",
    ],
  },
  AWS: {
    name: "AWS",
    logo: "AWS",
    proficiency: 70,
    yearsOfExperience: 2,
    description:
      "AWS is my primary cloud platform for deploying and scaling applications. I'm experienced with core services like EC2, S3, Lambda, and RDS.",
    experience:
      "I've deployed and managed applications on AWS, utilizing services like EC2 for compute, S3 for storage, and Lambda for serverless functions. I'm also experienced with AWS security best practices and cost optimization.",
    projects: [
      "Neural Net model training infrastructure",
      "Project Net production deployment",
      "Various client application deployments",
    ],
  },
  Vercel: {
    name: "Vercel",
    logo: "▲",
    proficiency: 85,
    yearsOfExperience: 2,
    description:
      "Vercel is my go-to platform for deploying Next.js applications. I appreciate its seamless integration with Git and excellent developer experience.",
    experience:
      "I've deployed numerous Next.js applications on Vercel, taking advantage of its automatic deployments, preview environments, and edge functions. I'm experienced with Vercel's analytics and performance monitoring tools.",
    projects: ["This portfolio website", "Multiple client Next.js applications", "Personal projects and prototypes"],
  },
  PostgreSQL: {
    name: "PostgreSQL",
    logo: "🐘",
    proficiency: 80,
    yearsOfExperience: 3,
    description:
      "PostgreSQL is my preferred relational database for complex applications. I'm skilled in database design, query optimization, and advanced PostgreSQL features.",
    experience:
      "I've designed and optimized PostgreSQL databases for various applications, including complex queries, indexing strategies, and performance tuning. I'm also experienced with PostgreSQL-specific features like JSON columns and full-text search.",
    projects: [
      "Project Net user and project data",
      "Client applications requiring complex relational data",
      "Data analysis and reporting systems",
    ],
  },
  MongoDB: {
    name: "MongoDB",
    logo: "🍃",
    proficiency: 70,
    yearsOfExperience: 2,
    description:
      "MongoDB is my choice for applications requiring flexible document storage. I'm experienced with its query language and aggregation framework.",
    experience:
      "I've used MongoDB for applications with evolving data structures and high-volume read operations. My experience includes schema design, aggregation pipelines, and performance optimization for document-based data.",
    projects: ["Neural Net training data storage", "Content management systems", "Real-time analytics applications"],
  },
}

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"],
  },
]

const SkillLogo = ({ skill }: { skill: string }) => {
  const skillData = skillsData[skill as keyof typeof skillsData]

  if (skillData.logo.length === 1 || skillData.logo.includes("�")) {
    return <span className="text-lg">{skillData.logo}</span>
  }

  return (
    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
      <span className="text-xs font-bold text-primary">{skillData.logo}</span>
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
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <button
                  key={skillIndex}
                  className="group flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-primary/5"
                  onClick={() => handleSkillClick(skill)}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    <SkillLogo skill={skill} />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
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
