'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { springs } from '@/lib/animations'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  
  // Increase blur as user scrolls
  const blurAmount = useTransform(scrollY, [0, 100], [8, 20])
  const borderOpacity = useTransform(scrollY, [0, 100], [0.3, 0.6])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="glass-nav fixed top-0 left-0 right-0 z-50"
      style={{
        // @ts-ignore - Framer Motion style typing
        backdropFilter: blurAmount.get() ? `blur(${blurAmount.get()}px)` : 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Name */}
          <motion.a
            href="#home"
            className="font-semibold text-lg tracking-tighter focus-ring rounded"
            whileHover={{ scale: 1.02 }}
            transition={springs.snappy}
          >
            Sergio Pulido
          </motion.a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 focus-ring rounded px-2 py-1 ${
                    isActive ? 'tab-active' : 'text-ink-700 dark:text-canvas-100 hover:text-bronze-600'
                  }`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...springs.gentle,
                    delay: index * 0.05,
                  }}
                >
                  {item.name}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 focus-ring rounded"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
