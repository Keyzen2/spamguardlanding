import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'
//import Download from '@/components/Download'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Stats />
      <Features />
      <Download />
      <FAQ />
    </main>
  )
}
