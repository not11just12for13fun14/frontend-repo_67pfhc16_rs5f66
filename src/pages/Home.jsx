import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
