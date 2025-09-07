"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "Neural Net",
    description: "A deep learning framework built with Python and TensorFlow for computer vision applications.",
    image: "/neural-network-visualization-dashboard.jpg",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["Python", "TensorFlow", "React"],
    detailedDescription:
      "Neural Net is a comprehensive deep learning framework I developed to simplify computer vision tasks. The project combines a powerful Python backend with an intuitive React frontend, making machine learning accessible to developers of all skill levels.",
    myRole:
      "As the lead developer, I architected the entire system from scratch, implementing the core neural network algorithms, designing the API architecture, and creating the user interface. I focused on performance optimization and user experience throughout the development process.",
    challenges: [
      "Optimized model training performance by implementing custom GPU acceleration, reducing training time by 60%",
      "Designed a scalable architecture to handle multiple concurrent model training sessions",
      "Created an intuitive visualization system for complex neural network architectures",
      "Implemented real-time model performance monitoring and debugging tools",
    ],
    features: [
      "Drag-and-drop neural network builder with visual architecture design",
      "Real-time training progress visualization with loss curves and accuracy metrics",
      "Pre-trained model library with transfer learning capabilities",
      "Automated hyperparameter tuning using Bayesian optimization",
      "Export models to multiple formats (ONNX, TensorFlow Lite, Core ML)",
    ],
  },
  {
    title: "Project Net",
    description: "Full-stack project management application with real-time collaboration features.",
    image: "/project-management-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    detailedDescription:
      "Project Net is a modern project management platform designed for distributed teams. It combines powerful project tracking capabilities with real-time collaboration features, helping teams stay organized and productive regardless of their location.",
    myRole:
      "I served as the full-stack developer, responsible for both frontend and backend development. My work included database design, API development, real-time features implementation, and creating a responsive user interface that works seamlessly across all devices.",
    challenges: [
      "Implemented WebSocket-based real-time collaboration with conflict resolution algorithms",
      "Designed a scalable database schema supporting complex project hierarchies and permissions",
      "Built a notification system handling 10,000+ daily notifications with smart batching",
      "Created an advanced search system with full-text search and filtering capabilities",
    ],
    features: [
      "Real-time collaborative task boards with drag-and-drop functionality",
      "Advanced project analytics with customizable dashboards and reporting",
      "Time tracking with automatic productivity insights and team performance metrics",
      "Integration with popular tools like Slack, GitHub, and Google Workspace",
      "Mobile-responsive design with offline capability for essential features",
    ],
  },
  {
    title: "Wallet Net",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
    image: "/cryptocurrency-wallet-interface.jpg",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["React", "Web3.js", "Solidity"],
    detailedDescription:
      "Wallet Net is a next-generation cryptocurrency wallet that prioritizes security while providing seamless access to decentralized finance (DeFi) protocols. The application supports multiple blockchain networks and offers advanced portfolio management features.",
    myRole:
      "I led the development of this Web3 application, focusing on smart contract integration, security implementation, and user experience design. My responsibilities included writing secure smart contracts, implementing wallet connectivity, and creating an intuitive interface for complex DeFi operations.",
    challenges: [
      "Implemented multi-signature wallet functionality with hardware wallet support for enhanced security",
      "Built cross-chain bridge integration allowing seamless asset transfers between different blockchains",
      "Created a gas optimization engine that reduces transaction costs by up to 40%",
      "Developed a comprehensive security audit system with real-time threat detection",
    ],
    features: [
      "Support for 15+ blockchain networks including Ethereum, Polygon, and Binance Smart Chain",
      "Integrated DeFi protocols for yield farming, staking, and liquidity provision",
      "Advanced portfolio analytics with profit/loss tracking and tax reporting",
      "Built-in DEX aggregator for optimal trade execution across multiple exchanges",
      "Hardware wallet integration with Ledger and Trezor for maximum security",
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <CardHeader className="p-0">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm mb-4 text-pretty">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.liveUrl, "_blank")
                  }}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Live
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, "_blank")
                  }}
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
