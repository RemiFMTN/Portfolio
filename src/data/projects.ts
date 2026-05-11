type ProjectDetailSection = {
  src: string
  text: string
}

export type Project = {
  title: string
  slug: string
  description: string
  tags: string[]
  coverImage: string
  cardImages?: string[]
  repoUrl?: string
  playUrl?: string
  playButton?: boolean
  sections: ProjectDetailSection[]
}

const baseUrl = import.meta.env.BASE_URL
const photo = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const projects: Project[] = [
  {
    title: "Maquette TSR",
    slug: slugify("Maquette TSR"),
    description:
      "Maquette de site marchand pour l'entreprise TSR Industrie, projet de stage de fin de licence.",
    tags: ["React ", "Node ", "CRUD ", "Auth ", "Prisma "],
    coverImage: photo("tsr/LOGO-HD-TSR-PASTILLE.png"),
    cardImages: [photo("tsr/LOGO-HD-TSR-PASTILLE.png")],
    repoUrl: "https://github.com/RemiFMTN/TSR_StageL3",
    sections: [
      {
        src: photo("tsr/LOGO-HD-TSR-PASTILLE.png"),
        text: "Logo de l'entreprise TSR Industrie, spécialisée dans le soudage, la visserie, l'aspiration, les équipements de protection individuelle. Ce projet de maquette de site marchand a été réalisé dans le cadre d'un stage de fin de Licence, avec pour objectif de créer une plateforme e-commerce pour présenter les produits et services de l'entreprise.",
      },
      {
        src: photo("tsr/accueil.png"),
        text: "Page d'accueil, avec la liste des produits disponibles pour les visiteurs. On y retrouve une navbar fonctionnelle et une barre de recherche.",
      },
      {
        src: photo("tsr/recherche.png"),
        text: "La barre de recherche avec le résultat pour le mot-clé 'fer'.",
      },
      {
        src: photo("tsr/panier.png"),
        text: "Le panier, on peut y changer les quantités des articles, ou les retirer. Le site demandera une adresse mail pour une commande sans compte créé afin de la valider.",
      },
      {
        src: photo("tsr/admin.png"),
        text: "La page où l'admin peut ajouter-modifier-supprimer des articles. Il y a la liste complète, même des articles désactivés (non visibles mais toujours en base).",
      },
      {
        src: photo("tsr/ajout.png"),
        text: "Formulaire d'ajout d'articles. Le formulaire de modification est similaire avec une requête PATCH.",
      },
    ],
  },
  {
    title: "Réseau entreprise basique CISCO",
    slug: slugify("Projet CISCO"),
    description:
      "Réalisé en autodidacte, mise en place de 3 VLANS avec droits respectifs et router-on-a-stick.",
    tags: ["CISCO ", "Réseau ", "Topologie basique ", "ACL ", "DHCP ", "VLAN "],
    coverImage: photo("cisco/topologie.png"),
    cardImages: [photo("cisco/topologie.png")],
    repoUrl: undefined,
    sections: [
      {
        src: photo("cisco/topologie.png"),
        text: "Il s'agit d'un projet personnel autodidacte qui représente la mise en place d'un réseau d'entreprise sommaire sous la forme d'un VLAN séparé en trois réseaux logiques. Les différentes machines possèdent différents droits d'accès.",
      },
      {
        src: photo("cisco/config_ordi.png"),
        text: "Configuration de base pour les machines. VLAN séparé en 4 parties: 192.168.10.x/24, 192.168.20.x/24 (etc...), et les gateways correspondantes 192.168.10.1, 192.168.20.1 etc...",
      },
      {
        src: photo("cisco/config_switch.png"),
        text: "Configuration des switchs.",
      },
      {
        src: photo("cisco/premier_ping.png"),
        text: "Le premier ping fonctionne, et il illustre la découverte des machines.",
      },
      {
        src: photo("cisco/switch_trunk.png"),
        text: "Passage du port en trunk, afin de faire passer les paquets pour leur faire atteindre leur bon destinataire.",
      },
      {
        src: photo("cisco/config_router_encap.png"),
        text: "Configuration du routeur, on paramètre les sous-interfaces pour que les paquets soient bien routés vers sa cible.",
      },
      {
        src: photo("cisco/config_acl.png"),
        text: "Configuration de l'ACL. On cherche à bloquer les pings de 192.168.10.x vers 192.168.40.x.",
      },
      {
        src: photo("cisco/limitations.png"),
        text: "Preuve de fonctionnement de l'ACL qui limite les pings de 192.168.10.x (users) vers 192.168.40.x (serveurs). Les autres secteurs peuvent ping les serveurs, et les serveurs peuvent ping tout le monde. On peut bloquer plus tard les accès extérieurs au servers, et les autoriser seulement aux secteurs IT et RH",
      },
      {
        src: photo("cisco/dhcp.png"),
        text: "Passage au DHCP, pour que les machines puissent obtenir une adresse IP automatiquement.",
      },
      {
        src: photo("cisco/dhcp_exemple.png"),
        text: "Résultat du DHCP. Chaque machine obtient une adresse IP dans le bon secteur, avec la bonne gateway. Par exemple, PC1 obtient l'adresse 192.168.10.11, et la gateway 192.168.10.1.",
      },
    ],
  },
  {
    title: "Simulateur d'orbites spatiales",
    slug: slugify("Simulateur d'orbites spatiales"),
    description:
      "Un simulateur d'orbites spatiales permettant de visualiser les trajectoires des corps célèstes.",
    tags: ["Simulation ", "Lois de Kepler & Newton ", "Physique "],
    coverImage: "undefined",
    cardImages: [photo("pygame/orbites.png")],
    repoUrl: undefined,
    playUrl: `${baseUrl}pygame/web/index.html`,
    playButton: false,
    sections: [
      {
        src: photo("pygame/orbites.png"),
        text: "WASD -> Déplacement de la caméra, click&drag -> bouger les corps, scroll -> zoom."
      },
      {
        src: photo("pygame/données.png"),
        text: "Les données utilisées pour les planètes sont basées sur des valeurs réelles, telles que la masse, la distance au soleil, et l'excentricité de l'orbite. Ces données permettent de simuler les trajectoires de manière réaliste. On considère ici qu'une UA = 200 pixels à zoom = 1."
      },
      {
        src: photo("pygame/constantes_planetaires.png"),
        text: "Les positions des planètes sont calculées à partir de leurs paramètres orbitaux, tels que la distance au soleil et l'excentricité. La vitesse de chaque planète est déterminée par la loi de Kepler, qui stipule que la vitesse est plus élevée lorsque la planète est plus proche du soleil."
      },
      {
        src: photo("pygame/perihelie.jpg"),
        text: "La position au périhélie est calculée en utilisant la distance au soleil et l'excentricité de l'orbite."
      },
      {
        src: photo("pygame/calcul_forces.png"),
        text: "La formule de gravitation est appliqué en permanence entre tous les corps, en simultané. Cela simule une uttraction gravitationnelle réelle entre tout les corps."
      },
      {
        src: photo("pygame/acceleration.png"),
        text: "Je simule également l'accelération des corps, suivant la loi de Kepler et de Newton, ce qui permet d'avoir des trajectoires réalistes.",
      },
    ],
  },
]
