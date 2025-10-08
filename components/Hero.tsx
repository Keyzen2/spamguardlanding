export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32" aria-labelledby="hero-title">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-4 py-2 mb-8">
              <span className="text-sm font-medium text-indigo-600">🚀 Nuevo: Honeypot + Time Check</span>
            </div>
            
            <h1 id="hero-title" className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              El Anti-Spam más{' '}
              <span className="gradient-text">Inteligente</span> para WordPress
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Protección con <strong>Machine Learning</strong> que aprende y se adapta. 
              Detecta spam que otros plugins no pueden. <strong>Sin CAPTCHA</strong>, sin molestias a tus usuarios.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#download" className="btn-primary">
                Descargar Gratis
              </a>
              <a href="#features" className="btn-secondary">
                Ver Características
              </a>
            </div>
            
            <div className="mt-10 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">100% Gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Sin límites</span>
              </div>
            </div>
          </div>
          
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/dashboard-mockup.png"
                  alt="Dashboard de SpamGuard AI mostrando estadísticas de spam bloqueado, precisión del modelo y gráficos en tiempo real"
                  className="w-full h-auto"
                  loading="eager"
                />
                {/* Overlay gradient para darle profundidad */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                
                {/* Badge flotante con métrica */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 backdrop-blur-sm bg-opacity-95">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-900">96.2% Accuracy</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">↑ 8%</span>
                  </div>
                </div>
                
                {/* Badge flotante con spam bloqueado */}
                <div className="absolute top-4 right-4 bg-red-50 rounded-lg shadow-lg px-4 py-3 backdrop-blur-sm bg-opacity-95 border border-red-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">1,247</div>
                    <div className="text-xs text-red-800 font-medium">Spam bloqueado hoy</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
