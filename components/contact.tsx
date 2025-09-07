import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="justify-start bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              alexander.chen@email.com
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              github.com/alexanderchen
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Linkedin className="w-4 h-4 mr-2" />
              linkedin.com/in/alexanderchen
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
