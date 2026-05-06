import { NavLink } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-[var(--muted)] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Mon Portfolio</p>
        <p>Merci pour votre visite.</p>
        <p>Dernière actualisation: 06/05/2026</p>
        <NavLink to="/Donnees" className="text-[var(--text)] hover:text-[var(--button)] transition">Politique de confidentialité</NavLink>
      </div>
    </footer>
  )
}
