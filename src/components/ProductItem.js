import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);  // Chama a função de adicionar o produto ao carrinho
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>Preço: ${product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductItem;
