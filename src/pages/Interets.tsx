import GameCard from "../components/cards/GameCard"
import HobbyCard from "../components/cards/HobbyCard"

export default function Interets() {
  const baseUrl = import.meta.env.BASE_URL
  const photo = (filename: string) => `${baseUrl}photos/${filename}`

  return (
    <main className="w-full px-4 py-10">
        <section className="mx-auto w-full max-w-8xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            

            <h1 className="text-3xl font-bold pb-2">Hobbies et centres d'intérêts</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <HobbyCard 
                title="informatique"
                description="Le réseau, les algorithmes, etc... Passionné depuis petit, par tout ce qui touche à l'informatique. (Et oui, c'est le code de cette card)."
                tags="Cisco - C - Java - Python - BDD"
                image={photo("informatique.png")}/>
                <HobbyCard 
                title="Auto/Moto"
                description="J'aime le monde du sport automobile et je suis motard depuis 2019."
                tags="Circuit - Rallye - JDM"
                images={[photo("rx7.webp"), photo("BMW-S-1000-RR-2025.webp")]}
                image={photo("rx7.webp")} />
                <HobbyCard
                title="Aeronautique"
                description="L'ingénieurie complexe et la beauté des avions et autres machines volantes est l'un de mes plus gros centres d'intérêts."
                tags="Avion - Hélicoptère - Lanceurs"
                images={[photo("rafale.jpg"), photo("saturn5.webp")]}
                image={photo("rafale.jpg")} />
                <HobbyCard
                title="Cuisine"
                description="Je me détends en essyant beacoup de plats, et j'en fait profiter les autres."
                tags="Cuisine"
                image={photo("sushis.jpg")} />
                <HobbyCard
                title="Astronomie"
                description="Je suis de près tout ce qui touche à l'astronomie, comme les missions Artemis, ou le JWST. Je m'intéresse beaucoup à l'histoire de l'astronomie."
                tags="Décollages & atterissages - Astres mystérieux - Robotique guidée et autonome"
                images={[photo("jwst.webp"), photo("voyager_disk.webp")]}
                image={photo("jwst.webp")} />
                <HobbyCard
                title="Musique"
                description="Musicien en herbe, je joue pour le plaisir d'apprendre et j'écoute beaucoup de musique. J'aime tester de nouveaux genres musicaux afin d'aggrandr mon répertoire."
                tags="Metal - Dubstep - Jungle - BassHouse - DNB - Guitare - Basse - Et bien d'autres"
                images={[photo("metallica.jpg"), photo("nero.jpg")]}
                image={photo("metallica.jpg")} />
            </div>

            <h1 className="text-3xl font-bold pt-10 pb-2">Jeux vidéos</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <GameCard
                title="Factorio"
                description="Base building et optimisation des réseaux de production"
                image={photo("factorio.webp")}
                tags="Construction - Optimisation - Récolte de ressources - Solo/Multi"
                link="https://factorio.com" />
                <GameCard
                title="Warframe"
                description="Jeu de tir à la 3ème personne, récolte de ressources, histoire prennante, challenges..."
                image={photo("warframe.avif")}
                tags="MMORPG - TPS - Gun building - Ressources - Monde ouvert - Solo/Multi"
                link="https://www.warframe.com/en" />
                <GameCard
                title="Kerbal Space Program - KSP"
                description="Jeu de construction et de simulation spatial. La physique se base sur la physique réelle, et on peut y faire des manoeuvres orbitales du monde réel."
                images={[photo("ksp1.jpg"), photo("ksp2.jpg")]}
                image={photo("ksp1.jpg")}
                tags="Trajectoires orbiales - Construction - Avion - Lanceurs - Exploration"
                link="https://www.kerbalspaceprogram.com" />
                <GameCard
                title="War Thunder"
                description="Jeu de simulation de batailles aériennes, terrestres et maritimes."
                images={[photo("warthunder1.jpg"), photo("warthunder2.jpg")]}
                image={photo("warthunder1.jpg")}
                tags="Simulation - Strategie - Coopération - Joueur contre joeur - Carte réelles à grande échelle"
                link="http://www.warthunder.com" />
                <GameCard
                title="Minecraft"
                description="Jeu de construction et d'exploration. Je le mod souvent pour completer le jeu, et construire des structures complexes tels que des servers de stockages et de fabrication, réacteurs à fission/fusion..."
                images={[photo("minecraft1.webp"), photo("minecraft2.jpg")]}
                image={photo("minecraft1.webp")}
                tags="Mine - Craft"
                link="http://www.minecraft.net" />
                <GameCard
                title="Cyberpunk2077"
                description="Mon jeu préféré, une histoire riche et complexe, pleine de rebondissement innatendus. Un monde futuriste dystopique dans le thème Cyberpunk, dans une ville qui ne cherche qu'à briser ses habitants."
                images={[photo("cyber1.jpg"), photo("cyber2.jpg")]}
                image={photo("cyber1.jpg")}
                tags="FPS - RPG - Monde ouvert - Dystopie - Atmosphère immersive"
                link="https://www.cyberpunk.net/us/fr/" />
                <GameCard
                title="Autre jeux"
                description="Farming simulator, Euro Truck Simulator, WorldOfWarships, Phasmophobia, Risk of Rain, Assetto Corsa, et bien d'autres..."
                images={[photo("farming.jpg"), photo("ets2.jpg"), photo("DesMoines.webp"), photo("phasmo.webp")]}
                image={photo("farming.jpg")}
                tags="Simulation - Stratégie - Survie"
                link="NULL" />
            </div>

        </section>
    </main>
  )
}
