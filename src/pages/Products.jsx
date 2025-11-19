import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const products = [
  {
    title: 'Indoor LED Screens',
    desc: 'Fine pixel pitch for boardrooms, studios, and events.',
    img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Outdoor LED Screens',
    desc: 'Ultra-bright, weatherproof, and rugged for public spaces.',
    img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Interactive Touchscreens',
    desc: 'Engaging multi-touch interactivity for kiosks and lobbies.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Digital Advertising Screens',
    desc: 'Perfect for retail, malls, and transport hubs.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Transparent LED Screens',
    desc: 'Futuristic see-through displays for storefronts.',
    img: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Custom Sizes',
    desc: 'Modular panels configured to any size and shape.',
    img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Products() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-8">Products & Services</motion.h1>
        <p className="text-slate-300 mb-10">Explore our range of LED solutions. Hover on a card to see it come alive.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-500/20 via-transparent to-orange-400/20" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
