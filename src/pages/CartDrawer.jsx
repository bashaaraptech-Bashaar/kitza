import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productImages } from "../data/products";

function CartDrawer({ open, onClose }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(null);

  // ===============================
  // GET CART FROM BACKEND
  // ===============================

  const fetchCart = async () => {
    const token = localStorage.getItem("kitzaToken");

    if (!token) {
      setCart({ items: [] });
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
  // FETCH WHEN DRAWER OPENS
  // ===============================

  useEffect(() => {
    if (!open) return;

    fetchCart();
  }, [open]);


  // ===============================
  // REFRESH WHEN PRODUCT IS ADDED
  // ===============================

  useEffect(() => {
    const handleCartUpdated = () => {
      if (open) {
        fetchCart();
      }
    };

    window.addEventListener(
      "cartUpdated",
      handleCartUpdated
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdated
      );
    };
  }, [open]);


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
  // REMOVE CART ITEM
  // ===============================

  const removeItem = async (itemId) => {
    const token = localStorage.getItem("kitzaToken");

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


  return (
    <>
      {/* ===============================
          OVERLAY
      =============================== */}

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-60
        transition-opacity duration-300
        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />


      {/* ===============================
          DRAWER
      =============================== */}

      <div
        className={`fixed top-0 right-0 h-screen
        w-[82%] max-w-90 sm:w-105 sm:max-w-none
        bg-white z-70 shadow-2xl
        transition-transform duration-300 ease-out
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >


        {/* ===============================
            HEADER
        =============================== */}

        <div
          className="flex items-center justify-between
          px-4 py-4 sm:px-5 sm:py-5 border-b"
        >

          <div>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Shopping Cart
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {loading
                ? "Loading cart..."
                : `${items.length} item${
                    items.length !== 1
                      ? "s"
                      : ""
                  } in your cart`}
            </p>

          </div>


          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full
            flex items-center justify-center
            hover:bg-gray-100 transition"
          >
            <FiX size={20} />
          </button>

        </div>


        {/* ===============================
            LOADING
        =============================== */}

        {loading ? (

          <div
            className="h-[calc(100vh-80px)]
            flex items-center justify-center"
          >
            <p className="text-gray-500">
              Loading cart...
            </p>
          </div>


        ) : items.length === 0 ? (

          /* ===============================
             EMPTY CART
          =============================== */

          <div
            className="h-[calc(100vh-80px)]
            flex flex-col items-center
            justify-center px-6 text-center"
          >

            <p className="text-gray-500">
              Your cart is empty.
            </p>

            <Link
              to="/shop"
              onClick={onClose}
              className="mt-5 bg-slate-900
              text-white px-7 py-3 rounded-full
              font-semibold"
            >
              Continue Shopping
            </Link>

          </div>


        ) : (

          /* ===============================
             CART CONTENT
          =============================== */

          <>

            <div
              className="p-4 pb-72 sm:p-5 sm:pb-72
              overflow-y-auto
              h-[calc(100vh-80px)]"
            >

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
                    className="flex gap-3 sm:gap-4 mb-6"
                  >

                    {/* IMAGE */}

                    <img
                      src={productImage}
                      alt={item.name}
                      className="w-16 h-20 sm:w-28 sm:h-32
                      object-contain
                      rounded-xl bg-gray-100"
                    />


                    {/* PRODUCT INFO */}

                    <div
                      className="flex-1 min-w-0"
                    >

                      <div
                        className="flex
                        justify-between gap-2"
                      >

                        <h3
                          className="font-bold text-sm sm:text-base
                          text-slate-900 wrap-break-word"
                        >
                          {item.name}
                        </h3>


                        {/* DELETE */}

                        <button
                          onClick={() =>
                            removeItem(
                              item._id
                            )
                          }
                          disabled={isUpdating}
                          className="text-gray-400
                          hover:text-red-500
                          transition shrink-0
                          disabled:opacity-40"
                        >
                          <FiTrash2 size={17} />
                        </button>

                      </div>


                      {/* PRICE */}

                      <p
                        className="text-[#4CAF50]
                        font-bold mt-2"
                      >
                        Rs{" "}
                        {price.toLocaleString()}
                      </p>


                      {/* SIZE */}

                      <p
                        className="text-sm
                        text-gray-500 mt-1"
                      >
                        Size: {item.size}
                      </p>


                      {/* QUANTITY */}

                      <div
                        className="flex
                        items-center gap-2 sm:gap-3 mt-4 sm:mt-5"
                      >

                        {/* MINUS */}

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
                          className="w-8 h-8
                          rounded-full border
                          flex items-center
                          justify-center
                          hover:bg-gray-100
                          transition
                          disabled:opacity-40"
                        >
                          <FiMinus size={14} />
                        </button>


                        {/* QUANTITY */}

                        <span
                          className="font-semibold
                          min-w-3.75
                          text-center"
                        >
                          {quantity}
                        </span>


                        {/* PLUS */}

                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              quantity + 1
                            )
                          }
                          disabled={isUpdating}
                          className="w-8 h-8
                          rounded-full border
                          flex items-center
                          justify-center
                          hover:bg-gray-100
                          transition
                          disabled:opacity-40"
                        >
                          <FiPlus size={14} />
                        </button>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* ===============================
                BOTTOM SUMMARY
            =============================== */}

            <div
              className="absolute bottom-0
              left-0 right-0 bg-white
              border-t p-4 sm:p-5"
            >

              {/* SUBTOTAL */}

              <div
                className="space-y-3 text-sm"
              >

                <div
                  className="flex
                  justify-between"
                >

                  <span
                    className="text-gray-500"
                  >
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {subtotal.toLocaleString()}
                  </span>

                </div>


                {/* DELIVERY */}

                <div
                  className="flex
                  justify-between"
                >

                  <span
                    className="text-gray-500"
                  >
                    Delivery
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {delivery.toLocaleString()}
                  </span>

                </div>


                {/* TOTAL */}

                <div
                  className="border-t pt-4
                  flex justify-between"
                >

                  <span
                    className="text-lg
                    font-bold"
                  >
                    Total
                  </span>

                  <span
                    className="text-lg
                    font-bold
                    text-[#4CAF50]"
                  >
                    Rs{" "}
                    {total.toLocaleString()}
                  </span>

                </div>

              </div>


              {/* CHECKOUT */}
 <Link
                to="/cart"
                onClick={onClose}
                className="block w-full
                text-center mt-5
                bg-slate-900
                text-white py-3.5
                rounded-full
                font-semibold
                hover:bg-[#4CAF50]
                transition"
              >
                View Cart →
              </Link>
              


              {/* CONTINUE SHOPPING */}

              <button
                onClick={onClose}
                className="w-full mt-3
                text-sm text-gray-500
                hover:text-slate-900
                transition"
              >
                Continue Shopping
              </button>

            </div>

          </>
        )}

      </div>
    </>
  );
}

export default CartDrawer;