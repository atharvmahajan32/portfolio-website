"use client";

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
            <Button variant="ghostTransparent" className="w-full">Send Message</Button>
          </CardContent>
        </Card>
        <div id="li-gh" className="space-y-4">
          <div className="flex flex-col space-y-3">
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color hover:text-white hover:cursor-pointer"
              onClick={() => window.location.href = 'mailto:m.atharv063@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              m.atharv063@gmail.com
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color hover:text-white hover:cursor-pointer"
              onClick={() => window.open('https://github.com/atharvmahajan32', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              github.com/atharvmahajan32
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color hover:text-white hover:cursor-pointer"
              onClick={() => window.open('https://linkedin.com/in/atharvmahajan63', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              linkedin.com/in/atharvmahajan63
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color hover:text-white hover:cursor-pointer"
              onClick={() => window.open('/path-to-resume.pdf', '_blank')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
