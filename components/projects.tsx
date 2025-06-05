"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Wrench, Globe } from "lucide-react"
import Link from "next/link"
import { AnimatedTitle, AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Smart Bridge",
      description:
        "An innovative hardware-based solution designed to address flooding challenges on critical infrastructure. The bridge automatically raises itself when water sensors detect rising water levels, minimizing damage and ensuring safety.",
      image: "/project.1.png?height=200&width=300",
      technologies: ["Arduino IDE", "C++", "Hardware Integration", "Sensors"],
      type: "Hardware Project",
      icon: <Wrench className="h-5 w-5" />,
      features: [
        "Real-time water level monitoring",
        "Automatic bridge elevation system",
        "Flood damage prevention",
        "Enhanced urban infrastructure resilience",
      ],
    },
    {
      title: "Get Help",
      description:
        "A comprehensive help desk system with separate user and admin panels for efficient problem resolution and management.",
      image: "/project.1.png?height=200&width=300",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      type: "Web Application",
      icon: <Globe className="h-5 w-5" />,
      userPanelUrl: "https://sanketmaru67.kesug.com/code/home%20page.html?i=2",
      adminPanelUrl: "https://sanketmaru67.kesug.com/code/login%20schooldata.html",
      features: [
        "User-friendly interface",
        "Admin management panel",
        "Ticket management system",
        "Real-time problem tracking",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</AnimatedTitle>
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video relative">
                      <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                          >
                            {project.icon}
                          </motion.div>
                          <Badge variant="outline">{project.type}</Badge>
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Features:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * featureIndex }}
                                  className="flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div key={techIndex} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                  <Badge variant="secondary">{tech}</Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4">
                            {project.userPanelUrl && (
                              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                                  <Link href={project.userPanelUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    User Panel
                                  </Link>
                                </Button>
                              </motion.div>
                            )}
                            {project.adminPanelUrl && (
                              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Button size="sm" variant="outline" asChild>
                                  <Link href={project.adminPanelUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Admin Panel
                                  </Link>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
