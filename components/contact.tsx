"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import GtmModal from "./gtm-modal"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isGtmOpen, setIsGtmOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-foreground">Certifications</h2>
          <Card className="p-4 text-sm">
            <ul className="list-disc list-outside pl-6 space-y-2 leading-7 text-foreground marker:text-primary/70">
              <li className="space-y-1">
                <div className="font-medium">LangChain Adacemy Introduction to LangGraph</div>
                <Button 
                  variant='link'
                  className="p-0 h-auto min-h-0 justify-start bg-transparent text-primary hover:text-primary/90 hover:bg-transparent hover:cursor-pointer"
                  onClick={() => window.open('https://academy.langchain.com/certificates/ahnipwj2nw', '_blank')}>
                  View Credentials
                </Button>
              </li>
              <li className="space-y-1">
                <div className="font-medium">AWS Academy Cloud Architecting</div>
                <Button 
                  variant='link'
                  className="p-0 h-auto min-h-0 justify-start bg-transparent text-primary hover:text-primary/90 hover:bg-transparent hover:cursor-pointer"
                  onClick={() => window.open('https://www.credly.com/badges/a9b413bb-3070-407f-ac47-8c37dffe7ce6/public_url', '_blank')}>
                  View Credentials
                </Button>
              </li>
            </ul>
          </Card>
        </div>

        <div id="li-gh" className="space-y-4">
          <div className="flex flex-col space-y-3">
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color dark:hover:text-white hover:text-black hover:cursor-pointer"
              onClick={() => window.location.href = 'mailto:m.atharv063@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              m.atharv063@gmail.com
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color dark:hover:text-white hover:text-black hover:cursor-pointer"
              onClick={() => window.open('https://github.com/atharvmahajan32', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              github.com/atharvmahajan32
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color dark:hover:text-white hover:text-black hover:cursor-pointer"
              onClick={() => window.open('https://linkedin.com/in/atharvmahajan63', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              linkedin.com/in/atharvmahajan63
            </Button>
            <Button
              variant="link"
              className="justify-start bg-transparent hover:bg-theme-color dark:hover:text-white hover:text-black hover:cursor-pointer"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'Atharv_Mahajan.pdf';
                link.download = 'Atharv_Mahajan_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
  <p className=" pt-3 text-center text-sm sm:text-base text-muted-foreground">Want to talk about AI/ML, <a href="#" onClick={(e) => { e.preventDefault(); setIsGtmOpen(true); }} rel="noreferrer" className="text-primary underline underline-offset-2 decoration-primary decoration-1 hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white transition-colors cursor-pointer">GTM</a>, or ideas? <a href="https://calendly.com/m-atharv063/new-meeting" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 decoration-primary decoration-1 hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white transition-colors">Let’s grab a virtual coffee.</a></p>
  <GtmModal isOpen={isGtmOpen} onClose={() => setIsGtmOpen(false)} />
    </section>
  );
}
