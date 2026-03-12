'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Code2, Zap, Target, Sparkles } from 'lucide-react'
import { useScrollAnimation, useParallax } from '@/hooks/use-scroll-animation'

export default function About() {
  const { ref: sectionRef, isVisible, scrollY } = useScrollAnimation({ threshold: 0.2 })

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

  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in both frontend and backend technologies, building complete web solutions.',
    },
    {
      icon: Zap,
      title: 'Modern Technologies',
      description: 'Experienced with cutting-edge frameworks and tools for scalable applications.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Dedicated to solving real-world problems with efficient and elegant solutions.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background/50 backdrop-blur-sm">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="relative inline-block">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl"
              />
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full mb-4"
            />
          </motion.div>

          {/* Enhanced Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 relative z-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                className="p-8 backdrop-blur-sm bg-card/30 rounded-2xl border border-border/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5" />
                <div className="relative z-10">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm a Computer Science Engineering student passionate about web development and full stack technologies.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I enjoy building scalable and modern web applications that solve real-world problems. 
                    With a strong foundation in both frontend and backend development, I'm committed to writing clean, 
                    efficient code and creating exceptional user experiences.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    During my 9-month internship at Praskla Technology, I gained hands-on experience developing multiple 
                    real-time projects and working with modern web technologies in a collaborative environment.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Features Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 backdrop-blur-sm bg-card/30 rounded-2xl border border-border/30 hover:border-accent/50 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start gap-4 z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                      >
                        <Icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="ml-auto"
                      >
                        <Sparkles className="w-4 h-4 text-accent" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
