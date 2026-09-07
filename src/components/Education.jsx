const EDUCATION = [
  {
    title: 'Bachelor Of Engineering',
    place: 'Mohamed Institute Of Education & Technology College Trichy',
    years: '2020-2023 | Completed With 7.8 CGPA',
    icon: '🎓',
  },
  {
    title: 'Diploma In Mechanical Engineering',
    place: 'MIET Polytechnic College Trichy',
    years: '2017-2020 | Completed With 7.2 CGPA',
    icon: '🏫',
  },
  {
    title: 'Secondary School Leaving Certificate',
    place: 'Punitha Arockia Annai Higher Secondary School',
    years: '2016-2017 | Completed With 86%',
    icon: '📱',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-[#F0F1FB] py-20 md:py-40 fade-up">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center flex items-center gap-2 justify-center mb-2">
          🎓 My <span className="text-indigo-700">Education</span>
        </h2>
        <p className="text-center text-slate-500 text-xs md:text-base mt-3 px-2 md:px-4">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-6">
          {EDUCATION.map((e) => (
            <div
              key={e.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex overflow-hidden"
            >
              {/* Icon Container */}
              <div className="w-20 md:w-28 bg-indigo-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
                {e.icon}
              </div>

              {/* Content Container */}
              <div className="p-4 md:p-6 flex-grow">
                <h3 className="font-bold text-base md:text-lg text-indigo-950">
                  {e.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">
                  {e.place}
                </p>
                <p className="text-green-600 font-semibold mt-2 text-xs md:text-sm">
                  {e.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}