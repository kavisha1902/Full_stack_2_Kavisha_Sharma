import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import BookDetails from "./pages/BookDetails";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

