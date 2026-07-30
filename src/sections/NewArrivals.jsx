import ProductCard from "../components/ProductCard";
import products from "../data/products";

function NewArrivals() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center">
          NEW ARRIVALS
        </h2>

        <div className="w-24 h-1 bg-[#4CAF50] mx-auto mt-4 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{products
  .filter(product => product.section.includes("new"))
  .map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
))}

        </div>

        <div className="flex justify-center mt-14">

          <button className="border-2 border-black rounded-full px-10 py-3 font-semibold hover:bg-[#4CAF50] hover:border-[#4CAF50] hover:text-white duration-300">
            View All
          </button>

        </div>

      </div>

    </section>
  );
}

export default NewArrivals;