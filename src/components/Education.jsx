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
    icon: '📘',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-[#F0F1FB] py-40 fade-up">
      <div className="w-4/5 mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-center flex items-center gap-2 justify-center">
          🎓 My <span className="text-indigo-700">Education</span>
        </h2>
        <p className="text-center text-slate-500 mt-2">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {EDUCATION.map((e) => (
            <div key={e.title} className="bg-white rounded-xl shadow-sm flex overflow-hidden min-h-40">
              <div className="w-28 md:w-40 bg-indigo-100 flex items-center justify-center text-4xl shrink-0">
                {e.icon}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-indigo-950">{e.title}</h3>
                <p className="text-slate-500 text-sm">{e.place}</p>
                <p className="text-green-600 font-semibold mt-1 text-sm">{e.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
