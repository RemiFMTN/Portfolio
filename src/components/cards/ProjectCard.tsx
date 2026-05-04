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

            <div className="p-4 text-slate-100">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-slate-300 text-sm">{description}</p>
                <p className="text-slate-400 text_sm font-semibold mt-1">{tags}</p>
            </div>
        </>
    )

    if (linkExternal) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/80 shadow-lg shadow-black/20 transition duration-300 hover:border-slate-700"
            >
                {content}
            </a>
        )
    }

    return (
        <Link
            to={link}
            className="group block rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/80 shadow-lg shadow-black/20 transition duration-300 hover:border-slate-700"
        >
            {content}
        </Link>
    )
}