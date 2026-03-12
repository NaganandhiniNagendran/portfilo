'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { BookOpen, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-lg h-fit">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Bachelor of Engineering (B.E)</h3>
                      <p className="text-lg text-accent font-semibold">Computer Science Engineering</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-accent flex-shrink-0" />
                      <span>KSR Institute for Engineering and Technology</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar size={18} className="text-accent flex-shrink-0" />
                      <span>Expected Graduation: 2027</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing excellence in computer science with a focus on web development and software engineering principles. 
                    Actively participating in projects and internships to build practical experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
