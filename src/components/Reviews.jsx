import { FaStar, FaCheckCircle, FaUserCircle } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Ahmed R.",
    location: "Dubai, UAE",
    review:
      "Amazing jersey quality! The fabric feels premium and the printing is perfect. Will definitely order again.",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "London, UK",
    review:
      "Got my Barcelona jersey within 3 days. Great fit and the details are exactly like the original.",
  },
  {
    id: 3,
    name: "James T.",
    location: "New York, USA",
    review:
      "Elite quality jerseys and fast delivery. Kitza is now my go-to football store.",
  },
  {
    id: 4,
    name: "David L.",
    location: "Toronto, Canada",
    review:
      "Ordered two jerseys and both exceeded my expectations. Highly recommended!",
  },
];

function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-between mb-16">

          <h2 className="text-5xl font-black">
            WHAT FOOTBALL{" "}
            <span className="text-[#4CAF50]">FANS</span>{" "}
            SAY
          </h2>

          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-[#4CAF50] hover:text-white duration-300">
              <FiChevronLeft size={22} />
            </button>

            <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-[#4CAF50] hover:text-white duration-300">
              <FiChevronRight size={22} />
            </button>
          </div>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="border rounded-3xl p-8 hover:shadow-xl transition duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 min-h-[120px]">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <FaUserCircle
                  size={58}
                  className="text-gray-400"
                />

                <div>

                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">
                      {review.name}
                    </h3>

                    <FaCheckCircle
                      className="text-[#4CAF50]"
                      size={14}
                    />
                  </div>

                  <p className="text-gray-500 text-sm">
                    {review.location}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;