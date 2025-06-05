"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTitle, AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Frameworks & Technologies",
      skills: ["ReactJS", "React Native", "Flutter", "WordPress", "Arduino IDE", "Android Studio"],
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Object-Oriented Programming",
        "Computer Networks",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </AnimatedTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
