import TiltCard from './TiltCard'

const PROJECTS = [
  { name: 'Netflix-React-Clone', color: 'from-red-500 to-neutral-900' },
  { name: 'D-JOS-Resort-React', color: 'from-emerald-700 to-neutral-900' },
  { name: 'Mini Instagram Clone', color: 'from-fuchsia-500 to-slate-900' },
  { name: 'E-Commerce Project', color: 'from-amber-500 to-orange-800' },
  { name: 'Login Page MERN', color: 'from-sky-500 to-indigo-900' },
  { name: 'Greenday', color: 'from-green-400 to-emerald-800' },
]

export default function Work() {
  return (
    <section id="work" className="bg-slate-950 py-20 fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white flex items-center gap-2 justify-center">
          💻 Projects <span className="text-amber-400">Made</span>
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((p) => (
            <TiltCard key={p.name} className="rounded-xl overflow-hidden shadow-md">
              <div className={`h-32 bg-gradient-to-br ${p.color}`} />
              <div className="bg-amber-400 text-slate-900 font-semibold px-4 py-3 text-sm">{p.name}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
