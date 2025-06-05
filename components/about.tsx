"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, AnimatedTitle } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</AnimatedTitle>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-0">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src="/my.jpg?height=400&width=400"
                    alt="Sanket Maru"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  I'm Sanket Maru, a dedicated Computer Engineering student currently pursuing my B.E. in 7th semester
                  at Gyanmanajari Institute of Technology. I'm passionate about leveraging technology to create
                  innovative solutions that make a real difference.
                </p>
                <p className="text-lg text-muted-foreground">
                  My goal is to get an opportunity where I can make the best of my potential and contribute to
                  organizational growth. I enjoy working on diverse projects ranging from hardware-based solutions to
                  web development and mobile applications.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div whileHover={{ x: 3 }} className="transition-all">
                    <h3 className="font-semibold mb-2">Age</h3>
                    <p className="text-muted-foreground">20 Years</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 3 }} className="transition-all">
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Bhavnagar, Gujarat</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 3 }} className="transition-all">
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-muted-foreground">English, Gujarati, Hindi</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 3 }} className="transition-all">
                    <h3 className="font-semibold mb-2">Status</h3>
                    <p className="text-muted-foreground">Student & Developer</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
