import { motion } from 'framer-motion'

const items = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1600&auto=format&fit=crop', alt: 'Event LED wall' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop', alt: 'Retail signage' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1576855781247-0fff34a77f46?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVudCUyMExFRCUyMHdhbGx8ZW58MHwwfHx8MTc2MzU2MDE2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Stadium screen' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop', alt: 'Office display' },
]

export default function Showcase() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
          Projects & Installations
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src={item.src} alt={item.alt} className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
