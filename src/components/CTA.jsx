import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-900">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34,211,238,0.25), transparent 35%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.3), transparent 35%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/70 p-8 md:p-12 text-center shadow-[0_0_30px_rgba(56,189,248,0.25)]">
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-white">
            Ready to light up your space?
          </motion.h3>
          <p className="text-slate-300 mt-3">Tell us about your project and get a customized quote.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6">
            <Link to="/quote" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
