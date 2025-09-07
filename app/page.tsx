import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ResumeDownload } from "@/components/resume-download"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <div className="bg-card border border-border rounded-3xl p-8 space-y-16">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <ResumeDownload />
    </div>
  )
}
