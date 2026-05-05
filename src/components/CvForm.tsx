import type { ChangeEvent } from "react";
import type { CvData, CustomSection, Experience, Formation } from "../types/cv";

const emptyExperience: Experience = {
  poste: "",
  entreprise: "",
  description: "",
  dateDebut: "",
  dateFin: "",
};

const emptyFormation: Formation = {
  ecole: "",
  diplome: "",
  annee: "",
};

const emptySection: CustomSection = {
  titre: "Competences",
  contenu: "",
};

const sectionOptions = [
  "Competences",
  "Langues",
  "Certifications",
  "Projets",
  "Interets",
];

type CvFormProps = {
  cv: CvData;
  onChange: (next: CvData) => void;
};

export default function CvForm({ cv, onChange }: CvFormProps) {
  const updateRoot = (field: keyof CvData) => (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...cv, [field]: event.target.value });
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const experiences = cv.experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    onChange({ ...cv, experiences });
  };

  const addExperience = () => {
    onChange({ ...cv, experiences: [...cv.experiences, { ...emptyExperience }] });
  };

  const removeExperience = (index: number) => {
    const experiences = cv.experiences.filter((_, i) => i !== index);
    onChange({ ...cv, experiences: experiences.length ? experiences : [{ ...emptyExperience }] });
  };

  const updateFormation = (
    index: number,
    field: keyof Formation,
    value: string
  ) => {
    const formations = cv.formations.map((formation, i) =>
      i === index ? { ...formation, [field]: value } : formation
    );
    onChange({ ...cv, formations });
  };

  const addFormation = () => {
    onChange({ ...cv, formations: [...cv.formations, { ...emptyFormation }] });
  };

  const removeFormation = (index: number) => {
    const formations = cv.formations.filter((_, i) => i !== index);
    onChange({ ...cv, formations: formations.length ? formations : [{ ...emptyFormation }] });
  };

  const updateSection = (
    index: number,
    field: keyof CustomSection,
    value: string
  ) => {
    const sections = cv.sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    onChange({ ...cv, sections });
  };

  const addSection = () => {
    onChange({ ...cv, sections: [...cv.sections, { ...emptySection }] });
  };

  const removeSection = (index: number) => {
    const sections = cv.sections.filter((_, i) => i !== index);
    onChange({ ...cv, sections: sections.length ? sections : [{ ...emptySection }] });
  };

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Infos</h2>
        <div className="grid gap-3">
          <input
            className="rounded border px-3 py-2"
            placeholder="Nom"
            value={cv.nom}
            onChange={updateRoot("nom")}
          />
          <input
            className="rounded border px-3 py-2"
            placeholder="Adresse"
            value={cv.adresse}
            onChange={updateRoot("adresse")}
          />
          <input
            className="rounded border px-3 py-2"
            placeholder="Telephone"
            value={cv.telephone}
            onChange={updateRoot("telephone")}
          />
          <input
            className="rounded border px-3 py-2"
            placeholder="Mail"
            value={cv.mail}
            onChange={updateRoot("mail")}
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Experiences</h2>
          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={addExperience}
          >
            + Ajouter
          </button>
        </div>

        <div className="space-y-4">
          {cv.experiences.map((exp, index) => (
            <div key={index} className="rounded border p-3 space-y-2">
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Poste"
                value={exp.poste}
                onChange={(event) =>
                  updateExperience(index, "poste", event.target.value)
                }
              />
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Entreprise"
                value={exp.entreprise}
                onChange={(event) =>
                  updateExperience(index, "entreprise", event.target.value)
                }
              />
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Description"
                value={exp.description}
                onChange={(event) =>
                  updateExperience(index, "description", event.target.value)
                }
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  className="rounded border px-3 py-2"
                  placeholder="Date debut"
                  value={exp.dateDebut}
                  onChange={(event) =>
                    updateExperience(index, "dateDebut", event.target.value)
                  }
                />
                <input
                  className="rounded border px-3 py-2"
                  placeholder="Date fin"
                  value={exp.dateFin}
                  onChange={(event) =>
                    updateExperience(index, "dateFin", event.target.value)
                  }
                />
              </div>
              <button
                type="button"
                className="text-sm underline"
                onClick={() => removeExperience(index)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Formation</h2>
          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={addFormation}
          >
            + Ajouter
          </button>
        </div>

        <div className="space-y-4">
          {cv.formations.map((formation, index) => (
            <div key={index} className="rounded border p-3 space-y-2">
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Ecole"
                value={formation.ecole}
                onChange={(event) =>
                  updateFormation(index, "ecole", event.target.value)
                }
              />
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Diplome"
                value={formation.diplome}
                onChange={(event) =>
                  updateFormation(index, "diplome", event.target.value)
                }
              />
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Annee"
                value={formation.annee}
                onChange={(event) =>
                  updateFormation(index, "annee", event.target.value)
                }
              />
              <button
                type="button"
                className="text-sm underline"
                onClick={() => removeFormation(index)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={addSection}
          >
            + Ajouter
          </button>
        </div>

        <div className="space-y-4">
          {cv.sections.map((section, index) => (
            <div key={index} className="rounded border p-3 space-y-2">
              <select
                className="w-full rounded border px-3 py-2"
                value={section.titre}
                onChange={(event) =>
                  updateSection(index, "titre", event.target.value)
                }
              >
                {sectionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Contenu"
                value={section.contenu}
                onChange={(event) =>
                  updateSection(index, "contenu", event.target.value)
                }
              />
              <button
                type="button"
                className="text-sm underline"
                onClick={() => removeSection(index)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
