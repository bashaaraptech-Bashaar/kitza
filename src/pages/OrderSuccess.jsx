import Navbar from "../components/Navbar";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {

  const location = useLocation();

  const order = location.state?.order;


  // ==========================================
  // NO ORDER DATA
  // ==========================================

  if (!order) {

    return (
      <>
        <Navbar />

        <section className="min-h-[65vh] bg-white flex items-center justify-center px-5 py-16">

          <div className="max-w-xl w-full text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

              <span className="text-4xl text-red-500">
                !
              </span>

            </div>


            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-7">
              ORDER NOT FOUND
            </h1>


            <p className="text-gray-500 mt-3">
              We couldn't find the order information.
            </p>


            <Link
              to="/shop"
              className="inline-block mt-7 bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4CAF50] transition"
            >
              Continue Shopping
            </Link>

          </div>

        </section>

        <Letter />
        <Footer />
      </>
    );
  }


  // ==========================================
  // ORDER DATE
  // ==========================================

  const orderDate = order.createdAt
    ? new Date(order.createdAt).toLocaleString()
    : "Just now";


  // ==========================================
  // CUSTOMER
  // ==========================================

  const customer = order.customer || {};


  // ==========================================
  // ITEMS
  // ==========================================

  const items = order.items || [];


  return (
    <>
      <Navbar />


      <section className="bg-white py-12 md:py-20 px-5 md:px-10">

        <div className="max-w-5xl mx-auto">


          {/* ==========================================
              SUCCESS HEADER
          ========================================== */}

          <div className="text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">

              <span className="text-4xl text-[#4CAF50]">
                ✓
              </span>

            </div>


            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-7">
              ORDER PLACED SUCCESSFULLY!
            </h1>


            <p className="text-gray-500 mt-3">
              Thank you for shopping with Kitza.
            </p>


            <p className="text-sm text-gray-400 mt-1">
              Your order has been received and is being processed.
            </p>

          </div>


          {/* ==========================================
              EMAIL CONFIRMATION MESSAGE
          ========================================== */}

          <div className="mt-10 border border-green-200 bg-green-50 rounded-2xl p-5 md:p-6">

            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">

                <span className="text-[#4CAF50] text-lg">
                  ✓
                </span>

              </div>


              <div>

                <h2 className="font-bold text-slate-900">
                  Order Confirmation
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  A confirmation email has been sent to{" "}
                  <span className="font-semibold">
                    {customer.email}
                  </span>
                  .
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  Please keep this information for your records.
                </p>

              </div>

            </div>

          </div>


          {/* ==========================================
              ORDER INFORMATION
          ========================================== */}

          <div className="grid md:grid-cols-2 gap-6 mt-8">


            {/* ORDER DETAILS */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Order Details
              </h2>


              <div className="mt-5 space-y-4 text-sm">


                <div className="flex justify-between gap-4">

                  <span className="text-gray-500">
                    Order ID
                  </span>

                  <span className="font-semibold text-right break-all">
                    {order._id}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Order Date
                  </span>

                  <span className="font-medium text-right">
                    {orderDate}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Status
                  </span>

                  <span className="font-semibold text-[#4CAF50]">
                    {order.status || "Pending"}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Payment Method
                  </span>

                  <span className="font-medium text-right">
                    {order.paymentMethod || "Cash on Delivery"}
                  </span>

                </div>

              </div>

            </div>


            {/* CUSTOMER DETAILS */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Customer Information
              </h2>


              <div className="mt-5 space-y-4 text-sm">


                <div>

                  <p className="text-gray-500">
                    Full Name
                  </p>

                  <p className="font-semibold mt-1">
                    {customer.fullName}
                  </p>

                </div>


                <div>

                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold mt-1 break-all">
                    {customer.email}
                  </p>

                </div>


                <div>

                  <p className="text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold mt-1">
                    {customer.phone}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ==========================================
              DELIVERY ADDRESS
          ========================================== */}

          <div className="border rounded-2xl p-6 md:p-8 mt-6">

            <h2 className="text-xl font-bold text-slate-900">
              Delivery Information
            </h2>


            <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm">


              <div className="md:col-span-3">

                <p className="text-gray-500">
                  Delivery Address
                </p>

                <p className="font-semibold mt-1">
                  {customer.address}
                </p>

              </div>


              <div>

                <p className="text-gray-500">
                  City
                </p>

                <p className="font-semibold mt-1">
                  {customer.city}
                </p>

              </div>


              <div>

                <p className="text-gray-500">
                  Postal Code
                </p>

                <p className="font-semibold mt-1">
                  {customer.postalCode}
                </p>

              </div>


              <div>

                <p className="text-gray-500">
                  Delivery Method
                </p>

                <p className="font-semibold mt-1">
                  Standard Delivery
                </p>

              </div>

            </div>

          </div>


          {/* ==========================================
              ORDERED PRODUCTS
          ========================================== */}

          <div className="border rounded-2xl p-6 md:p-8 mt-6">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Ordered Products
              </h2>

              <span className="text-sm text-gray-500">
                {items.length} item{items.length !== 1 ? "s" : ""}
              </span>

            </div>


            <div className="mt-6 divide-y">

              {items.map((item, index) => {

                const price =
                  Number(item.price) || 0;

                const quantity =
                  Number(item.quantity) || 1;

                const itemTotal =
                  price * quantity;


                return (

                  <div
                    key={item._id || index}
                    className="py-5 first:pt-0 last:pb-0"
                  >

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


                      {/* PRODUCT INFORMATION */}

                      <div>

                        <h3 className="font-bold text-slate-900">
                          {item.name}
                        </h3>


                        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-gray-500">

                          <span>
                            Size: {item.size || "N/A"}
                          </span>

                          <span>
                            Quantity: {quantity}
                          </span>

                          <span>
                            Unit Price: Rs{" "}
                            {price.toLocaleString()}
                          </span>

                        </div>

                      </div>


                      {/* ITEM TOTAL */}

                      <div className="text-left sm:text-right">

                        <p className="text-sm text-gray-500">
                          Item Total
                        </p>

                        <p className="font-bold text-lg text-slate-900">
                          Rs {itemTotal.toLocaleString()}
                        </p>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>


          {/* ==========================================
              PAYMENT & ORDER SUMMARY
          ========================================== */}

          <div className="grid md:grid-cols-2 gap-6 mt-6">


            {/* PAYMENT */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Payment
              </h2>


              <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4">

                <p className="font-semibold text-slate-900">
                  Cash on Delivery
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Please pay when your order arrives.
                </p>

              </div>

            </div>


            {/* SUMMARY */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>


              <div className="mt-5 space-y-4 text-sm">


                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {Number(order.subtotal || 0).toLocaleString()}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-semibold">
                    Rs{" "}
                    {Number(order.deliveryFee || 0).toLocaleString()}
                  </span>

                </div>


                <div className="border-t pt-4 flex justify-between">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-xl font-bold text-[#4CAF50]">
                    Rs{" "}
                    {Number(order.total || 0).toLocaleString()}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ==========================================
              FINAL MESSAGE
          ========================================== */}

          <div className="text-center mt-10">

            <p className="text-gray-500">
              Thank you for choosing{" "}
              <span className="font-bold text-slate-900">
                Kitza
              </span>
              .
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Your jerseys will be delivered to the address provided above.
            </p>

          </div>


          {/* ==========================================
              BUTTONS
          ========================================== */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-xl mx-auto">

            <Link
              to="/shop"
              className="flex-1 text-center bg-slate-900 text-white py-3.5 rounded-full font-semibold hover:bg-[#4CAF50] transition"
            >
              Continue Shopping
            </Link>


            <Link
              to="/"
              className="flex-1 text-center border border-slate-900 text-slate-900 py-3.5 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition"
            >
              Back Home
            </Link>

          </div>

        </div>

      </section>


      <Letter />
      <Footer />

    </>
  );
}


export default OrderSuccess;