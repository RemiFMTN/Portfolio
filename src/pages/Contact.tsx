import { useState } from "react"
import type { FormEvent } from "react"
import emailjs from "@emailjs/browser"
import Bouton from "../components/Bouton"

export default function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFeedback(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message: "Configuration EmailJS manquante. Ajoute les variables VITE_EMAILJS_* dans ton .env.",
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    const templateParams = {
      from_name: String(formData.get("name") ?? ""),
      from_phone: String(formData.get("phone") ?? ""),
      reply_to: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    }

    try {
      setIsSending(true)
      await emailjs.send(serviceId, templateId, templateParams, { publicKey })
      setFeedback({ type: "success", message: "Message envoye avec succes." })
      form.reset()
    } catch {
      setFeedback({ type: "error", message: "Echec de l'envoi. Reessaie dans quelques instants." })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10 px-4 text-slate-100">
      <h1 className="text-2xl font-bold mb-6">Contactez-moi</h1>
      <div className="mb-4 w-full max-w-xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-300">* Nom / Désignation</label>
            <input type="text" id="name" name="name" required className="w-full rounded-md border border-slate-700 bg-slate-950/60 py-2 px-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 text-slate-300">Téléphone</label>
            <input type="tel" id="phone" name="phone" className="w-full rounded-md border border-slate-700 bg-slate-950/60 py-2 px-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>

        <label htmlFor="email" className="block text-sm font-medium mt-4 mb-1 text-slate-300">* Email</label>
        <input type="email" id="email" name="email" required className="w-full rounded-md border border-slate-700 bg-slate-950/60 py-2 px-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500" />

        <label htmlFor="message" className="block text-sm font-medium mt-4 mb-1 text-slate-300">* Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-slate-700 bg-slate-950/60 py-2 px-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>

        <div className="mt-4 flex items-start gap-2 text-slate-300">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 accent-orange-400" />
          <label htmlFor="consent" className="text-sm">
            J'accepte que mes données soient utilisées afin d'être recontacté. Consulter la <a href="/donnees" className="text-orange-300 underline">politique de confidentialité</a> pour plus d'informations.
          </label>
        </div>
      </div>
      <Bouton title={isSending ? "Envoi..." : "Envoyer le message"} type="submit" disabled={isSending} />
      {feedback && (
        <p className={`mt-4 text-sm ${feedback.type === "success" ? "text-green-700" : "text-red-700"}`}>
          {feedback.message}
        </p>
      )}
    </form>
  )
}