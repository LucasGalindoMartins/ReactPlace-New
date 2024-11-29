import React from 'react';
import { Link } from 'react-router-dom';

const CartComponent = ({ cart, total, onRemoveFromCart, onCheckout }) => {  // Renomeado para CartComponent
  return (
    <div style={{ position: 'fixed', right: '20px', top: '20px', padding: '10px', backgroundColor: '#f1f1f1', borderRadius: '10px' }}>
      <h3>Carrinho</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - R${item.price.toFixed(2)}
            <button onClick={() => onRemoveFromCart(item.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Remover</button>
          </li>
        ))}
      </ul>
      <h4>Total: R${total.toFixed(2)}</h4>
      <Link to="/checkout-success">
        <button onClick={onCheckout} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
};

export default CartComponent;
