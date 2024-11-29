import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Preço: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductItem;
