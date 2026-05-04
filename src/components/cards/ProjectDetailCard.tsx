type ProjectDetailSection = {
  src: string
  text: string
}

type ProjectDetailCardProps = {
  title: string
  description: string
  tags: string
  sections: ProjectDetailSection[]
  repoUrl?: string
}

export default function ProjectDetailCard({
  title,
  description,
  tags,
  sections,
  repoUrl,
}: ProjectDetailCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-black/30">
      <header className="px-6 pt-6 pb-4 border-b border-slate-800/80">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">{title}</h1>
            <p className="text-slate-300 mt-2 max-w-3xl">{description}</p>
            <p className="text-slate-400 mt-2 text-sm font-semibold">{tags}</p>
          </div>
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-orange-400/50 px-4 py-2 text-sm font-semibold text-orange-200 transition hover:border-orange-300 hover:text-orange-100 sm:mt-0"
            >
              Voir le repo
            </a>
          ) : null}
        </div>
      </header>

      <div className="p-6 grid gap-8">
        {sections.map((section, index) => (
          <figure key={`${section.src}-${index}`} className="grid gap-3">
            <div className="max-h-[520px] rounded-2xl border border-slate-800/80 bg-slate-950/70">
              <img
                src={section.src}
                alt={`${title} - capture ${index + 1}`}
                className="mx-auto block max-h-[520px] w-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="text-slate-300 text-sm leading-relaxed">
              {section.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}
