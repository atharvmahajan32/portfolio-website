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

// Import or define the skillsData variable to fix the issue
const skillsData: Record<string, SkillDetails> = {
  Python: {
    name: "Python",
    logo: "🐍",
    proficiency: 90,
    experience: "Hands-on experience with academic projects and internships, showcasing strong problem-solving skills.",
    description: "Python is a versatile programming language used for web development, data analysis, and more.",
    projects: ["Data Analysis Tool", "Web Scraper"],
    yearsOfExperience: 0.5,
  },
  // Add more skills as needed
};

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
};

interface SkillModalProps {
  skill: SkillDetails | null
  isOpen: boolean
  onClose: () => void
}

const ModalSkillLogo = ({ skill }: { skill: SkillDetails }) => {
  const logoUrl = logoUrls[skill.name];

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${skill.name} logo`}
        className="w-8 h-8 object-contain"
      />
    );
  }

  if (skill.logo.length === 1 || skill.logo.includes("�")) {
    return <span className="text-2xl">{skill.logo}</span>;
  }

  return (
    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
      <span className="text-sm font-bold text-primary">{skill.logo}</span>
    </div>
  );
};

const SkillModal = ({ skill, isOpen, onClose }: { skill: (typeof skillsData)[keyof typeof skillsData] | null; isOpen: boolean; onClose: () => void }) => {
  if (!skill) return null;

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
    n8n: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png",
  };

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
            <img
              src={logoUrls[skill.name] || `/public/${skill.name.toLowerCase().replace(/\s+/g, '-')}.png`}
              alt={`${skill.name} logo`}
              className="w-8 h-8 object-contain"
            />
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
              <ul className="list-disc list-outside pl-6 space-y-2 leading-7 text-foreground marker:text-primary/70">
                {skill.projects.map((project, index) => (
                  <li key={index} className="text-sm">{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { SkillModal }
