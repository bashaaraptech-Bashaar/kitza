import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Reviews";
import ShopSidebar from "../components/ShopSidebar";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../lib/productsApi";

function Shop() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <Navbar />

      <section className="bg-[#fafafa] py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-500">
            Home / Shop
          </p>

          <h1 className="text-4xl sm:text-5xl font-black mt-3">
            SHOP
          </h1>
        </div>
      </section>

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-10">

            <ShopSidebar
              category={category}
              setCategory={setCategory}
            />

            <div>

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold">
                  {loading
                    ? "Loading Jerseys..."
                    : `${filteredProducts.length} Jerseys`}
                </h2>

              </div>

              {loading && (
                <p className="text-gray-500">
                  Loading products from Kitza...
                </p>
              )}

              {error && (
                <p className="text-red-500">
                  {error}
                </p>
              )}

              {!loading && !error && (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">

                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}

                </div>
              )}

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