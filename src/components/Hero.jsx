import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]">
            Massive LED Screens for Every Space
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90">
            Indoor, outdoor, interactive, transparent — fully customizable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/quote" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all">
              Request a Quote
            </Link>
            <a href="#features" className="px-6 py-3 rounded-md border border-cyan-400/40 text-cyan-300 hover:bg-cyan-950/30 transition-colors">
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
