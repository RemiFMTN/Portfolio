import GameCard from "../components/cards/GameCard"
import HobbyCard from "../components/cards/HobbyCard"

export default function Interets() {
  return (
    <main className="w-full px-4 py-10">
        <section className="mx-auto w-full max-w-8xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            

            <h1 className="text-3xl font-bold pb-2">Hobbies et centres d'intérêts</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <HobbyCard 
                title="informatique"
                description="Le réseau, les algorithmes, etc... Passionné depuis petit, par tout ce qui touche à l'informatique. (Et oui, c'est le code de cette card)."
                tags="Cisco - C - Java - Python - BDD"
                image="public\photos\informatique.png"/>
                <HobbyCard 
                title="Auto/Moto"
                description="J'aime le monde du sport automobile et je suis motard depuis 2019."
                tags="Circuit - Rallye - JDM"
                images={["/photos/rx7.webp", "public/photos/BMW-S-1000-RR-2025.webp"]}
                image="NULL" />
                <HobbyCard
                title="Aeronautique"
                description="L'ingénieurie complexe et la beauté des avions et autres machines volantes est l'un de mes plus gros centres d'intérêts."
                tags="Avion - Hélicoptère - Lanceurs"
                images={["/photos/rafale.jpg", "public/photos/saturn5.webp"]}
                image="NULL" />
                <HobbyCard
                title="Cuisine"
                description="Je me détends en essyant beacoup de plats, et j'en fait profiter les autres."
                tags="Cuisine"
                image="public\photos\sushis.jpg" />
                <HobbyCard
                title="Astronomie"
                description="Je suis de près tout ce qui touche à l'astronomie, comme les missions Artemis, ou le JWST. Je m'intéresse beaucoup à l'histoire de l'astronomie."
                tags="Décollages & atterissages - Astres mystérieux - Robotique guidée et autonome"
                images={["public/photos/jwst.webp", "public/photos/voyager_disk.webp"]}
                image="NULL" />
                <HobbyCard
                title="Musique"
                description="Musicien en herbe, je joue pour le plaisir d'apprendre et j'écoute beaucoup de musique. J'aime tester de nouveaux genres musicaux afin d'aggrandr mon répertoire."
                tags="Metal - Dubstep - Jungle - BassHouse - DNB - Guitare - Basse - Et bien d'autres"
                images={["public/photos/metallica.jpg", "public/photos/nero.jpg"]}
                image="NULL" />
            </div>

            <h1 className="text-3xl font-bold pt-10 pb-2">Jeux vidéos</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <GameCard
                title="Factorio"
                description="Base building et optimisation des réseaux de production"
                image="public\photos\factorio.webp"
                tags="Construction - Optimisation - Récolte de ressources - Solo/Multi"
                link="https://factorio.com" />
                <GameCard
                title="Warframe"
                description="Jeu de tir à la 3ème personne, récolte de ressources, histoire prennante, challenges..."
                image="public\photos\warframe.avif"
                tags="MMORPG - TPS - Gun building - Ressources - Monde ouvert - Solo/Multi"
                link="https://www.warframe.com/en" />
                <GameCard
                title="Kerbal Space Program - KSP"
                description="Jeu de construction et de simulation spatial. La physique se base sur la physique réelle, et on peut y faire des manoeuvres orbitales du monde réel."
                images={["public/photos/ksp1.jpg", "public/photos/ksp2.jpg"]}
                image="NULL"
                tags="Trajectoires orbiales - Construction - Avion - Lanceurs - Exploration"
                link="https://www.kerbalspaceprogram.com" />
                <GameCard
                title="War Thunder"
                description="Jeu de simulation de batailles aériennes, terrestres et maritimes."
                images={["public/photos/warthunder1.jpg", "public/photos/warthunder2.jpg"]}
                image="NULL"
                tags="Simulation - Strategie - Coopération - Joueur contre joeur - Carte réelles à grande échelle"
                link="http://www.warthunder.com" />
                <GameCard
                title="Minecraft"
                description="Jeu de construction et d'exploration. Je le mod souvent pour completer le jeu, et construire des structures complexes tels que des servers de stockages et de fabrication, réacteurs à fission/fusion..."
                images={["public/photos/minecraft1.webp", "public/photos/minecraft2.jpg"]}
                image="NULL"
                tags="Mine - Craft"
                link="http://www.minecraft.net" />
                <GameCard
                title="Cyberpunk2077"
                description="Mon jeu préféré, une histoire riche et complexe, pleine de rebondissement innatendus. Un monde futuriste dystopique dans le thème Cyberpunk, dans une ville qui ne cherche qu'à briser ses habitants."
                images={["public/photos/cyber1.jpg", "public/photos/cyber2.jpg"]}
                image="NULL"
                tags="FPS - RPG - Monde ouvert - Dystopie - Atmosphère immersive"
                link="https://www.cyberpunk.net/us/fr/" />
                <GameCard
                title="Autre jeux"
                description="Farming simulator, Euro Truck Simulator, WorldOfWarships, Phasmophobia, Risk of Rain, Assetto Corsa, et bien d'autres..."
                images={["public/photos/farming.jpg", "public/photos/ets2.jpg", "public/photos/DesMoines.webp", "public/photos/phasmo.webp"]}
                image="NULL"
                tags="Simulation - Stratégie - Survie"
                link="NULL" />
            </div>

        </section>
    </main>
  )
}
