import { GitGraph, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadows-sm z-50">
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>

            {/* Logo */}
            <div>
              <Link to="/" className='text-xl font-bold'>Portfolio - Rémi Formentin</Link>
              <h2>Licence 3 Informatique & Logisticien chez Leroy-Merlin</h2>
            </div>
            

            {/* Desktop menu */}
            <div className='hidden md:flex items-center gap-6'>
              <NavLink to="/" onClick={() => setOpen(false)}>Projets / Acceuil</NavLink>
              <NavLink to="/interets" onClick={() => setOpen(false)}>Intérêts</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

                {/* GitHubg */}
                <a
                    href="https://github.com/RemiFMTN"
                    target="_blank"
                    className='hover:text-blue-500 transition'>
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
  <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
    
    {/* Header */}
    <div className="flex justify-between items-center mb-10">
      <Link to="/" onClick={() => setOpen(false)} className="text-xl font-bold">MonPortfolio</Link>
      <button onClick={() => setOpen(false)}>
        <X size={28} />
      </button>
    </div>

    {/* Liens */}
    <div className="flex flex-col gap-8 text-lg">
      <NavLink onClick={() => setOpen(false)} to="/">Accueil</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/">Projets</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/interets">Intérêts</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>

      <a href="https://github.com/RemiFMTN" className="flex items-center gap-2">
        <GitGraph />
        GitHub
      </a>
    </div>

  </div>
)}
        </div>
    </nav>
  )
}
