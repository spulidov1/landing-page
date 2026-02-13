'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { springs } from '@/lib/animations'

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:spulidov1@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 sm:px-8 lg:px-12 border-t border-canvas-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="btn-text text-sm group/social"
                  whileHover={{ y: -1 }}
                  transition={springs.snappy}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                  <span className="sr-only sm:not-sr-only">{link.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Attribution */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-ink-700 dark:text-canvas-100 opacity-50 mb-1">
              Built with restraint
            </p>
            <p className="text-sm text-ink-700 dark:text-canvas-100 opacity-50">
              Designed for people who notice layers
            </p>
            <p className="text-xs text-ink-700 dark:text-canvas-100 opacity-40 mt-2">
              © 2024 Sergio Pulido
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
