import Navbar from "./components/Navbar"
{/* import Annonces from "./components/Annonces" */}
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Donnees from "./pages/Donnees"
import Interets from "./pages/Interets"
import ProjectDetail from "./pages/ProjectDetail"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import CV from "./pages/CV"

export default function App() {
  return (
    <>
      <div className="app-shell min-h-screen flex flex-col text-[var(--text)]">
        <Navbar />
        <div className="pt-3 flex-1 flex flex-col">
          {/*<Annonces />*/} {/* À réactiver pour les annonces, mais je n'en ai pas pour l'instant */}  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donnees" element={<Donnees />} />
            <Route path="/interets" element={<Interets />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<h1 className="text-2xl text-center mt-10">Page non trouvée</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}