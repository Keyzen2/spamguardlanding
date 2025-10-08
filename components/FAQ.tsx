const faqs = [
  {
    question: '¿Es realmente gratis?',
    answer: 'Sí, 100% gratis y open source. Sin costos ocultos ni versiones premium.',
  },
  {
    question: '¿Necesito conocimientos técnicos?',
    answer: 'No. La configuración toma menos de 1 minuto con registro automático.',
  },
  {
    question: '¿Funciona con otros plugins anti-spam?',
    answer: 'Sí, pero recomendamos desactivar otros plugins para evitar conflictos.',
  },
  {
    question: '¿Mis datos son privados?',
    answer: 'Sí. Solo se envían metadatos necesarios para el análisis. El contenido permanece en tu servidor.',
  },
  {
    question: '¿Qué pasa si se equivoca?',
    answer: 'El sistema aprende de cada corrección que haces. Con el tiempo, se vuelve más preciso para tu sitio específico.',
  },
  {
    question: '¿Necesito API key?',
    answer: 'Sí, pero se genera automáticamente con un click. Es gratuita y sin límites para sitios personales.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="faq-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-8" role="list">
            {faqs.map((faq, index) => (
              <div key={faq.question} role="listitem">
                <dt className="text-lg font-semibold text-gray-900" id={`faq-question-${index}`}>
                  {faq.question}
                </dt>
                <dd
                  className="mt-2 text-base text-gray-600"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
