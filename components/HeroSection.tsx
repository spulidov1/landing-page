'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { springs, staggerContainer, staggerItem } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Name - Oversized, tight tracking */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-balance mb-6"
          variants={staggerItem}
        >
          Sergio Pulido
        </motion.h1>

        {/* Tagline - Understated but confident */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-ink-700 dark:text-canvas-100 opacity-80 text-balance mb-12 font-light"
          variants={staggerItem}
        >
          Building calm, intelligent systems
        </motion.p>

        {/* CTA - Text as button, arrow animates */}
        <motion.div variants={staggerItem}>
          <motion.a
            href="#work"
            className="btn-text text-lg group inline-flex items-center gap-2"
            whileHover="hover"
            variants={{
              hover: {
                x: 4,
                transition: springs.snappy,
              },
            }}
          >
            See FitFlow Evolution
            <motion.span
              className="inline-block"
              variants={{
                hover: {
                  x: 4,
                  transition: springs.snappy,
                },
              }}
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll hint - fades on scroll */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, ...springs.gentle }}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-6 h-6 text-ink-700 dark:text-canvas-100 opacity-40" strokeWidth={2} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
