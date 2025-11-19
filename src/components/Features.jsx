import { motion } from 'framer-motion'
import { Touchpad, Megaphone, Sun, PanelsTopLeft, Monitor, Stars } from 'lucide-react'

const features = [
  { icon: Touchpad, title: 'Interactive Touch', desc: 'Engage users with precise multi-touch capability.' },
  { icon: Megaphone, title: 'Digital Advertising', desc: 'High-brightness displays for retail and DOOH.' },
  { icon: Sun, title: 'Outdoor', desc: 'Weather-resistant, ultra-bright, rugged panels.' },
  { icon: PanelsTopLeft, title: 'Transparent', desc: 'See-through LED for futuristic storefronts.' },
  { icon: Monitor, title: 'Indoor', desc: 'Fine pixel pitch for boardrooms and venues.' },
  { icon: Stars, title: 'Custom Sizes', desc: 'Modular panels built to your exact dimensions.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(34,211,238,0.08), transparent 60%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          LED Solutions for Every Need
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-xl border border-white/10 bg-slate-900/60 p-6 overflow-hidden hover:border-cyan-400/40"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_200px_at_var(--x,_50%)_0,rgba(34,211,238,0.15),transparent)] pointer-events-none" />
              <f.icon className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
