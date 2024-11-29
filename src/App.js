import React, { useState } from "react";
import ProductList from "./components/ProductList";  // Componente para listar os produtos
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Incluindo o Link para navegação
import CartComponent from './components/Cart'; // Certifique-se de que o caminho esteja correto
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

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Rotas da aplicação */}
        <div className="product-container">
          <Routes>
            <Route
              path="/"
              element={<ProductList onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartComponent
                  cart={cart}
                  total={totalAmount}
                  onRemoveFromCart={handleRemoveFromCart}
                  onCheckout={handleCheckout}
                />
              }
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
  
        {/* Carrinho fixo à direita */}
        <div className="cart-sidebar">
          <div className="cart-header">
            🛒 <span className="cart-text">Carrinho</span>
          </div>
          <div className="cart-details">
            {cart.length > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map((product) => (
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
                  ))}
                </div>
                <div className="cart-total">Total: ${totalAmount}</div>
                <Link to="/cart">
                  <button className="checkout-btn">Finalizar Compra</button>
                </Link>
              </>
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
  
  
};

export default App;
