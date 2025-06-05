"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: 20, label: "Years Old", suffix: "" },
    { number: 7, label: "Current Semester", suffix: "th" },
    { number: 2, label: "Major Projects", suffix: "+" },
    { number: 10, label: "Technologies", suffix: "+" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  <CountUpAnimation target={stat.number} isInView={isInView} delay={index * 0.1 + 0.3} />
                  {stat.suffix}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function CountUpAnimation({ target, isInView, delay }: { target: number; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const increment = target / 30
        const counter = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 50)
        return () => clearInterval(counter)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, target, delay])

  return <span>{count}</span>
}
