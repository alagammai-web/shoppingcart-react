import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nabvbar from "./Navbar";
// import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
// import Checkout from "./Checkout";
import React from "react";
import Nabvbar from "./Navbar";

function App() {
  return (
    <div className="App col-sm-12 text-center p-0">
      <BrowserRouter>
        <Nabvbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/ecommerce-react" element={<Products />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/checkoutt" element={<Checkout />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
