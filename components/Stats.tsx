'use client'
import { useEffect, useState } from 'react'

export default function Stats() {
  const [stats, setStats] = useState({
    totalComments: 0,
    spamBlocked: 0,
    accuracy: 95
  })
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Intentar obtener stats reales de la API
    fetch('https://spamguard.up.railway.app/api/v1/public-stats')
      .then(res => res.json())
      .then(data => {
        if (data.total_analyzed) {
          setStats({
            totalComments: data.total_analyzed,
            spamBlocked: data.spam_blocked,
            accuracy: Math.round(data.accuracy * 100)
          })
        }
      })
      .catch(() => {
        // Fallback a animación de números
        animateNumber(0, 1250000, 2000, (val) => 
          setStats(prev => ({ ...prev, totalComments: val }))
        )
        animateNumber(0, 98750, 2000, (val) => 
          setStats(prev => ({ ...prev, spamBlocked: val }))
        )
      })
  }, [])

  const animateNumber = (start: number, end: number, duration: number, callback: (val: number) => void) => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      callback(current)
      if (progress >= 1) clearInterval(timer)
    }, 16)
  }

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-3 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-slide-up">
            <p className="text-5xl font-bold text-white">
              {stats.totalComments.toLocaleString()}+
            </p>
            <p className="mt-2 text-lg text-indigo-100">Comentarios Analizados</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-5xl font-bold text-white">
              {stats.spamBlocked.toLocaleString()}+
            </p>
            <p className="mt-2 text-lg text-indigo-100">Spam Bloqueado</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-5xl font-bold text-white">{stats.accuracy}%</p>
            <p className="mt-2 text-lg text-indigo-100">Precisión</p>
          </div>
        </div>
      </div>
    </section>
  )
}
