import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b bg-[#fafafa] px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm text-gray-500">Home / Contact Us</p>
            <h1 className="mt-3 text-4xl font-black text-[#111111] sm:text-5xl">
              CONTACT US
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Have a question about a jersey, an order, or your next match-day
              look? Send us a message and the Kitza team will get back to you.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
                Send us a message
              </h2>
              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#4CAF50] focus:ring-2 focus:ring-green-100"
                      required
                    />
                  </label>

                  <label className="text-sm font-semibold text-gray-700">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#4CAF50] focus:ring-2 focus:ring-green-100"
                      required
                    />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-gray-700">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#4CAF50] focus:ring-2 focus:ring-green-100"
                    required
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-700">
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    className="mt-2 w-full resize-y rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#4CAF50] focus:ring-2 focus:ring-green-100"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#111111] px-7 py-3.5 font-semibold text-white transition hover:bg-[#4CAF50] sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <aside className="h-fit rounded-2xl bg-[#111111] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-3 leading-7 text-gray-400">
                Our support team is available Monday to Saturday, 9:00 AM to
                6:00 PM.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href="tel:+923001234567"
                  className="flex items-start gap-4 transition hover:text-[#4CAF50]"
                >
                  <FiPhone className="mt-1 shrink-0" size={20} />
                  <span>
                    <span className="block text-sm text-gray-400">Call us</span>
                    <span className="mt-1 block font-semibold">+92 300 1234567</span>
                  </span>
                </a>

                <a
                  href="mailto:hello@kitza.com"
                  className="flex items-start gap-4 transition hover:text-[#4CAF50]"
                >
                  <FiMail className="mt-1 shrink-0" size={20} />
                  <span>
                    <span className="block text-sm text-gray-400">Email us</span>
                    <span className="mt-1 block break-all font-semibold">hello@kitza.com</span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <FiMapPin className="mt-1 shrink-0" size={20} />
                  <span>
                    <span className="block text-sm text-gray-400">Visit us</span>
                    <span className="mt-1 block font-semibold">Lahore, Pakistan</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-6">
                <p className="text-sm text-gray-400">Follow Kitza</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/kitza.official"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#1d1d1d] px-4 py-2 text-sm transition hover:bg-[#4CAF50]"
                  >
                    <FaFacebookF /> Facebook <FiArrowUpRight />
                  </a>
                  <a
                    href="https://www.instagram.com/kitza.official"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#1d1d1d] px-4 py-2 text-sm transition hover:bg-[#4CAF50]"
                  >
                    <FaInstagram /> @kitza.official <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
