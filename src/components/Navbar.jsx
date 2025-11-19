import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Monitor, Phone } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'
  }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">NovaScreen Africa</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/quote" className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all">
              <Phone className="w-4 h-4" />
              Request a Quote
            </Link>
          </nav>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded-md border border-white/10 text-slate-200">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base ${isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)} className="block mt-2 px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
