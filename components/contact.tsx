"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Home, CheckCircle, Send } from "lucide-react"
import { AnimatedTitle, AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-center mb-12">Get In Touch</AnimatedTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <h3 className="text-2xl font-semibold mb-6">{"Let's Connect"}</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities, collaborations, and exciting projects. Whether you have a
                question, want to discuss a project, or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>sanketmaru84@gmail.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+91 9099739708</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Current Address:</p>
                    <p className="text-sm text-muted-foreground">
                      Plot No: B-1730, Akshardham2 Kalyabid
                      <br />
                      Bhavnagar, Gujarat - 364001
                    </p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3">
                  <Home className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Permanent Address:</p>
                    <p className="text-sm text-muted-foreground">
                      Plot No: 12B, Jasaraj Nagar
                      <br />
                      Gir Gadhada Road, Una
                      <br />
                      Gir Somnath, Gujarat - 362560
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4"
                      >
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                          ) : (
                            <Send className="w-4 h-4 mr-2" />
                          )}
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
