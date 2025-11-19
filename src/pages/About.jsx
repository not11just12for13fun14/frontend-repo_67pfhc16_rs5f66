import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">About NovaScreen Africa</motion.h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <p className="text-slate-300 leading-relaxed">
            We deliver cutting-edge LED display solutions across Africa. From stadium-scale outdoor screens to premium indoor walls and interactive touch systems, our mission is to help brands and venues captivate audiences with luminous visuals.
          </p>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/60">
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtfGVufDB8MHx8fDE3NjM1NjAxNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team" className="w-full h-64 object-cover" />
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {[ 'Superior calibration and color accuracy', 'Durable, serviceable hardware', 'Full installation and maintenance', 'Remote content management' ].map((t, i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-white font-medium">{t}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
