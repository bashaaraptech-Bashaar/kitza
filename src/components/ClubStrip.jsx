import rm from "../assets/clubs/realmadridlogo.webp";
import barca from "../assets/clubs/barcalogo.webp";
import city from "../assets/clubs/mancitylogo.webp";
import liverpool from "../assets/clubs/liverpoollogo.webp";
import arsenal from "../assets/clubs/manutdlogo.webp";
import bayern from "../assets/clubs/bayernlogo.webp";
import psg from "../assets/clubs/psglogo.webp";
import chelsea from "../assets/clubs/chelsealogo.webp";

function ClubStrip() {

  const clubs = [
    rm,
    barca,
    city,
    liverpool,
    arsenal,
    bayern,
    psg,
    chelsea,
  ];

  return (
    <section className="bg-[#111111] py-2">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10 items-center">

          {clubs.map((club, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <img
                src={club}
                alt="Club Logo"
                loading="lazy"
                width="120"
                height="120"
                className="h-30 object-contain hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ClubStrip;