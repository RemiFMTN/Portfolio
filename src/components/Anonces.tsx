import { MousePointerClick } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Anonces() {
    return (
        <div className="border-y border-slate-800/70 bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col items-center gap-2 italic text-slate-200">
                <p className="text-sm text-center text-slate-400">Site en construction et mis à jour régulièrement (dernière modif: 28/04/2026)</p>

                <p className="font-semibold text-center">Recherche active d'une alternance pour Septembre 2026, Master 1 Réseaux & Télécoms</p>

                <NavLink to="/contact" className="italic font-bold inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 hover:scale-110 transition">
                    me contacter
                    <MousePointerClick />
                </NavLink>
            </div>
        </div>
    )
}