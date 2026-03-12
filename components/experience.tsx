'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

export default function Experience() {
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

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Praskla Technology',
      duration: '9 Months',
      location: 'Remote/On-site',
      responsibilities: [
        'Developed web applications and full stack systems',
        'Worked on 5+ real-time software projects',
        'Built responsive frontend interfaces',
        'Developed backend APIs and server-side logic',
        'Integrated MongoDB and Firebase databases',
        'Collaborated with development teams to build scalable applications',
      ],
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex items-start gap-6 mb-6 flex-col sm:flex-row">
                  <div className="p-4 bg-accent/10 rounded-lg h-fit">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="space-y-2 mb-6">
                      <p className="text-lg text-accent font-semibold">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-accent flex-shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-accent flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline indicator */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-muted-foreground">
              Gained hands-on experience in full stack development and modern web technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
