import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />


        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;