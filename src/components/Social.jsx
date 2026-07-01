export default function Social({ label, href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-slate-950 text-cyan-300 flex items-center justify-center text-xs font-semibold
                 transition-colors hover:bg-indigo-700 hover:text-white"
    >
      {label}
    </a>
  )
}
