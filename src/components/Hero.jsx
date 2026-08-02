import HeroImage from "../assets/hero/hero.png";
import { FaTshirt, FaFire, FaShieldAlt } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

function Hero() {
return(
<section>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center min-h-[700px] gap-10">

          {/* LEFT */}
          <div className="order-2 lg:order-1">

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-none text-[#111111]">
              FIND JERSEYS
              <br />
              THAT MATCH
              <br />
              YOUR <span className="text-[#479c2d]">PASSION</span>
            </h1>

            <p className="text-gray-500 text-lg leading-8 mt-8 max-w-xl">
              Official-inspired football jerseys from the world's biggest clubs
              and national teams. Wear your colors. Live the game.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-black shrink-0" size={22} />
                <div>
                  <h2 className="text-3xl font-bold">200+</h2>
                  <p className="text-gray-500 text-sm">Clubs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaTshirt className="text-black shrink-0" size={22} />
                <div>
                  <h2 className="text-3xl font-bold">2,000+</h2>
                  <p className="text-gray-500 text-sm">Jerseys</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaFire className="text-black shrink-0" size={22} />
                <div>
                  <h2 className="text-3xl font-bold">30,000+</h2>
                  <p className="text-gray-500 text-sm">Happy Customers</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiPackage className="text-black shrink-0" size={22} />
                <div>
                  <h2 className="text-3xl font-bold">100%</h2>
                  <p className="text-gray-500 text-sm">Original</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 min-h-full overflow-visible">

            <div className="absolute top-10 left-6 text-5xl text-black">
              ✦
            </div>

            <div className="absolute top-40 right-6 text-6xl text-black">
              ✦
            </div>

            <img
              src={HeroImage}
              alt="Football Jerseys"
              className="w-full max-w-4xl h-auto object-contain scale-110"
            />

          </div>

        </div>
      </div>
    </section>

)
}

export default Hero;
