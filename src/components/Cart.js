import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>R${item.price}</p>
          <button onClick={() => onRemoveFromCart(item)}>Remover</button>
        </div>
      ))}
      <h3>Total: R${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
