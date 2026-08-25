import premier from "../assets/leagues/premier.png";
import laliga from "../assets/leagues/laliga.png";
import seriea from "../assets/leagues/seriea.png";
import international from "../assets/leagues/international.png";

const leagues = [
  {
    id: 1,
    title: "Premier League",
    description: "The best of English football.",
    image: premier,
    link: "/league/premier-league",
  },
  {
    id: 2,
    title: "La Liga",
    description: "Home of greatness. Passion. Pride.",
    image: laliga,
    link: "/league/la-liga",
  },
  {
    id: 3,
    title: "Serie A",
    description: "Tradition. Tactics. Italian excellence.",
    image: seriea,
    link: "/league/serie-a",
  },
  {
    id: 4,
    title: "National Teams",
    description: "Represent your country. Wear it with pride.",
    image: international,
    link: "/national-teams",
  },
];

function LeagueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl sm:text-5xl font-black text-center">
          SHOP BY{" "}
          <span className="text-[#4CAF50]">
            LEAGUE
          </span>
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-10 sm:mb-16 text-base sm:text-lg">
          Explore jerseys from the world's biggest leagues and tournaments.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-8">

          {leagues.map((league) => (

            <div
              key={league.id}
              className="group overflow-hidden rounded-3xl bg-black cursor-pointer shadow-lg hover:shadow-2xl duration-300"
            >

              <img
                src={league.image}
                alt={league.title}
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default LeagueSection;