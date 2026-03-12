'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, Star, ArrowRight, Sparkles, GraduationCap, Briefcase, BookOpen, BarChart3, Ship, Dumbbell } from 'lucide-react'

export default function Projects() {
  const [inView, setInView] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'KSR Alumni Bridge',
      description: 'A web platform that connects alumni with current students for mentorship and career guidance.',
      features: ['Mentorship System', 'Communication Platform', 'Career Guidance'],
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      link: 'https://naganandhininagendran.github.io/Ksr-Alumni/',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-600/20 to-cyan-600/20',
      icon: GraduationCap,
    },
    {
      title: 'Career Thrive',
      description: 'Job discovery platform helping unemployed individuals find opportunities and connect with local workers.',
      features: ['Job Search', 'Location-based Matching', 'Service Booking'],
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      link: 'https://naganandhininagendran.github.io/Carrar-Thrive/',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-600/20 to-pink-600/20',
      icon: Briefcase,
    },
    {
      title: 'Honey Bee Learning Platform',
      description: 'Online learning platform offering courses in spoken English and skill development for children.',
      features: ['Online Courses', 'Student Communication', 'WhatsApp Integration'],
      tech: ['React.js', 'Node.js', 'Firebase', 'MongoDB'],
      link: 'https://thehoneybeelearning.in/',
      color: 'from-amber-500 to-orange-500',
      gradient: 'from-amber-600/20 to-orange-600/20',
      icon: BookOpen,
    },
    {
      title: 'PlaciPY',
      description: 'Placement training assessment system for colleges with automatic result calculation.',
      features: ['Online Tests', 'Auto Result Calculation', 'Performance Tracking'],
      tech: ['React.js', 'Node.js', 'AWS'],
      link: 'https://placipy-assessments.netlify.app/',
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-600/20 to-emerald-600/20',
      icon: BarChart3,
    },
    {
      title: 'Shipyon',
      description: 'Global trading platform for agricultural and industrial products with import/export support.',
      features: ['Product Listing', 'Import/Export', 'Marketplace'],
      tech: ['React.js', 'Node.js', 'Firebase', 'MongoDB'],
      link: 'https://shipyon.netlify.app/',
      color: 'from-red-500 to-rose-500',
      gradient: 'from-red-600/20 to-rose-600/20',
      icon: Ship,
    },
    {
      title: 'Rio Fitness Website',
      description: 'Modern responsive UI website showcasing fitness programs and gym services.',
      features: ['Responsive Design', 'Service Showcase', 'Modern UI'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rio-fitness-website-8yc0.bolt.host/',
      color: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-600/20 to-blue-600/20',
      icon: Dumbbell,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-accent" size={24} />
            <h2 className="text-4xl sm:text-5xl font-bold text-white relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <Sparkles className="text-accent" size={24} />
          </motion.div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(idx)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Enhanced glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(135deg, ${project.color.split(' ')[0]?.replace('from-', '') || 'blue'}20, ${project.color.split(' ')[2]?.replace('to-', '') || 'cyan'}20)`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.05)',
                }}
              />
              
              {/* Subtle border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.color.split(' ')[0]?.replace('from-', '') || 'blue'}, ${project.color.split(' ')[2]?.replace('to-', '') || 'cyan'})`,
                  padding: '1px',
                }}
              >
                <div className="w-full h-full bg-background/40 rounded-2xl" />
              </motion.div>
              
              <div className="relative h-full p-8 bg-background/40 backdrop-blur-sm rounded-2xl border border-border/50 group-hover:border-accent/30 transition-all duration-500 flex flex-col overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700`}
                  initial={false}
                  animate={{ 
                    opacity: hoveredProject === idx ? 0.3 : 0,
                    scale: hoveredProject === idx ? 1.1 : 1
                  }}
                />
                
                {/* Project icon and color accent */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <project.icon size={32} className="text-accent" />
                </div>
                
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color}`} />

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-all duration-300"
                    whileHover={{ x: 5 }}
                    animate={{ 
                      scale: hoveredProject === idx ? 1.02 : 1,
                      textShadow: hoveredProject === idx ? '0 0 20px currentColor' : 'none'
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed transition-all duration-300"
                    animate={{ 
                      opacity: hoveredProject === idx ? 0.9 : 1,
                      y: hoveredProject === idx ? -2 : 0
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {project.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        animate={{ 
                          x: hoveredProject === idx ? 5 : 0,
                          opacity: hoveredProject === idx ? 1 : 0.8
                        }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            hoveredProject === idx ? 'bg-accent shadow-lg shadow-accent/50' : 'bg-accent/60'
                          }`}
                          animate={{ 
                            scale: hoveredProject === idx ? [1, 1.5, 1] : 1,
                            boxShadow: hoveredProject === idx ? '0 0 10px currentColor' : 'none'
                          }}
                          transition={{ duration: 0.3, repeat: hoveredProject === idx ? Infinity : 0 }}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        animate={{ 
                          opacity: hoveredProject === idx ? 1 : 0.7,
                          scale: hoveredProject === idx ? 1.05 : 1
                        }}
                        transition={{ delay: i * 0.05 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                          hoveredProject === idx 
                            ? 'bg-accent/20 text-accent border-accent/50 shadow-lg shadow-accent/20' 
                            : 'bg-accent/10 text-accent/80 border-accent/30'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Links */}
                <div className="flex gap-3 relative z-10">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ 
                      boxShadow: hoveredProject === idx ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' : 'none'
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">View Project</span>
                    <motion.div
                      animate={{ x: hoveredProject === idx ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <ArrowRight 
                        size={16} 
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
