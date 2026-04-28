type BoutonProps = {
    title: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    disabled?: boolean
}

function Bouton({ title, type = "button", onClick, disabled = false }: BoutonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="border border-slate-700/80 rounded-full py-2 px-4 bg-slate-900 text-slate-100 hover:bg-slate-100 hover:text-slate-950 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  )
}

export default Bouton
