import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";
import WishListProvider from "./contexts/WishListContext";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plp from "./pages/plp/Plp";
import Pdp from "./pages/Pdp";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Whishlist from "./pages/Whishlist";
import AboutUs from "./pages/AboutUs";
import CartContextProvider from "./contexts/CartContext";
import ProductsViewProvider from "./contexts/ProductsViewContext";

function App() {
  return (
    <CartContextProvider>
      <WishListProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="/plp"
                element={
                  <ProductsViewProvider>
                    <Plp />
                  </ProductsViewProvider>
                }
              ></Route>
              <Route path="/pdp" element={<Pdp />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Whishlist />}></Route>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </WishListProvider>
    </CartContextProvider>
  );
}

export default App;
