import React from 'react';
import { useNavigate } from 'react-router-dom';

// Definição das tipagens para as propriedades do componente
interface CheckoutSuccessPageProps {
  onContinueShopping: () => void;  // Função para limpar o carrinho
}

const CheckoutSuccessPage: React.FC<CheckoutSuccessPageProps> = ({ onContinueShopping }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onContinueShopping();  // Limpa o carrinho
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Compra realizada com sucesso!!</h1>
      <button onClick={handleContinueShopping}>Continuar Comprando</button>
    </div>
  );
};

export default CheckoutSuccessPage;
