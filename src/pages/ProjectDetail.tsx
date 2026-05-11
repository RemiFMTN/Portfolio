import { Link, useParams } from "react-router-dom"

import ProjectDetailCard from "../components/cards/ProjectDetailCard"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="pt-10 px-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-[var(--text)]">
          <h1 className="text-2xl font-bold">Projet introuvable</h1>
          <p className="text-[var(--muted)] mt-2">
            Le projet demandé n'existe pas ou a été supprimé.
          </p>
          <Link
            to="/"
            className="inline-flex items-center mt-4 text-[var(--button)] hover:brightness-110"
          >
            Retour aux projets
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-10 px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-[var(--button)] hover:brightness-110">
          Retour aux projets
        </Link>
      </div>
      <ProjectDetailCard
        title={project.title}
        description={project.description}
        tags={project.tags.join(" - ")}
        sections={project.sections}
        repoUrl={project.repoUrl}
        playUrl={project.playUrl}
      />
    </main>
  )
}
