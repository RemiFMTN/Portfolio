export type Hobbies = {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    images?:string[];
}

const baseUrl = import.meta.env.BASE_URL
const photo = (filename: string) => `${baseUrl}photos/${filename}`

export const hobbies: Hobbies[] = [
    
    {
        title: "Informatique",
        description: "Le réseau, les algorithmes, etc... Passionné depuis petit, par tout ce qui touche à l'informatique. (Et oui, c'est le code de cette card).",
        tags: ["Cisco", "C", "Java", "Python", "BDD"],
        image: photo("informatique.png")
    },
    {
        title: "Auto/Moto",
        description: "J'aime le monde du sport automobile et je suis motard depuis 2019.",
        tags: ["Circuit", "Rallye", "JDM"],
        images: [photo("rx7.webp"), photo("BMW-S-1000-RR-2025.webp")],
        image: photo("rx7.webp")
    },
    {
        title: "Aéronautique",
        description: "L'ingénieurie complexe et la beauté des avions et autres machines volantes est l'un de mes plus gros centres d'intérêts.",
        tags: ["Avion", "Hélicoptère", "Lanceurs"],
        images: [photo("rafale.jpg"), photo("saturn5.webp")],
        image: photo("rafale.jpg")
    },
    {
        title: "Cuisine",
        description: "Je me détends en essyant beacoup de plats, et j'en fait profiter les autres.",
        tags: ["Cuisine"],
        image: photo("sushis.jpg")
    },
    {
        title: "Astronomie",
        description: "Je suis de près tout ce qui touche à l'astronomie, comme les missions Artemis, ou le JWST. Je m'intéresse beaucoup à l'histoire de l'astronomie.",
        tags: ["Décollages & atterissages", "Astres mystérieux", "Robotique guidée et autonome"],
        images: [photo("jwst.webp"), photo("voyager_disk.webp")],
        image: photo("jwst.webp")
    },
    {
        title: "Musique",
        description: "Musicien en herbe, je joue pour le plaisir d'apprendre et j'écoute beaucoup de musique. J'aime tester de nouveaux genres musicaux afin d'aggrandr mon répertoire.",
        tags: ["Metal - Dubstep - Jungle - BassHouse - DNB - Guitare - Basse - Et bien d'autres"],
        images: [photo("metallica.jpg"), photo("nero.jpg")],
        image: photo("metallica.jpg")
    }
]