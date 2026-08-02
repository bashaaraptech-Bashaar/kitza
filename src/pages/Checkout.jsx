import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  if (!product) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          NO PRODUCT SELECTED
        </h1>

        <Link
          to="/shop"
          className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-full"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  const price = Number(product.price);
  const subtotal = price * quantity;
  const delivery = 200;
  const total = subtotal + delivery;

  return (
    <section className="bg-white min-h-screen py-12 md:py-20 px-5 md:px-10 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900">
          CHECKOUT
        </h1>

        <p className="text-gray-500 mt-2">
          Complete your order below.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* Product */}
            <div className="border rounded-2xl p-5 md:p-7">

              <h2 className="text-xl font-bold mb-6">
                Your Product
              </h2>

              <div className="flex gap-5">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-32 md:w-36 md:h-40 object-cover rounded-xl bg-gray-100"
                />

                <div className="flex-1">

                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {product.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <p className="text-[#4CAF50] font-bold text-lg mt-4">
                    Rs {price.toLocaleString()}
                  </p>

                  {/* Quantity */}
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

            {/* Customer Information */}
            <div className="border rounded-2xl p-5 md:p-7">

              <h2 className="text-xl font-bold mb-6">
                Customer Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-slate-900"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-slate-900"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-slate-900"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-slate-900"
                />

              </div>

              <textarea
                placeholder="Delivery Address"
                rows="4"
                className="w-full border rounded-lg px-4 py-3 mt-5 outline-none focus:border-slate-900 resize-none"
              />

            </div>

            {/* Payment */}
            <div className="border rounded-2xl p-5 md:p-7">

              <h2 className="text-xl font-bold mb-5">
                Payment Method
              </h2>

              <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <div>
                  <p className="font-semibold">
                    Cash on Delivery
                  </p>

                  <p className="text-sm text-gray-500">
                    Pay when your order arrives.
                  </p>
                </div>

              </label>

            </div>

          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="border rounded-2xl p-6 h-fit lg:sticky lg:top-24">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            {/* Small product preview */}
            <div className="flex gap-3 mt-6 pb-5 border-b">

              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h3 className="font-semibold text-sm">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  Qty: {quantity}
                </p>

              </div>

              <p className="font-semibold">
                Rs {subtotal.toLocaleString()}
              </p>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium">
                  Rs {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-medium">
                  Rs {delivery.toLocaleString()}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg">

                <span className="font-bold">
                  Total
                </span>

                <span className="font-bold text-[#4CAF50]">
                  Rs {total.toLocaleString()}
                </span>

              </div>

            </div>

            <button
              onClick={() => alert("Order placed successfully!")}
              className="w-full mt-7 bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-[#4CAF50] transition"
            >
              Place Order
            </button>

            <Link
              to="/cart"
              className="block text-center mt-4 text-sm text-gray-500 hover:text-slate-900"
            >
              ← Back to Cart
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;