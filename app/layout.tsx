import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sergio Pulido — Product Designer & Engineer',
  description: 'Building calm, intelligent systems. FitFlow evolution and thoughtful product work.',
  keywords: ['product design', 'frontend engineering', 'UX design', 'React', 'Next.js'],
  authors: [{ name: 'Sergio Pulido' }],
  openGraph: {
    title: 'Sergio Pulido — Product Designer & Engineer',
    description: 'Building calm, intelligent systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
