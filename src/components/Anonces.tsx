import { MousePointerClick } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Anonces() {
    return (
        <div className="border-y border-[var(--border)] bg-[var(--bg-card)]">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col items-center gap-2 italic text-[var(--text)]">
                <p className="text-sm text-center text-[var(--muted)]">Site en construction et mis à jour régulièrement (dernière modif: 04/05/2026)</p>

                <p className="font-semibold text-center">Recherche active d'une alternance pour Septembre 2026, Master 1 Réseaux & Télécoms</p>

                <NavLink to="/contact" className="italic font-bold inline-flex items-center gap-2 text-[var(--button)] hover:brightness-110 hover:scale-110 transition">
                    me contacter
                    <MousePointerClick />
                </NavLink>
            </div>
        </div>
    )
}