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
      className="border border-[var(--button)] rounded-full py-2 px-4 bg-[var(--button)] text-[var(--bg)] hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  )
}

export default Bouton
