const SKILLS = [
  { name: 'ReactJS', icon: '⚛️' },
  { name: 'ExpressJS', icon: '🚂' },
  { name: 'NodeJS', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'TailwindCSS', icon: '🌊' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'HTML5', icon: '5' },
  { name: 'CSS3', icon: '3' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Firebase', icon: '🔥' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-indigo-700 py-20 md:py-40 min-h-screen fade-up">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="text-3xl md:text-4xl">🖥️</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Skills <span className="text-amber-300">Abilities</span><br className="hidden sm:block" />
            <span className="text-white">&</span>
          </h2>
        </div>

        <div className="bg-indigo-900/50 rounded-3xl p-6 md:p-10 lg:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="bg-slate-950 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 text-white 
                           border border-slate-800 transition-all duration-300
                           hover:border-amber-400 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/20
                           min-h-[140px] md:min-h-[160px] lg:min-h-[180px]"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">{s.icon}</span>
                <span className="text-xs md:text-sm lg:text-base font-semibold text-center tracking-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}