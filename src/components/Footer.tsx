import { NavLink } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-gray-200 bg-white/80">
      <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-gray-600 flex items-center justify-between">
        <p>© {year} Mon Portfolio</p>
        <p>Merci pour votre visite.</p>
        <NavLink to="/Donnees">Politique de confidentialité</NavLink>
      </div>
    </footer>
  )
}
