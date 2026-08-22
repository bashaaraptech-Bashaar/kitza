import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Reviews";
import { productImages } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const [activeTab, setActiveTab] = useState("description");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // Fetch products from backend
  useEffect(() => {
    setProduct(null);

    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );

        setProduct(foundProduct);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [id]);

  // Loading
  if (!product) {
    return (
      <>
        <Navbar />

        <h1 className="text-center mt-20 text-2xl font-bold">
          Loading product...
        </h1>

        <Footer />
      </>
    );
  }

  // Related products
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  // ADD TO CART
  const handleAddToCart = async () => {
    const token = localStorage.getItem("kitzaToken");

    if (!token) {
      window.location.href = "/auth";
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/cart",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            productId: product._id,
            quantity: quantity,
            size: size,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add product"
        );
      }

      console.log("Product added to cart:", data.cart);

      // Tell CartDrawer that cart changed
      window.dispatchEvent(new Event("cartUpdated"));

      // Tell Navbar to open CartDrawer
      window.dispatchEvent(new Event("openCart"));

    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <p className="text-gray-500 mb-8">
          Home / Shop / {product.name}
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* IMAGE */}
          <div>
            <div className="bg-[#f7f7f7] rounded-3xl p-8">

              <img
                src={productImages[product.image]}
                alt={product.name}
                className="w-full"
              />

            </div>
          </div>

          {/* INFO */}
          <div>

            <h1 className="text-5xl font-black">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-5">

              <div className="flex items-center gap-1 text-[#4CAF50] text-xl">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />

                <span className="ml-3 text-gray-500 text-base">
                  {product.rating} ({product.reviews} Reviews)
                </span>

              </div>

            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-8">

              <h2 className="text-4xl font-black text-[#4CAF50]">
                Rs {product.price.toLocaleString()}
              </h2>

              {product.oldPrice && (
                <span className="line-through text-2xl text-gray-400">
                  Rs {product.oldPrice.toLocaleString()}
                </span>
              )}

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-8 mt-8">

              Show your passion for{" "}

              <span className="font-semibold">
                {product.club || product.country}
              </span>{" "}

              with this premium football jersey.

              Designed with lightweight breathable fabric,
              making it perfect for match days,
              training sessions and everyday wear.

            </p>

            {/* SIZE */}
            <div className="mt-8">

              <h3 className="text-xl font-bold">
                Select Size
              </h3>

              <div className="flex gap-4 mt-5">

                {["S", "M", "L", "XL", "XXL"].map((item) => (

                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`w-14 h-14 rounded-full border-2 font-bold duration-300 ${
                      size === item
                        ? "bg-[#4CAF50] text-white border-[#4CAF50]"
                        : "border-gray-300 hover:border-[#4CAF50]"
                    }`}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

            {/* QUANTITY */}
            <div className="mt-8">

              <h3 className="text-xl font-bold">
                Quantity
              </h3>

              <div className="flex items-center gap-5 mt-5">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-12 h-12 rounded-full bg-gray-100 text-2xl hover:bg-[#4CAF50] hover:text-white duration-300"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-12 h-12 rounded-full bg-gray-100 text-2xl hover:bg-[#4CAF50] hover:text-white duration-300"
                >
                  +
                </button>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-12">

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              {/* BUY NOW */}
              <button
                onClick={() => {

                  const checkoutProduct = {
                    ...product,
                    title: product.title || product.name,
                    quantity: quantity,
                    size: size,
                  };

                  localStorage.setItem(
                    "kitzaCheckout",
                    JSON.stringify(checkoutProduct)
                  );

                  window.location.href = "/checkout";

                }}
                className="bg-[#4CAF50] text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Buy Now
              </button>

            </div>

            {/* TABS */}
            <div className="mt-20 border-b border-gray-200">

              <div className="flex gap-10">

                <button
                  onClick={() =>
                    setActiveTab("description")
                  }
                  className={`pb-4 text-lg font-semibold transition ${
                    activeTab === "description"
                      ? "border-b-2 border-[#4CAF50] text-[#4CAF50]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Description
                </button>

                <button
                  onClick={() =>
                    setActiveTab("features")
                  }
                  className={`pb-4 text-lg font-semibold transition ${
                    activeTab === "features"
                      ? "border-b-2 border-[#4CAF50] text-[#4CAF50]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Features
                </button>

                <button
                  onClick={() =>
                    setActiveTab("shipping")
                  }
                  className={`pb-4 text-lg font-semibold transition ${
                    activeTab === "shipping"
                      ? "border-b-2 border-[#4CAF50] text-[#4CAF50]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Shipping
                </button>

              </div>

            </div>

            {/* TAB CONTENT */}
            <div className="mt-10">

              {activeTab === "description" && (
                <div className="space-y-6 text-gray-600 leading-8">

                  <p>
                    Represent{" "}
                    <strong>
                      {product.club || product.country}
                    </strong>{" "}
                    with confidence in this premium football
                    jersey. Designed for match days, training
                    sessions, and everyday wear, it combines
                    comfort, durability, and authentic styling
                    inspired by the latest official kits.
                  </p>

                  <p>
                    The lightweight breathable fabric keeps you
                    cool and comfortable while maintaining a
                    modern athletic fit that looks great both
                    on and off the pitch.
                  </p>

                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4 text-gray-700">

                  <p>✔ Premium Polyester Fabric</p>
                  <p>✔ Breathable Quick-Dry Material</p>
                  <p>✔ Athletic Slim Fit</p>
                  <p>✔ Heat-Pressed Club & Sponsor Logos</p>
                  <p>✔ Machine Washable</p>
                  <p>✔ Comfortable for Daily Wear</p>

                </div>
              )}

              {activeTab === "shipping" && (
                <div className="space-y-4 text-gray-700">

                  <p>
                    🚚 Delivery within 3–5 business days across Pakistan.
                  </p>

                  <p>
                    💰 Cash on Delivery available nationwide.
                  </p>

                  <p>
                    🔄 Easy 7-day exchange for size issues.
                  </p>

                  <p>
                    📦 Secure packaging to protect your jersey during shipping.
                  </p>

                  <p>
                    📍 Tracking information is provided once your order is dispatched.
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-20 bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center">
            You May Also Like
          </h2>

          <div className="w-24 h-1 bg-[#4CAF50] mx-auto mt-4 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>

        </div>

      </section>

      <Review />

      <Footer />
    </>
  );
}

export default ProductDetails;