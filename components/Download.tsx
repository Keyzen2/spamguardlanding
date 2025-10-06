export default function Download() {
  return (
    <section id="download" className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Comienza a Proteger tu Sitio Hoy
        </h2>
        <p className="mt-4 text-xl text-indigo-100">
          Descarga gratis. Sin costos ocultos. Open Source.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          
            href="https://github.com/tu-usuario/spamguard-wordpress/releases/latest/download/spamguard.zip"
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:bg-gray-100"
          >
            Descargar Plugin
          </a>
          
            href="https://github.com/tu-usuario/spamguard"
            className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
          >
            Ver en GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-indigo-200">
          Compatible con WordPress 5.8+ | PHP 7.4+
        </p>
      </div>
    </section>
  )
}
