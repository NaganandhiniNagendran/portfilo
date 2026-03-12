'use client'

import { motion } from 'framer-motion'
import { Loader2, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete?: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-r from-accent to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
            <Sparkles className="text-white" size={40} />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Naganandhini N
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="text-accent animate-spin" size={24} />
              <span className="text-accent">Loading amazing content...</span>
            </div>
          </div>
          <div className="w-64 h-1 bg-accent/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent to-purple-600" style={{ width: '50%' }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-8">
        {/* Animated logo */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-accent to-purple-600 rounded-2xl flex items-center justify-center mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="text-white" size={40} />
        </motion.div>

        {/* Loading text */}
        <div className="space-y-4">
          <motion.h1 
            className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Naganandhini N
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Loader2 className="text-accent animate-spin" size={24} />
            <span className="text-accent">Loading amazing content...</span>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-accent/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0
            }}
            animate={{
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), -100],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
