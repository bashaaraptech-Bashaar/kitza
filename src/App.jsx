import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./components/Seo";

const Auth = lazy(() => import("./pages/auth"));
const Account = lazy(() => import("./pages/Account"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <Suspense fallback={null}>
        <Routes>

        <Route path="/" element={<Home />} />
<Route path="/auth" element={<Auth/>} />
<Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />


        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
     
<Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;