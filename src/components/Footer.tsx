import { NavLink } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-slate-800/80 bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-slate-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Mon Portfolio</p>
        <p>Merci pour votre visite.</p>
        <NavLink to="/Donnees" className="text-slate-300 hover:text-orange-300 transition">Politique de confidentialité</NavLink>
      </div>
    </footer>
  )
}
