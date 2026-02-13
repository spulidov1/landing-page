'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { springs, staggerContainer, staggerItem } from '@/lib/animations'
import { useRef, useState, useEffect } from 'react'

export default function FeaturedTab() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    return () => card.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-1 gap-8"
    >
      {/* FitFlow v3 Hero Card */}
      <motion.div
        ref={cardRef}
        variants={staggerItem}
        className="glass-card p-8 sm:p-12 group"
        style={{
          // @ts-ignore
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
        whileHover={{
          y: -2,
          transition: springs.snappy,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image/Demo Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-ink-800 to-ink-900 dark:from-canvas-100 dark:to-canvas-200 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-bronze-600/20 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-bronze-600 rounded-lg" />
                </div>
                <p className="text-sm text-canvas-100 dark:text-ink-900 opacity-50 font-mono">
                  Screenshot / Demo
                </p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-3xl font-bold tracking-tight">FitFlow v3</h3>
                <span className="px-2 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-500 rounded">
                  Current
                </span>
              </div>
              <p className="text-xl text-ink-700 dark:text-canvas-100 opacity-80">
                Habit tracking without shame
              </p>
            </div>

            <p className="text-base text-ink-700 dark:text-canvas-100 opacity-70 leading-relaxed">
              A rethought approach to building habits. No streaks, no guilt, no manipulation. 
              Just calm, supportive tracking that respects your humanity. Built after solving 
              the entire system mentally — the code is just the expression of complete 
              understanding.
            </p>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-medium mb-2 text-ink-700 dark:text-canvas-100 opacity-50">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js 14', 'Supabase', 'Framer Motion', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-canvas-100 dark:bg-ink-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#"
                className="btn-text group/link"
                whileHover={{ x: 2 }}
                transition={springs.snappy}
              >
                View Case Study
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </motion.a>
              <motion.a
                href="#"
                className="btn-text opacity-70 hover:opacity-100"
                whileHover={{ x: 2 }}
                transition={springs.snappy}
              >
                GitHub
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
