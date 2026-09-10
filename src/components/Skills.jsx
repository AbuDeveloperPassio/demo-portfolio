const SKILLS = [
  { name: "ReactJS", icon: "⚛️" },
  { name: "ExpressJS", icon: "🚂" },
  { name: "NodeJS", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TailwindCSS", icon: "🌊" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML5", icon: "5" },
  { name: "CSS3", icon: "3" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: "🔥" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-indigo-700 py-20 sm:py-24 md:py-32 lg:py-40 min-h-screen fade-up"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="flex justify-center items-start gap-4 mb-12 md:mb-20">
          {/* Icon */}
          <span className="text-3xl sm:text-4xl md:text-5xl mt-1 shrink-0">
            🖥️
          </span>

          {/* Heading */}
          <h2
            className="
    font-display
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
    text-white
    leading-tight
    text-center
  "
          >
            Skills <span className="text-white ml-2">&</span>{" "}
            <span className="text-amber-300 ml-2">Abilities</span>
          </h2>
        </div>

        {/* =========================
            SKILLS CONTAINER
        ========================== */}
        <div
          className="
            bg-indigo-900/50
            rounded-2xl
            sm:rounded-3xl
            p-4
            sm:p-6
            md:p-8
            lg:p-10
            xl:p-12
            backdrop-blur-sm
          "
        >
          {/* =========================
              SKILLS GRID
          ========================== */}
          <div
            className="
              grid
              grid-cols-1
              xs:grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-4
              sm:gap-5
              md:gap-6
              lg:gap-7
            "
          >
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="
                  bg-slate-950
                  rounded-xl
                  sm:rounded-2xl
                  p-5
                  sm:p-6
                  md:p-7
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  text-white

                  border
                  border-slate-800

                  transition-all
                  duration-300
                  ease-out

                  hover:border-amber-400
                  hover:scale-[1.04]
                  hover:shadow-lg
                  hover:shadow-amber-400/20

                  min-h-[130px]
                  sm:min-h-[145px]
                  md:min-h-[160px]
                  lg:min-h-[170px]
                "
              >
                {/* Skill Icon */}
                <span
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-5xl
                    lg:text-6xl
                    drop-shadow-lg
                    leading-none
                  "
                >
                  {s.icon}
                </span>

                {/* Skill Name */}
                <span
                  className="
                    text-xs
                    sm:text-sm
                    md:text-sm
                    lg:text-base
                    font-semibold
                    text-center
                    tracking-tight
                    break-words
                  "
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
