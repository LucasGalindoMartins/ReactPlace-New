import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]); // Carrinho de compras
  const [total, setTotal] = useState(0); // Total da compra

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0)); // Atualizar o total
  };

  // Função para remover um produto do carrinho
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0)); // Atualizar o total
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <ProductList onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} total={total} />
    </div>
  );
};

export default App;
