import { useState } from 'react'

// Replace these placeholders with real client feedback
const TESTIMONIALS = [
  {
    name: 'Client Name One',
    role: 'Owner, Bakery Shop',
    message:
      'Abdur delivered a clean, fast website that our customers love. Communication was clear from start to finish.',
    icon: '🧑‍💼',
  },
  {
    name: 'Client Name Two',
    role: 'Founder, Online Store',
    message:
      'The e-commerce pages look great on mobile and the checkout flow is simple. Highly recommended React developer.',
    icon: '👩‍💻',
  },
  {
    name: 'Client Name Three',
    role: 'Manager, Resort Business',
    message:
      'Professional work and on-time delivery. The animations gave our landing page a modern feel.',
    icon: '🏨',
  },
  {
    name: 'Client Name Four',
    role: 'Student Project Mentor',
    message:
      'Strong understanding of React fundamentals and very quick at fixing issues and learning new tools.',
    icon: '🎓',
  },
]

export default function Testimonials() {
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const results = TESTIMONIALS.filter((t) =>
    [t.name, t.role, t.message].some((field) =>
      field.toLowerCase().includes(q)
    )
  )

  return (
    <section id="testimonials" className="bg-white py-20 md:py-40 fade-up">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center flex items-center gap-2 justify-center mb-2">
          💬 Client <span className="text-indigo-700">Testimonials</span>
        </h2>
        <p className="text-center text-slate-500 text-xs md:text-base mt-3 px-2 md:px-4">
          Search by name, role, or keyword.
        </p>

        {/* Search Box */}
        <div className="mt-8 md:mt-10 max-w-xl mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search testimonials..."
            aria-label="Search testimonials"
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-sm md:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-700 transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <p className="text-center text-slate-500 text-xs md:text-sm mt-4">
          Showing {results.length} of {TESTIMONIALS.length}
        </p>

        {/* Results */}
        <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-4 md:gap-6">
          {results.map((t) => (
            <div
              key={t.name}
              className="bg-[#F7F7FB] rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 md:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl shrink-0">
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-indigo-950">
                    {t.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-xs md:text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-xs md:text-sm mt-4 leading-relaxed">
                “{t.message}”
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {results.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No testimonials match “{query}”.
          </p>
        )}
      </div>
    </section>
  )
}
