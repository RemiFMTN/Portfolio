import { Link, useParams } from "react-router-dom"

import ProjectDetailCard from "../components/cards/ProjectDetailCard"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="pt-10 px-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 text-slate-200">
          <h1 className="text-2xl font-bold">Projet introuvable</h1>
          <p className="text-slate-400 mt-2">
            Le projet demande n'existe pas ou a ete supprime.
          </p>
          <Link
            to="/"
            className="inline-flex items-center mt-4 text-orange-200 hover:text-orange-100"
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
        <Link to="/" className="text-orange-200 hover:text-orange-100">
          Retour aux projets
        </Link>
      </div>
      <ProjectDetailCard
        title={project.title}
        description={project.description}
        tags={project.tags}
        sections={project.sections}
        repoUrl={project.repoUrl}
      />
    </main>
  )
}
