import Navbar from "../components/Navbar";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { productImages } from "../data/products";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";


function Checkout() {

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();


  // ===============================
  // GET CART FROM BACKEND
  // ===============================

  const fetchCart = async () => {

    const token =
      localStorage.getItem("kitzaToken");

    if (!token) {
      setCart({ items: [] });
      setLoading(false);
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        "https://kitza-backend.vercel.app/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to load cart"
        );
      }

      setCart(data);

    } catch (error) {

      console.error(
        "Get checkout cart error:",
        error
      );

      setCart({ items: [] });

    } finally {

      setLoading(false);

    }
  };


  // ===============================
  // FETCH CART
  // ===============================

  useEffect(() => {
    fetchCart();
  }, []);


  // ===============================
  // UPDATE CUSTOMER
  // ===============================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
  const placeOrder = async () => {
  const token = localStorage.getItem("kitzaToken");

  if (!token) {
    alert("Please login before placing your order.");
    return;
  }

  // ===============================
  // VALIDATE CUSTOMER INFORMATION
  // ===============================

  if (
    !customer.fullName ||
    !customer.email ||
    !customer.phone ||
    !customer.address ||
    !customer.city ||
    !customer.postalCode
  ) {
    alert("Please complete all customer information.");
    return;
  }

  try {
    setPlacingOrder(true);

    const response = await fetch(
      "https://kitza-backend.vercel.app/orders",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          fullName: customer.fullName,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
          city: customer.city,
          postalCode: customer.postalCode,
          paymentMethod: "Cash on Delivery",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to place order."
      );
    }

    console.log("Order created:", data.order);

    // ===============================
    // GO TO SUCCESS PAGE
    // ===============================

    navigate("/order-success", {
      state: {
        order: data.order,
      },
    });

  } catch (error) {
    console.error("Place order error:", error);

    alert(
      error.message ||
        "Something went wrong while placing your order."
    );

  } finally {
    setPlacingOrder(false);
  }
};


  // ===============================
  // UPDATE QUANTITY
  // ===============================

  const updateQuantity = async (
    itemId,
    newQuantity
  ) => {

    if (newQuantity < 1) return;

    const token =
      localStorage.getItem("kitzaToken");

    if (!token) return;

    try {

      setUpdating(itemId);

      const response = await fetch(
        `https://kitza-backend.vercel.app/cart/${itemId}`,
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
  // REMOVE ITEM
  // ===============================

  const removeItem = async (itemId) => {

    const token =
      localStorage.getItem("kitzaToken");

    if (!token) return;

    try {

      setUpdating(itemId);

      const response = await fetch(
        `https://kitza-backend.vercel.app/cart/${itemId}`,
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
  // CALCULATE SUBTOTAL
  // ===============================

  const subtotal = items.reduce(
    (total, item) => {

      const price =
        Number(item.price) || 0;

      const quantity =
        Number(item.quantity) || 1;

      return (
        total +
        price * quantity
      );

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

  const total =
    subtotal + delivery;


  // ===============================
  // LOADING
  // ===============================

  if (loading) {

    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] flex items-center justify-center">

          <p className="text-gray-500">
            Loading checkout...
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
            Add some jerseys before checking out.
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
  // CHECKOUT PAGE
  // ===============================

  return (
    <>
      <Navbar />

      <section className="bg-white py-12 md:py-20 px-5 md:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto">

          {/* PAGE TITLE */}

          <h1 className="text-3xl md:text-4xl font-black text-slate-900">
            CHECKOUT
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your information to place your order.
          </p>


          <div className="grid lg:grid-cols-3 gap-8 mt-10">


           {/* =================================================
    LEFT SIDE
================================================= */}

<div className="lg:col-span-2 space-y-8">

  {/* ===============================
      CUSTOMER INFORMATION
  =============================== */}

  <div className="border rounded-2xl p-6 md:p-8">

    <h2 className="text-xl font-bold text-slate-900">
      Customer Information
    </h2>

    <div className="grid md:grid-cols-2 gap-5 mt-6">

      {/* FULL NAME */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={customer.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Phone
        </label>

        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="03XX XXXXXXX"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

      {/* ADDRESS */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Address
        </label>

        <textarea
          name="address"
          value={customer.address}
          onChange={handleChange}
          placeholder="Enter your complete delivery address"
          rows="3"
          className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

      {/* CITY */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          City
        </label>

        <input
          type="text"
          name="city"
          value={customer.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

      {/* POSTAL CODE */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Postal Code
        </label>

        <input
          type="text"
          name="postalCode"
          value={customer.postalCode}
          onChange={handleChange}
          placeholder="Postal code"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
      </div>

    </div>
  </div>


  {/* ===============================
      PAYMENT METHOD
  =============================== */}

  <div className="border rounded-2xl p-6 md:p-8">

    <h2 className="text-xl font-bold text-slate-900">
      Payment Method
    </h2>

    <div className="mt-5 border-2 border-[#4CAF50] rounded-xl p-4 bg-green-50">

      <div className="flex items-center gap-3">

        <input
          type="radio"
          checked
          readOnly
          className="w-4 h-4 accent-[#4CAF50]"
        />

        <div>

          <p className="font-semibold text-slate-900">
            Cash on Delivery
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Pay when your order arrives.
          </p>

        </div>

      </div>

    </div>

  </div>

</div>
            {/* =================================================
    RIGHT SIDE
================================================= */}

<div className="space-y-8 lg:sticky lg:top-24 h-fit">

  {/* ===============================
      YOUR ITEMS
  =============================== */}

  <div className="border rounded-2xl p-6">

    <div className="flex items-center justify-between">

      <h2 className="text-xl font-bold text-slate-900">
        Your Items
      </h2>

      <Link
        to="/cart"
        className="text-sm underline text-gray-500 hover:text-slate-900"
      >
        Edit Cart
      </Link>

    </div>


    {/* ITEMS */}

    <div className="mt-6 space-y-6">

      {items.map((item) => {

        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 1;

        const productImage =
          productImages[item.image];

        const isUpdating =
          updating === item._id;

        return (

          <div
            key={item._id}
            className="flex gap-4"
          >

            {/* ===============================
                JERSEY IMAGE
            =============================== */}

            <img
              src={productImage}
              alt={item.name}
              className="w-20 h-24 object-contain rounded-xl bg-gray-100 shrink-0"
            />


            {/* ===============================
                PRODUCT INFO
            =============================== */}

            <div className="flex-1 min-w-0">

              <div className="flex justify-between gap-2">

                <div>

                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Size: {item.size}
                  </p>

                </div>


                {/* REMOVE */}

                <button
                  onClick={() =>
                    removeItem(item._id)
                  }
                  disabled={isUpdating}
                  className="text-gray-400 hover:text-red-500 disabled:opacity-40 shrink-0"
                >
                  <FiTrash2 size={16} />
                </button>

              </div>


              {/* PRICE */}

              <p className="text-[#4CAF50] font-bold mt-2">
                Rs {price.toLocaleString()}
              </p>


              {/* QUANTITY */}

              <div className="flex items-center gap-3 mt-3">

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
                  className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                >
                  <FiMinus size={12} />
                </button>


                <span className="font-semibold text-sm">
                  {quantity}
                </span>


                <button
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      quantity + 1
                    )
                  }
                  disabled={isUpdating}
                  className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                >
                  <FiPlus size={12} />
                </button>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  </div>


  {/* ===============================
      ORDER SUMMARY
  =============================== */}

  <div className="border rounded-2xl p-6">

    <h2 className="text-xl font-bold text-slate-900">
      Order Summary
    </h2>


    {/* ===============================
        ITEM SUMMARY
    =============================== */}

    <div className="mt-6 space-y-4">

      {items.map((item) => {

        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 1;

        return (

          <div
            key={item._id}
            className="flex justify-between gap-4 text-sm"
          >

            <span className="text-gray-500">
              {item.name} × {quantity}
            </span>

            <span className="font-medium whitespace-nowrap">
              Rs{" "}
              {(price * quantity).toLocaleString()}
            </span>

          </div>

        );

      })}

    </div>


    {/* ===============================
        TOTALS
    =============================== */}

    <div className="mt-6 pt-5 border-t space-y-4 text-sm">

      {/* SUBTOTAL */}

      <div className="flex justify-between">

        <span className="text-gray-500">
          Subtotal
        </span>

        <span className="font-semibold">
          Rs {subtotal.toLocaleString()}
        </span>

      </div>


      {/* DELIVERY */}

      <div className="flex justify-between">

        <span className="text-gray-500">
          Delivery Fee
        </span>

        <span className="font-semibold">
          Rs {delivery.toLocaleString()}
        </span>

      </div>


      {/* TOTAL */}

      <div className="border-t pt-4 flex justify-between text-lg">

        <span className="font-bold">
          Total
        </span>

        <span className="font-bold text-[#4CAF50]">
          Rs {total.toLocaleString()}
        </span>

      </div>

    </div>


    {/* ===============================
        PLACE ORDER
    =============================== */}

  <button
  onClick={placeOrder}
  disabled={placingOrder}
  className="w-full mt-7 bg-[#4CAF50] text-white py-3.5 rounded-full font-semibold hover:bg-[#3d963f] transition disabled:opacity-60 disabled:cursor-not-allowed"
>
  {placingOrder
    ? "Placing Order..."
    : "Place Order"}
</button>


    {/* BACK TO CART */}

    <Link
      to="/cart"
      className="block text-center mt-4 text-sm text-gray-500 hover:text-slate-900 underline"
    >
      Back to Cart
    </Link>

  </div>

</div>
</div>
        </div>

      </section>

      <Letter />
      <Footer />
    </>
  );
}

export default Checkout;