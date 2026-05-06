import GameCard from "../components/cards/GameCard"
import HobbyCard from "../components/cards/HobbyCard"
import { games } from "../data/Games"
import { hobbies } from "../data/Hobbies"

export default function Interets() {

  return (
    <main className="w-full px-4">
      <section className="mx-auto w-full max-w-8xl p-6 sm:p-8">
          
        <h1 className="text-3xl font-bold pb-2 text-[var(--text)]">Hobbies et centres d'intérêts</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((Hobbies) => (
            <HobbyCard
            title={Hobbies.title}
            description={Hobbies.description}
            tags={Hobbies.tags.join(" - ")}
            image={Hobbies.image || ""}
            images={Hobbies.images}
            />
          ))}
        </div>

        <h1 className="text-3xl font-bold pt-10 pb-2 text-[var(--text)]">Jeux vidéos</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard
              title={game.title}
              description={game.description}
              tags={game.tags.join(" - ")}
              image={game.image || ""}
              images={game.images}
              link={game.link}
            />
          ))}
        </div>
      </section>
    </main>
  )
}