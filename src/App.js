import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
