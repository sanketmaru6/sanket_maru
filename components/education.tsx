"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { AnimatedTitle, AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function Education() {
  const education = [
    {
      degree: "B.E (Computer Engineering)",
      institution: "Gyanmanajari Institute of Technology",
      university: "Gujarat Technological University",
      status: "Pursuing - 7th Semester",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Diploma (Computer Engineering)",
      institution: "Gyanmanajari Institute of Technology",
      university: "Gujarat Technological University",
      status: "Completed - 7.48 CGPA",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "CCC Certification",
      institution: "All India Computer Education Society",
      university: "",
      status: "Completed - 90%",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">Education</AnimatedTitle>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ rotate: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-blue-600"
                        >
                          {edu.icon}
                        </motion.div>
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="text-base">
                            {edu.institution}
                            {edu.university && (
                              <>
                                <br />
                                <span className="text-sm">({edu.university})</span>
                              </>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-medium">{edu.status}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
