"use client"

import Link from "next/link"
import { Github, Mail, ExternalLink, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/sanketmaru6",
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
    },
    {
      href: "https://sanketmaruportfolio.wuaze.com/Home.html",
      icon: <ExternalLink className="h-6 w-6" />,
      label: "Portfolio",
    },
    {
      href: "mailto:sanketmaru84@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
    },
    {
      href: "tel:+919099739708",
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
    },
  ]

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground"
          >
            © 2024 Sanket Maru. All rights reserved. Built with Next.js and Tailwind CSS.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
