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
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl shadow-black/30">
      <header className="px-6 pt-6 pb-4 border-b border-[var(--border)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{title}</h1>
            <p className="text-[var(--muted)] mt-2 max-w-3xl">{description}</p>
            <p className="text-[var(--muted)] mt-2 text-sm font-semibold">{tags}</p>
          </div>
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-[var(--button)] px-4 py-2 text-sm font-semibold text-[var(--button)] transition hover:brightness-110 sm:mt-0"
            >
              Voir le repo
            </a>
          ) : null}
        </div>
      </header>

      <div className="p-6 grid gap-8">
        {sections.map((section, index) => (
          <figure key={`${section.src}-${index}`} className="grid gap-3">
            <div className="max-h-[520px] rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)]">
              <img
                src={section.src}
                alt={`${title} - capture ${index + 1}`}
                className="mx-auto block max-h-[520px] w-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="text-[var(--muted)] text-sm leading-relaxed">
              {section.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}
