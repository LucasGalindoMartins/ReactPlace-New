import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  title: string;
  price: number;
}

interface CartComponentProps {
  cart: CartItem[];
  total: number;
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

const CartComponent: React.FC<CartComponentProps> = ({ cart, total, onRemoveFromCart, onCheckout }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      navigate('/checkout-success', { state: { isCartEmpty: true } }); // Passa isCartEmpty como true se o carrinho estiver vazio
    } else {
      onCheckout();
      navigate('/checkout-success', { state: { isCartEmpty: false } }); // Passa isCartEmpty como false se o carrinho não estiver vazio
    }
  };

  return (
    <div>
      <h3>Carrinho</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - R${item.price.toFixed(2)}
            <button onClick={() => onRemoveFromCart(item.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: R${total.toFixed(2)}</h4>
      <button onClick={handleCheckout} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartComponent;
