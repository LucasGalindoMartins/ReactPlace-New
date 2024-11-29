import React, { useState } from "react";
import ProductList from "./components/ProductList";  // Componente para listar os produtos
import './App.css';

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
    <div className="container">
      {/* Lista de produtos */}
      <div className="product-list">
        <ProductList onAddToCart={handleAddToCart} />
      </div>

      {/* Carrinho com os produtos selecionados */}
      <div className="cart">
        <h3>Produtos no Carrinho:</h3>
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <div>
                {product.title} - ${product.price} x {product.quantity}
              </div>
              <button
                onClick={() => handleRemoveFromCart(product.id)}
                className="remove-btn"
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {/* Carrinho fixado no canto superior direito */}
        <div className="cart-icon">
          🛒 <span className="cart-text">Carrinho</span>
        </div>
        <div className="total-value">Total: ${totalAmount}</div>
        <button className="checkout-btn">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default App;
