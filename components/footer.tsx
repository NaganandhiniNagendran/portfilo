'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUp, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NaganandhiniNagendran', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/naganandhinin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:thenaganandhinioffical@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918610650696', label: 'Phone' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="border-t border-border/20 bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Left - Name & Tagline */}
            <div>
              <h3 className="text-2xl font-bold mb-2 cursor-pointer hover:text-accent transition-colors duration-300">Naganandhini N</h3>
              <p className="text-muted-foreground cursor-pointer hover:text-white transition-colors duration-300">Software Developer</p>
              <p className="text-sm text-muted-foreground mt-2 cursor-pointer hover:text-white transition-colors duration-300">
                Building modern and scalable web applications with passion for technology.
              </p>
            </div>

            {/* Center - Navigation */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground cursor-pointer hover:text-accent transition-colors duration-300">Quick Links</h4>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-muted-foreground hover:text-white hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right - Social Links */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground cursor-pointer hover:text-accent transition-colors duration-300">Connect</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center hover:bg-accent/20 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/20 my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground cursor-pointer hover:text-white transition-colors duration-300">
              © {currentYear} Naganandhini N. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground cursor-pointer hover:text-white transition-colors duration-300">
              Crafted with <span className="text-accent hover:text-pink-500 transition-colors duration-300 cursor-pointer">❤</span> using React, Next.js & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
