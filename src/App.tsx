import React, { useState } from "react";
import ProductList from "./components/ProductList";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckoutSuccessPage from './pages/CheckoutSuccess';

// Definição das tipagens para o produto
interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number;
}

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);  // Estado para o carrinho
  const [cartVisible, setCartVisible] = useState<boolean>(true); // Estado para controlar a visibilidade do carrinho

  // Função para adicionar um produto ao carrinho
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Função para remover um produto do carrinho
  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null;
          }
          return item;
        })
        .filter((item): item is Product => item !== null); // Filtra os itens válidos
    });
  };

  // Cálculo do valor total do carrinho
  const totalAmount = cart
    .reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0)
    .toFixed(2);

  // Função para finalizar a compra
  const handleCheckout = () => {
    setCartVisible(false); // Aqui, decidimos esconder o carrinho durante o checkout
  };

  // Função para voltar à loja e limpar o carrinho
  const handleContinueShopping = () => {
    setCart([]); // Limpa o carrinho
    setCartVisible(true); // Restaura a visibilidade do carrinho
  };

  return (
    <Router>
      <div className="container">
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
                  cart={cart}
                  setCartVisible={setCartVisible}  // Passando a função para restaurar a visibilidade do carrinho
                  handleContinueShopping={handleContinueShopping} // Passando a função de continuar comprando
                />
              }
            />
          </Routes>
        </div>

        {cartVisible && (
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
              <button className="checkout-btn" onClick={handleCheckout}>
                Finalizar Compra
              </button>
            </Link>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
