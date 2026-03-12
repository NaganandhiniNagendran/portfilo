'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ExternalLink, Mail, Sparkles, Code, Zap } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Software Developer | Full Stack Developer'
  const [textIndex, setTextIndex] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [-20, 20, -20],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced animated background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        
        {/* Interactive mouse-following gradient */}
        <motion.div
          animate={{
            x: `${mousePosition.x}%`,
            y: `${mousePosition.y}%`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          className="absolute w-64 h-64 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Mouse-following light effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        style={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Animated background shapes */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-10"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full z-10 text-center relative"
      >
        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="absolute -top-10 -left-10 text-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="absolute -top-10 -right-10 text-accent/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <Zap size={40} />
        </motion.div>

        {/* Name with gradient effect */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-2 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-pulse">
              Naganandhini N
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h1>
        </motion.div>

        {/* Role with enhanced typing effect */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-accent animate-pulse" size={24} />
            <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-accent min-h-12">
              {displayText}
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  className="inline-block ml-1 w-1 h-8 bg-accent"
                  animate={{ opacity: [1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </AnimatePresence>
            </p>
            <Sparkles className="text-accent animate-pulse" size={24} />
          </div>
        </motion.div>

        {/* Enhanced description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Passionate developer crafting exceptional digital experiences with cutting-edge technologies. 
          Transforming ideas into elegant, scalable solutions that make a difference.
        </motion.p>

        {/* Enhanced buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center justify-center gap-3 hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Projects <ExternalLink size={20} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-purple-500/10 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              Contact Me <Mail size={20} />
            </span>
            <motion.div
              className="absolute inset-0 bg-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto flex flex-col items-center gap-3 text-gray-400 hover:text-accent transition-colors cursor-pointer group"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm"
          >
            Scroll to explore
          </motion.div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}
