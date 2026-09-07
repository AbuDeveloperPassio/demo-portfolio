import { useState } from 'react'

const LINKS = ['Home', 'About', 'Skills', 'Education', 'Work', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="w-4/5 mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-bold text-xl flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-indigo-700 text-white flex items-center justify-center text-xs">
            {'</>'}
          </span>
          Abdur Rahman
        </a>

        <nav className="hidden md:flex gap-8 font-medium text-slate-700 text-lg">
          {LINKS.map((l) => (
            <a 
              key={l} 
              href={`#${l.toLowerCase()}`} 
              className="pb-1 border-b-2 border-transparent hover:border-b-4 hover:border-indigo-700 hover:text-indigo-700 transition-all"
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4 font-medium text-slate-700 text-lg">
          {LINKS.map((l) => (
            <a 
              key={l} 
              href={`#${l.toLowerCase()}`} 
              onClick={() => setOpen(false)} 
              className="pb-1 border-b-2 border-transparent hover:border-b-4 hover:border-indigo-700 hover:text-indigo-700 transition-all"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}