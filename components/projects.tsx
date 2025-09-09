"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "LungCare.ai",
    description: "LungCare.ai helps healthcare professionals detect and identify lung cancer cell types from histopathological images.",
    image: "/lungcareai.png",
    liveUrl: "https://lungcareai.vercel.app/",
    githubUrl: "https://github.com/theayusharma/LungCareAI",
    tech: ["React", "TensorFlow", "ViT", "Hugging Face"],
    detailedDescription:
      "LungCare.ai is an AI-powered web application designed to assist healthcare professionals in the early detection and classification of lung cancer cell types from histopathological images. By leveraging advanced deep learning models, LungCare.ai provides accurate and efficient analysis, helping to improve diagnostic outcomes.",
    myRole:
      "As the ML developer, I Finetuned the entire Google ViT on LC25000 lung and colon cancer dataset, implementing the model inference, designing the API architecture, and helped in creating the user interface. I focused on performance optimization and user experience throughout the development process.",
    challenges: [
      "Developed a full-stack web app enabling lung cancer detection and classification from histopathological images",
      "Integrated Google’s Vision Transformer (ViT) to achieve 98% accuracy on the LC25000 dataset",
      "Engineered an efficient tf.data-based preprocessing pipeline, cutting model training time by 15%",
      "Built a responsive React frontend with Tailwind CSS and deployed the model via Hugging Face Spaces",
    ],
    features: [
      "AI-powered lung cancer detection from histopathological images with high accuracy",
      "Automatic classification of cancer cell types using Vision Transformer (ViT)",
      "Interactive and responsive web interface for seamless image upload and diagnosis",
      "Efficient image preprocessing and augmentation pipeline using TensorFlow's tf.data API",
      "Model deployed via Hugging Face Spaces for real-time inference and accessibility",
    ],
  },
  {
    title: "AI Fitness Tracker",
    description: "Real-time rep counting and form feedback with integrated nutrition tracking.",
    image: "/aifitnesstracker.png",
    liveUrl: "https://fitness-tracker-cv.streamlit.app/",
    githubUrl: "https://github.com/atharvmahajan32/Fitness-Tracker",
    tech: ["Streamlit", "OpenCV", "MediaPipe", "Python"],

    detailedDescription:
      "AI-Fitness-Tracker is a real-time computer vision fitness assistant that tracks exercise form, counts reps, and provides visual feedback using webcam input. It helps users improve performance and prevent injuries while also offering integrated nutrition tracking for a holistic fitness experience.",

    myRole:
      "I developed the entire application, building the pose estimation pipeline, implementing real-time feedback logic, and designing the interactive user interface in Streamlit. I also integrated nutrition tracking features for a comprehensive fitness tool.",

    challenges: [
      "Optimized real-time pose estimation to run at 30 FPS on standard webcams using OpenCV and MediaPipe",
      "Calculated joint angles to score form accuracy and provide corrective feedback for injury prevention",
      "Handled noisy or partial pose detections with smoothing and error handling logic",
      "Designed an intuitive UI in Streamlit combining both exercise and nutrition tracking in one interface",
    ],

    features: [
      "Real-time exercise rep counting for squats, pushups, and bicep curls using computer vision",
      "Visual feedback system with form scoring based on joint angle analysis",
      "Nutrition Tracker to log meals, monitor macros, and track daily intake",
      "Lightweight design optimized for browser-based use without dedicated GPUs",
      "Interactive Streamlit interface with easy-to-use controls and performance summaries",
    ],

  },
  {
    title: "LyftSync",
    description: "a peer-to-peer ride-sharing platform to reduce urban congestion and fuel consumption.",
    image: "/lyftsync.png",
    liveUrl: "#",
    githubUrl: "https://github.com/LyftSync",
    tech: ["React Native", "Node.js", "MongoDB"],
    detailedDescription:
      "LyftSync is a peer-to-peer ride-sharing mobile app designed to reduce urban congestion and fuel consumption by connecting commuters traveling similar routes. It uses AI-powered route matching and real-time GPS tracking to optimize shared rides, promote environmental benefits, and foster a community-driven transport system.",

    myRole:
      "Designed the UI/UX and developed the frontend using React Native.",

    challenges: [
      "Developed AI-driven route matching to optimize ride sharing with minimal detours",
      "Implemented real-time GPS tracking and notifications for ride transparency and safety",
      "Designed scalable backend architecture to support high traffic and concurrent users",
      "Integrated secure ID verification and emergency contact features to ensure user trust",
    ],

    features: [
      "AI-powered optimized route matching for efficient shared rides",
      "Real-time ride tracking with Google Maps API integration",
      "User profile management with preferences and frequent routes",
      "In-app payment system with optional cost splitting",
      "Community features including ratings, groups, and incentive systems",
      "Emergency SOS button and ID verification for enhanced safety",
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
                  variant="prjbtn"
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
                  variant="link"
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
