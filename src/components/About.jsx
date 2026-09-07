export default function About() {
  return (
    <section id="about" className="w-4/5 mx-auto px-6 py-60 fade-up">
      <h2 className="font-display text-3xl font-bold flex items-center gap-2 justify-center md:justify-start">
        👤 About <span className="text-indigo-700">Me</span>
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-60 h-60 mx-auto md:mx-0 rounded-2xl bg-slate-200 flex items-center justify-center text-6xl">
          🧑‍💻
        </div>

        <div>
          <h3 className="text-2xl font-bold">I'm Abdur Rahman</h3>
          <p className="text-indigo-700 font-semibold mt-1">Full Stack Developer</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I am a Full-Stack developer based in Tamil Nadu, India. I am very passionate about improving my coding
            skills &amp; developing applications &amp; websites. I build WebApps and Websites using MERN Stack.
            Working for myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <p className="mt-4">
            <span className="text-indigo-700 font-medium">Email :</span> amaljosen01@gmail.com
          </p>
          <p>
            <span className="text-indigo-700 font-medium">Place :</span> TamilNadu, India - 622504
          </p>

          <a
            href="#"
            className="inline-block mt-6 bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg
                       hover:bg-indigo-800 transition-colors"
          >
            Resume ›
          </a>
        </div>
      </div>
    </section>
  )
}
