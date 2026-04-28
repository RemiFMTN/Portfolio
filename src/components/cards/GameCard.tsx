import CardMediaCarousel from "./CardMediaCarousel"

type GameCardProps = {
    title: string
    description : string
    image: string
    images?: string[]
    tags: string
    link: string
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
            className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadows-xl transition duration-300"
        >
            <CardMediaCarousel
                title={title}
                image={image}
                images={images}
                durationSeconds={durationSeconds}
                delayMs={delayMs}
            />

            {/* Contenu */}
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-gray-600 text_sm font-semibold mt-1">{tags}</p>
            </div>
        </a>
  )
}

