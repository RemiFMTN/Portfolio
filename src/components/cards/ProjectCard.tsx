import { Link } from "react-router-dom"

import CardMediaCarousel from "./CardMediaCarousel"

type ProjectCardProps = {
    title: string
    description: string
    tags: string
    image: string
    images?: string[]
    link: string
    linkExternal?: boolean
    durationSeconds?: number
    delayMs?: number
}

export default function ProjectCard({
    title,
    description,
    tags,
    image,
    images,
    link,
    linkExternal = false,
    durationSeconds,
    delayMs,
}: ProjectCardProps) {
    const content = (
        <>
            <CardMediaCarousel
                title={title}
                image={image}
                images={images}
                imageFit="contain"
                durationSeconds={durationSeconds}
                delayMs={delayMs}
            />

            <div className="p-4 text-[var(--text)]">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-[var(--muted)] text-sm">{description}</p>
                <p className="text-[var(--muted)] text_sm font-semibold mt-1">{tags}</p>
            </div>
        </>
    )

    if (linkExternal) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-lg shadow-black/20 transition duration-300 hover:border-[var(--button)]"
            >
                {content}
            </a>
        )
    }

    return (
        <Link
            to={link}
            className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-lg shadow-black/20 transition duration-300 hover:border-[var(--button)]"
        >
            {content}
        </Link>
    )
}