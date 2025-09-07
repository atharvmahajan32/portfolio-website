import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface SkillDetails {
  name: string
  logo: string
  proficiency: number
  experience: string
  description: string
  projects: string[]
  yearsOfExperience: number
}

interface SkillModalProps {
  skill: SkillDetails | null
  isOpen: boolean
  onClose: () => void
}

const ModalSkillLogo = ({ skill }: { skill: SkillDetails }) => {
  if (skill.logo.length === 1 || skill.logo.includes("�")) {
    return <span className="text-2xl">{skill.logo}</span>
  }

  return (
    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
      <span className="text-sm font-bold text-primary">{skill.logo}</span>
    </div>
  )
}

export function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  if (!skill) return null

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert"
    if (proficiency >= 75) return "Advanced"
    if (proficiency >= 60) return "Intermediate"
    if (proficiency >= 40) return "Beginner"
    return "Learning"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <ModalSkillLogo skill={skill} />
            {skill.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Proficiency Level</span>
              <Badge variant={skill.proficiency >= 75 ? "default" : "secondary"}>
                {getProficiencyLabel(skill.proficiency)}
              </Badge>
            </div>
            <Progress value={skill.proficiency} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? "year" : "years"} of experience
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">About My Experience</h3>
            <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
            <p className="text-muted-foreground leading-relaxed">{skill.experience}</p>
          </div>

          {skill.projects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Projects Using This Skill</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {skill.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
