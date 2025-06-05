"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedTitle, } from "@/components/ui/animated-section"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Patel",
      role: "Professor, Computer Engineering",
      company: "Gyanmanajari Institute of Technology",
      content:
        "Sanket demonstrates exceptional problem-solving skills and innovative thinking. His Smart Bridge project showcases his ability to apply theoretical knowledge to real-world challenges.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Sharma",
      role: "Project Coordinator",
      company: "Tech Solutions Inc.",
      content:
        "Working with Sanket on the Get Help project was impressive. His attention to detail and user-centric approach resulted in an excellent help desk system.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Amit Kumar",
      role: "Senior Developer",
      company: "WebTech Solutions",
      content:
        "Sanket's dedication to learning new technologies and his collaborative spirit make him a valuable team member. His React and Flutter skills are particularly noteworthy.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-4">What People Say</AnimatedTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Testimonials from professors, colleagues, and project collaborators who have worked with me.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
             
                <Card className="h-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-blue-500/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-border"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
