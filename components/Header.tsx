export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white text-xl font-bold">
              🛡️
            </div>
            <span className="text-xl font-bold text-gray-900">SpamGuard AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Características
            </a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600 transition-colors">
              FAQ
            </a>
            <a href="https://github.com/tu-usuario/spamguard" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
              GitHub
            </a>
            <a href="#download" className="btn-primary">
              Descargar
            </a>
          </div>
          
          <button className="md:hidden p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
