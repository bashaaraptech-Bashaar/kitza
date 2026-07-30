import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Reviews";
import ShopSidebar from "../components/ShopSidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop() {
  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <Navbar />

      <section className="bg-[#fafafa] py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500">
            Home / Shop
          </p>

          <h1 className="text-5xl font-black mt-3">
            SHOP
          </h1>
        </div>
      </section>

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">

            <ShopSidebar
              category={category}
              setCategory={setCategory}
            />

            <div>

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold">
                  {filteredProducts.length} Jerseys
                </h2>

              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProducts.map((product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <Review />

      <Footer />
    </>
  );
}

export default Shop;