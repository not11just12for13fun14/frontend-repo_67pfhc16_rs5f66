import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const gallery = [
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518518873111-6ca469aa4567?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519474187929-4432eeeed3fd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547573854-74d2b61f2215?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546706887-4279d38b9899?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922323-611cc9bfea9e?q=80&w=1600&auto=format&fit=crop'
]

export default function Portfolio() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-8">Portfolio</motion.h1>
        <p className="text-slate-300 mb-6">A showcase of installations, events, and demo setups.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
              <img src={src} alt="Project" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
