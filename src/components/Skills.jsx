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
    <section id="skills" className="bg-indigo-800 py-40 min-h-[700px] fade-up">
      <div className="w-4/5 mx-auto px-6">
        <h2 className="font-display text-5xl font-bold text-white flex items-center gap-3 justify-center mb-16">
          🖥️ Skills &amp; <span className="text-amber-400">Abilities</span>
        </h2>

        <div className="bg-black/30 rounded-3xl p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="bg-slate-950 rounded-2xl p-8 flex flex-col items-center gap-4 text-white border border-transparent
                           transition-all hover:border-amber-400 hover:scale-105 min-h-[180px] justify-center w-full"
              >
                <span className="text-5xl">{s.icon}</span>
                <span className="text-base font-medium text-center">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}