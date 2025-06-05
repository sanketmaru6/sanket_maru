"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedTitle } from "@/components/ui/animated-section"
import { Trophy, Award, Star, Target } from "lucide-react"
import { motion } from "framer-motion"

export function Achievements() {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Achieved 7.48 CGPA in Diploma Computer Engineering",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "CCC Certification",
      description: "Scored 90% in All India Computer Education Society certification",
      icon: <Award className="h-6 w-6" />,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Innovation in Hardware",
      description: "Developed Smart Bridge project for flood management",
      icon: <Star className="h-6 w-6" />,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Web Development",
      description: "Created comprehensive help desk management system",
      icon: <Target className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Achievements & Highlights
          </AnimatedTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
             
                <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg h-full group">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`${achievement.bgColor} p-3 rounded-full`}
                      >
                        <div className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.icon}
                        </div>
                      </motion.div>
                    </div>
                    <CardTitle className="text-center text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {achievement.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full mt-4`}
                    />
                  </CardContent>
                </Card>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
