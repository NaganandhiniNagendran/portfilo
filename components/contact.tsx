'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Mail, Github, Linkedin, Send, Phone, CheckCircle, AlertCircle, ExternalLink, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [inView, setInView] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState('')
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:thenaganandhinioffical@gmail.com',
      color: 'hover:text-accent',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+918610650696',
      color: 'hover:text-accent',
      description: 'Call me directly'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/NaganandhiniNagendran',
      color: 'hover:text-accent',
      description: 'Check my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/naganandhinin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-accent',
      description: 'Connect professionally'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      
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
            <MessageCircle className="text-accent" size={24} />
            <h2 className="text-4xl sm:text-5xl font-bold text-white relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <MessageCircle className="text-accent" size={24} />
          </motion.div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full" />
          <motion.p 
            className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always interested in hearing about new projects and opportunities.
            Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative p-8 bg-background/40 backdrop-blur-sm rounded-2xl border border-border/50">
              <motion.h3 
                className="text-2xl font-bold mb-6 text-foreground"
                whileHover={{ x: 5 }}
              >
                Send a Message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused('')}
                    className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-accent transition-all peer placeholder-transparent"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all pointer-events-none ${
                      isFocused === 'name' || formData.name
                        ? '-top-6 text-xs text-accent bg-background px-1'
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Your name
                  </motion.label>
                </div>

                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    onFocus={() => setIsFocused('email')}
                    onBlur={() => setIsFocused('')}
                    className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-accent transition-all peer placeholder-transparent"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {isFocused === 'email' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-6 left-0 text-xs text-accent"
                    >
                      We'll never share your email
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all pointer-events-none ${
                      isFocused === 'message' || formData.message
                        ? '-top-6 text-xs text-accent bg-background px-1'
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Your message
                  </motion.label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('message')}
                    onBlur={() => setIsFocused('')}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-accent transition-all peer placeholder-transparent resize-none"
                    placeholder="Your message..."
                  />
                  {isFocused === 'message' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-6 left-0 text-xs text-accent"
                    >
                      Tell me about your project
                    </motion.div>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-accent/50 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <Send size={18} />
                  Send Message
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-accent bg-accent/10 p-3 rounded-lg"
                    >
                      <CheckCircle size={20} />
                      <span>Thanks for reaching out! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick Links with enhanced effects */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="p-8 backdrop-blur-sm bg-card/30 rounded-2xl border border-border/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5" />
              <h3 className="text-xl font-bold mb-6 relative">Connect With Me</h3>
              <div className="space-y-4 relative">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-all p-3 rounded-lg hover:bg-accent/10 group"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
                      >
                        <Icon size={20} />
                      </motion.div>
                      <span className="font-medium">{link.label}</span>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="p-8 bg-gradient-to-br from-accent/10 via-purple-500/10 to-accent/10 rounded-2xl border border-accent/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-foreground">Let's Collaborate!</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Whether you have a project in mind, need consultation, or just want to connect, 
                  feel free to reach out. I'm always eager to collaborate on innovative projects!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 bg-accent/10 rounded-lg border border-accent/30"
                >
                  <p className="text-accent font-semibold text-center">
                    Let's build something amazing together.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
