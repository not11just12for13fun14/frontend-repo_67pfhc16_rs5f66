import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Cog, Zap } from 'lucide-react'

const points = [
  { icon: Sparkles, title: 'Vibrant Visuals', desc: 'High refresh rate, deep blacks, and stunning brightness.' },
  { icon: Cog, title: 'Remote Control', desc: 'Update content remotely with robust scheduling tools.' },
  { icon: ShieldCheck, title: 'Built to Last', desc: 'Durable panels, weatherproof options, expert installation.' },
  { icon: Zap, title: 'Custom Sizes', desc: 'Modular design to fit any space and aspect ratio.' },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(251,146,60,0.12), transparent 60%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Why Choose Us
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <p.icon className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
