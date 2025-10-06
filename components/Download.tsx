export default function Download() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Comienza a Proteger tu Sitio Hoy
        </h2>
        <p className="mt-4 text-xl text-indigo-100">
          Descarga gratis. Sin costos ocultos. Open Source.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
            href="https://github.com/Keyzen2/spamguard/releases/latest"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            Descargar Plugin
          </a>
          
            href="https://github.com/Keyzen2/spamguard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-200"
          >
            Ver en GitHub
          </a>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-indigo-200">
          <div className="flex items-center">WordPress 5.8+</div>
          <div className="flex items-center">PHP 7.4+</div>
          <div className="flex items-center">Instalacion en 1 minuto</div>
        </div>
      </div>
    </section>
  );
}
