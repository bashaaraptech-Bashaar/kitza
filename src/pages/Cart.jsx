import Navbar from "../components/Navbar";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import { productImages } from "../data/products";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);

  const navigate = useNavigate();

  // ===============================
  // GET CART FROM BACKEND
  // ===============================

  const fetchCart = async () => {
    const token = localStorage.getItem("kitzaToken");

    if (!token) {
      setCart({ items: [] });
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to load cart"
        );
      }

      setCart(data);
    } catch (error) {
      console.error("Get cart error:", error);
      setCart({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // FETCH CART ON PAGE LOAD
  // ===============================

  useEffect(() => {
    fetchCart();
  }, []);

  // ===============================
  // UPDATE QUANTITY
  // ===============================

  const updateQuantity = async (
    itemId,
    newQuantity
  ) => {
    if (newQuantity < 1) return;

    const token = localStorage.getItem("kitzaToken");

    if (!token) return;

    try {
      setUpdating(itemId);

      const response = await fetch(
        `http://localhost:3000/cart/${itemId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            quantity: newQuantity,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to update quantity"
        );
      }

      setCart(data.cart);
    } catch (error) {
      console.error(
        "Update quantity error:",
        error
      );
    } finally {
      setUpdating(null);
    }
  };

  // ===============================
  // REMOVE CART ITEM
  // ===============================

  const removeItem = async (itemId) => {
    const token = localStorage.getItem("kitzaToken");

    if (!token) return;

    try {
      setUpdating(itemId);

      const response = await fetch(
        `http://localhost:3000/cart/${itemId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to remove item"
        );
      }

      setCart(data.cart);
    } catch (error) {
      console.error(
        "Remove item error:",
        error
      );
    } finally {
      setUpdating(null);
    }
  };

  // ===============================
  // CART DATA
  // ===============================

  const items = cart?.items || [];

  // ===============================
  // SUBTOTAL
  // ===============================

  const subtotal = items.reduce(
    (total, item) => {
      const price = Number(item.price) || 0;
      const quantity =
        Number(item.quantity) || 1;

      return total + price * quantity;
    },
    0
  );

  // ===============================
  // DELIVERY
  // ===============================

  const delivery =
    items.length > 0 ? 300 : 0;

  // ===============================
  // TOTAL
  // ===============================

  const total = subtotal + delivery;

  // ===============================
  // LOADING
  // ===============================

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] flex items-center justify-center">
          <p className="text-gray-500">
            Loading cart...
          </p>
        </section>

        <Letter />
        <Footer />
      </>
    );
  }

  // ===============================
  // EMPTY CART
  // ===============================

  if (items.length === 0) {
    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">
            YOUR CART IS EMPTY
          </h1>

          <p className="text-gray-500 mt-3">
            Looks like you haven't added
            anything to your cart yet.
          </p>

          <Link
            to="/shop"
            className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4CAF50] transition"
          >
            Continue Shopping
          </Link>
        </section>

        <Letter />
        <Footer />
      </>
    );
  }

  // ===============================
  // CART PAGE
  // ===============================

  return (
    <>
      <Navbar />

      <section className="bg-white py-12 md:py-20 px-5 md:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto">

          {/* PAGE TITLE */}

          <h1 className="text-3xl md:text-4xl font-black text-slate-900">
            YOUR CART
          </h1>

          <p className="text-gray-500 mt-2">
            {items.length}{" "}
            {items.length === 1
              ? "item"
              : "items"}{" "}
            in your cart
          </p>


          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* ===============================
                CART ITEMS
            =============================== */}

            <div className="lg:col-span-2 space-y-5">

              {items.map((item) => {

                const price =
                  Number(item.price) || 0;

                const quantity =
                  Number(item.quantity) || 1;

                const productImage =
                  productImages[item.image];

                const isUpdating =
                  updating === item._id;

                const itemSubtotal =
                  price * quantity;

                return (
                  <div
                    key={item._id}
                    className="border rounded-2xl p-5 md:p-6"
                  >

                    <div className="flex gap-5">

                      {/* IMAGE */}

                      <img
                        src={productImage}
                        alt={item.name}
                        className="w-28 h-32 md:w-36 md:h-40 object-contain rounded-xl bg-gray-100 shrink-0"
                      />

                      {/* PRODUCT INFO */}

                      <div className="flex-1 min-w-0">

                        <div className="flex justify-between gap-4">

                          <div>

                            <h2 className="font-bold text-lg md:text-xl text-slate-900">
                              {item.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                              Size: {item.size}
                            </p>

                          </div>

                          {/* DELETE */}

                          <button
                            onClick={() =>
                              removeItem(
                                item._id
                              )
                            }
                            disabled={
                              isUpdating
                            }
                            className="text-gray-400 hover:text-red-500 transition shrink-0 disabled:opacity-40"
                          >
                            <FiTrash2
                              size={18}
                            />
                          </button>

                        </div>


                        {/* PRICE */}

                        <p className="text-[#4CAF50] font-bold text-lg mt-4">
                          Rs{" "}
                          {price.toLocaleString()}
                        </p>


                        {/* QUANTITY + SUBTOTAL */}

                        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                          {/* QUANTITY */}

                          <div className="flex items-center gap-3">

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  quantity - 1
                                )
                              }
                              disabled={
                                quantity <= 1 ||
                                isUpdating
                              }
                              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition disabled:opacity-40"
                            >
                              <FiMinus
                                size={14}
                              />
                            </button>

                            <span className="font-semibold min-w-[20px] text-center">
                              {quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  quantity + 1
                                )
                              }
                              disabled={
                                isUpdating
                              }
                              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition disabled:opacity-40"
                            >
                              <FiPlus
                                size={14}
                              />
                            </button>

                          </div>


                          {/* ITEM SUBTOTAL */}

                          <div className="text-right">

                            <p className="text-sm text-gray-500">
                              Item Subtotal
                            </p>

                            <p className="font-bold text-slate-900">
                              Rs{" "}
                              {itemSubtotal.toLocaleString()}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* ===============================
                ORDER SUMMARY
            =============================== */}

            <div className="border rounded-2xl p-6 h-fit lg:sticky lg:top-24">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>


              <div className="mt-6 space-y-4 text-sm">

                {/* SUBTOTAL */}

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {subtotal.toLocaleString()}
                  </span>

                </div>


                {/* DELIVERY */}

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {delivery.toLocaleString()}
                  </span>

                </div>


                {/* TOTAL */}

                <div className="border-t pt-4 flex justify-between">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-lg font-bold text-[#4CAF50]">
                    Rs{" "}
                    {total.toLocaleString()}
                  </span>

                </div>

              </div>


              {/* CHECKOUT */}

              <button
                onClick={() =>
                  navigate("/checkout")
                }
                className="w-full mt-7 bg-[#4CAF50] text-white py-3.5 rounded-full font-semibold hover:bg-[#3d963f] transition"
              >
                Go to Checkout →
              </button>


              {/* CONTINUE SHOPPING */}

              <Link
                to="/shop"
                className="block text-center mt-4 text-sm text-gray-500 hover:text-slate-900 underline transition"
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