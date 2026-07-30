import rm from "../assets/clubs/realmadridlogo.png";
import barca from "../assets/clubs/barcalogo.png";
import city from "../assets/clubs/mancitylogo.png";
import liverpool from "../assets/clubs/liverpoollogo.png";
import arsenal from "../assets/clubs/manutdlogo.png";
import bayern from "../assets/clubs/bayernlogo.png";
import psg from "../assets/clubs/psglogo.png";
import chelsea from "../assets/clubs/chelsealogo.png";

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