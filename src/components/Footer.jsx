import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-slate-300">
          <div>
            <h4 className="text-white font-semibold mb-3">NovaScreen Africa</h4>
            <p className="text-sm">High-performance LED screens for every environment. Indoor, outdoor, interactive, transparent, fully customizable.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/quote" className="hover:text-white">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: sales@novascreen.africa</li>
              <li>Phone: +254 700 000 000</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Disclaimer</h4>
            <p className="text-sm">All LED solutions are customizable to your required size and configuration. Get in touch for a personalized quote.</p>
          </div>
        </div>
        <div className="mt-10 text-center text-slate-500 text-xs">© {new Date().getFullYear()} NovaScreen Africa. All rights reserved.</div>
      </div>
    </footer>
  )
}
