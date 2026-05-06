
import ProjectCard from "../components/cards/ProjectCard"
import { projects } from "../data/projects"

export default function HomePage() {
  return (
    <main className="pt-5 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mes projets</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags.join(" - ")}
            image={project.coverImage}
            images={project.cardImages}
            link={`/projets/${project.slug}`}
          />
        ))}
      </div>
    </main>
  )
}