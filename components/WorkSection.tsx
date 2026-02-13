'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tabVariants, springs } from '@/lib/animations'
import FeaturedTab from './tabs/FeaturedTab'
import VersionsTab from './tabs/VersionsTab'

type TabType = 'featured' | 'versions' | 'graveyard'

const tabs: { id: TabType; label: string; enabled: boolean }[] = [
  { id: 'featured', label: 'Featured', enabled: true },
  { id: 'versions', label: 'All Versions', enabled: true },
  { id: 'graveyard', label: 'Graveyard', enabled: false }, // Disabled for now per your choice
]

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState<TabType>('featured')
  const [direction, setDirection] = useState(0)

  const handleTabChange = (newTab: TabType) => {
    const oldIndex = tabs.findIndex(t => t.id === activeTab)
    const newIndex = tabs.findIndex(t => t.id === newTab)
    setDirection(newIndex > oldIndex ? 1 : -1)
    setActiveTab(newTab)
  }

  return (
    <section id="work" className="min-h-screen py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springs.gentle}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
             Systems I Build
          </h2>

          <p className="text-lg text-ink-700 dark:text-canvas-100 opacity-70 max-w-2xl">
            Evolution as proof. Each version shows how I think, not just what I shipped.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12 border-b border-canvas-200 dark:border-white/10">
          <div className="flex gap-8">
            {tabs
              .filter(tab => tab.enabled)
              .map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative pb-4 px-1 text-sm font-medium transition-colors duration-200 focus-ring ${
                      isActive
                        ? 'text-bronze-600'
                        : 'text-ink-700 dark:text-canvas-100 hover:text-bronze-600'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze-600 rounded-full"
                        layoutId="activeTab"
                        transition={springs.snappy}
                      />
                    )}
                  </button>
                )
              })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={tabVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {activeTab === 'featured' && <FeaturedTab />}
            {activeTab === 'versions' && <VersionsTab />}
            {activeTab === 'graveyard' && (
              <div className="text-center py-16 text-ink-700 dark:text-canvas-100 opacity-50">
                Graveyard tab — coming soon
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
