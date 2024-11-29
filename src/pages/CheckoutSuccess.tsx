import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number;
}

interface CheckoutSuccessPageProps {
  cart: Product[];
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleContinueShopping: () => void; // Função recebida como prop
}

const CheckoutSuccessPage: React.FC<CheckoutSuccessPageProps> = ({ cart, setCartVisible, handleContinueShopping }) => {
  const navigate = useNavigate();

  // Função para voltar à loja, limpar o carrinho e restaurar a visibilidade
  const handleRedirectToShop = () => {
    handleContinueShopping(); // Chama a função para limpar o carrinho
    navigate('/');  // Redireciona para a página inicial
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {cart.length === 0 ? (
        <>
          <h1>Nenhum item adicionado ao carrinho!</h1>
          <button onClick={handleRedirectToShop}>Voltar à loja</button>
        </>
      ) : (
        <>
          <h1>Compra realizada com sucesso!!</h1>
          <button onClick={handleRedirectToShop}>Continuar Comprando</button>
        </>
      )}
    </div>
  );
};

export default CheckoutSuccessPage;
