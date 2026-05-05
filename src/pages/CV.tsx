import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import CvForm from "../components/CvForm";
import CvPreview from "../components/CvPreview";
import type { CvData } from "../types/cv";

const initialCv: CvData = {
  nom: "",
  adresse: "",
  telephone: "",
  mail: "",
  experiences: [
    { poste: "", entreprise: "", description: "", dateDebut: "", dateFin: "" },
  ],
  formations: [{ ecole: "", diplome: "", annee: "" }],
  sections: [{ titre: "Competences", contenu: "" }],
};

export default function CV() {
  const [cv, setCv] = useState<CvData>(initialCv);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!previewRef.current) return;

    html2pdf()
      .set({
        margin: 10,
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(previewRef.current)
      .save();
  };

  return (
    <main className="pt-5 w-[95vw] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Generateur CV</h1>
        <button
          type="button"
          className="rounded border px-4 py-2"
          onClick={handleDownload}
        >
          Telecharger PDF
        </button>
      </div>
      <div className="grid w-full lg:grid-cols-2 lg:min-w-7xl sm:grid-cols-1 sm:min-w-xl">
        <div className="border rounded p-4 bg-[var(--text)] text-[var(--text-dark)]">
          <CvForm cv={cv} onChange={setCv} />
        </div>
        <div className="border rounded p-4 bg-[var(--text)] text-[var(--text-dark)]">
          <CvPreview ref={previewRef} cv={cv} />
        </div>
      </div>
    </main>
  );
}

