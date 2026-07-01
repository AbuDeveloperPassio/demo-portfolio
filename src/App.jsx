import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (
    <div className="bg-[#F7F7FB] text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}
