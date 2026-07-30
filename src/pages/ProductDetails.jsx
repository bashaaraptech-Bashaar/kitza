import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Reviews";

function ProductDetails() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("description");
    const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    const product = products.find(
        (item) => item.id === Number(id)
    );
    const relatedProducts = products
  .filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  )
  .slice(0, 4);

    if (!product) {
        return <h1 className="text-center mt-20">Product Not Found</h1>;
    }

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
                                src={product.image}
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

                            <span className="text-gray-500">
                                ({product.reviews} Reviews)
                            </span>

                        </div>

                        <div className="flex items-center gap-4 mt-8">

                            <h2 className="text-4xl font-black text-[#4CAF50]">
                                Rs {product.price.toLocaleString()}
                            </h2>

                            <span className="line-through text-2xl text-gray-400">
                                Rs {product.oldPrice.toLocaleString()}
                            </span>

                        </div>

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
                        

                            <div>
                                <h3 className="text-xl font-bold">
                                    Select Size
                                </h3>

                                <div className="flex gap-4 mt-5">

                                    {["S", "M", "L", "XL", "XXL"].map((item) => (

                                        <button
                                            key={item}
                                            onClick={() => setSize(item)}
                                            className={`w-14 h-14 rounded-full border-2 font-bold duration-300

      ${size === item
                                                    ? "bg-[#4CAF50] text-white border-[#4CAF50]"
                                                    : "border-gray-300 hover:border-[#4CAF50]"
                                                }

      `}
                                        >
                                            {item}
                                        </button>

                                    ))}

                                
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    Quantity
                                </h3>

                                <div className="flex items-center gap-5 mt-5">

                                    <button
                                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                        className="w-12 h-12 rounded-full bg-gray-100 text-2xl hover:bg-[#4CAF50] hover:text-white duration-300"
                                    >

                                        -

                                    </button>

                                    <span className="text-2xl font-bold">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 rounded-full bg-gray-100 text-2xl hover:bg-[#4CAF50] hover:text-white duration-300"
                                    >

                                        +

                                    </button>

                                </div>
                            </div>

                        </div>
                        <div className="flex gap-5 mt-12">

                            <button
                                className="flex-1 bg-[#4CAF50] text-white py-4 rounded-full font-bold text-lg hover:bg-black duration-300"
                            >

                                Add To Cart

                            </button>

                            <button
                                className="flex-1 border-2 border-black py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white duration-300"
                            >

                                Buy Now

                            </button>

                        </div>
                        {/* Tabs */}

<div className="mt-20 border-b border-gray-200">

  <div className="flex gap-10">

    <button
      onClick={() => setActiveTab("description")}
      className={`pb-4 text-lg font-semibold transition ${
        activeTab === "description"
          ? "border-b-2 border-[#4CAF50] text-[#4CAF50]"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Description
    </button>

    <button
      onClick={() => setActiveTab("features")}
      className={`pb-4 text-lg font-semibold transition ${
        activeTab === "features"
          ? "border-b-2 border-[#4CAF50] text-[#4CAF50]"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Features
    </button>

    <button
      onClick={() => setActiveTab("shipping")}
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
<div className="mt-10">

  {activeTab === "description" && (

    <div className="space-y-6 text-gray-600 leading-8">

      <p>
        Represent <strong>{product.club || product.country}</strong> with confidence in this premium football jersey.
        Designed for match days, training sessions, and everyday wear, it combines comfort,
        durability, and authentic styling inspired by the latest official kits.
      </p>

      <p>
        The lightweight breathable fabric keeps you cool and comfortable while maintaining a
        modern athletic fit that looks great both on and off the pitch.
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

      <p>🚚 Delivery within 3–5 business days across Pakistan.</p>

      <p>💰 Cash on Delivery available nationwide.</p>

      <p>🔄 Easy 7-day exchange for size issues.</p>

      <p>📦 Secure packaging to protect your jersey during shipping.</p>

      <p>📍 Tracking information is provided once your order is dispatched.</p>

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