import React, { useState } from "react";
import ProductList from "./components/ProductList";  // Componente para listar os produtos
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Incluindo o Link para navegação
import CheckoutSuccessPage from './pages/CheckoutSuccess';

const App = () => {
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        // Se o produto já existe, atualiza a quantidade
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Caso o produto não exista, adiciona com quantidade 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Função para remover um produto do carrinho
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              // Se a quantidade for maior que 1, diminui a quantidade
              return { ...item, quantity: item.quantity - 1 };
            }
            return null; // Caso a quantidade seja 1, remove o produto
          }
          return item;
        })
        .filter(Boolean); // Remove os itens que são null
    });
  };

  // Cálculo do valor total do carrinho
  const totalAmount = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <Router>
      <div className="container">
        {/* Conteúdo principal da página */}
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ProductList onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/checkout-success"
              element={
                <CheckoutSuccessPage
                  onContinueShopping={() => {
                    setCart([]); // Limpa o carrinho após a compra
                  }}
                />
              }
            />
          </Routes>
        </div>
  
        {/* Carrinho fixo na lateral */}
        <div className="cart-sidebar">
          <h3 className="cart-header">Carrinho</h3>
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <span>
                    {product.title} - ${product.price} x {product.quantity}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="remove-btn"
                  >
                    Remover
                  </button>
                </div>
              ))
            ) : (
              <p>O carrinho está vazio.</p>
            )}
          </div>
          <div className="cart-total">Total: ${totalAmount}</div>
          <Link to="/checkout-success">
            <button className="checkout-btn">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
