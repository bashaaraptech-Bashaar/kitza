import { FiMail } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#111111] rounded-3xl p-10 lg:p-14">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight">

                NEVER MISS A

                <br />

                NEW KIT DROP.

              </h2>

              <p className="text-gray-400 mt-5 text-lg">

                Subscribe to receive the latest jersey releases,
                exclusive discounts and football news.

              </p>

            </div>

            <div className="space-y-4">

              <div className="relative">

                <FiMail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={22}
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full py-4 pl-14 pr-6 outline-none"
                />

              </div>

              <button className="w-full bg-[#4CAF50] hover:bg-[#3d8c25] duration-300 text-white rounded-full py-4 font-semibold">

                Subscribe Newsletter

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;