import { forwardRef } from "react";
import type { CvData } from "../types/cv";

type CvPreviewProps = {
  cv: CvData;
};

const CvPreview = forwardRef<HTMLDivElement, CvPreviewProps>(({ cv }, ref) => {
  return (
    <div ref={ref} className="bg-[var(--text)] text-black p-6 max-w-[794px]">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">{cv.nom || "Nom"}</h1>
        <p>{cv.adresse || "Adresse"}</p>
        <p>
          {(cv.telephone || "Telephone") + " • " + (cv.mail || "Mail")}
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Experiences</h2>
        <div className="mt-3 space-y-4">
          {cv.experiences.map((exp, index) => (
            <div key={index} className="space-y-1">
              <div className="font-semibold">
                {exp.poste || "Poste"} — {exp.entreprise || "Entreprise"}
              </div>
              <div className="text-sm">
                {(exp.dateDebut || "Date debut") + " - " + (exp.dateFin || "Date fin")}
              </div>
              <p className="text-sm">{exp.description || "Description"}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Formation</h2>
        <div className="mt-3 space-y-4">
          {cv.formations.map((formation, index) => (
            <div key={index} className="space-y-1">
              <div className="font-semibold">
                {formation.diplome || "Diplome"}
              </div>
              <div className="text-sm">
                {(formation.ecole || "Ecole") + " • " + (formation.annee || "Annee")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {cv.sections.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Autres</h2>
          <div className="mt-3 space-y-4">
            {cv.sections.map((section, index) => (
              <div key={index} className="space-y-1">
                <div className="font-semibold">{section.titre}</div>
                <p className="text-sm">{section.contenu || "Contenu"}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
});

CvPreview.displayName = "CvPreview";

export default CvPreview;
