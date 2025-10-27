import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-muted hover:text-white'
  }

  return (
    <header className="bg-dark-surface/30 w-full backdrop-blur-md border-b border-white/10 shadow-lg" style={{ height: '72px' }}>
      <nav className="container mx-auto px-8 md:px-16 lg:px-24 h-full flex items-center justify-between max-w-6xl">
        {/* Logo/Name on the left */}
        <Link to="/" className="text-left text-white font-bold text-xl font-mono hover:text-secondary transition-colors duration-200" aria-label="Home">
          <span className="text-accent">&lt;</span>Heba Ashraf<span className="text-accent">/&gt;</span>
        </Link>
        
        {/* Navigation items in the center */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link 
              to="/about" 
              className={`transition-all duration-200 flex items-center gap-2 px-3 py-2 rounded-lg ${isActive('/about') ? 'text-accent bg-accent/10' : 'text-muted hover:text-white hover:bg-white/5'}`}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              {location.pathname === '/about' ? <span>👤</span> : <span>ℹ️</span>} About
            </Link>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-muted hover:text-white transition-all duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
              aria-label="Contact via email"
            >
              <span className="text-xl">💬</span> Contact Me
            </a>
          </li>
        </ul>

        {/* Avatar on the right */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary via-accent to-secondary flex items-center justify-center overflow-hidden shadow-glow hover:scale-110 transition-transform duration-200 cursor-pointer ring-2 ring-white/20" aria-label="Profile photo">
          <img 
            src="/profile.jpg" 
            alt="Heba Ashraf"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header

