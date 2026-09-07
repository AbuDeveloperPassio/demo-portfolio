import { useState } from 'react'

const LINKS = ['Home', 'About', 'Skills', 'Education', 'Work', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
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

        {/* Hamburger Menu Button with Animation */}
        <button
          className="md:hidden text-slate-700 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {!open ? (
            <svg
              className="w-6 h-6 transition-all duration-300 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-all duration-300 rotate-0 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-slate-900/60 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-indigo-900 text-white md:hidden z-50 transition-transform duration-300 ease-in-out overflow-hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* X Button Only */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-0 pt-4">
          {LINKS.map((l, idx) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium px-6 py-4 hover:bg-indigo-800 hover:text-indigo-200 transition-all border-b border-indigo-700 ${
                idx === 2 ? 'border-b-4 border-indigo-400' : ''
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}