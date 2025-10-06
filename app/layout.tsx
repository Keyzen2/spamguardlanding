import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpamGuard AI - Anti-Spam Inteligente para WordPress',
  description: 'Protección con Machine Learning que aprende y se adapta. Detecta spam que otros plugins no pueden. Sin CAPTCHA, sin molestias.',
  keywords: 'wordpress, spam, anti-spam, machine learning, AI, plugin, seguridad',
  openGraph: {
    title: 'SpamGuard AI - Anti-Spam Inteligente',
    description: 'Protección con Machine Learning para WordPress',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
