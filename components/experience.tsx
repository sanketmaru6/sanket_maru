"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTitle } from "@/components/ui/animated-section"
import { Calendar, MapPin, Building } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      title: "Computer Engineering Student",
      company: "Gyanmanajari Institute of Technology",
      location: "Bhavnagar, Gujarat",
      period: "2022 - Present",
      type: "Education",
      description:
        "Currently pursuing B.E. in Computer Engineering (7th Semester) with focus on software development, hardware integration, and innovative project development.",
      achievements: [
        "Developed Smart Bridge project for flood management",
        "Created comprehensive help desk management system",
        "Maintained strong academic performance",
        "Active participation in technical workshops",
      ],
      technologies: ["C++", "ReactJS", "Flutter", "Arduino", "Hardware Design"],
    },
    {
      title: "Diploma Graduate",
      company: "Gyanmanajari Institute of Technology",
      location: "Bhavnagar, Gujarat",
      period: "2019 - 2022",
      type: "Education",
      description:
        "Completed Diploma in Computer Engineering with 7.48 CGPA, building strong foundation in programming and computer systems.",
      achievements: [
        "Achieved 7.48 CGPA",
        "Completed multiple programming projects",
        "Gained expertise in web development",
        "Participated in technical competitions",
      ],
      technologies: ["C", "HTML", "CSS", "JavaScript", "PHP", "Database Management"],
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2021 - Present",
      type: "Work",
      description:
        "Working on various web development and mobile app projects, helping clients build digital solutions.",
      achievements: [
        "Delivered 5+ successful projects",
        "Built responsive web applications",
        "Developed mobile applications using Flutter",
        "Maintained 100% client satisfaction rate",
      ],
      technologies: ["React", "Flutter", "WordPress", "PHP", "JavaScript"],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Experience & Journey
          </AnimatedTitle>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                
                  <div className="relative">
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background hidden md:block z-10"
                    />

                    <Card className="ml-0 md:ml-16 bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                          <Badge variant={exp.type === "Work" ? "default" : "secondary"} className="w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * achIndex }}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.05 * techIndex }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
