'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { springs, staggerContainer, staggerItem } from '@/lib/animations'

type VersionStatus = 'current' | 'shipped' | 'archived'

type Version = {
  version: string
  status: VersionStatus
  year: string
  title: string
  tagline: string
  built: string[]
  why: string
  killed: string[]
  stack: string[]
  href?: string
  github?: string
}

const versions: Version[] = [
  {
    version: 'v3',
    status: 'current',
    year: '2024',
    title: 'FitFlow v3',
    tagline: 'The system version',
    built: [
      'Rebuilt entire architecture with App Router',
      'Designed offline-first sync with conflict resolution',
      'Killed gamification entirely (felt manipulative)',
      'Added privacy-first data model',
    ],
    why: '"v2 worked, but every interaction felt like I was designing for my past self, not my future users. I needed to build something that could grow without breaking."',
    killed: ['Streak counters', 'Achievement badges', 'Social features'],
    stack: ['Next.js 14', 'Supabase', 'Framer Motion', 'TypeScript'],
    href: '#',
    github: '#',
  },
  {
    version: 'v2',
    status: 'shipped',
    year: '2023',
    title: 'FitFlow v2',
    tagline: 'The rethinking',
    built: [
      'Rebuilt state management from scratch',
      'Added offline-first capabilities',
      'Redesigned entire UI for calm interactions',
      'Experimented with gamification (later removed)',
    ],
    why: '"v1 taught me what users needed. v2 was about building it properly, even if it meant throwing away working code."',
    killed: ['Real-time features', 'Complex animations', 'Social sharing'],
    stack: ['React Native', 'Firebase', 'Redux', 'Expo'],
    href: '#',
    github: '#',
  },
  {
    version: 'v1',
    status: 'archived',
    year: '2022',
    title: 'FitFlow v1',
    tagline: 'The beginning',
    built: [
      'Core habit tracking functionality',
      'Simple calendar view',
      'Basic data persistence',
      'Learned what not to build',
    ],
    why: `"I just wanted to ship something. Turns out that's the hardest part — knowing when to stop adding features."`,
    killed: ['Nothing yet', 'Everything was experimental'],
    stack: ['React', 'LocalStorage', 'CSS Modules'],
    href: '#',
  },
]

const statusColors: Record<VersionStatus, string> = {
  current: 'bg-emerald-500/10 text-emerald-500',
  shipped: 'bg-blue-500/10 text-blue-500',
  archived: 'bg-ink-700/10 text-ink-700 dark:bg-canvas-100/10 dark:text-canvas-100',
}

export default function VersionsTab() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {versions.map((version) => (
        <motion.div
          key={version.version}
          variants={staggerItem}
          className="glass-card p-8 group hover:shadow-soft-2xl transition-shadow duration-300"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold tracking-tight">{version.title}</h3>
                <span
                  className={`px-2 py-1 text-xs font-mono rounded ${statusColors[version.status]}`}
                >
                  {version.status}
                </span>
              </div>
              <p className="text-lg text-ink-700 dark:text-canvas-100 opacity-70">
                {version.tagline}
              </p>
            </div>
            <span className="text-sm font-mono text-ink-700 dark:text-canvas-100 opacity-50">
              {version.year}
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* What I built */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-ink-700 dark:text-canvas-100 opacity-70">
                What I built
              </h4>
              <ul className="space-y-2">
                {version.built.map((item, i) => (
                  <li
                    key={`${version.version}-built-${i}`}
                    className="text-sm text-ink-700 dark:text-canvas-100 opacity-80 flex gap-2"
                  >
                    <span className="text-bronze-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I killed */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-ink-700 dark:text-canvas-100 opacity-70">
                What I killed
              </h4>
              <ul className="space-y-2">
                {version.killed.map((item, i) => (
                  <li
                    key={`${version.version}-killed-${i}`}
                    className="text-sm text-ink-700 dark:text-canvas-100 opacity-60 line-through flex gap-2"
                  >
                    <span className="mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why I rebuilt - The outlier signal */}
          <div className="mb-6 p-4 bg-canvas-100 dark:bg-ink-900/50 rounded-lg border-l-2 border-bronze-600">
            <h4 className="text-sm font-semibold mb-2 text-ink-700 dark:text-canvas-100 opacity-70">
              Why I rebuilt
            </h4>
            <p className="text-sm text-ink-700 dark:text-canvas-100 opacity-80 italic leading-relaxed">
              {version.why}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 text-ink-700 dark:text-canvas-100 opacity-70">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {version.stack.map((tech) => (
                <span
                  key={`${version.version}-tech-${tech}`}
                  className="px-2 py-1 text-xs font-mono bg-canvas-100 dark:bg-ink-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-canvas-200 dark:border-white/10">
            <motion.a
              href={version.href ?? '#'}
              className="btn-text text-sm group/link"
              whileHover={{ x: 2 }}
              transition={springs.snappy}
            >
              View Details
              <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </motion.a>

            {version.status !== 'archived' && (
              <motion.a
                href={version.github ?? '#'}
                className="btn-text text-sm opacity-70 hover:opacity-100"
                whileHover={{ x: 2 }}
                transition={springs.snappy}
              >
                GitHub
                <Github className="w-3 h-3" />
              </motion.a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
