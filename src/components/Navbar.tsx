import { GitGraph, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur z-50">
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-slate-100'>

            {/* Logo */}
            <div>
              <Link to="/" className='text-xl font-bold tracking-tight'>Portfolio - Rémi Formentin</Link>
              <h2 className="text-sm text-slate-400">Licence 3 Informatique & Logisticien chez Leroy-Merlin</h2>
            </div>
            

            {/* Desktop menu */}
            <div className='hidden md:flex items-center gap-6 text-sm'>
              <NavLink to="/" onClick={() => setOpen(false)} className="text-slate-200 hover:text-orange-300 transition">Projets / Acceuil</NavLink>
              <NavLink to="/interets" onClick={() => setOpen(false)} className="text-slate-200 hover:text-orange-300 transition">Intérêts</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="text-slate-200 hover:text-orange-300 transition">Contact</NavLink>

                {/* GitHubg */}
                <a
                    href="https://github.com/RemiFMTN"
                    target="_blank"
                    className='text-slate-200 hover:text-orange-300 transition'>
                        <GitGraph size={20} />
                </a>
            </div>

            {/* Burger menu */}
            <button
                className="md:hidden"
                onClick={() => setOpen(!open)}
            >
                {open? <X /> : <Menu />}
            </button>

            {open && (
              <div className="md:hidden w-full border-t border-slate-800/80 bg-slate-950 text-slate-100">
                <div className="px-6 pb-8 pt-6">
                  <div className="flex flex-col gap-5 text-lg">
                    <NavLink onClick={() => setOpen(false)} to="/" className="text-slate-200 hover:text-orange-300 transition">Accueil</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/" className="text-slate-200 hover:text-orange-300 transition">Projets</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/interets" className="text-slate-200 hover:text-orange-300 transition">Intérêts</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/contact" className="text-slate-200 hover:text-orange-300 transition">Contact</NavLink>

                    <a href="https://github.com/RemiFMTN" className="mt-2 flex items-center gap-2 text-slate-200 hover:text-orange-300 transition">
                      <GitGraph />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}
