import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishList } from "./components/WishList";
import LandingPage from "./components/LandingPage";
// import { Cart } from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home/>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          {/* <Route path="/cart" element={<Cart/>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
