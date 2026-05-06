export type Games = {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    images?:string[];
    link?: string;
}

const baseUrl = import.meta.env.BASE_URL
const photo = (filename: string) => `${baseUrl}photos/${filename}`

export const games: Games[] = [
    {
        title: "Factorio",
        description: "Base building et optimisation des réseaux de production",
        image: photo("factorio.webp"),
        tags: ["Construction", "Optimisation", "Récolte de ressources", "Solo/Multi"],
        link: "https://factorio.com"
    },
    {
        title: "Warframe",
        description: "Jeu de tir à la 3ème personne, récolte de ressources, histoire prennante, challenges...",
        image: photo("warframe.avif"),
        tags: ["MMORPG", "TPS", "Gun building", "Ressources", "Monde ouvert", "Solo/Multi"],
        link: "https://www.warframe.com/en"
    },
    {
        title: "Kerbal Space Program - KSP",
        description: "Jeu de construction et de simulation spatial. La physique se base sur la physique réelle, et on peut y faire des manoeuvres orbitales du monde réel.",
        images: [photo("ksp1.jpg"), photo("ksp2.jpg")],
        image: photo("ksp1.jpg"),
        tags: ["Trajectoires orbiales", "Construction", "Avion", "Lanceurs", "Exploration"],
        link: "https://www.kerbalspaceprogram.com"
    },
    {
        title: "War Thunder",
        description: "Jeu de simulation de batailles aériennes, terrestres et maritimes.",
        images: [photo("warthunder1.jpg"), photo("warthunder2.jpg")],
        image: photo("warthunder1.jpg"),
        tags: ["Simulation", "Stratégie", "Coopération", "Joueur contre joueur", "Carte réelles à grande échelle"],
        link: "http://www.warthunder.com"
    },
    {
        title: "Minecraft",
        description: "Jeu de construction et d'exploration. Je le mod souvent pour completer le jeu, et construire des structures complexes tels que des servers de stockages et de fabrication, réacteurs à fission/fusion...",
        images: [photo("minecraft1.webp"), photo("minecraft2.jpg")],
        image: photo("minecraft1.webp"),
        tags: ["Mine", "Craft"],
        link: "http://www.minecraft.net"
    },
    {
        title: "Cyberpunk2077",
        description: "Mon jeu préféré, une histoire riche et complexe, pleine de rebondissement innatendus. Un monde futuriste dystopique dans le thème Cyberpunk, dans une ville qui ne cherche qu'à briser ses habitants.",
        images: [photo("cyber1.jpg"), photo("cyber2.jpg")],
        image: photo("cyber1.jpg"),
        tags: ["FPS", "RPG", "Monde ouvert", "Dystopie", "Atmosphère immersive"],
        link: "https://www.cyberpunk.net/us/fr/"
    },
    {
        title: "Autre jeux",
        description: "Farming simulator, Euro Truck Simulator, WorldOfWarships, Phasmophobia, Risk of Rain, Assetto Corsa, et bien d'autres...",
        images: [photo("farming.jpg"), photo("ets2.jpg"), photo("DesMoines.webp"), photo("phasmo.webp")],
        image: photo("farming.jpg"),
        tags: ["Simulation", "Stratégie", "Survie"]
    }
]