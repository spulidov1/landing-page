'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { springs, staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            About
          </motion.h2>

          <motion.div variants={staggerItem} className="space-y-6 text-lg text-ink-700 dark:text-canvas-100 opacity-80 leading-relaxed">
            <p>
              I'm Sergio — I build apps by becoming them first.
            </p>

            <p>
              Spent 10 years engineering municipal water systems designed to scale 
              decades into the future. You don't just connect pipes — you architect 
              for pressure dynamics, flow distribution, and infrastructure that won't 
              exist for years. That kind of systems thinking rewires your brain.
            </p>

            <p>
              Taught myself to code because I realized software is the same discipline: 
              anticipate scale, design for forces you can't see yet, build systems 
              that handle complexity gracefully.
            </p>

            <p>
              I ship FitFlow because I'd already solved it mentally. The code is just 
              the artifact of understanding the system completely first.
            </p>

            <p className="text-base">
              Mid-level in years. Outlier in how I think. I delete more than I ship. 
              I design for emotional safety, not engagement metrics.
            </p>

            <div className="pt-4 space-y-2">
              <p className="text-base opacity-60">
                Not interested in: Hype, pressure, dark patterns, loud signals
              </p>
              <p className="text-base opacity-60">
                Very interested in: Calm software, cognitive empathy, restraint as craft
              </p>
            </div>

            <p className="text-base opacity-70 italic pt-4">
              If this resonates, you understand my wavelength.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="pt-8">
            <motion.a
              href="mailto:spulidov1@gmail.com"
              className="btn-text text-lg group inline-flex items-center gap-2"
              whileHover="hover"
              variants={{
                hover: {
                  x: 2,
                  transition: springs.snappy,
                },
              }}
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
              spulidov1@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
