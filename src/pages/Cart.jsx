import Navbar from "../components/Navbar";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProduct = localStorage.getItem("kitzaCart");

    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const removeProduct = () => {
    localStorage.removeItem("kitzaCart");
    setProduct(null);
  };

  if (!product) {
    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-3xl font-bold text-slate-900">
            YOUR CART IS EMPTY
          </h1>

          <Link
            to="/shop"
            className="mt-6 bg-black text-white px-8 py-3 rounded-full"
          >
            Continue Shopping
          </Link>
        </section>

        <Letter />
        <Footer />
      </>
    );
  }

  const price = Number(product.price);
  const total = price * quantity;

  const productTitle =
    product.title || product.name || "Kitza Product";

  return (
    <>
      <Navbar />

      <section className="bg-white py-12 md:py-20 px-5 md:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-black text-slate-900">
            YOUR CART
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* PRODUCT */}
            <div className="lg:col-span-2 border rounded-2xl overflow-hidden">

              <div className="flex gap-5 p-5 md:p-7">

                <img
                  src={product.image}
                  alt={productTitle}
                  className="w-28 h-32 md:w-36 md:h-40 object-cover rounded-xl bg-gray-100"
                />

                <div className="flex-1">

                  <div className="flex justify-between gap-4">

                    <div>

                      <h2 className="font-bold text-lg md:text-xl text-slate-900">
                        {productTitle}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {product.category || "Jersey"}
                      </p>

                    </div>

                    <button
                      onClick={removeProduct}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>

                  </div>

                  <p className="font-bold text-lg mt-4">
                      Rs {price.toLocaleString()}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-5">

                    <button
                      onClick={decrease}
                      className="w-8 h-8 rounded-full border hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {quantity}
                    </span>

                    <button
                      onClick={increase}
                      className="w-8 h-8 rounded-full border hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>

            {/* ORDER SUMMARY */}
            <div className="border rounded-2xl p-6 h-fit">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium">
                      Rs {total.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-medium">
                    Rs 300
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg">

                  <span className="font-bold">
                    Total
                  </span>

                  <span className="font-bold">
                   Rs { (price + 10).toLocaleString() }
                  </span>

                </div>

              </div>

             <button
  onClick={() => navigate("/checkout")}
  className="w-full mt-7 bg-[#4CAF50] text-white py-3 rounded-full font-semibold hover:bg-[#3d963f] transition"
>
  Go to Checkout →
</button>
              <Link
                to="/shop"
                className="block text-center mt-4 text-sm underline"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Letter />
      <Footer />
    </>
  );
}

export default Cart;