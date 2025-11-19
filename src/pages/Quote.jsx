import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Quote() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', screen_type: 'Indoor LED', size_requirements: '', usage_type: '', message: ''
  })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || 'Failed to send')
      setStatus({ loading: false, success: 'Request sent successfully! We will contact you shortly.', error: null })
      setForm({ name: '', email: '', company: '', phone: '', screen_type: 'Indoor LED', size_requirements: '', usage_type: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-2">Request a Quote</motion.h1>
        <p className="text-slate-300 mb-8">We’ll review your requirements and send a customized quote.</p>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">Screen Type</label>
              <select name="screen_type" value={form.screen_type} onChange={handleChange} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white">
                <option>Indoor LED</option>
                <option>Outdoor LED</option>
                <option>Interactive Touch</option>
                <option>Digital Advertising</option>
                <option>Transparent LED</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Usage Type</label>
              <input name="usage_type" value={form.usage_type} onChange={handleChange} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white" placeholder="Events, retail, office, stadium..." />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">Size Requirements</label>
            <input name="size_requirements" value={form.size_requirements} onChange={handleChange} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white" placeholder="e.g., 5m x 3m, 2x3 panels" />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full bg-slate-900/70 border border-white/10 rounded-md p-3 text-white" placeholder="Tell us about your project"></textarea>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button disabled={status.loading} className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all">
              {status.loading ? 'Sending...' : 'Send Request'}
            </button>
            {status.success && <span className="text-green-400">{status.success}</span>}
            {status.error && <span className="text-red-400">{status.error}</span>}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
