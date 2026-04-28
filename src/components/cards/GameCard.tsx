import CardMediaCarousel from "./CardMediaCarousel"

type GameCardProps = {
    title: string
    description : string
    image: string
    images?: string[]
    tags: string
    link?: string
    durationSeconds?: number
    delayMs?: number
}

export default function GameCard({
    title,
    description,
    image,
    images,
    tags,
    link,
    durationSeconds,
    delayMs,
}: GameCardProps) {
  return (
    <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/80 shadow-lg shadow-black/20 transition duration-300 hover:border-slate-700"
        >
            <CardMediaCarousel
                title={title}
                image={image}
                images={images}
                durationSeconds={durationSeconds}
                delayMs={delayMs}
            />

            {/* Contenu */}
            <div className="p-4 text-slate-100">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-slate-300 text-sm">{description}</p>
                <p className="text-slate-400 text_sm font-semibold mt-1">{tags}</p>
            </div>
        </a>
  )
}

