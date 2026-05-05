import Navbar from "./components/Navbar"
import ProjectCard from "./components/cards/ProjectCard"
import Annonces from "./components/Anonces"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Donnees from "./pages/Donnees"
import Interets from "./pages/Interets"
import ProjectDetail from "./pages/ProjectDetail"
import { projects } from "./data/projects"
import { Route, Routes } from "react-router-dom"

function HomePage() {
  return (
    <main className="pt-5 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mes projets</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.coverImage}
            images={project.cardImages}
            link={`/projets/${project.slug}`}
          />
        ))}
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <div className="app-shell min-h-screen flex flex-col text-[var(--text)]">
        <Navbar />
        <div className="pt-3 flex-1 flex flex-col">
          <Annonces />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donnees" element={<Donnees />} />
            <Route path="/interets" element={<Interets />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App