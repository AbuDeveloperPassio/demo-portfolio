import { useTypewriter } from '../hooks/useTypewriter'
import ParticleField from './ParticleField'
import Social from './Social'
import TiltCard from './TiltCard'

export default function Hero() {
  const typed = useTypewriter('Backend Development')

  return (
    <section id="home" className="relative bg-[#F7F7FB] overflow-hidden min-h-screen flex items-center justify-center py-12">
      <ParticleField />

      <div className="relative w-full max-w-md mx-auto px-4 md:max-w-none md:w-4/5">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-12">
          
          {/* Text Content - Top on Mobile */}
          <div className="md:order-1 text-center md:text-left w-full md:w-auto">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-950 leading-tight">
              Hi There,
              <br />
              I'm Abdur <span className="text-orange-500">Rahman</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700">
              I Am Into{' '}
              <span className="text-red-700 font-semibold">
                {typed}
                <span className="caret">|</span>
              </span>
            </p>

            <a
              href="#about"
              className="inline-block mt-6 bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md
                         hover:bg-indigo-800 transition-colors"
            >
              About Me ⌄
            </a>

            <div className="flex justify-center md:justify-start gap-3 mt-8">
              <Social label="in" />
              <Social label="gh" />
              <Social label="wa" />
              <Social label="tg" />
              <Social label="ig" />
              <Social label="@" />
            </div>
          </div>

          {/* Emoji Circle - Bottom on Mobile */}
          <div className="md:order-2 flex justify-center w-full md:w-auto">
            <TiltCard>
             <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
  <img
    src="/images/hero.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}