import React from "react";

const Cart = ({ cart, onRemoveFromCart, total }) => {
  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} 
              <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
