export type Experience = {
  poste: string;
  entreprise: string;
  description: string;
  dateDebut: string;
  dateFin: string;
};

export type Formation = {
  ecole: string;
  diplome: string;
  annee: string;
};

export type CustomSection = {
  titre: string;
  contenu: string;
};

export type CvData = {
  nom: string;
  adresse: string;
  telephone: string;
  mail: string;
  experiences: Experience[];
  formations: Formation[];
  sections: CustomSection[];
};
