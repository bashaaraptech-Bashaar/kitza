import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
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


      </Routes>
    </BrowserRouter>
  );
}

export default App;