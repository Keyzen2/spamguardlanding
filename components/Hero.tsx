export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              El Anti-Spam más{' '}
              <span className="text-indigo-600">Inteligente</span> para WordPress
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Protección con Machine Learning que aprende y se adapta. 
              Detecta spam que otros plugins no pueden. Sin CAPTCHA, sin molestias.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              
                href="#download"
                className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Descargar Gratis
              </a>
              
                href="#features"
                className="rounded-full px-8 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
              >
                Ver Características
              </a>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative">
              <img
                src="/dashboard-preview.png"
                alt="SpamGuard Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
