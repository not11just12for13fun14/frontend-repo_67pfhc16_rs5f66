import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

const faqs = [
  { q: 'Do you offer custom sizes?', a: 'Yes. Our modular panels allow virtually any dimension and aspect ratio.' },
  { q: 'What is the difference between indoor and outdoor LEDs?', a: 'Outdoor LEDs have higher brightness, weatherproofing, and different pixel pitches for viewing distance.' },
  { q: 'Do you provide installation and support?', a: 'We handle end-to-end deployment, calibration, and ongoing maintenance.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-8">FAQ</motion.h1>
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-slate-900/60 overflow-hidden">
              <button onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full flex items-center gap-3 p-4 text-left">
                <Sparkles className={`w-5 h-5 transition-colors ${open === idx ? 'text-cyan-300' : 'text-orange-300'}`} />
                <span className="text-white font-medium">{f.q}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4">
                    <p className="text-slate-300 text-sm">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
