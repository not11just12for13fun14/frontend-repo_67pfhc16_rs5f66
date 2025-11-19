import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-center flex items-center justify-center p-8">
      <div>
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-slate-300 mb-6">The page you’re looking for could not be found.</p>
        <Link to="/" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Go Home</Link>
      </div>
    </div>
  )
}
