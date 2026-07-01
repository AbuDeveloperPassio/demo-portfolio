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
    <section id="skills" className="bg-indigo-800 py-20 fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white flex items-center gap-2 justify-center">
          🖥️ Skills &amp; <span className="text-amber-400">Abilities</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="bg-slate-950 rounded-xl p-5 flex flex-col items-center gap-2 text-white border border-transparent
                         transition-colors hover:border-amber-400"
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
