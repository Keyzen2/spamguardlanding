const features = [
  {
    name: 'Machine Learning',
    description: 'Modelo entrenado con miles de ejemplos reales que mejora continuamente.',
    icon: '🤖',
  },
  {
    name: 'Aprendizaje Automático',
    description: 'Se adapta al spam específico de tu sitio. Aprende de cada corrección.',
    icon: '🧠',
  },
  {
    name: 'Honeypot Protection',
    description: 'Campo invisible que atrapa bots automáticamente.',
    icon: '🍯',
  },
  {
    name: 'Time Check',
    description: 'Bloquea comentarios enviados demasiado rápido (bots).',
    icon: '⏱️',
  },
  {
    name: 'Blacklist / Whitelist',
    description: 'Control manual de IPs y emails con un click.',
    icon: '📝',
  },
  {
    name: 'Sin CAPTCHA',
    description: 'No molesta a tus visitantes legítimos.',
    icon: '✅',
  },
  {
    name: 'Transparencia',
    description: 'Sabes exactamente por qué un comentario fue marcado.',
    icon: '🔍',
  },
  {
    name: 'Dashboard Completo',
    description: 'Estadísticas detalladas y gráficos en tiempo real.',
    icon: '📊',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para proteger tu sitio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Múltiples capas de protección trabajando juntas
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-3xl">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
