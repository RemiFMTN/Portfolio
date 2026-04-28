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
      className="border rounded-full py-2 px-4 bg-gray-800 text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  )
}

export default Bouton
