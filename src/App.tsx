import Navbar from "./components/Navbar"
import ProjectCard from "./components/cards/ProjectCard"
import Annonces from "./components/Anonces"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Donnees from "./pages/Donnees"
import Interets from "./pages/Interets"
import { Route, Routes } from "react-router-dom"

function HomePage() {
  const baseUrl = import.meta.env.BASE_URL
  const photo = (filename: string) => `${baseUrl}photos/${filename}`

  return (
    <main className="pt-5 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mes projets</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Maquette TSR"
          description="Maquette de site marchand pour l'entreprise TSR Industrie, projet de stage de fin de Licence"
          tags="React - Node - CRUD - Auth - Prisma"
          image={photo("LOGO-HD-TSR-PASTILLE.png")}
          link="https://github.com/RemiFMTN/TSR_StageL3"
        />
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <div className="app-shell min-h-screen flex flex-col text-slate-100">
        <Navbar />
        <div className="pt-3 flex-1 flex flex-col">
          <Annonces />
          <Routes>
            <Route path="/" element={<HomePage />} />
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