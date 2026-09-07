import { useTypewriter } from '../hooks/useTypewriter'
import ParticleField from './ParticleField'
import Social from './Social'
import TiltCard from './TiltCard'

export default function Hero() {
  const typed = useTypewriter('Backend Development')

  return (
    <section id="home" className="relative bg-[#F7F7FB] overflow-hidden min-h-[92vh] flex items-center">
      <ParticleField />

      <div className="relative w-4/5 mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-indigo-950 leading-tight">
            Hi There,
            <br />
            I'm Abdur <span className="text-orange-500">Rahman</span>
          </h1>

          <p className="mt-4 text-lg text-slate-700">
            I Am Into{' '}
            <span className="text-red-700 font-semibold">
              {typed}
              <span className="caret">|</span>
            </span>
          </p>

          
         <a   href="#about"
            className="inline-block mt-6 bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md
                       hover:bg-indigo-800 transition-colors"
          >
            About Me ⌄
          </a>

          <div className="flex gap-3 mt-8">
            <Social label="in" />
            <Social label="gh" />
            <Social label="wa" />
            <Social label="tg" />
            <Social label="ig" />
            <Social label="@" />
          </div>
        </div>

        <div className="flex justify-center">
          <TiltCard>
          <div className="w-[600px] h-[600px] rounded-full bg-amber-400 flex items-center justify-center text-[120px] shadow-xl">
               👨
          </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}