export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center fade-up">
      <h2 className="font-display text-3xl font-bold">
        Let's <span className="text-indigo-700">Connect</span>
      </h2>
      <p className="mt-3 text-slate-600">Have a project in mind or just want to say hi? Reach out anytime.</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:amaljosen01@gmail.com"
          className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-800 transition-colors"
        >
          ✉️ amaljosen01@gmail.com
        </a>
        <a
          href="tel:+919080388310"
          className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
        >
          📞 +91 908-038-8310
        </a>
      </div>
    </section>
  )
}
